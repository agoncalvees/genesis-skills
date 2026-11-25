import {
	type ReactNode,
	useCallback,
	useEffect,
	useId,
	useRef,
	useState,
} from "react";
import "./pitch-tour.css";

export interface PitchStep {
	id: string;
	/** CSS selector of the element to spotlight (optional). */
	target?: string;
	title: string;
	body?: ReactNode;
	/** Runs when the step becomes active (e.g. perform the demo action). */
	enter?: () => void;
	/** Where to scroll the target: "center" (default) or "start" for tall targets. */
	block?: ScrollLogicalPosition;
}

export interface PitchTourMessages {
	next: string;
	previous: string;
	finish: string;
	close: string;
	progress: (current: number, total: number) => string;
}

const defaultMessages: PitchTourMessages = {
	next: "Próximo",
	previous: "Anterior",
	finish: "Explorar",
	close: "Fechar demonstração",
	progress: (current, total) => `${current} de ${total}`,
};

export interface PitchTourProps {
	steps: PitchStep[];
	open: boolean;
	onClose: () => void;
	label?: string;
	messages?: Partial<PitchTourMessages>;
	/** Advance automatically after this many ms (unattended demo / recording). */
	autoAdvanceMs?: number;
	className?: string;
}

const reducedMotion = () =>
	typeof window !== "undefined" &&
	Boolean(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches);

/**
 * Guided demonstration for pitches: 3–5 steps that tell pain → mechanism →
 * result, run the demo actions and spotlight the element being discussed.
 * Keyboard and presentation clickers: →/PageDown/Space next, ←/PageUp back,
 * Esc closes. Non-modal: the page stays visible and operable.
 */
export function PitchTour({
	steps,
	open,
	onClose,
	label = "Demonstração guiada",
	messages,
	autoAdvanceMs,
	className,
}: PitchTourProps) {
	const text = { ...defaultMessages, ...messages };
	const [index, setIndex] = useState(0);
	const [paused, setPaused] = useState(false);
	const panel = useRef<HTMLDivElement>(null);
	const returnFocus = useRef<HTMLElement | null>(null);
	const titleId = useId();
	const step = steps[index];
	const last = index === steps.length - 1;

	const close = useCallback(() => {
		onClose();
		returnFocus.current?.focus();
	}, [onClose]);

	const go = useCallback(
		(delta: number) => {
			if (delta > 0 && index >= steps.length - 1) {
				close();
				return;
			}
			setIndex((current) =>
				Math.min(steps.length - 1, Math.max(0, current + delta)),
			);
		},
		[close, index, steps.length],
	);

	// Open: remember focus, start from the first step.
	useEffect(() => {
		if (!open) return;
		returnFocus.current = document.activeElement as HTMLElement | null;
		setIndex(0);
		requestAnimationFrame(() => panel.current?.focus());
	}, [open]);

	// Step: run its action, spotlight its target.
	useEffect(() => {
		if (!open || !step) return;
		step.enter?.();
		if (!step.target) return;
		let element: HTMLElement | null = null;
		const frame = requestAnimationFrame(() => {
			element = document.querySelector<HTMLElement>(step.target ?? "");
			if (!element) return;
			element.setAttribute("data-pitch-active", "");
			element.scrollIntoView({
				block: step.block ?? "center",
				behavior: reducedMotion() ? "auto" : "smooth",
			});
		});
		return () => {
			cancelAnimationFrame(frame);
			element?.removeAttribute("data-pitch-active");
		};
	}, [open, step]);

	useEffect(() => {
		if (!open) return;
		const onKey = (event: KeyboardEvent) => {
			const target = event.target instanceof Element ? event.target : null;
			if (target?.closest("input, textarea, select, [contenteditable]")) return;
			if (["ArrowRight", "PageDown"].includes(event.key)) {
				event.preventDefault();
				go(1);
			} else if (event.key === " " && target?.tagName !== "BUTTON") {
				event.preventDefault();
				go(1);
			} else if (["ArrowLeft", "PageUp"].includes(event.key)) {
				event.preventDefault();
				go(-1);
			} else if (event.key === "Escape") close();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [close, go, open]);

	useEffect(() => {
		if (!open || !autoAdvanceMs || paused) return;
		const timer = window.setTimeout(() => go(1), autoAdvanceMs);
		return () => window.clearTimeout(timer);
	}, [autoAdvanceMs, go, open, paused]);

	if (!open || !step) return null;
	return (
		<div
			ref={panel}
			role="dialog"
			aria-modal="false"
			aria-label={label}
			aria-describedby={titleId}
			tabIndex={-1}
			className={["ds-pitch-tour", className].filter(Boolean).join(" ")}
			data-step={step.id}
			onPointerEnter={() => setPaused(true)}
			onPointerLeave={() => setPaused(false)}
		>
			<p className="ds-pitch-progress">
				{text.progress(index + 1, steps.length)}
			</p>
			<div aria-live="polite">
				<h2 id={titleId} className="ds-pitch-title">
					{step.title}
				</h2>
				{step.body && <div className="ds-pitch-body">{step.body}</div>}
			</div>
			<div className="ds-pitch-actions">
				<button
					type="button"
					className="ds-pitch-button"
					onClick={() => go(-1)}
					disabled={index === 0}
				>
					{text.previous}
				</button>
				<button
					type="button"
					className="ds-pitch-button"
					data-primary=""
					onClick={() => go(1)}
				>
					{last ? text.finish : text.next}
				</button>
				<button
					type="button"
					className="ds-pitch-close"
					aria-label={text.close}
					onClick={close}
				>
					×
				</button>
			</div>
		</div>
	);
}

/** True when the page was opened with `?demo=1` (or another `param`). */
export function usePitchMode(param = "demo") {
	const [active, setActive] = useState(false);
	useEffect(() => {
		setActive(new URLSearchParams(window.location.search).get(param) === "1");
	}, [param]);
	return [active, setActive] as const;
}
