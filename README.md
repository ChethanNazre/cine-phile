# 🎬 Cine-Phile

**Cine-Phile** is a futuristic, high-performance full-stack **MERN (MongoDB, Express.js, React, Node.js)** movie web application that brings the cinematic universe to your fingertips. Explore rich movie metadata, search intuitively, rate like a critic, and build your ultimate digital watchlist.

<p><strong>GitHub Repo:</strong> <a href="https://github.com/ChethanNazre/cine-phile" target="_blank">https://github.com/ChethanNazre/cine-phile</a></p>


<p><em>“Lights, camera, action!”</em></p>

</div>

<hr />

## 🚀 Key Features

<ul>
  <li>🎥 Browse a vast, dynamic movie collection powered by movie APIs</li>
  <li>🔍 Fuzzy search by title, genre, language, or rating</li>
  <li>⭐ Real-time rating, reviews, and interactive movie cards</li>
  <li>❤️ Persistent personalized watchlist per user</li>
  <li>🔐 JWT-secured authentication and protected routes</li>
  <li>🛠️ Admin Dashboard to manage users, movies, and reviews</li>
  <li>📡 Real-time states: loaders, skeleton UIs, error boundaries</li>
  <li>🚀 Optimized performance with lazy loading and code splitting</li>
  <li>🧠 Scalable, modular, developer-friendly architecture</li>
</ul>

<p>These features combine to deliver a fast, immersive, and modern cinematic web experience across devices.</p>

<hr />

## 🛠️ Tech Stack

<table>
  <tr><th>Layer</th><th>Technology</th></tr>
  <tr><td>Frontend</td><td>React.js, Tailwind CSS, Axios</td></tr>
  <tr><td>Backend</td><td>Node.js, Express.js</td></tr>
  <tr><td>Database</td><td>MongoDB Atlas</td></tr>
  <tr><td>Authentication</td><td>JWT, Bcrypt</td></tr>
  <tr><td>Utilities</td><td>React Router, Context API, Toastify</td></tr>
  <tr><td>Deployment</td><td>Vercel (Client), Render (API)</td></tr>
</table>

<p>The chosen stack ensures performance, scalability, and maintainability for both developers and users.</p>

<hr />

## 🧰 Getting Started

<p>Get the application running locally with the following steps:</p>

### 🔃 Clone the Repository

```bash
git clone https://github.com/ChethanNazre/cine-phile.git
cd cine-phile
```

<hr />

### ⚙️ Backend Setup

```bash
cd server
npm install
touch .env
# Add MongoDB URI and JWT secret in .env
npm run dev
```

<p>This launches the Express server and connects it to MongoDB.</p>

#### Sample `.env` file for backend

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
```

<hr />

### 🎨 Frontend Setup

```bash
cd client
npm install
npm start
```

<p>Run the React development server and open the app in your browser.</p>

<blockquote>The app should now be live at <code>http://localhost:3000</code><br />
The backend runs at <code>http://localhost:5000</code></blockquote>

<hr />

## 🧪 Folder Structure

<pre><code>cine-phile/
├── client/           # React frontend
│   ├── src/
│   └── public/
├── server/           # Express backend
│   ├── routes/
│   ├── models/
│   └── controllers/
├── README.md
└── .gitignore
</code></pre>

<p>This modular layout separates concerns cleanly and supports scalability and maintenance.</p>

<hr />


## 📸 Demo

Here are some screenshots showcasing the Cine-Phile application:

### Home Page
<p align="center">
  <img src="./screenshots/Screenshot 2025-06-11 155533.png" alt="Home Page" width="800" />
</p>

### Movies Section
<p align="center">
  <img src="./screenshots/Screenshot 2025-06-11 155548.png" alt="Movies Section" width="800" />
</p>

### Movie Details Page
<p align="center">
  <img src="./screenshots/Screenshot 2025-06-11 155621.png" alt="Movie Details Page" width="800" />
</p>

<hr />

## 🤝 Contributing

<p>We welcome community contributions to improve Cine-Phile in every way possible—from UI/UX improvements and performance tweaks to feature additions and documen

<p>We welcome community contributions!</p>
<ol>
  <li>🍴 Fork the repository</li>
  <li>🛠️ Create your feature branch: <code>git checkout -b feature/YourFeature</code></li>
  <li>✅ Commit your changes: <code>git commit -m 'Add amazing feature'</code></li>
  <li>📤 Push the branch: <code>git push origin feature/YourFeature</code></li>
  <li>🔁 Open a Pull Request</li>
</ol>

<p>Feel free to submit improvements in UI, bug fixes, documentation, or performance enhancements.</p>

<hr />

## 📄 License

<p>This project is licensed under the <strong>MIT License</strong>.</p>
<p>You are free to use, modify, and distribute this project with appropriate attribution.</p>
<p>See the <a href="https://github.com/ChethanNazre/cine-phile/blob/main/LICENSE" target="_blank">LICENSE</a> file for more details.</p>

<hr />

## 💬 Connect With Me

<ul>
  <li>🐙 GitHub: <a href="https://github.com/ChethanNazre" target="_blank">@ChethanNazre</a></li>
  <li>💼 LinkedIn: <a href="https://linkedin.com/in/chethan-nazre-s" target="_blank">Chethan Nazre S.</a></li>

</ul>

<p>Want to collaborate, hire, or geek out over movies and tech? Reach out! 🎬⚙️</p>

<hr />

<blockquote><em>Built with ⚡ and 🎬 by Chethan Nazre S.</em></blockquote>
