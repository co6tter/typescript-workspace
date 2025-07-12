// ジェネリクス関数
function identity<T>(arg: T): T {
  return arg;
}

function getFirstElement<T>(array: T[]): T | undefined {
  return array[0];
}

function swap<T, U>(a: T, b: U): [U, T] {
  return [b, a];
}

// ジェネリクスインターフェース
interface Container<T> {
  value: T;
  getValue(): T;
  setValue(value: T): void;
}

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

interface Repository<T> {
  findById(id: number): T | undefined;
  save(item: T): void;
  delete(id: number): boolean;
  findAll(): T[];
}

// ジェネリクスクラス
class Box<T> {
  private content: T;

  constructor(content: T) {
    this.content = content;
  }

  getContent(): T {
    return this.content;
  }

  setContent(content: T): void {
    this.content = content;
  }
}

class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}

class Person {
  protected name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  introduce(): string {
    return `こんにちは、${this.name}です。${this.age}歳です。`;
  }
}

class Student extends Person {
  private studentId: string;
  private grade: number;

  constructor(name: string, age: number, studentId: string, grade: number) {
    super(name, age);
    this.studentId = studentId;
    this.grade = grade;
  }

  getStudentId(): string {
    return this.studentId;
  }

  getGrade(): number {
    return this.grade;
  }

  introduce(): string {
    return `${super.introduce()} 学生ID: ${this.studentId}、学年: ${this.grade}年生です。`;
  }

  study(subject: string): string {
    return `${this.name}は${subject}を勉強しています。`;
  }
}

class Teacher extends Person {
  private teacherId: string;
  private subject: string;

  constructor(name: string, age: number, teacherId: string, subject: string) {
    super(name, age);
    this.teacherId = teacherId;
    this.subject = subject;
  }

  getTeacherId(): string {
    return this.teacherId;
  }

  getSubject(): string {
    return this.subject;
  }

  introduce(): string {
    return `${super.introduce()} 教員ID: ${this.teacherId}、担当科目: ${this.subject}です。`;
  }

  teach(): string {
    return `${this.name}先生が${this.subject}を教えています。`;
  }
}

abstract class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  abstract makeSound(): string;
  abstract move(): string;

  sleep(): string {
    return `${this.name}は眠っています。`;
  }
}

class Dog extends Animal {
  makeSound(): string {
    return `${this.name}はワンワンと鳴きます。`;
  }

  move(): string {
    return `${this.name}は走ります。`;
  }

  fetch(): string {
    return `${this.name}はボールを取ってきます。`;
  }
}

class Cat extends Animal {
  makeSound(): string {
    return `${this.name}はニャーと鳴きます。`;
  }

  move(): string {
    return `${this.name}は静かに歩きます。`;
  }

  climb(): string {
    return `${this.name}は木に登ります。`;
  }
}

interface Identifiable {
  id: number;
}

function updateItem<T extends Identifiable>(item: T, updates: Partial<T>): T {
  return { ...item, ...updates };
}

console.log("=== ジェネリクス関数 ===");
console.log(identity<string>("Hello"));
console.log(identity<number>(42));

const numbers = [1, 2, 3, 4, 5];
const fruits = ["りんご", "バナナ", "オレンジ"];
console.log(`最初の数字: ${getFirstElement(numbers)}`);
console.log(`最初の果物: ${getFirstElement(fruits)}`);

const [swapped1, swapped2] = swap("Hello", 123);
console.log(`交換結果: ${swapped1}, ${swapped2}`);

console.log("\n=== ジェネリクスクラス ===");
const stringBox = new Box<string>("TypeScript");
const numberBox = new Box<number>(100);
console.log(`文字列ボックス: ${stringBox.getContent()}`);
console.log(`数値ボックス: ${numberBox.getContent()}`);

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log(`スタックサイズ: ${numberStack.size()}`);
console.log(`ポップ: ${numberStack.pop()}`);
console.log(`ピーク: ${numberStack.peek()}`);

console.log("\n=== クラス継承 ===");
const person = new Person("佐藤さん", 35);
const student = new Student("田中君", 18, "S12345", 2);
const teacher = new Teacher("山田先生", 45, "T67890", "数学");

console.log(person.introduce());
console.log(student.introduce());
console.log(student.study("英語"));
console.log(teacher.introduce());
console.log(teacher.teach());

console.log("\n=== 抽象クラス ===");
const dog = new Dog("ポチ");
const cat = new Cat("ミケ");

console.log(dog.makeSound());
console.log(dog.move());
console.log(dog.fetch());
console.log(cat.makeSound());
console.log(cat.move());
console.log(cat.climb());

console.log("\n=== ジェネリクス制約 ===");
const user = { id: 1, name: "太郎", email: "taro@example.com" };
const updatedUser = updateItem(user, { name: "次郎" });
console.log(`更新前: ${user.name}`);
console.log(`更新後: ${updatedUser.name}`);
