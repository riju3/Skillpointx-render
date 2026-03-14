# SkillPointX — Course Selling Platform

## 🔑 Render Environment Variables (REQUIRED)

Go to Render → course-server → Environment → Edit and add ALL of these:

| KEY               | VALUE                                      |
|-------------------|--------------------------------------------|
| MONGO_URI         | your MongoDB connection string             |
| SECRET            | skillpointx_secret_key_2024                |
| STRIPE_SECRET_KEY | your Stripe secret key from stripe.com     |
| PORT              | 3000                                       |

## 🛠️ Local Development Setup

### Backend (server)
```bash
cd server
npm install
# Create a .env file with the variables above
npm run dev
```

### Frontend - User (client-user)
```bash
cd client-user
npm install
npm run dev
```

### Frontend - Admin (client-admin)
```bash
cd client-admin
npm install
npm run dev
```

## 🌐 Render URLs
- Backend:      https://course-server-tquv.onrender.com
- Make sure your frontend is deployed and pointing to the backend URL above.

## ⚠️ Important Notes
- Never commit your .env file to GitHub (it's in .gitignore already)
- Always add environment variables directly in Render dashboard
- After changing env variables on Render, trigger a manual redeploy
