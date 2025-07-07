   const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você gosta de esportes radicais?",
        alternativas: [
            {
                texto: "odeio!",
                afirmacao: "São muito perigosos, tenho medo de me machucar"
            },
            {
                texto: "Sim!amo!",
                afirmacao: "Existem muitos, mas alguns mais famosos dentre eles são: Motocross,surfe, paraquedismo, etc."
            }
        ]
    },
    {
        enunciado: "coisas que me fazem gostar desse esporte",
        alternativas: [
            {
                texto: "Esportes Radicais são práticas de desporto com alto grau de risco físico, atividade de perigo que eleva a adrenalina do corpo devido às condições extremas de velocidade, altura e outros fatores.",
                afirmacao: "com isso, fico cada vez mais empolgado."
            },
            {
                texto: "com isso fico cada vez mais empolgado.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "quais são os cuidados ao praticar esse esporte?",
        alternativas: [
            {
                texto: "Ao praticar esportes radicais, é crucial priorizar a segurança. Isso inclui usar equipamentos de proteção adequados, como capacetes e equipamentos de segurança específicos para cada atividade, e garantir que estejam em boas condições e sejam utilizados corretamente..",
                afirmacao: "Também tenho conhecimento disso."
            },
            {
                texto: "Também tenho conhecimento disso. Continue.",
                afirmacao: "continue."
            }
        ]
    },
    {
        enunciado: "Quais os níveis dos esportes radicais?",
        alternativas: [
            {
                texto: "Os esportes radicais podem ser divididos em diferentes níveis de profissionalismo, desde amadores até atletas de alto rendimento. Os níveis podem variar dependendo da modalidade, mas geralmente seguem uma progressão que inclui iniciante, intermediário, avançado e profissional.",
                afirmacao: "continue."
            },
            {
                texto: "continue.",
                afirmacao: "...!"
            }
        ]
    },
    {
        enunciado: "Quais os principais atletas dos esportes radicais em geral ",
        alternativas: [
            {
                texto: "Skate. Yndiara Asp. Brasil,MTB. Henrique Avancini. Brasil,Esqui Alpino. Lucas Braathen. Brasil, Skate. Leticia Bufoni. Brasil, Surfe. Carlos Burle. Brasil e Wakeboard. Pedro Caldas. Brasil.",
                afirmacao: "Impressionante."
            },
            {
                texto: "Impressionante.",
                afirmacao: "P."
            }
        ] 
            
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
