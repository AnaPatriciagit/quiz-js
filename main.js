//const celular = {
//  cor: 'black',
// modelo: 'samsung',
// peso: '200'
//}

//alert(celular.modelo)
//Alerta para o objeto, para acessarmos o objeto precisamos indica-lo e a propriedade que queremos ver.

const perguntas = [
  {
    pergunta: "Qual a função do JavaScript?",
    respostas: [
      "Formatar texto em páginas web.",
      "Criar animações interativas.",
      "Adicionar funcionalidades dinâmicas a páginas web.",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual o tipo de linguagem do JavaScript?",
    respostas: [
      "Lógica de programação.",
      "Linguagem de marcação.",
      "Linguagem de consulta.",
      "Todas as opções acima.",
    ],
    correta: 3,
  },
  {
    pergunta: "Como declarar uma variável em JavaScript?",
    respostas: [
      "var nome = 'valor';",
      "let nome = 'valor';",
      "const nome = 'valor';",
      "Todas as opções acima.",
    ],
    correta: 3,
  },
  {
    pergunta: "Qual a diferença entre 'var', 'let' e 'const'?",
    respostas: [
      "'var' é global, 'let' é local e 'const' é constante.",
      "'var' é global, 'let' é local e 'const' é apenas para números.",
      "'var' é local, 'let' é global e 'const' é constante.",
      "'var' é global, 'let' é local e 'const' é constante.",
    ],
    correta: 0,
  },
  {
    pergunta: "O que é um operador condicional em JavaScript?",
    respostas: [
      "Uma função que executa um bloco de código.",
      "Uma variável que armazena um valor booleano.",
      "Um operador que verifica uma condição e executa um bloco de código de acordo com o resultado.",
      "Uma estrutura de repetição que executa um bloco de código várias vezes.",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual a diferença entre '==', '===', '!=', '!=='?",
    respostas: [
      "'==', '===', '!=', '!==': Todos comparam valores.",
      "'==', '===': comparam valores e tipos.",
      "'!=', '!==': comparam apenas tipos.",
      "'==', '===': comparam valores e tipos. '!=', '!==': comparam apenas tipos.",
    ],
    correta: 3,
  },
  {
    pergunta: "O que é uma função em JavaScript?",
    respostas: [
      "Um bloco de código que pode ser reutilizado.",
      "Uma variável que armazena um valor.",
      "Uma estrutura de repetição que executa um bloco de código várias vezes.",
      "Um bloco de código que pode ser reutilizado.",
    ],
    correta: 0,
  },
  {
    pergunta: "Como declarar uma função em JavaScript?",
    respostas: [
      "function nomeDaFuncao() { // código da função }",
      "function nomeDaFuncao(parametro1, parametro2) { // código da função }",
      "function nomeDaFuncao(parametro1, parametro2) { // código da função }",
      "function nomeDaFuncao() { return valor; }",
    ],
    correta: 1,
  },
  {
    pergunta: "O que é um loop em JavaScript?",
    respostas: [
      "Uma função que executa um bloco de código uma única vez.",
      "Uma estrutura de repetição que executa um bloco de código várias vezes.",
      "Uma variável que armazena um valor.",
      "Uma estrutura de repetição que executa um bloco de código várias vezes.",
    ],
    correta: 1,
  },
  {
    pergunta: "Quais os tipos de loop mais comuns em JavaScript?",
    respostas: [
      "for, while, do while",
      "if, else, switch",
      "function, object, array",
      "for, while, do while, forEach, map, filter",
    ],
    correta: 3,
  },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)
  }


  quizItem.querySelector('dl dt').remove()
  quizItem.querySelector('dl dt').remove()



  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}