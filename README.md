# 📚 LibraryMS - Library Management System

A comprehensive, fully-functional frontend Library Management System built with HTML5, CSS3, and Vanilla JavaScript (ES6). This project simulates a real-world digital library environment, complete with user/admin authentication, a borrowing cart system, automated fine calculations, and a responsive dark-themed UI.

## ✨ Key Features

### 👤 User Features
- **Browse & Search:** Search books by Title, Author, or ISBN, and filter by categories (Fiction, Sci-Fi, History, etc.).
- **Borrowing Cart:** Add books to a cart and "borrow" them for a 14-day period.
- **Profile Dashboard:** View active loans, borrowing history, and outstanding fines.
- **Automated Fine System:** The system automatically calculates overdue fines ($0.50/day) and allows users to "pay" them.
- **3D Book Cards:** Interactive hover effects that flip books to reveal descriptions and ISBN details.

### 🛡️ Admin Features
- **Admin Dashboard:** View real-time statistics (Total Books, Total Users, Available Copies).
- **Inventory Management:** Add new books to the library catalog or delete existing ones.
- **User Management:** View all registered users and delete accounts if necessary.

### 🎨 UI/UX Design
- **Modern Dark Theme:** Sleek dark mode interface with vibrant green (`#22c55e`) accents.
- **Fully Responsive:** Adapts seamlessly to mobile, tablet, and desktop screens.
- **Toast Notifications:** Custom-built toast alerts for success/error feedback instead of annoying browser alerts.
- **Modal Navigation:** Clean, overlay-based modals for Login, Cart, Profile, and Admin panels.

## 🛠️ Tech Stack
- **HTML5:** Semantic markup and structural layout.
- **CSS3:** Flexbox, CSS Grid, 3D Transforms (`preserve-3d`), and CSS Variables.
- **JavaScript (ES6+):** Object-Oriented Programming using **ES6 Classes**, DOM manipulation, Event Delegation, and complex local state management (simulating a database using JS arrays/objects).

## 🚀 How to Run

1. Clone or download this repository.
2. Locate the `index.html` file.
3. Double-click `index.html` to open it in your browser.
*(💡 **Pro Tip:** Use the **Live Server** extension in VS Code for the best experience).*

## 🔑 Demo Accounts
To test the different roles, use these pre-configured accounts in the login modal:

**Admin Access:**
- Username: `umer`
- Password: `umer123`

**User Access:**
- Username: `Armaghan Khan`
- Password: `armaghan123`

## 📂 Project Structure
```text
LibraryMS/
├── index.html      # Main HTML structure, modals, and layout
├── styles.css      # Dark theme styling, 3D animations, and responsive grids
├── script.js       # Core logic (ES6 Class-based state management, cart, fines)
└── README.md       # Project documentation
