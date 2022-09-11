import { useEffect, useState } from "react";

export const db = [
  {
    nameProject: "Netflix Clone",
    id: 1,
    image: "netflix.jpg",
    languages: ["React.js", "HTML", "CSS", "Fetch API"],
    details:
      "Projeto feito em React, conectado com a API pública do TMDB (The Movie Data Base), meu primeiro contato com a biblioteca.",
  },
  {
    nameProject: "Weather App",
    id: 2,
    image: "weather.jpg",
    languages: ["JavaScript", "HTML", "CSS", "Fetch API"],
    url: "https://half144.github.io/appweather/",
    details:
      "Projeto feito em JavaScript puro, conectado com uma API pública de clima. Com ela, poderá pesquisar a meteorologia local da cidade de sua preferência.",
  },
  {
    nameProject: "McDonald's Totem",
    id: 3,
    image: "mcdonalds.jpg",
    languages: ["JavaScript", "HTML", "CSS", "Fetch API"],
    url: "https://half144.github.io/mcdonaldstotem/",
    details:
      "Projeto feito em JavaScript Puro - Baseado em totens de autoatendimento. O usuário tem toda a experiência de montar seu pedido, sem a necessidade de ir em caixas (O projeto não foi trabalhado a responsividade para dispositivos móveis)",
  },
  {
    nameProject: "Instagram Clone",
    id: 4,
    image: "instagram.jpg",
    languages: [
      "React.js",
      "Redux",
      "Node.js",
      "Express",
      "Mongoose",
      "MongoDB",
      "HTML",
      "CSS",
      "Fetch API",
    ],
    details:
      "Projeto feito em React, no curso React do Zero a Maestria. conta com: autenticação, sistema de likes e comentarios e upload de imagens.",
  },
  {
    nameProject: "Flappy Bird",
    id: 5,
    image: "flappybird.jpg",
    languages: ["JavaScript", "HTML", "CSS"],
    url: "https://half144.github.io/flappybird/",
    details:
      "Réplica do jogo FlappyBird - Feito em JavaScript, HTML e CSS. Feito no curso Desenvolvimento Web Moderno.",
  },
  {
    nameProject: "iFood UI Redesign",
    id: 6,
    image: "ifood.jpg",
    languages: ["Figma"],
    url: "https://www.figma.com/file/WLSSixxVDmRQbUXjjax0k6/ifood-redesign",
    details:
      "Um projeto de treino de UI Design, nele refiz a tela de login e a pagina principal do site",
  },
];
export const stacks = [
  {
    stackName: "React",
    id: "react",
    resume:
      "O React é uma biblioteca de código aberto para interfaces gráficas que tem como foco uma só coisa: tornar a experiência do usuário com a interface mais eficiente.",
    image: "React.svg",
  },
  {
    stackName: "Figma",
    id: "figma",
    resume:
      "O Figma é uma ferramenta de design para interfaces, que oferece a possibilidade de trabalho colaborativo, ou seja, diversos membros de uma equipe podem explorar e atuar em um mesmo projeto.",
    image: "Figma.png",
  },
  {
    stackName: "Redux",
    id: "redux",
    resume:
      "Redux é uma biblioteca para armazenamento de estados de aplicações JavaScript, criado por Dan Abramov. Ele nasceu através de uma implementação do Flux, uma arquitetura criada pelo Facebook para contribuir com as aplicações de User Interface, utilizando o conceito de fluxo de dados unidirecional.",
    image: "Redux.svg",
  },
  {
    stackName: "JavaScript",
    id: "javascript",
    resume:
      "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
    image: "JavaScript.png",
  },
  {
    stackName: "CSS",
    id: "css",
    resume:
      "O que e o CSS? Ao falarmos sobre o que é CSS (Cascading Style Sheet, ou Folha de Estilo em Cascatas), é necessário dizer que sua aplicação é utilizada na estilização de componentes escritos em linguagens de marcação.",
    image: "CSS3.svg",
  },
  {
    stackName: "HTML",
    id: "html",
    resume:
      "O HTML é a principal linguagem de programação encontrada na internet. Cada página HTML tem uma série de elementos que cria a estrutura dos conteúdos de uma página ou de um aplicativo",
    image: "Html 5.svg",
  },
];

export const useGetStack = (name) => {
  const [stack, setStack] = useState("");
  useEffect(() => {
    setStack(stacks.find((e) => e.id == name));
  }, []);
  return stack;
};

export const useGetProjectId = (id) => {
  const [project, setProject] = useState("");
  useEffect(() => {
    setProject(db.find((e) => e.id == id));
  }, [id]);
  return project;
};
