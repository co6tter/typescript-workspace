# typescript-workspace

## Overview

TypeScript の学習・実験用ワークスペースです。アルゴリズム練習、チュートリアル、AWS SDK の利用サンプルなど、様々なコードを気軽に試せる環境を提供します。個人の学習・検証目的を想定しています。

## Tech Stack

- **TypeScript 6.x** — 主要言語
- **Vitest** — テストフレームワーク
- **Biome 2.x** — Linter / Formatter
- **Lefthook** — Git フック管理
- **ts-node-dev** — 開発時のホットリロード実行
- **AWS SDK v3** — S3 操作・Presigned URL 生成サンプル
- **Axios** — HTTP クライアントサンプル

## Prerequisites

- Node.js 24.x（[mise](https://mise.jdx.dev/) 推奨）
- pnpm

```bash
# mise を使う場合
mise install node@24
mise use -g pnpm@latest
```

## Setup

1. リポジトリをクローン

   ```bash
   git clone <repo-url>
   cd typescript-workspace
   ```

2. 依存パッケージをインストール

   ```bash
   pnpm install
   ```

3. Git フックをセットアップ

   ```bash
   pnpm dlx lefthook install
   ```

## Usage

```bash
# TypeScript ファイルを直接実行（ts-node-dev）
pnpm dev src/sample.ts

# ビルド（dist/ に出力）
pnpm build

# テスト実行
pnpm test
```

スクリプトを単体実行する場合は `ts-node` を使用します。ESM モジュールを使っているため、以下のように実行してください。

```bash
node --loader ts-node/esm src/sample.ts
```

## Directory Structure

```
typescript-workspace/
├── src/                  # TypeScript ソースファイル
│   ├── sample.ts         # アルゴリズム練習サンプル
│   ├── tutorial-level*.ts # チュートリアルコード
│   ├── aws-sdk-sample.ts # AWS SDK S3 操作サンプル
│   └── presigned-url.ts  # S3 Presigned URL 生成サンプル
├── tests/                # Vitest テストファイル
├── dist/                 # ビルド成果物（自動生成）
├── biome.json            # Biome 設定
├── lefthook.yml          # Git フック設定
├── tsconfig.json         # TypeScript 設定
└── vitest.config.mts     # Vitest 設定
```

## License

MIT
