/**
 * Vozes Silenciadas · Edição 2026
 * Execute criarProjeto() UMA vez em https://script.google.com/.
 * Revise o formulário antes de compartilhar com a turma.
 */
function criarProjeto() {
  const form = FormApp.create('Vozes Silenciadas | Votação editorial e minibiografia');
  form.setDescription('Turma de 2026. Vote nas propostas da revista, escolha como gostaria de aparecer e ajude a criar sua minibiografia. Todas as perguntas precisam ser respondidas, mas nenhuma resposta obriga a autorizar publicação.');
  form.setConfirmationMessage('Sua resposta foi registrada. Obrigada por participar do projeto Vozes Silenciadas!');
  const ss = SpreadsheetApp.create('Vozes Silenciadas | Votação e biografias');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
  const sec = t => form.addSectionHeaderItem().setTitle(t);
  const text = (t,h='') => {const q=form.addTextItem().setTitle(t).setRequired(true);if(h)q.setHelpText(h);};
  const para = (t,h='') => {const q=form.addParagraphTextItem().setTitle(t).setRequired(true);if(h)q.setHelpText(h);};
  const one = (t,opts) => form.addMultipleChoiceItem().setTitle(t).setChoiceValues(opts).setRequired(true);
  const many = (t,opts) => form.addCheckboxItem().setTitle(t).setChoiceValues(opts).setRequired(true);
  sec('01 / Identificação (não será publicada)');
  text('Seu nome completo','Usado apenas para a professora organizar as respostas.');
  text('Sua turma');
  sec('02 / Conselho editorial');
  one('Você aprova o nome do projeto, Vozes Silenciadas?', ['Sim, manter','Gosto, mas quero ajustar','Prefiro outro nome']);
  para('Qual nome você sugere?','Se não quiser alterar, escreva: manter.');
  one('Você aprova o subtítulo Crônicas de quem tem o que dizer?', ['Sim','Sim, com ajustes','Não']);
  para('Qual subtítulo você sugere?','Se não houver sugestão, escreva: manter.');
  one('Qual visual você prefere?', ['Literatura urbana: cidade e tipografia forte','Zine punk: recortes, xerox e colagens','Mistura dos dois','Outro']);
  para('O que mudaria no visual?','Se não mudaria nada, escreva: nada.');
  one('Você aprova as seções Projeto, Formulários, Crônicas, Autores e E-book?', ['Sim','Sim, com ajustes','Não']);
  para('Que seções incluiria ou alteraria?','Se não houver, escreva: manter.');
  one('Como prefere organizar as crônicas no e-book?', ['Por tema','Por ordem alfabética','Decidir depois de ler os textos']);
  sec('03 / Identificação e imagem');
  one('Como você gostaria de assinar sua crônica?', ['Com meu nome escolhido','Com pseudônimo','Sem nome público']);
  text('Qual nome ou pseudônimo deve aparecer?','Se preferir anonimato, escreva: anônimo.');
  one('Que imagem gostaria de usar na página de autor?', ['Minha foto, se autorizada adequadamente','Ilustração ou imagem escolhida por mim, com direito de uso','Ícone padrão da revista','Nenhuma imagem']);
  para('Descreva a imagem desejada','Não envie fotos pessoais neste formulário. Se não se aplica, escreva: não se aplica.');
  sec('04 / Sua minibiografia');
  text('Descreva-se em três palavras');
  para('O que gosta de fazer no tempo livre?');
  para('Que assunto ou interesse é importante para você?','Compartilhe somente o que se sentir confortável em divulgar.');
  one('Qual sua relação com a escrita?', ['Gosto muito','Gosto dependendo do tema','Não escrevo muito, mas gostei de experimentar','Tenho dificuldade','Não gosto muito']);
  many('Quais histórias você gosta de ler, assistir ou ouvir?', ['Terror e suspense','Romance','Comédia','Drama','Fantasia','Aventura','Cotidiano','Mistério','Ficção científica','Outras']);
  para('O que gostaria que o leitor soubesse sobre você como autor(a)?');
  para('Quer acrescentar alguma curiosidade ou frase?','Se não quiser, escreva: nenhuma.');
  sec('05 / Circulação e publicação');
  one('Onde você prefere que a revista circule?', ['Somente entre estudantes e professora','Comunidade escolar','Site público na internet','Ainda não sei']);
  one('Você concorda com a publicação da sua minibiografia?', ['Sim, depois de revisar e aprovar','Não']);
  one('Você concorda com a publicação da sua crônica?', ['Sim, depois de revisar e verificar autorizações','Não neste momento','Ainda não decidi']);
  one('Você concorda com o uso de uma foto sua?', ['Sim, mediante autorização específica','Não','Prefiro ilustração ou nenhuma imagem']);
  one('Você quer revisar nome, imagem e biografia antes de publicar?', ['Sim','Prefiro não aparecer na seção de autores']);
  para('Mais alguma ideia ou preocupação?','Se não houver, escreva: nenhuma.');
  const info = ss.insertSheet('LINKS DO PROJETO');
  info.getRange(1,1,4,2).setValues([
    ['Recurso','URL'],
    ['Formulário para estudantes',form.getPublishedUrl()],
    ['Editar formulário',form.getEditUrl()],
    ['Planilha de respostas',ss.getUrl()]
  ]);
  info.autoResizeColumns(1,2);
  Logger.log('FORMULÁRIO: '+form.getPublishedUrl());
  Logger.log('PLANILHA: '+ss.getUrl());
}