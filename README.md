# Tokopedia Play Clone (Frontend)

This is a project of Fullstack Track in Generasi Gigih 3.0. A frontend project initialized using Create React App and ChakraUI as its design framework.

Link to the backend repository: [tokopediaplay-be-clone](https://github.com/Acigam/tokopediaplay-be-clone)

## **Table of Contents**

- [Routes](#routes)
- [How to run in local](#how-to-run-in-local)
- [Bonus Features](#bonus-features-implemented)

## **Routes**

| Route                 | Description                                      |
| --------------------- | ------------------------------------------------ |
| /                     | Home page of the application.                    |
| /video/:id            | Video page based on `:id`.                       |
| /search?query_search= | Provides search results based on `query_search`. |

## **How to run in local**

**Pre-requisites**: Node.js, npm

1. Clone the Repository
2. Open terminal to that repo then Install Dependencies

```
npm install
```

3. Rename **.env.example** file into **.env**
4. In **.env** file, change the value of **REACT_APP_SOCKET_URL** to match your backend server url
5. Run the server using the following command

```
npm start
```

## **Bonus Features Implemented**

- Websocket for real-time comments
- Search feature for videos
