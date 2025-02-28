# Project Management MERN Web App

### About the Project

This is a full-stack project management web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). The app allows users to register, login, and manage projects. It includes authentication using JWT tokens for both users and admins.


## Screenshoot


<img width="667" alt="login " src="https://github.com/Saransh1607/Project-Management-System/assets/111859817/bbda4f54-d785-40fb-b783-d3b938602a0c">



<img width="946" alt="dashboard" src="https://github.com/Saransh1607/Project-Management-System/assets/111859817/3e614d96-5eab-4759-b70f-a4ef3234ed8f">

## Usage

### To Install and Test



```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install

```

```bash
# Start the server
cd ../server
nodemon app.js

# Start the client
cd ../client
npm run dev

```

### Install dependencies for the basic setup: </h4>

### Dev Dependencies

```bash
npm i -D nodemon
```

### Dependencies

```bash
npm i config
```

<h4> Integrate a new script </h4>

- Add "type" : "module"
- Change "script" :{ "dev": "nodemon app.js"}

```bash
{
  "name": "Book-Store-API",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "type" : "module",
  "scripts": {
    "dev": "nodemon app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^2.0.15"
  },
  "dependencies": {
    "express": "^4.17.3"
  }
  }
#   P r o j e c t - M a n a g e m e n t - S y s t e m 
 
 
