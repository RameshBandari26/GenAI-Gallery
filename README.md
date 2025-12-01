# GenAI Gallery 🎨

[![React](https://img.shields.io/badge/React-18-blue?logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18-green?logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-blue?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![ClipDrop](https://img.shields.io/badge/ClipDrop-API-orange)](https://clipdrop.co/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-Storage-lightblue?logo=cloudinary&logoColor=white)](https://cloudinary.com/)

A **MERN-stack AI-powered image generation platform** where users can **create, explore, and share AI-generated images**.  
Built with **React (Vite)** for the frontend, **Node.js/Express** for the backend, **MongoDB** for the database,  
and **ClipDrop API** + **Cloudinary** for AI image generation & storage.  

GenAIGallery is a full-stack MERN application that allows users to generate, explore, and Download AI-generated images. The platform integrates the ClipDrop API for real-time AI image generation and uses Cloudinary for efficient, high-quality image storage and delivery. The frontend is built using React (Vite) and TailwindCSS, offering a responsive and visually appealing image gallery with features such as post creation, user profiles, and interactive notifications. The backend is designed using Node.js and Express, with secure environment configuration, modular routing, and RESTful APIs for scalable and maintainable architecture. The project is deployed with Netlify (frontend) and Render (backend) to ensure smooth performance in production.

---

## 🚀 Live Demo

🔗 **[View GenAI Gallery](https://genaigallery.netlify.app/)** – Deployed frontend on **Netlify**, backend on **Render**.  

---


## ✨ Features

- 🖼 Generate AI images from custom prompts using **ClipDrop API**  
- ☁ Store images in **Cloudinary** for fast access  
- 📰 Create and save posts with **name, prompt, and image**  
- 📷 Explore posts in a responsive gallery layout  
- 🔔 Beautiful **toast notifications** for success/error messages  
- 👤 User avatars generated from name initials  
- 📱 Fully responsive design with **TailwindCSS**  

---

## 📂 Project Structure

```
GenAI-Gallery
│
├── client/                  # React frontend (Vite + Tailwind)
│   ├── src/
│   │   ├── components/      # NavBar, SearchBar, ImageCard.
│   │   ├── pages/           # HomePage, CreatePost, NotFound
│   │   ├── App.jsx
│   │   └── index.css
│   └── vite.config.js
│
├── server/                  # Node.js + Express backend
│   ├── routes/              # API routes
│   ├── controllers/         # Controller logic
│   ├── models/              # Mongoose schemas
│   ├── index.js             # Entry point
│   └── .env                 # Environment variables
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/RameshBandari26/GenAI-Gallery.git
cd GenAI-Gallery
```

2. **Install server dependencies**
```bash
cd server
npm install
```

3. **Install client dependencies**
```bash
cd ../client
npm install
```

---

## 🚀 Usage

### Start the backend
```bash
cd server
npm run dev
```

### Start the frontend
```bash
cd client
npm run dev
```

➡ Open your browser at:  
`http://localhost:5173` (default Vite port)

---

## 🎨 How to Use

### Generate AI Images
1. Go to the **Create Post** page  
2. Enter your **name** and **prompt**  
3. Click **Generate Image**  
4. Get instant results with a success/error **toast notification**  

### Create a Post
1. After generating an image, click **Create Post**  
2. The post will be **saved & displayed in the gallery**  

---

## 🔑 Environment Variables

Create a `.env` file inside the **server/** folder with the following structure:

```env
# MongoDB
MONGODB_URL="your-mongodb-connection-url"

# ClipDrop API
CLIPDROP_API_KEY="your-clipdrop-api-key"

# Cloudinary
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-cloudinary-api-key"
CLOUDINARY_API_SECRET="your-cloudinary-api-secret"

# Server
PORT=5000
```

---

## 🛠️ Technologies Used

### Frontend
- React (Vite) ⚡
- TailwindCSS 🎨
- React Router DOM 🛣
- React Toastify 🔔
- Material-UI (Icons) 🎭

### Backend
- Node.js 🚀
- Express 🖧
- MongoDB + Mongoose 🍃

### AI & Storage
- ClipDrop API 🤖
- Cloudinary ☁

### Tools
- Git & GitHub 🐙

---

## 📜 License

This project is licensed under the **MIT License**.  

---

✨ Enjoy generating amazing AI-powered images with **GenAI Gallery** 🚀
