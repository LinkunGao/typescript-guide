let age = 18;
let songName = "coco";
let isVip = true;
let person = {
  name: "coco",
  age: 3,
};

let p1: {
  sayHi: () => void;
};

p1 = {
  sayHi: function () {
    console.log("hi");
  },
};

let p2: {
  sing: (name: string) => void;
};

p2 = {
  sing: (name: string) => {
    console.log("song name: " + name);
  },
};

let p3: {
  sum: (num1: number, num2: number) => number;
};

p3 = {
  sum: (num1: number, num2: number) => {
    return num1 + num2;
  },
};
