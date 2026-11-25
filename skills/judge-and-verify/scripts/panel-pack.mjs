#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const argv = process.argv.slice(2);
const opt = {}; 
for (let i=0;i<argv.length;i++) if (argv[i].startsWith('--')) opt[argv[i].slice(2)] = argv[++i];
const outDir = resolve(opt.out ?? 'design/judging/panel');
const url = opt.url ?? 'http://127.0.0.1:3000/';
const challenge = opt.challenge ?? 'docs/CHALLENGE.md';
const packet = opt.packet ?? 'design/judging/packet.md';
const roles = [
  { id:'impact', name:'Jurado de impacto e problema', focus:'para quem, dor com número, resultado crível, adoção, limites' },
  { id:'technical', name:'Jurado técnico', focus:'funciona ao vivo, input muda saída, mecanismo real/rotulado, erros, código' },
  { id:'innovation', name:'Jurado de inovação e tecnologia', focus:'ângulo novo, tecnologia essencial, fronteira IA-humano' },
  { id:'design', name:'Jurado de design e experiência', focus:'5s, hierarquia, densidade, acessibilidade, identidade, mobile' },
  { id:'communication', name:'Jurado de comunicação e demo', focus:'clareza em 3 min, roteiro=tela, limite em voz alta, frase de defesa' },
];
mkdirSync(outDir, { recursive: true });
const manifest = { createdAt: new Date().toISOString(), url, challenge, packet, roles: [] };
for (const r of roles) {
  const prompt = `Você é ${r.name} em uma banca de hackathon. Avalie com ceticismo, sem contexto do time.\n\nEntradas:\n- URL: ${url}\n- Challenge: ${challenge}\n- Packet: ${packet}\n\nMissão (5 minutos):\n- Use Playwright para abrir a URL, clicar na ação principal, testar input próprio/caso difícil, abrir ?demo=1, observar mobile/erros.\n- Foque em: ${r.focus}.\n- Dê nota 0-10 com evidência (captura, passo, texto, arquivo).\n- Se não entender para quem/dor/ação em 5s, diga explicitamente.\n\nFormato:\n### Jurado: ${r.name}\nNota: <0-10>\nEm 5 s entendi: <para quem / dor / ação | não entendi>\nEvidências:\n- ...\nMelhor ponto:\nPior defeito:\nUma correção que subiria a nota:\n`;
  const file = join(outDir, `${r.id}.prompt.md`);
  writeFileSync(file, prompt);
  manifest.roles.push({ ...r, prompt: file, output: join(outDir, `${r.id}.md`) });
}
writeFileSync(join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
writeFileSync(join(outDir, 'moderator.prompt.md'), `Você é o moderador da banca. Leia os 5 pareceres em ${outDir}/*.md e produza:\n1. Tabela jurado x nota x evidência x pior defeito\n2. Nota ponderada (ou pesos de ${challenge})\n3. Defeitos apontados por 2+ jurados (prioridade 1)\n4. Deliberação e frase de defesa\n5. 3 correções por ganho de nota por minuto (sem funcionalidade nova após congelamento)\n6. Riscos da demo ao vivo e plano B\n`);
console.log(`panel pack gerado em ${outDir}`);
