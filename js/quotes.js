const quotes = [
  {
    quote: "피할 수 없으면 즐겨라",
    author: "로버트 엘리엇",
  },
  {
    quote: "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에",
    author: "엘사 맥스웰",
  },
  {
    quote:
      "절대 어제를 후회하지 마라. 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
    author: "L.론허바드",
  },
  {
    quote: "한번의 실패와 영원한 실패를 혼동하지 마라.",
    author: "F.스콧 핏제랄드",
  },
  {
    quote: "내일은 내일의 태양이 뜬다.",
    author: "",
  },
  {
    quote:
      "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다.",
    author: "단테",
  },
  {
    quote:
      "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.",
    author: "톰 모나건",
  },
  {
    quote: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
    author: "이소룡",
  },
  {
    quote: "당신이 할 수 있다고 믿든 할 수 없다고 믿든 믿는 대로 될것이다.",
    author: "헨리 포드",
  },
  {
    quote: "문제점을 찾지 말고 해결책을 찾으라",
    author: "헨리 포드",
  },
  {
    quote: "인생에 뜻을 세우는데 있어 늦은 때라곤 없다.",
    author: "볼드윈",
  },
  {
    quote:
      "네 자신의 불행을 생각하지 않게 되는 가장 좋은 방법은 일에 몰두하는 것이다.",
    author: "베토벤",
  },
  {
    quote: "실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다.",
    author: "하버트 개서",
  },
  {
    quote:
      "우리는 두려움의 홍수에 버티기 위해서 끊임없이 용기의 둑을 쌓아야 한다.",
    author: "마틴 루터 킹",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
