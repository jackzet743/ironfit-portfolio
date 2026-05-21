# IronFit - Local Installation Guide

## Overview

This guide explains how to install, configure, and run the **IronFit** project locally.

The project includes:

* **Frontend:** Next.js application
* **Backend:** Node.js API
* **Database:** MySQL with Docker
* **Adminer:** Database management interface

---

# 1. Clone the Project

Create a local folder for the project and clone the repository branch.

```bash
git clone -b backend-node --single-branch https://github.com/Rochadev14/PFG.git
```

---

# 2. Install Dependencies

The frontend and backend have separate dependencies.

## 2.1 Install Frontend Dependencies

Navigate to the frontend folder:

```bash
cd Ecommerce/frontend
```

Install dependencies:

```bash
npm install
```

---

## 2.2 Install Backend Dependencies

Navigate to the backend folder:

```bash
cd ../backend
```

Install dependencies:

```bash
npm install
```

---

# 3. Configure Environment Variables

Environment variables are required for:

* Database connection
* JWT authentication
* Stripe payments
* Email configuration

---

## 3.1 Backend Environment Configuration

Navigate to the backend configuration folder:

```bash
cd src/config
```

Create a `.env` file and add the following configuration:

```env
# JWT Configuration
JWT_SECRET=super_secret_key_change_this
JWT_EXPIRES_IN=1h

# Email Configuration
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_app_password

# Database Configuration
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=ironuser
DB_PASSWORD=ironpass
DB_NAME=ironfit

# Stripe Secret Key
# Replace with your own Stripe test secret key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

---

## 3.2 Frontend Environment Configuration

Navigate to the frontend folder:

```bash
cd ../../../frontend
```

Create a `.env` file and add:

```env
# Stripe Public Key
NEXT_PUBLIC_STRIPE_PK=your_stripe_public_key
```

---

# 4. Start the Database with Docker

The project uses Docker to run MySQL and Adminer.

---

## 4.1 Navigate to the SQL Folder

```bash
cd ../SQL
```

---

## 4.2 Build and Start Containers

Run:

```bash
docker compose up -d --build
```

This command will:

* Build the containers
* Start the MySQL database
* Start Adminer

---

## 4.3 Open Adminer

Open the following URL in your browser:

```text
http://localhost:8090
```

---

## 4.4 Login to Adminer

Use the following credentials:

| Field    | Value      |
| -------- | ---------- |
| System   | MySQL      |
| Server   | ironfit_db |
| Username | ironuser   |
| Password | ironpass   |
| Database | ironfit    |

---

## 4.5 Import Demo Data

Execute the `InsertScript.sql` file inside Adminer to populate the database with demo data.

---

# 5. Run the Application

## 5.1 Start the Database Containers

If the containers are not running:

```bash
cd Ecommerce/SQL
```

```bash
docker compose up -d
```

---

## 5.2 Start the Backend Server

Navigate to the backend source folder:

```bash
cd ../backend/src
```

Start the backend:

```bash
npm run dev
```

---

## 5.3 Start the Frontend Application

Open a new terminal and navigate to the frontend folder:

```bash
cd Ecommerce/frontend
```

Run the frontend server:

```bash
npm run dev
```

---

# 6. Access the Application

Once all services are running, open:

```text
http://localhost:3000
```

You should now see the IronFit homepage.

---

# 7. Project Structure

```text
Ecommerce/
│
├── frontend/        # Next.js frontend
├── backend/         # Node.js backend
├── SQL/             # Docker configuration and SQL scripts
│
└── README.md
```

---

# 8. Required Software

Make sure the following software is installed before starting:

* Node.js
* npm
* Docker Desktop
* Git

---

# 9. Troubleshooting

## Docker Containers Not Starting

Check running containers:

```bash
docker ps
```

Restart containers:

```bash
docker compose down
docker compose up -d --build
```

---

## Port Already in Use

Ensure the following ports are available:

| Service  | Port             |
| -------- | ---------------- |
| Frontend | 3000             |
| Backend  | Config dependent |
| MySQL    | 3306             |
| Adminer  | 8090             |

---

## Database Connection Issues

Verify that:

* Docker containers are running
* `.env` variables are correct
* MySQL credentials match the Docker configuration

---

# 10. Notes

* Use Stripe test keys during development.
* Never expose production secret keys publicly.
* Replace the default JWT secret before deploying to production.
