# Fora da Margem

Revista literária digital produzida no contexto do projeto pedagógico **Vozes em circulação: quem pode falar, escrever e ser ouvido?**, com a turma 311 da E.E.E.M. Profª Margot T. N. Giacomazzi, Canoas/RS.

**Site:** https://jhuligregori.github.io/vozes-silenciadas-2026/

## Problema e proposta

Como dar circulação pública à escrita estudantil, preservando as decisões editoriais coletivas e o direito de cada participante escolher como será identificado?

O projeto oferece uma página de apresentação, acesso a formulários de participação, espaços para crônicas e apresentações de autores e uma futura coletânea digital.

## Tecnologias

- HTML5 semântico
- CSS3 responsivo
- JavaScript sem frameworks
- Git e GitHub Pages
- Google Forms para coleta de propostas editoriais

## Estrutura

- `index.html`: estrutura, estilos e comportamento da interface.
- `config.js`: endereços dos formulários e dados de publicações autorizadas.

## Executar localmente

Abra `index.html` em um navegador ou utilize um servidor estático local (por exemplo, `python -m http.server 8000`). O site não exige instalação de dependências.

## Decisões de projeto

- Publicação estática para reduzir custos e complexidade de manutenção.
- Conteúdo separado da apresentação por meio de `config.js`.
- Navegação por âncoras e interface adaptável a dispositivos móveis.
- Textos e minibiografias publicados somente após revisão e autorização individual.

## Próximas melhorias

- [ ] Testar títulos e componentes em diferentes larguras de tela.
- [ ] Verificar acessibilidade de contraste, navegação por teclado e leitores de tela.
- [ ] Separar HTML, CSS e JavaScript em arquivos próprios.
- [ ] Criar fluxo editorial para revisão e publicação de textos.
- [ ] Automatizar verificações básicas de links e estrutura.

## Cuidados éticos

A participação estudantil, a identificação dos autores e a circulação de textos dependem das autorizações pertinentes. Dados pessoais e respostas privadas dos formulários não fazem parte deste repositório.

## Contexto

Projeto de estágio em Letras/UFRGS, com orientação pedagógica e organização da revista por Jhuli Grégori. Os textos literários são de autoria dos estudantes participantes.
