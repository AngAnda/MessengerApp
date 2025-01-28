# MessengerApp Project 

This guide will walk you through the necessary steps to configure and run your project, which includes Docker Compose to create containers for MySQL, NestJS, and Nginx, as well as Swagger for API documentation. The setup also includes end-to-end (E2E), integration, and unit tests.

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
The project uses Docker to create a container for the database, api and gateway. To set up these containers follow the next step.

```bash
docker-compose up -d
```

### 3. Set Up Angular client
Start the Angular development server with the following command:

```bash
cd frontend/frontend
ng serve -o
```

## MessengerApi explained
![image](https://github.com/user-attachments/assets/188bbe5a-81a3-42b6-a22c-3ae8d9bbffff)
![image](https://github.com/user-attachments/assets/acb4ddf6-9809-4aa4-a290-acb224db6ae6)
![image](https://github.com/user-attachments/assets/1ae0481d-c804-4d1c-af11-3e82e5f50ce6)


## Messenger app tech stack explained
![Diagramă fără titlu drawio](https://github.com/user-attachments/assets/424a686e-b166-4389-b0c9-c8c5b0dc0914)

## Database Schema
The database schema for the application is defined as follows:

Users Table: Stores information about the users (username, email, password, etc.)
Conversations Table: Stores the conversation metadata (title.)
Tag: Stores the name of each tag
UserConversation: stores the association of conversation's and student id's
Messages Table: Contains the messages exchanged between users (message content, sender_id, receiver_id, timestamp)
Each table is linked through foreign keys to establish relationships between the different entities, ensuring data integrity
![Diagramă fără titlu drawio (1)](https://github.com/user-attachments/assets/03600a2e-2025-45bf-b8ea-98d01546a65e)

.
## Messenger app presentation
![image](https://github.com/user-attachments/assets/81e6709a-ccdf-4c04-8b72-d6827446ea7c)
![image](https://github.com/user-attachments/assets/ae26109b-8015-4cd2-8faa-af49504d96d1)

![image](https://github.com/user-attachments/assets/f321d24f-e68e-4737-9d4e-9b0d31b4f8a8)

![image](https://github.com/user-attachments/assets/034969b1-d36b-44cf-a79f-3da64fedf320)
![image](https://github.com/user-attachments/assets/135ccd4d-5fbb-4e74-9b59-8bdaa8e6741a)
![image](https://github.com/user-attachments/assets/af658fd7-ebb3-4f21-ad24-24c958ed6412)
![image](https://github.com/user-attachments/assets/674ec9af-2aee-42e3-9b40-fa31d01171f9)

