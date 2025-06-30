# E-Commerce Platform

A modern, responsive e-commerce storefront demo built with React, Vite, and Node.js. Tailored for small-business sellers, it features dynamic carousels, country-based pricing, and seamless product browsing.

---

## 🛠️ Tech Stack

- **Frontend:** React 19.x, Vite
- **Styling:** CSS, Bootstrap 5, Material-UI (MUI)
- **Components:** React-Slick, Swiper.js
- **State & Data:** React Context, Axios
-
- **Version Control:** Git

---

## 🚀 Features

- **Hero Banner Slider** (React-Slick)
  - Full-width autoplay loop
  - Custom navigation arrows

- **Category Carousel** (Swiper.js)
  - Responsive horizontal slider
  - Navigation module & breakpoints (1–5 slides)

- **Product Image Gallery** (Swiper.js)
  - Modal with synced main & thumbnail carousels

- **Country Dropdown**
  - Fetches country list via REST API
  - Dynamically adjusts currency and pricing

- **Dynamic Product Modals**
  - On-click previews with full details

- **Performance Optimizations**
  - Code-splitting & lazy loading
  - 25% reduction in initial bundle size

---

## 📂 Folder Structure

```
e-commerce/
├─ public/
│  └─ index.html
├─ src/
│  ├─ assets/            # Images, PDF
│  ├─ components/        # Reusable UI components
│  │   ├─ Header/
│  │   ├─ Footer/
│  │   ├─ HomeBanner/
│  │   ├─ HomeCat/
│  │   ├─ ProductModal/
│  │   └─ CountryDropDown/
│  ├─ pages/             # Route-based pages
│  │   └─ Home/
│  ├─ App.jsx
│  └─ main.jsx
├─ .gitignore
├─ package.json
├─ vite.config.js
└─ README.md
```

---

## ⚙️ Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/e-commerce.git
   cd e-commerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment**
   - Create a `.env` file at root with API endpoints and MongoDB URI:
     ```ini
     VITE_API_BASE_URL=https://api.example.com
     MONGO_URI=mongodb://localhost:27017/ecommerce
     ```

4. **Run in Development**
   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   npm run serve
   ```

---

## 📄 Usage

- Navigate to `http://localhost:5173` to view the storefront.
- Use the country dropdown in the header to switch pricing and currency.
- Browse hero banners, categories, and click a product to open the modal gallery.

---

## 🔗 Repository

(https://github.com/yourusername/e-commerce)

---
