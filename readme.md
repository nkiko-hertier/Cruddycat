
# 🚀 CruddyCat

*CruddyCat* is a lightweight and powerful Express + Mongoose API generator that dynamically creates full CRUD routes based on your Mongoose schema. Designed for rapid development, it lets you build scalable RESTful APIs in seconds with zero boilerplate—just plug in your models, connect to MongoDB, and go live. Perfect for prototyping, admin panels, or production-ready backends.

## 📦 Installation

```bash
npm install cruddy-cat
```

---

## 🔧 Features

- 🧠 Dynamic routing via `/:model`
- 🔁 Full CRUD support (Create, Read, ReadOne, Update, Delete)
- 🚀 One-line MongoDB connection
- 🧱 Schema-first API structure
- ⚡ Lightweight and Express-compatible

---

## 🧪 Quick Example

```js
import express from "express";
import { GenerateRouter, Connect } from "moongoes-fast-api";
import * as schema from "./schema.js"; // Your mongoose models

// 1. Connect to MongoDB
Connect("your-mongodb-uri");

// 2. Initialize Express
const app = express();
app.use(express.json());

// 3. Plug in the auto-generated router
const routes = GenerateRouter(schema);
app.use("/api", routes.router());

// 4. Run your app
app.listen(3000, () => {
  console.log("🚀 Running your app at port 3000");
});
```

---

## 🧱 Route Structure

Assuming a `User` model exists in your schema:

| Method | Route              | Description       |
|--------|-------------------|-------------------|
| POST   | `/api/User`       | Create a new user |
| GET    | `/api/User`       | Get all users     |
| GET    | `/api/User/:id`   | Get one user      |
| PUT    | `/api/User/:id`   | Update user       |
| DELETE | `/api/User/:id`   | Delete user       |

All routes use `req.params.model` to dynamically handle requests based on your schema keys.

---

## 📁 Project Structure Example

```
📦 your-project/
├── schema.js          # export all your mongoose models
├── server.js          # your entry file
└── ...
```

```js
// schema.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({ name: String });
export const User = mongoose.model("User", UserSchema);

const CourseSchema = new mongoose.Schema({ title: String });
export const Course = mongoose.model("Course", CourseSchema);
```

---

## ❗Tips

- Make sure your `schema.js` exports all models using the same naming key as used in routes.
- Use middleware, validation, and authorization by wrapping route handlers (coming soon!).

---

## 📌 Coming Soon

- ✅ Custom route guards / middleware
- ✅ Swagger/OpenAPI generator
- ✅ Query filtering, sorting, and pagination
- ✅ Role-based access control (RBAC)

---

## 🧑‍💻 Author

**Nkiko Hertier**  
Web/Mobile Dev • Building tools with love, magic & code.  
📺 [YouTube: Pocda Dev Stories](https://www.youtube.com/@CodeWithSnaow)  
🧑‍💼 [LinkedIn](https://linkedin.com/nkiko-hertier) | 📧 [Email](mailto:afrigames123@gmail.com) | [GitHub](https://github.com/nkiko-hertier) | [Website](https://nkiko-hertier.vercel.app/)

---

## 📜 License

MIT License – Use it. Hack it. Improve it.
```
