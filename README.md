# Frontend Web Batikpedia

This repository contains the frontend application for the **Batikpedia** project. It is built with React.js and was bootstrapped using [Create React App](https://github.com/facebook/create-react-app).

---

## Table of Contents
- [Features](#features)
- [Environment Configuration](#environment-configuration)
- [Available Scripts](#available-scripts)
- [Getting Started](#getting-started)
- [Build and Deployment](#build-and-deployment)
- [Learn More](#learn-more)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- Interactive and responsive UI for Batikpedia.
- Configurable API endpoint using environment variables.
- Easy to extend and customize.

---

## Environment Configuration
This project uses a `.env` file for environment-specific configurations. Create a `.env` file in the root directory with the following content:

```
REACT_APP_APIURL=http://localhost:3000/api/v1
```

Update the `REACT_APP_APIURL` value to point to the appropriate backend API.

---

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.  
The page will reload when you make changes, and lint errors will appear in the console.

### `npm test`
Launches the test runner in interactive watch mode.  
See the [Running Tests](https://facebook.github.io/create-react-app/docs/running-tests) section in the Create React App documentation for more information.

### `npm run build`
Builds the app for production to the `build` folder.  
The app is optimized for the best performance, and files are minified.

### `npm run eject`
Ejects the configuration files, giving full control over the project setup.  
**Note:** This is a one-way operation and cannot be undone.

---

## Getting Started

### Prerequisites

- Node.js installed on your system.
- npm or yarn package manager.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/frontend-web-batikpedia.git
    ```

2. Navigate to the project directory:
    ```bash
    cd frontend-web-batikpedia
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

By default, the app will run at http://localhost:3000.
### Build and Deployment

To build the app for production, run:
```bash
npm run build
```

The production-ready files will be located in the build directory. You can then deploy the app to any static hosting service such as Netlify, Vercel, or GitHub Pages.
Learn More

### Contributing

We welcome contributions! To contribute:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a pull request.

License

This project is licensed under the MIT License.