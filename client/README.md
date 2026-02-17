# 🎨 GenAI Gallery

**Live Demo:** https://genaigallery.netlify.app/

GenAI Gallery is a full‑stack AI image generation web application built
using the MERN stack. The platform allows users to generate high‑quality
AI images from text prompts, explore generated images, and download them
instantly.

------------------------------------------------------------------------

## 🚀 Features

-   🧠 AI Image Generation using text prompts\
-   ⚡ Fast and responsive UI\
-   🖼️ Explore AI‑generated images gallery\
-   ⬇️ Download generated images\
-   ☁️ Cloudinary image storage\
-   🔐 Secure backend API\
-   📱 Fully responsive design

------------------------------------------------------------------------

## 🛠️ Tech Stack

**Frontend** - React.js - Tailwind CSS - Axios

**Backend** - Node.js - Express.js - MongoDB

**APIs & Services** - ClipDrop AI API (Image Generation) - Cloudinary
(Image Storage)

------------------------------------------------------------------------

## 📂 Project Structure

    GenAI-Gallery
    │
    ├── client        # React frontend
    ├── server        # Node/Express backend
    ├── models        # MongoDB models
    ├── routes        # API routes
    └── controllers   # Business logic

------------------------------------------------------------------------

## ⚙️ Installation & Setup

### 1. Clone the repository

``` bash
git clone https://github.com/RameshBandari26/GenAI-Gallery.git
cd GenAI-Gallery
```

### 2. Install dependencies

**Frontend**

``` bash
cd client
npm install
```

**Backend**

``` bash
cd server
npm install
```

### 3. Setup Environment Variables

Create `.env` file inside **server** folder and add:

    MONGO_URI=your_mongodb_connection
    CLIPDROP_API_KEY=your_clipdrop_key
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret

### 4. Run the project

**Start backend**

``` bash
cd server
npm start
```

**Start frontend**

``` bash
cd client
npm run dev
```

------------------------------------------------------------------------

## 🌐 Deployment

The project is deployed on Netlify (Frontend) and can be deployed using:

-   Netlify (Frontend)
-   Render / Railway / VPS (Backend)
-   MongoDB Atlas (Database)

------------------------------------------------------------------------

## 👨‍💻 Author

**Ramesh Bandari**\
Full Stack Developer

-   GitHub: https://github.com/RameshBandari26
-   Portfolio: https://rameshbandari.netlify.app/

------------------------------------------------------------------------

## ⭐ If you like this project

Give it a **star ⭐** on GitHub and share!
