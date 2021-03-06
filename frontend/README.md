# JPHacks b_2015 Frontend

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

## 使用技術

- [React](https://ja.reactjs.org/)
  - 言わずとしれた Facebook 製 UI ライブラリ。
- [Next.js](https://nextjs.org/)
  - React のフレームワーク。純粋な React だけで構築すると面倒な部分を簡単にしてくれます。今後、頻繁に使われるようになる技術と考えています。
- [TypeScript](https://www.typescriptlang.org/)
  - 型があることでバグを防いだり、ドキュメント代わりになったり、チーム開発がスムースになります。
- [Tailwind CSS](https://tailwindcss.com/)
  - ユーティリティファーストな CSS フレームワークでスタイリングに非常に便利です。
- [ESLint](https://eslint.org/)
  - コードを分析し問題点を指摘してくれるツールです。これがあることでメンバー同士のコード差異が少なくなったり、独自ルールを追加して書き方を統一できます。
- [Prettier](https://prettier.io/)
  - コードフォーマッターです。改行やクォーテーションなどを統一できます。ESLint とあわせて使うのが一般的で、ESLint だけでは実現できない部分をカバーします。
- [GitMoji](https://gitmoji.dev/) 😜
  - Commit メッセージに絵文字を使うことでパッと見で分かりやすくするものです。

## セットアップ

### ① yarn の準備

まずは yarn がインストールされているか確認しましょう。ターミナルで下記コマンドを打ってバージョンが表示されたら、それ以降の手順は飛ばして OK です。

```
yarn -v
```

yarn がまだの方はインストールしましょう。yarn のインストールには npm が必要です。まずは npm が入っているか確認しましょう。

```
npm -v
```

バージョンが表示された方は下記コマンドを打って、yarn をインストールしてください。

```
npm install -g yarn
```

npm が入っていなかった方は Node.js も入っていないと思うので、まずは Node.js をインストールしてください。インストール方法はたくさんありますが、[VOLTA](https://volta.sh/)をオススメしております。VOLTA のサイトを参考に Node.js をインストールしてください。

npm は Node.js とともに配布されるため、Node.js をインストールしたら npm も自動的にインストールされます。その後、yarn をインストールしてください。

Next.js のインストールは、④ 依存関係のインストールの yarn で実行されるので、npx 等でインストールする必要はありません。

### ② VS Code 拡張機能のインストール

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

上記の拡張機能をいれることで、保存時に自動で ESLint(+Prettier) が走り、コードを整形してくれます。

### ③ リポジトリのクローン

このリポジトリをローカル環境にクローンしてください。

コマンドで行う場合

```
git clone https://github.com/jphacks/B_2105.git
```

VS Code で行う場合は、リポジトリをクローンする（英語だと Clone Repository）というボタンがあるので、それをクリックしていただき、`https://github.com/jphacks/B_2105.git` を入力してエンターを押してください。

### ④ 依存関係のインストール

ターミナルを開き、下記コマンドで依存関係をインストールしましょう。以上で、環境構築は完了です。

```
yarn
```

## 開発する

開発を行う場合

```
yarn dev // localhost:3000 で立ち上がります
```

本番の動作確認を行う場合

```
yarn build
yarn start // localhost:3000 で立ち上がります。dev中はportを変える必要があります。
```

## Git ブランチルール

`main`

- マージされると本番に自動反映され（るようにし）ます。

`develop`

- 本番反映前に確認するための環境（ステージング環境）。
- 常駐しているブランチで、feature からの変更を受け付け、main にマージする。

`hotfix`

- 本番で発生した緊急のバグに対処するためのブランチ。
- 必ず main から分岐し、main と develop にマージする。

`feature/あなたのGitHub名_*`

- 開発にはここを用いる。
- 必ず develop から分岐し、develop にマージする。
- 「あなたの GitHub 名」にはアカウント名を入力。
- `*` は開発するものを簡易的に記入。
- 例: feature/shouhi_add-about-age

`main`, `develop`, `hotfix` に直接 push してはいけません。基本的に皆さんが触って良いのは `feature/あなたのGitHub名_*` ブランチだけです。

## Contributors ✨

Thanks goes to these wonderful people

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://twitter.com/shouhi_ide"><img src="https://user-images.githubusercontent.com/63713624/123041698-9f3c9b00-d430-11eb-8faf-e98e27e347db.jpg" width="100px;" alt=""/><br /><sub><b>井手翔陽</b></sub></a><br /><a href="https://github.com/jphacks/B_2105/commits?author=shouhi" title="Documentation">📖</a>
    <td align="center"><a href="https://twitter.com/pigmon_hayato"><img src="https://avatars.githubusercontent.com/u/74091672?v=4" width="100px;" alt=""/><br /><sub><b>大島颯人</b></sub></a><br /><a href="https://github.com/jphacks/B_2105/commits?author=GitHayato" title="Documentation">📖</a>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
