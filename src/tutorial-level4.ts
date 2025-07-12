interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  isActive: boolean;
}

// Partial - すべてのプロパティをオプショナルにする
type PartialUser = Partial<User>;

// Required - すべてのプロパティを必須にする
type RequiredUser = Required<User>;

// Pick - 指定したプロパティのみを選択
type UserSummary = Pick<User, "id" | "name" | "email">;

// Omit - 指定したプロパティを除外
type UserWithoutId = Omit<User, "id">;

// Record - キーと値の型を指定してオブジェクト型を作成
type UserRoles = Record<string, string>;
type StatusCount = Record<"pending" | "approved" | "rejected", number>;

// Mapped Types
type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
};

type OptionalUser = {
  [K in keyof User]?: User[K];
};

type StringifyUser = {
  [K in keyof User]: string;
};

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

// Conditional Types
type IsString<T> = T extends string ? true : false;
type IsArray<T> = T extends any[] ? true : false;

type NonNullable<T> = T extends null | undefined ? never : T;

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type ElementType<T> = T extends (infer U)[] ? U : never;

// Template Literal Types
type EventName = "click" | "scroll" | "mousemove";
type EventHandlerName = `on${Capitalize<EventName>}`;

type CSSProperty = "margin" | "padding" | "border";
type CSSValue = "auto" | "inherit" | number;
type CSSDeclaration = `${CSSProperty}: ${CSSValue}`;

// 高度なジェネリクス
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
  };
}

interface Comparable {
  compare(other: this): number;
}

class SortedList<T extends Comparable> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
    this.items.sort((a, b) => a.compare(b));
  }

  getItems(): T[] {
    return [...this.items];
  }
}

// インデックス型とキーオブザクエリ
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

function updateProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): T {
  return { ...obj, [key]: value };
}

// 型ガード
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function isUser(obj: any): obj is User {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.id === "number" &&
    typeof obj.name === "string" &&
    typeof obj.email === "string" &&
    typeof obj.age === "number" &&
    typeof obj.isActive === "boolean"
  );
}

function isArray<T>(value: T | T[]): value is T[] {
  return Array.isArray(value);
}

// 判別可能ユニオン型
interface LoadingState {
  status: "loading";
}

interface SuccessState {
  status: "success";
  data: any;
}

interface ErrorState {
  status: "error";
  error: string;
}

type AsyncState = LoadingState | SuccessState | ErrorState;

function handleAsyncState(state: AsyncState): string {
  switch (state.status) {
    case "loading":
      return "データを読み込んでいます...";
    case "success":
      return `データを正常に取得しました: ${JSON.stringify(state.data)}`;
    case "error":
      return `エラーが発生しました: ${state.error}`;
  }
}

// 関数オーバーロード
function createElement(tag: "div"): HTMLDivElement;
function createElement(tag: "span"): HTMLSpanElement;
function createElement(tag: "button"): HTMLButtonElement;
function createElement(tag: string): HTMLElement {
  return document.createElement(tag);
}

function format(value: string): string;
function format(value: number): string;
function format(value: Date): string;
function format(value: string | number | Date): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value.toFixed(2);
  }
  return value.toISOString();
}

// 実際の使用例
console.log("=== Utility Types ===");
const partialUser: PartialUser = { name: "田中" };
const userSummary: UserSummary = { id: 1, name: "田中", email: "tanaka@example.com" };
console.log("Partial User:", partialUser);
console.log("User Summary:", userSummary);

const userRoles: UserRoles = {
  admin: "管理者",
  user: "一般ユーザー",
  guest: "ゲスト",
};

const statusCount: StatusCount = {
  pending: 5,
  approved: 10,
  rejected: 2,
};

console.log("\n=== Record Types ===");
console.log("User Roles:", userRoles);
console.log("Status Count:", statusCount);

console.log("\n=== Conditional Types ===");
type StringCheck = IsString<string>;
type NumberCheck = IsString<number>;
type ArrayCheck = IsArray<string[]>;
console.log("IsString<string>:", true as StringCheck);
console.log("IsString<number>:", false as NumberCheck);
console.log("IsArray<string[]>:", true as ArrayCheck);

console.log("\n=== Template Literal Types ===");
const eventHandler: EventHandlerName = "onClick";
console.log("Event Handler:", eventHandler);

console.log("\n=== インデックス型 ===");
const user: User = { id: 1, name: "佐藤", email: "sato@example.com", age: 30, isActive: true };
const userName = getProperty(user, "name");
const updatedUser = updateProperty(user, "age", 31);
console.log("User Name:", userName);
console.log("Updated User:", updatedUser);

console.log("\n=== 型ガード ===");
const unknownValue: unknown = "Hello World";
if (isString(unknownValue)) {
  console.log("文字列の長さ:", unknownValue.length);
}

const possibleUser = { id: 1, name: "山田", email: "yamada@example.com", age: 25, isActive: true };
if (isUser(possibleUser)) {
  console.log("有効なユーザー:", possibleUser.name);
}

console.log("\n=== 判別可能ユニオン型 ===");
const loadingState: AsyncState = { status: "loading" };
const successState: AsyncState = { status: "success", data: { message: "データ取得完了" } };
const errorState: AsyncState = { status: "error", error: "ネットワークエラー" };

console.log(handleAsyncState(loadingState));
console.log(handleAsyncState(successState));
console.log(handleAsyncState(errorState));

console.log("\n=== 関数オーバーロード ===");
console.log("文字列フォーマット:", format("hello"));
console.log("数値フォーマット:", format(123.456));
console.log("日付フォーマット:", format(new Date()));
