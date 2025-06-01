# 🇪🇬 Egyptian League Match Outcome Predictor

A modern, AI-powered React app that predicts Egyptian Premier League match outcomes based on contextual match data such as time, teams, referees, and venues.

---

## 🌍 Live Demo

> _(Optional: Add deployed link if hosting on Vercel, Netlify, or localhost preview)_

---

## 📦 Features

- 🧠 AI-powered predictions using a trained machine learning model
- ⚽ Dropdown inputs for match parameters (teams, stadiums, referees, etc.)
- 📊 Bootstrap-powered confidence visualization with progress bars
- 📡 Connects to a Flask backend at `localhost:5000/predictsoccer`
- 📱 Fully responsive layout, ready for desktop and mobile

---

## 🖥️ Frontend Stack

- React (via `create-react-app`)
- Axios
- Bootstrap 5
- Custom image assets + JSON data sources

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/OldAlexhub/egyptsoccer.git
cd egyptsoccer
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the React App

```bash
npm start
```

**_The app will run on http://localhost:3000_**

## 🧠 Backend API

The frontend expects a Flask API running at:

```bash
POST http://localhost:5000/predictsoccer
```

### ✅ Expected JSON Response Format:

```bash
{
  "predicted_class": "HomeWin",
  "confidence": 0.73,
  "class_probabilities": {
    "HomeWin": 0.73,
    "AwayWin": 0.18,
    "Tie": 0.09
  }
```

**_Ensure your Flask backend has the trained model.pkl, scaler.pkl, and encoder.pkl loaded using joblib._**

### 📁 Data Files Required

**These files must exist in your /src directory:**

1. teams.json

2. refs.json

3. sta.json

### ✅ Sample Format:

```bash
{
  "teams": ["Al Ahly", "Zamalek", "Ismaily", "El Gouna"],
  "refs": ["Mohamed Maarouf", "Tarek Magdi"],
  "sta": ["Petrosport Stadium", "Borg El Arab Stadium"]
}
```

## ⚠️ Disclaimer

**This tool is for educational and research purposes only.**
**It is not intended for gambling, betting, or commercial use.**
**All predictions are made using historical public data, and confidence scores are purposely left conservative to prevent misuse.**

## 📬 Contact

Built by **_Mohamed Gad_**

Feel free to fork, star ⭐, or open issues.

## 🪪 License

MIT — Free to use for non-commercial research and educational purposes.
