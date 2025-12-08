# 🏋️‍♀️ Aethel Fitness Landing Page

## 🌟 Project Overview

Welcome to the **Aethel Fitness** repository. This project is a modern, high-end fitness boutique landing page built purely as a **showcase of professional frontend development practices and cutting-edge React technologies.**

This application is currently a **Mock Landing Page**, meaning it uses simulated data (`mock data`) and is designed to demonstrate competence in architecture, state management, complex animations, and UI/UX implementation, rather than serving as a live commercial website.

The primary focus is to deliver a smooth, performant user experience by leveraging robust tooling and a structured architecture.

## 🎨 Design Inspiration & Credits

The visual design and layout of this project are heavily inspired by the exceptional work of **Arminur Rahman**'s "Fitness Landing Page" shot on Dribbble.

We extend full credit for the design inspiration to the original creator:

- **Designer:** [Arminur Rahman](https://dribbble.com/shots/24858373-Fitness-Landing-Page)
- **Dribbble Link:** [https://dribbble.com/shots/24858373-Fitness-Landing-Page](https://dribbble.com/shots/24858373-Fitness-Landing-Page)

## 🚀 Tech Stack

This project is built using a modern, industry-standard stack optimized for speed, performance, and developer experience:

- **Core:** **React** (with the latest Hooks) & **TypeScript**
- **Styling:** **Tailwind CSS** (v4.1) for utility-first styling.
- **Animations:** **GSAP** (GreenSock Animation Platform) for high-performance and complex scroll-triggered effects.
- **Data Fetching:** **TanStack Query** (React Query) for robust asynchronous state management and caching (mocked API calls).
- **Forms:** **React Hook Form** combined with **Zod** for type-safe form validation.
- **State Management:** **Redux Toolkit** (for global state such as themes or authenticated user status).

## 🏗️ Architecture

The application utilizes a **Feature-Sliced Design (Pods/Features)** architecture, ensuring maximum scalability and separation of concerns. This structure makes the codebase easy to navigate, test, and expand:

### **Folder Structure Highlight**

```
src/
├── config/
│   ├── db/          # Database configuration (future integration)
│   └── store/       # Redux Toolkit setup and slices
│       ├── slices/
│       └── store.ts
├── pods/            # Logic and UI specific to a major feature
│   ├── auth/        # Authentication pages (Login, Register)
│   └── landing/     # The entire Landing Page module
│       ├── components/  # Components specific to the landing page (Hero, Pricing, etc.)
│       └── Landing.tsx  # Landing page layout entry point
├── shared/          # Reusable components and logic
│   ├── components/  # Highly reusable UI elements (Button, Icon, Modal)
│   ├── helpers/     # Utility functions (date formatting, calculation utils)
│   ├── context/     # React Context providers
│   └── hooks/       # Custom Hooks (useGsapAnimation, useFetchData)
├── main.tsx         # Application entry point
├── index.css
└── routes.tsx       # React Router DOM configuration
```

## 🛠️ Getting Started (Chore Completed)

This repository has been initialized with the core dependencies and architectural structure.

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/JunLovin/aethel-fitness
    cd aethel-fitness
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

## 📜 License

This project is licensed under the **MIT License**.

See the [LICENSE](LICENSE) file for details.
