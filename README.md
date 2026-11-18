# SkyOsci

[![Production](https://img.shields.io/website?url=https%3A%2F%2Fskyosci.vercel.app&label=Production&logo=vercel)](https://skyosci.vercel.app)

[![Preview Deployments](https://img.shields.io/badge/Preview-Deployments-blue?logo=vercel)](https://vercel.com/caleb-adebayos-projects/skyosci/GDSrFKoN8h1C4gtC5UtQDQQgS3g7)

**Real-Time Weather Intelligence**

SkyOsci is a location-aware weather application designed to make weather information accessible, understandable, and useful. It integrates live weather data with location-based search and geolocation to provide users with current weather conditions and upcoming forecasts.

## Project Overview

The goal of SkyOsci is to deliver a responsive and reliable weather experience through a clean frontend architecture and real-time API integration.

## Features

- Search for locations using the Open-Meteo Geocoding API.
- Select from matching location suggestions.
- Retrieve current weather conditions using live API data.
- View weather details, including temperature, feels-like temperature, humidity, wind speed, and precipitation.
- Get weather information using the browser's current location (GPS).
- View a five-day weather forecast with daily high and low temperatures.
- Display weather icons and condition descriptions.
- Handle loading states, location errors, and API failures.
- Responsive interface for desktop, tablet, and mobile devices.

## Technology Stack

- React
- TypeScript
- Vite
- Tailwind CSS v4
- Open-Meteo Weather API
- Open-Meteo Geocoding API
- Browser Geolocation API
- Git and GitHub

## Key Dependencies

### Runtime Dependencies

- `react` and `react-dom` – Build the user interface.
- `tailwindcss` – Style the application.
- `@tailwindcss/vite` – Integrate Tailwind CSS with Vite.

### Development Dependencies

- `typescript` – Provide static type checking.
- `vite` – Run the development server and build the application.
- `eslint` – Identify potential code quality issues.

## About PM Accelerator

PM Accelerator is a professional development community that helps aspiring and current product managers develop their skills, gain practical experience, and advance their careers.

This project was built as part of the PM Accelerator Frontend Technical Assessment.

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/calebtolorunleke/skyosci.git
```

Navigate into the project:

```bash
cd skyosci
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## Development

Build the application:

```bash
npm run build
```

Run ESLint:

```bash
npm run lint
```

## Project Status

**Assessment Submission – Core Features Implemented**

SkyOsci currently supports live weather data, location search with selectable suggestions, GPS-based weather retrieval, and a five-day forecast. It also includes responsive layouts and error handling for location and API requests.

Further improvements may be made as development continues.

## Author

Caleb Adebayo

- GitHub: [@calebtolorunleke](https://github.com/calebtolorunleke)
- LinkedIn: [calebtol](https://linkedin.com/in/calebtol)

---

Built with React and TypeScript.
