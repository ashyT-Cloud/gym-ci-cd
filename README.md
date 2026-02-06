# 🏋️ FitFlow Gym – End-to-End CI/CD DevOps Project

FitFlow Gym is a **full-stack web application** built to demonstrate a **complete CI/CD pipeline** using modern DevOps tools.  
The project automates build, containerization, and deployment using **Jenkins, Docker, Docker Compose, and AWS EC2**.

---

## 🚀 Live Application

- **Frontend (Gym Website)**: http://<EC2_PUBLIC_IP>
- **Backend API**: http://<EC2_PUBLIC_IP>:5000
- **Members API**: http://<EC2_PUBLIC_IP>:5000/members

> ⚠️ Replace `<EC2_PUBLIC_IP>` with your instance public IP.

---

## 🧱 Architecture Overview

User Browser
|
v
Nginx (Frontend Container)
|
v
Node.js Backend (Express)
|
v
MongoDB (Container)


---

## 🛠️ Tech Stack

### Application
- HTML, CSS (Frontend)
- Node.js + Express (Backend)
- MongoDB (Database)

### DevOps & Cloud
- **Docker** – Containerization
- **Docker Compose** – Multi-container orchestration
- **Jenkins** – CI/CD automation
- **AWS EC2 (t3.micro)** – Deployment server
- **GitHub** – Source code management

---

## ⚙️ CI/CD Pipeline (Jenkins)

Pipeline is defined using a **Jenkinsfile** and performs:

1. Clone source code from GitHub
2. Build Docker images
3. Start containers using Docker Compose
4. Deploy backend, frontend, and MongoDB automatically

### Jenkins Pipeline Stages
- Checkout SCM
- Build Docker Images
- Deploy Containers

---

## 📂 Project Structure

gym-app/
│
├── backend/
│ ├── server.js
│ ├── package.json
│ ├── Dockerfile
│
├── frontend/
│ └── index.html
│
├── docker-compose.yml
├── Jenkinsfile
└── README.md


---

## ▶️ Run Locally (Optional)

```bash
git clone https://github.com/ashyT-Cloud/gym-ci-cd.git
cd gym-ci-cd
docker-compose up -d --build

Key Learnings

Building CI/CD pipelines using Jenkins

Dockerizing full-stack applications

Multi-container orchestration with Docker Compose

Deploying applications on AWS EC2

Handling real-world DevOps issues (ports, conflicts, networking)Key Learnings



Author

Ashish Thakur
DevOps & Cloud Enthusiast
GitHub: https://github.com/ashyT-Cloud

LinkedIn: https://www.linkedin.com/in/ashish-thakur-132b00214/


If you like this project, give it a star!
