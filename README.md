# MessengerApp Project Setup Guide

This guide will walk you through the necessary steps to configure and run your project, which includes a Docker container for the database, a NestJS API server, and an Angular frontend application.

## Prerequisites

Make sure you have the following installed on your system:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/en/download/)
- [Angular CLI](https://angular.io/cli)

## Setup Steps

### 1. Clone the Project from GitHub

Open a terminal and clone your project:

```bash
git clone https://github.com/username/your-project.git
cd your-project
```

### 2. Set Up Docker Compose for the Database
The project uses Docker to create a container for the database. To set up the database, follow these steps:

```bash
docker-compose up -d
```

### 3. Set Up NestJs API
Launch the API server using the following command:
```bash
cd api
npm run start
```

### 3. Set Up NestJs API
Start the Angular development server with the following command:

```bash
cd frontend/frontend
ng serve -o
```

## Messenger app
![image](https://github.com/user-attachments/assets/547c99e5-e9a3-4765-8411-b7ed44fc0654)
![image](https://github.com/user-attachments/assets/f167792b-47f1-4fe0-b540-1942fccc4c1f)
![image](https://github.com/user-attachments/assets/57ad282b-4bfc-437c-9c14-df5684c92d9c)
![image](https://github.com/user-attachments/assets/fa1784c9-907c-4a3d-bdf0-1aea9cffebc0)
![image](https://github.com/user-attachments/assets/cdbfd71f-ea5e-4d2f-b8ad-12d1fe9f3d2a)
![image](https://github.com/user-attachments/assets/95ae3cbc-3623-41de-b588-931bdaa0eafd)
