📝 MERN Blog App

A full-stack blog application built with the MERN stack (MongoDB, Express.js, React, Node.js). Users can:

✍️ Add a new blog post

📚 View all blog posts

📁 Project Structure

blog-app/
├── client/          # React Frontend
├── server/          # Node.js + Express Backend
└── README.md

⚙️ Technologies Used

Frontend: React, Axios, React Router

Backend: Node.js, Express.js, Mongoose

Database: MongoDB Atlas

Styling: CSS

🚀 How to Run Locally

1️⃣ Clone the Repository

git clone https://github.com/your-username/blog-app.git
cd blog-app

2️⃣ Setup the Backend (server)

cd server
npm install

Create a .env file in server/ with:

MONGODB_URL=your-mongodb-connection-url

Start the backend server:

node app.js

3️⃣ Setup the Frontend (client)

cd ../client
npm install

Create a .env file in client/ with:

VITE_BASE_URL=http://localhost:3020

Start the React frontend:

npm run dev

🌐 Routes

Backend API

POST /addBlog — Add a new blog post

GET / — Get all blog posts


🧑‍💻 Author

Made with ❤️ by Adwaith

📝 License

This project is licensed under the MIT License.
