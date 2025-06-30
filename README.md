# News Aggregator

A modern news aggregation platform that fetches and displays articles from multiple sources including NewsAPI, The Guardian, and The New York Times. Built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

- 🔍 Search articles by keyword
- 🗂 Filter by category, date, and source
- 📱 Mobile-responsive design
- ⚡ Fast and efficient loading with server-side rendering
- 🎨 Clean and modern UI with dark mode support
- 📚 Save articles for later reading

## 🛠 Technologies Used

- **Next.js** - React framework for server-rendered applications
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS
- **Axios** - Promise-based HTTP client
- **React Query** - Data fetching and state management
- **Docker** - Containerization

## Screenshots

![News Aggregator](screenshots/news-aggregator.png)

## 🚀 Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn
- Docker (optional, for containerized deployment)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/news-aggregator.git
   cd news-aggregator
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add your API keys:
   ```
   NEWSAPI_KEY=your_newsapi_key
   GUARDIAN_KEY=your_guardian_key
   NYTIMES_KEY=your_nytimes_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Docker Setup

1. **Build and run with Docker Compose**
   ```bash
   docker-compose up --build
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000)

## 🏗 Project Structure

```
src/
├── app/                  # App router
├── components/           # Reusable components
│   ├── features/        # Feature-based components
│   └── ui/              # UI components
├── services/            # API services
├── providers/           # Providers
├── contexts/            # Contexts
├── hooks/               # Custom hooks
├── types/               # TypeScript type definitions
└── utils/               # Utility functions
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [NewsAPI](https://newsapi.org/)
- [The Guardian API](https://open-platform.theguardian.com/)
- [New York Times API](https://developer.nytimes.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)