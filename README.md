# portfolio

[about.reesuke.com](https://about.reesuke.com) — ポートフォリオ & ブログサイト

SvelteKit (Svelte 5) + Tailwind CSS 4 製。Cloudflare Workers 上で動いています。

## 機能

- **ポートフォリオ** — Work / Experience などの自己紹介ページ
- **ブログ** — Markdown 記事を [content サブモジュール](https://github.com/Ree-jp/home-content)で管理
  - パスワード保護記事（`noindex` + `Cache-Control: no-store` 付き）
  - X (Twitter) の URL を単独行に書くとツイート埋め込みに変換
- **アーカイブ** — 旧 WordPress ブログ（`PUBLIC_WP_URL`）の記事を REST API 経由で表示
- **sitemap.xml** — ローカル記事 + WordPress 記事から自動生成（パスワード保護記事は除外）

## 技術スタック

| 分類 | 使用技術 |
| --- | --- |
| フレームワーク | SvelteKit / Svelte 5 (runes) |
| スタイリング | Tailwind CSS 4 |
| Markdown | marked（カスタムレンダラー） |
| ホスティング | Cloudflare Workers（`wrangler.toml`） |
| パッケージ管理 | pnpm |

## セットアップ

```sh
git clone --recursive https://github.com/Ree-jp/portfolio.git
cd portfolio
pnpm install
cp .env.example .env   # PUBLIC_WP_URL を設定
pnpm dev
```

サブモジュールを取り忘れたら `git submodule update --init` で OK。

## コマンド

| コマンド | 内容 |
| --- | --- |
| `pnpm dev` | 開発サーバー起動 |
| `pnpm build` | 記事画像のコピー（`scripts/copy-content.js`）+ 本番ビルド |
| `pnpm preview` | ビルド結果のプレビュー |
| `pnpm check` | svelte-check による型チェック |

## 記事の書き方

`content/posts/<slug>/article.md` を作成すると `/blog/<slug>` で公開されます。

```md
---
title: 記事タイトル
date: 2026-07-20
category: Event
excerpt: 一覧に表示される概要文
featured: false      # トップに掲載するか
image: cover.webp    # 省略時は自動でフォールバック画像
password: "1234"     # 設定するとパスワード保護記事になる
---

本文。画像は ./image.webp のように相対パスで参照する。
```

同じディレクトリに置いた画像はビルド時に `static/blog/<slug>/` へコピーされます。webp への変換は `content/compress-images.sh` を利用。

## デプロイ

```sh
pnpm build
wrangler deploy
```

`about.reesuke.com` にカスタムドメインでルーティングされます（`wrangler.toml` 参照）。

## クレジット

- デザインの元は [Figma](https://www.figma.com/design/J3Y5Q0SVEDBPXJyjwMLdFL/%E3%83%9D%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%AA%E3%82%AA%E3%82%B5%E3%82%A4%E3%83%88) で作成
- フォント・絵文字・アイコンのライセンスは [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) を参照
