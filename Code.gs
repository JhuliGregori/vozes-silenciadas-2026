/**
 * Fora da Margem · Turma 311 · Edição 2026
 * Execute criarProjeto() UMA vez em https://script.google.com/.
 * Revise o formulário antes de compartilhar com a turma.
 */
function criarProjeto() {
  const form = FormApp.create('Fora da Margem | Turma 311 · Votação e minibiografia');
  form.setDescription('Turma 311 · E.E.E.M. Profª Margot T. N. Giacomazzi, Canoas/RS. Revista coletiva Fora da Margem, vinculada ao projeto de estágio “Vozes em circulação: quem pode falar, escrever e ser ouvido?”, elaborado pela professora estagiária Jhuli Grégori (Letras/UFRGS). Vote nas propostas da revista e conte um pouco sobre você. Todas as perguntas devem ser respondidas, mas é possível escolher não publicar informações pessoais. Responder não equivale a autorizar publicação pública.');
  form.setConfirmationMessage('Sua resposta foi registrada. Obrigada por participar da revista Fora da Margem!');
  const ss = SpreadsheetApp.create('Fora da Margem | Turma 311 · Votação e biografias');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
  const sec = t => form.addSectionHeaderItem().setTitle(t);
  const text = (t,h='') => {const q=form.addTextItem().setTitle(t).setRequired(true);if(h)q.setHelpText(h);};
  const para = (t,h='') => {const q=form.addParagraphTextItem().setTitle(t).setRequired(true);if(h)q.setHelpText(h);};
  const one = (t,opts) => form.addMultipleChoiceItem().setTitle(t).setChoiceValues(opts).setRequired(true);
  const many = (t,opts) => form.addCheckboxItem().setTitle(t).setChoiceValues(opts).setRequired(true);
  sec('01 / Identificação (não será publicada)');
  text('Seu nome completo','Usado apenas para a professora organizar as respostas.');
  // Formulário exclusivo da turma 311.
  sec('02 / Conselho editorial');
  one('Você aprova o nome da revista, Fora da Margem?', ['Sim, manter','Gosto, mas quero ajustar','Prefiro outro nome']);
  para('Qual nome você sugere?','Se não quiser alterar, escreva: manter.');
  one('Você aprova o subtítulo “Histórias que atravessam os muros da escola”?', ['Sim, manter','Sim, com ajustes','Prefiro outro subtítulo']);
  para('Qual subtítulo você sugere?','Se não houver sugestão, escreva: manter.');
  one('Você aprova a identidade Pink Noise (rosa neon, azul-ciano, fundo escuro e detalhes cyberpunk)?', ['Sim, manter','Sim, mas quero ajustes','Prefiro outra identidade visual']);
  para('O que mudaria no visual?','Se não mudaria nada, escreva: nada.');
  one('Você aprova as seções Projeto, Formulários, Crônicas, Autores e E-book?', ['Sim, manter','Sim, com ajustes','Prefiro outra organização']);
  para('Que seções incluiria ou alteraria?','Se não houver, escreva: manter.');
  one('Como prefere organizar as crônicas no e-book?', ['Por tema','Por ordem alfabética','Decidir depois de ler os textos']);
  one('Você gostaria de participar das decisões de capa, revisão ou divulgação?', ['Sim','Talvez','Não, prefiro apenas escrever']);
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
  one('Você gostaria que sua minibiografia aparecesse na revista?', ['Sim, se eu aprovar o texto final e houver as autorizações necessárias','Não','Ainda não sei']);
  one('Você gostaria que sua crônica aparecesse na revista?', ['Sim, após revisão e verificação das autorizações necessárias','Não neste momento','Ainda não decidi']);
  one('Você gostaria de usar uma foto sua?', ['Sim, mediante autorização específica','Não','Prefiro ilustração ou nenhuma imagem']);
  one('Você quer revisar nome, imagem e biografia antes de publicar?', ['Sim','Prefiro não aparecer na seção de autores']);
  para('Mais alguma ideia ou preocupação?','Se não houver, escreva: nenhuma.');
  form.addSectionHeaderItem().setTitle('Aviso importante').setHelpText('As respostas servem para planejar a revista. Não autorizam automaticamente a publicação pública de textos, nomes, fotos ou dados pessoais. A professora verificará as autorizações exigidas pela escola e pelos responsáveis legais, quando aplicável, antes de divulgar qualquer material.');
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