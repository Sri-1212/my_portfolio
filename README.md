# Personal Portfolio Website

A full-stack personal portfolio website built to showcase my projects, technical skills, achievements, leadership experience, and contact information.

The project demonstrates the integration of a modern React frontend with a Node.js/Express backend and a MySQL database, along with deployment of the complete application using Vercel and Railway.

## Live Demo

**Frontend:**
https://my-portfolio-weld-tau-cmq5sgg2rx.vercel.app

**Backend API:**
https://myportfolio-production-cb40.up.railway.app

## Project Overview

This portfolio was developed as a full-stack web application rather than a static portfolio. It includes a responsive React frontend, a RESTful Express backend, and a MySQL database for persistent data storage.

The application demonstrates:

* Frontend development using React and TypeScript
* Responsive UI design using Tailwind CSS
* REST API development using Node.js and Express.js
* MySQL database integration
* Backend input validation
* Environment-based configuration
* CORS configuration
* Production deployment
* Frontend, backend, and database integration

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* Framer Motion

### Backend

* Node.js
* Express.js
* REST API
* mysql2
* CORS

### Database

* MySQL
* MySQL Workbench for local database management

### Deployment

* Vercel — Frontend
* Railway — Backend
* Railway MySQL — Production Database

## Features

### Portfolio Sections

* Hero section with animated 3D avatar
* About section
* Technical skills organized by category
* Projects showcase
* Achievements and leadership section
* Contact section
* Responsive design for different screen sizes

### Interactive UI

* Scroll-based animations
* Character-by-character text animations
* Sticky project cards
* Magnetic hover interactions
* Animated technology stack
* Responsive navigation and layouts

### Contact System

The portfolio includes a functional contact form connected to the backend.

The flow is:

```text
User
  |
  v
React Contact Form
  |
  v
Express REST API
  |
  v
Input Validation
  |
  v
MySQL Database
  |
  v
contact_messages
```

Contact submissions are stored in the production MySQL database.

## Project Structure

```text
portfolio/
│
├── src/
│   ├── sections/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Projects/
│   │   ├── Achievements/
│   │   └── Contact/
│   │
│   ├── components/
│   │   ├── FadeIn/
│   │   ├── Magnet/
│   │   ├── AnimatedText/
│   │   └── ...
│   │
│   └── hooks/
│       └── useApi.ts
│
├── server/
│   ├── index.js
│   ├── db.js
│   ├── routes/
│   │   └── contact.js
│   ├── package.json
│   └── .env.example
│
├── package.json
├── vite.config.ts
├── .gitignore
└── README.md
```

## Database

The application uses MySQL for persistent storage.

The production database contains a `contact_messages` table used to store contact form submissions.

### Table Structure

```sql
CREATE TABLE contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## API Endpoints

| Method | Endpoint       | Description                                    |
| ------ | -------------- | ---------------------------------------------- |
| GET    | `/api/health`  | Checks whether the backend is running          |
| POST   | `/api/contact` | Validates and stores a contact form submission |

### Contact Request

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello!"
}
```

### Health Check Response

```json
{
  "status": "ok",
  "service": "portfolio-backend"
}
```

## Running the Project Locally

### Prerequisites

Make sure the following are installed:

* Node.js
* npm
* MySQL
* Git

### 1. Clone the Repository

```bash
git clone https://github.com/Sri-1212/my_portfolio.git
cd my_portfolio
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Configure the Backend

Navigate to the server directory:

```bash
cd server
npm install
```

Create a `.env` file inside the `server` directory.

Use `.env.example` as a reference:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_local_mysql_password
DB_NAME=portfolio_db
FRONTEND_URL=http://localhost:5173
```

Do not commit the `.env` file to GitHub.

### 4. Create the Database

Create the database in MySQL:

```sql
CREATE DATABASE portfolio_db;
```

Then create the contact messages table:

```sql
CREATE TABLE contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 5. Start the Backend

From the `server` directory:

```bash
npm start
```

The backend will run on:

```text
http://localhost:5000
```

### 6. Start the Frontend

Open another terminal and navigate to the project root:

```bash
cd my_portfolio
npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

## Environment Variables

### Backend

| Variable       | Description                                       |
| -------------- | ------------------------------------------------- |
| `DB_HOST`      | MySQL database host                               |
| `DB_PORT`      | MySQL database port                               |
| `DB_USER`      | MySQL username                                    |
| `DB_PASSWORD`  | MySQL password                                    |
| `DB_NAME`      | MySQL database name                               |
| `FRONTEND_URL` | Frontend origin allowed by CORS                   |
| `PORT`         | Server port; provided automatically in production |

### Frontend

The production frontend uses:

```env
VITE_API_URL=your_backend_url
```

The actual production environment variable is configured through the Vercel deployment settings.

## Deployment

### Frontend

The React frontend is deployed on Vercel.

The frontend communicates with the production Express API using the `VITE_API_URL` environment variable.

### Backend

The Express backend is deployed on Railway.

The backend:

* Uses Railway's dynamically assigned `PORT`
* Connects to the production MySQL database using environment variables
* Uses CORS to allow requests from the deployed frontend
* Keeps database credentials outside the source code

### Database

The production MySQL database is hosted on Railway and is separate from the local development database.

The production database stores contact form submissions received through the deployed application.

## Production Architecture

```text
                         User
                           |
                           v
                React + TypeScript
                       Vercel
                           |
                           | HTTPS / REST API
                           v
                  Node.js + Express
                       Railway
                           |
                           | mysql2
                           v
                    Railway MySQL
                           |
                           v
                  contact_messages
```

## Security and Configuration

The project follows environment-based configuration for sensitive information.

* Database credentials are stored in environment variables.
* Local `.env` files are excluded from version control.
* Production database credentials are managed through Railway environment variables.
* The frontend and backend use separate deployment environments.
* CORS is configured to allow requests from the deployed frontend.

## Learning Outcomes

This project provided practical experience in:

* Building a full-stack web application
* Developing REST APIs with Express.js
* Connecting Node.js applications to MySQL
* Designing and using database tables
* Handling form submissions and backend validation
* Managing environment variables
* Configuring CORS
* Deploying frontend applications to Vercel
* Deploying backend applications and databases to Railway
* Connecting independently deployed frontend, backend, and database services

## Author

**Srilakshmi**

B.Tech Computer Science Engineering
BMS Institute of Technology & Management

**GitHub:**
https://github.com/Sri-1212

**LinkedIn:**
https://www.linkedin.com/in/srilakshmi-
