import Fruit from "./Fruit";

export default function Fruits() {
  //   const fruits = ["mango", "banana", "pineapple", "orange", "guava"];
  const fruits = [
    {
      name: "Apple",
      price: 20,
      emoji: "🍎",
      id: 1,
      soldOut: true,
    },
    {
      name: "banana",
      price: 10,
      emoji: "🍌",
      id: 2,
      soldOut: false,
    },
    {
      name: "orange",
      price: 40,
      emoji: "🍊",
      id: 3,
      soldOut: true,
    },
    {
      name: "mango",
      price: 70,
      emoji: "🥭",
      id: 4,
      soldOut: false,
    },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.id}
            name={fruit.name}
            emoji={fruit.emoji}
            price={fruit.price}
            soldOut={fruit.soldOut}
          />
        ))}
      </ul>
    </div>
  );
}
