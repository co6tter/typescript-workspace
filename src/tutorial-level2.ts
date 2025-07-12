interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

// オプショナルプロパティとreadonlyプロパティ
interface UserProfile {
  readonly id: number;
  name: string;
  email: string;
  age?: number;
  phone?: string;
}

// ユニオン型
type Status = "pending" | "approved" | "rejected";
type Size = "S" | "M" | "L" | "XL";
type Theme = "light" | "dark";

// 型エイリアス
type UserID = number;
type ProductName = string;
type Price = number;

// オブジェクト型の型エイリアス
type Address = {
  street: string;
  city: string;
  zipCode: string;
  country: string;
};

const user1: User = {
  id: 1,
  name: "田中太郎",
  email: "tanaka@example.com",
  isActive: true,
};

const product1: Product = {
  id: 101,
  name: "ノートパソコン",
  price: 89800,
  category: "electronics",
  inStock: true,
};

const profile1: UserProfile = {
  id: 1,
  name: "佐藤花子",
  email: "sato@example.com",
  age: 28,
};

const profile2: UserProfile = {
  id: 2,
  name: "鈴木一郎",
  email: "suzuki@example.com",
};

function updateStatus(orderId: number, newStatus: Status): string {
  return `注文 ${orderId} のステータスが ${newStatus} に更新されました`;
}

function getSize(size: Size): string {
  switch (size) {
    case "S":
      return "スモール";
    case "M":
      return "ミディアム";
    case "L":
      return "ラージ";
    case "XL":
      return "エクストララージ";
  }
}

function createUser(id: UserID, name: string, email: string): User {
  return {
    id,
    name,
    email,
    isActive: true,
  };
}

function formatPrice(price: Price): string {
  return `¥${price.toLocaleString()}`;
}

// インターフェースの継承
interface Employee extends User {
  department: string;
  position: string;
  salary: number;
}

interface Manager extends Employee {
  teamSize: number;
  teamMembers: string[];
}

const employee1: Employee = {
  id: 2,
  name: "山田次郎",
  email: "yamada@company.com",
  isActive: true,
  department: "開発部",
  position: "エンジニア",
  salary: 5000000,
};

const manager1: Manager = {
  id: 3,
  name: "田村部長",
  email: "tamura@company.com",
  isActive: true,
  department: "開発部",
  position: "部長",
  salary: 8000000,
  teamSize: 5,
  teamMembers: ["山田次郎", "鈴木一郎", "佐藤花子"],
};

console.log("=== ユーザー情報 ===");
console.log(`${user1.name} (${user1.email})`);
console.log(`アクティブ: ${user1.isActive ? "はい" : "いいえ"}`);

console.log("\n=== 商品情報 ===");
console.log(`${product1.name}: ${formatPrice(product1.price)}`);
console.log(`在庫: ${product1.inStock ? "あり" : "なし"}`);

console.log("\n=== プロフィール情報 ===");
console.log(`${profile1.name} (${profile1.age}歳)`);
console.log(`${profile2.name} (年齢非公開)`);

console.log("\n=== ステータス更新 ===");
console.log(updateStatus(12345, "approved"));

console.log("\n=== サイズ情報 ===");
console.log(`Mサイズ: ${getSize("M")}`);

console.log("\n=== 従業員情報 ===");
console.log(`${employee1.name} - ${employee1.department} ${employee1.position}`);
console.log(`${manager1.name} - チームサイズ: ${manager1.teamSize}人`);
