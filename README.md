# SaaS Dashboard Boilerplate

A premium, modern SaaS dashboard frontend boilerplate built with Next.js (App Router), Tailwind CSS, and Recharts. Designed for developers who want a beautiful, ready-to-use UI foundation for their next SaaS project.

[日本語版は以下にあります](#japanese-日本語)

## 🚀 Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```

3. **Open the app**
   Navigate to [http://localhost:3001](http://localhost:3001) in your browser.

## 📦 Key Components Included

- **`Sidebar`**: Collapsible, responsive side navigation with a modern design.
- **`Header`**: Top bar with title, date filters, and user profile widget.
- **`KpiCard`**: Versatile KPI cards supporting mini area charts, bar charts, and gauge styles.
- **`SalesOverview`**: Main data visualization area chart with custom gradients and tooltips.
- **`ProjectProgress`**: Circular progress indicator widget.
- **`RecentActivity`**: Timeline list widget for user activities.

## ⚠️ Disclaimer & Scope

- **Frontend Only**: This template is strictly a UI boilerplate. It **does not** include backend integration, database connections, authentication (e.g., NextAuth), or API routes.
- **Dummy Data**: All charts, lists, and metrics are powered by static data located in `src/lib/dummy-data.ts`. You are expected to replace this with your real API data fetching logic.
- **As-Is Provision**: This template is provided "As-Is". It is intended to save you hours of UI implementation time, but we do not provide custom support for integrating it with your specific backend or database architecture.

---

<a id="japanese-日本語"></a>

# SaaS Dashboard Boilerplate (日本語)

Next.js (App Router)、Tailwind CSS、Rechartsを使用して構築された、プレミアムでモダンなSaaSダッシュボードのフロントエンド・ボイラープレートです。美しいUI基盤をすぐに利用したい開発者向けに設計されています。

## 🚀 クイックスタート

1. **依存関係のインストール**
   ```bash
   npm install
   ```

2. **開発サーバーの起動**
   ```bash
   npm run dev
   ```

3. **アプリを開く**
   ブラウザで [http://localhost:3001](http://localhost:3001) にアクセスしてください。

## 📦 含まれる主要コンポーネント

- **`Sidebar`**: モダンなデザインのレスポンシブなサイドナビゲーション。
- **`Header`**: タイトル、期間フィルター、ユーザープロファイルを含むトップバー。
- **`KpiCard`**: ミニアリアチャート、バーチャート、ゲージスタイルをサポートする汎用KPIカード。
- **`SalesOverview`**: カスタムグラデーションとツールチップを備えたメインのエリアチャート。
- **`ProjectProgress`**: 円形の進捗インジケーターウィジェット。
- **`RecentActivity`**: ユーザーアクティビティ用のタイムラインリストウィジェット。

## ⚠️ 免責事項および仕様範囲

- **フロントエンドのみ**: 本テンプレートは純粋なUIボイラープレートです。バックエンド統合、データベース接続、認証機能（NextAuthなど）、APIルートは**含まれていません**。
- **ダミーデータ**: すべてのグラフ、リスト、および指標は `src/lib/dummy-data.ts` に定義された静的データを使用しています。これらをご自身のAPIデータ取得ロジックに置き換えて使用してください。
- **現状有姿での提供**: 本テンプレートは現状有姿（As-Is）で提供されるUIアセットです。UI実装の時間を大幅に削減することを目的としていますが、お客様固有のバックエンドやデータベース構成への統合に関する個別サポートは行っておりません。
