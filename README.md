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

### 2. Set Up NestJs API
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