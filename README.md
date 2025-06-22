# 🧾 cash-reg-fe

A minimalist React frontend for a basket-based pricing app.  
Built with plain React and CSS (no Tailwind), the app allows you to:

- Create carts
- Add items to carts
- View all carts with totals
- View individual cart details

## 🚀 Prerequisites

- Node.js (v16 or later recommended)
- npm or yarn
- Backend API (`cash-reg`) running at `http://localhost:3000`

Make sure your backend is up and accessible via `/api`.

---

## 🛠 Installation

```bash
git clone https://github.com/your-username/cash-reg-fe.git
cd cash-reg-fe
npm install
```

🧪 Running Locally

```bash
npm start
This will start the development server at http://localhost:3001.
```

📁 Project Structure
```bash
src/
├── components/
│   └── Layout.js          # Shared layout with breadcrumbs
├── pages/
│   ├── IndexPage.js       # Shows all carts, with create cart button
│   ├── CartPage.js        # Shows cart items and total
│   └── AddItemPage.js     # Add product to cart
├── services/
│   └── api.js             # Axios client (optional abstraction)
├── App.js                 # Main route definitions
└── index.js               # Entry point
```

🧩 Features
Responsive layout
Dark gray background, white central container
Navigation via React Router
API error handling
Basic breadcrumbs and home navigation
Clean table layout with scrollable cart list



🧼 Linting
```bash
npm run lint
Make sure ESLint is configured for React.
```

🧳 Deployment
Deployed to Vercel
https://mybasketapp.vercel.app


📄 Nice to Add
Connect to backend on production
Update individual cart page with more details (product name, qty)
More Cart management capability
Markdown with clickable links
Add proper transitions per page (ie. loading spinners)
Add auth login page to only see individual carts
Add testings