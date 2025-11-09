📝 Personal Blog Backend

A Node.js + Express.js based backend API for a personal blogging platform.
It provides RESTful endpoints for managing blog posts, users, and authentication.

🚀 Features

🧠 User Authentication (JWT-based login & signup)

📰 CRUD operations for blog posts

💬 Comment management (optional feature)

🌐 MongoDB integration with Mongoose

🔒 Environment variable support using .env

🧩 Scalable structure ready for deployment

🧰 Tech Stack
Technology	Purpose
Node.js	Runtime environment
Express.js	Web framework
MongoDB + Mongoose	Database and ORM
dotenv	Environment variable configuration
bcrypt	Password hashing
jsonwebtoken (JWT)	Authentication
⚙️ Setup & Installation
1️⃣ Clone the repository
git clone https://github.com/yourusername/personal-blog-backend.git
cd personal-blog-backend

2️⃣ Install dependencies
npm install

3️⃣ Setup environment variables

Create a .env file in the root directory and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

4️⃣ Seed the database (optional)

If seed.js is included, run:

node seed.js

5️⃣ Run the server

For development:

npm run dev


For production:

npm start

🧪 API Endpoints (Sample)
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user
GET	/api/posts	Fetch all posts
POST	/api/posts	Create new post
PUT	/api/posts/:id	Update post
DELETE	/api/posts/:id	Delete post

📂 Project Structure
personal-blog-backend/
│
├── server.js         
├── seed.js           
├── package.json      
├── .env            
├── .gitignore
└── /models         
└── /routes        
└── /controllers     

🧑‍💻 Scripts
Command	Description
npm start	Start production server
npm run dev	Start development server using nodemon
node seed.js	Seed database (optional)
📦 Deployment

You can deploy this backend easily on:

Render

Vercel (Serverless Functions)

Railway

AWS EC2 / DigitalOcean

Make sure to set your environment variables in the deployment dashboard.

🤝 Contributing

Fork the repository

Create your feature branch: git checkout -b feature-name

Commit your changes: git commit -m "Add feature"

Push to the branch: git push origin feature-name

Create a Pull Request

🛡️ License
