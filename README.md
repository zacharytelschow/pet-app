# 🐾 Pet App

A minimalist, full-stack pet management application built with **Angular**, **.NET 8**, and **PostgreSQL**. This project follows a clean, simple UI design using **Bootstrap** with a blue/gray theme. This project is meant to showcase containerization of a typical 3 tier application and is comprised of containers for each tier, one each for the database, api, and ui. 

## 🚀 Features
- 📝 **List Pets** – View all available pets with details.
- 🔍 **View Pet Details** – Click on a pet to see more details.
- ✏️ **Edit Pets** – Modify existing pet information.
- ➕ **Add Pets** – Add new pets to the system.
- ❌ **Delete Pets** – Remove a pet from the database.
- 🔗 **RESTful API** – The backend serves API endpoints for managing pet data.
- 🐳 **Dockerized** – Easily deployable with `docker-compose`.

---

## 🏗️ Tech Stack
- **Frontend:** Angular, Bootstrap, TypeScript
- **Backend:** .NET 8 Minimal API, Entity Framework Core, PostgreSQL
- **Database:** PostgreSQL
- **Deployment:** Docker, Nginx

---

## 🛠️ Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/pet-app.git
cd pet-app
```

### **2️⃣ Environment Setup**
Ensure you have **Docker** installed and running.

### **3️⃣ Start the Application**
Run the following command from the root directory:
```sh
docker-compose up --build
```
This will:
- Set up the PostgreSQL database.
- Build and start the .NET API.
- Build and serve the Angular UI with Nginx.

---

## 🔗 API Endpoints
| Method | Endpoint       | Description |
|--------|--------------|-------------|
| `GET`  | `/pet`       | Fetch all pets |
| `GET`  | `/pet/{id}`  | Get details for a pet |
| `POST` | `/pet`       | Add a new pet |
| `PUT`  | `/pet/{id}`  | Update a pet's details |
| `DELETE` | `/pet/{id}` | Remove a pet |

---

## 🖼️ UI Design
The app follows a **minimalist design** using Bootstrap, focusing on usability and clean layouts.

---

## ⚙️ Development

### **Run the UI Locally**
```sh
cd ui
npm install
npm start
```
The UI will be available at **`http://localhost:4200`**.

### **Run the API Locally**
```sh
cd api
dotnet run
```
The API will be available at **`http://localhost:5001`**.

---

## 🤝 Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Added a new feature"`).
4. Push to your branch (`git push origin feature-branch`).
5. Open a Pull Request.

---

## 📜 License
This project is **open-source** and available under the [MIT License](LICENSE).

---
