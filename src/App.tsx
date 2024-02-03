import { useState } from "react";
import "./App.css";

export type CardType = {
  id: number;
  topic: string;
  question: string;
};

function App() {
  const startingCards: CardType[] = [
    {
      id: 1,
      topic: "Animals",
      question:
        "Describe an animal you would love to have as a pet, where would it sleep? What would it eat? How would you look after it?",
    },
    {
      id: 2,
      topic: "Animals",
      question:
        "If you could be any animal, which would you be and why? What would you do all day?",
    },
    { id: 3, topic: "Animals", question: "What is your favorite animal? Why?" },
    {
      id: 4,
      topic: "People",
      question: "Who is your best friend? What do you like about them?",
    },
    {
      id: 5,
      topic: "People",
      question: "Describe someone you admire. What do you admire about them?",
    },
    {
      id: 6,
      topic: "People",
      question: "Describe someone you hate. What do you hate about them?",
    },
    {
      id: 7,
      topic: "Places",
      question: "What is your favorite place in the world? Why?",
    },
    {
      id: 8,
      topic: "Places",
      question: "What is the most beautiful place you have ever visited?",
    },
    {
      id: 9,
      topic: "Places",
      question: "What is the most boring place you have ever visited?",
    },
    {
      id: 10,
      topic: "Hobbies",
      question: "What are your hobbies? How long have you been doing them?",
    },
    {
      id: 11,
      topic: "Hobbies",
      question:
        "What is something you used to love doing as a child, but don't anymore? What made you change your mind?",
    },
    {
      id: 12,
      topic: "Hobbies",
      question:
        "What is something you have always wanted to try, but never have? Why not?",
    },
    {
      id: 13,
      topic: "Food",
      question: "What is your favorite food? Why?",
    },
    {
      id: 14,
      topic: "Food",
      question: "What is the most disgusting food you have ever eaten?",
    },
    {
      id: 15,
      topic: "Food",
      question: "What is the most delicious food you have ever eaten?",
    },
    {
      id: 16,
      topic: "School",
      question: "What was your favorite subject at school? Why?",
    },
    {
      id: 17,
      topic: "School",
      question: "What was your least favorite subject at school? Why?",
    },
  ];
  const [cards, setCards] = useState<CardType[]>(() => shuffle(startingCards));

  return (
    <main className="main">
      <div className="board">
        <p>{cards.length} Cards Left</p>
        <Card cards={cards} />
      </div>
      <Buttons
        startingCards={startingCards}
        setCards={setCards}
        cards={cards}
      />
    </main>
  );
}

export default App;

function Card({ cards }: { cards: CardType[] }) {
  if (cards.length === 0) {
    return (
      <div className="card">
        <h1>No More Cards</h1>
        <div className="question-area">
          <p>Click the reset button to reset the deck</p>
        </div>
      </div>
    );
  }
  return (
    <div className="card">
      <h1>{cards[0].topic}</h1>
      <div className="question-area">
        <p>{cards[0].question}</p>
      </div>
    </div>
  );
}

function Buttons({
  startingCards,
  cards,
  setCards,
}: {
  startingCards: CardType[];
  cards: CardType[];
  setCards: (cards: CardType[]) => void;
}) {
  const handleDraw = () => {
    const cardsCopy = [...cards];
    cardsCopy.shift();
    setCards(cardsCopy);
  };
  const handleShuffle = (cards: CardType[]) => {
    const shuffled = shuffle([...cards]);
    setCards(shuffled);
  };
  const handleReset = () => {
    setCards(startingCards);
  };
  return (
    <div className="buttons">
      <button onClick={() => handleDraw()}>Draw Card</button>
      <button onClick={() => handleShuffle(cards)}>Shuffle</button>
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
}

export function shuffle(array: CardType[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
