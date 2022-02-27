interface Person {
  name: string;
  age: number;
  sayHi: () => void;
}
let p_1: Person = {
  name: "Jack",
  age: 18,
  sayHi: () => {
    console.log("hi jack");
  },
};

let p_2: Person = {
  name: "coco",
  age: 12,
  sayHi: () => {
    console.log("haha");
  },
};
