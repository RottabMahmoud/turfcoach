# turfcoach Case Study Description

## What the Application does

- A weather application using React.js.
- A search feature that allows users to search for weather information in a specific city.
- Display relevant weather information, including optional parameters such as precipitation and user-selected units.
- Display an image of the queried city or location.
- Allow users to add or delete cities to/from their favourites (no need for any backend/persistent storage of the favourites)

## Technologies

- React
- JavaScript

## Usage

- Used React + Vite, to create/ spin the project.

```bash
npm create vite@latest ./ -- --template react
```

## Project Installation

```bash
git clone https://github.com/RottabMahmoud/turfcoach
cd turfcoach
npm install
```

## To Start the App

```bash
npm run dev
```

## For Building

```bash
npm run build
```

## Project Hierarchy

```bash
  turfcoach
    ├─ src                   ### root Folder
    │  ├─ components         ### used to group all the project components
    │  │  ├─ CityImage.jsx      ### Our Extra Filters
    │  │  ├─ WeatherCard.jsx       ### Our Header
    │  │  ├─ WeatherForm.jsx       ### Images Pop Up
    │  │  ├─ WeatherInfo.jsx  ### Our List of Items
    │  │─ App.jsx
    │  │─ main.jsx
    │  │─ styles.css
    ├─ .eslintrc.cjs
    ├─ .gitignore
    ├─ index.html
    ├─ node_modules
    ├─ package.json
    ├─ package-lock.json
    ├─ README.md
    └─ vite.config.js
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Badge

<a href="https://www.turfcoach.com/"> <img src="https://img.shields.io/badge/turfcoach-Mahmoud_Rottab-blue" alt="turfcoach" /> </a>
