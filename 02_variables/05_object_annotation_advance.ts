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

let p_3: any = {
  name: "coco",
};

p_3.sex = "male";

console.log(p_1);
console.log(p_3);
