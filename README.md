# 🍕 Fast React Pizza — Online Pizza Ordering App

> A fast, no-login pizza ordering app where users can browse a menu, build a cart, and place orders with optional priority delivery — built with React, Redux Toolkit, and React Router.


## 📌 Overview

Fast React Pizza is a streamlined pizza ordering web app. No accounts, no passwords — users just enter their name, browse the menu fetched from an API, add pizzas to their cart, and place an order with an optional priority flag for faster delivery.

This project demonstrates clean Redux Toolkit state management patterns, React Router v6 data loading, and Tailwind CSS utility-first styling.

---

## ✨ Features

- 🧑 **No Account Required** — Users simply enter their name to get started
- 🍕 **Live Menu** — Pizza menu loaded from an external API
- 🛒 **Cart Management** — Add, remove, and update pizza quantities
- 📍 **GPS Location** — Detect user location for delivery address autofill
- ⚡ **Priority Orders** — Mark orders as priority for faster delivery (for a small fee)
- 🔍 **Order Lookup** — Search and track existing orders by order ID
- 📱 **Responsive Design** — Works seamlessly on mobile and desktop

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | React 18 |
| State Management | Redux Toolkit |
| Routing | React Router v6 (with loaders & actions) |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| API | [React Fast Pizza API](https://react-fast-pizza-api.onrender.com/api) |

---

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/dennis-dentrix/fast-react-pizza.git
cd fast-react-pizza

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
src/
├── features/
│   ├── cart/           # Cart slice, CartItem, CartOverview components
│   ├── menu/           # Menu loader, MenuItem components
│   ├── order/          # Order form, order confirmation, order lookup
│   └── user/           # User name slice and input
├── ui/                 # Shared UI components (Button, Header, Loader, etc.)
├── services/           # API calls (apiRestaurant.js)
├── utils/              # Helper functions (formatCurrency, etc.)
└── App.jsx             # Root with React Router configuration
```

---

## 🧠 Concepts Demonstrated

- **Redux Toolkit** — `createSlice`, `createAsyncThunk`, and the Redux store pattern
- **React Router v6 Data APIs** — `loader`, `action`, `useLoaderData`, `Form` component
- **Optimistic UI** — Cart updates feel instant without waiting for server confirmation
- **Geolocation API** — Browser-based GPS for delivery address suggestion

---

## 📄 License

MIT © [Denis Kyusya](https://github.com/dennis-dentrix)
