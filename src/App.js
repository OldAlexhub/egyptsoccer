import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./egypt.png";
import teamsData from "./teams.json";
import refsData from "./refs.json";
import staData from "./sta.json";
import Footer from "./footer";

function App() {
  const [formData, setFormData] = useState({
    Time: "",
    HomeTeam: "",
    AwayTeam: "",
    Referee: "",
    Stadium: "",
    Month: "",
    DayofWeek: "",
    DayofMonth: "",
    is_weekend: "",
    TimeofDay: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_PYTHON}/predictsoccer`,
        formData
      );
      setResult(response.data.result);
    } catch (error) {
      alert("Error sending data to server.");
    }
  };

  const renderDropdown = (label, name, options) => (
    <div className="mb-3 col-md-6">
      <label className="form-label text-capitalize">{label}</label>
      <select
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="form-select"
        required
      >
        <option value="">Select {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <img
          src={logo}
          alt="Egyptian League Logo"
          className="img-fluid"
          style={{ maxHeight: "100px" }}
        />
        <h2 className="mt-3">Egyptian League Match Outcome Predictor</h2>
        <p className="text-muted">
          This interactive tool harnesses the power of Artificial Intelligence
          to forecast match outcomes in the Egyptian Premier League. Designed
          for sports analysts, students, and AI enthusiasts, it offers insights
          based on real-world data.
          <br />
          <strong>Disclaimer:</strong> This application is strictly for research
          and educational purposes only. It is not intended for betting,
          gambling, or any commercial use. Use responsibly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
        <div className="row">
          {renderDropdown(
            "Time",
            "Time",
            Array.from({ length: 24 }, (_, i) => (i + 1).toString())
          )}

          {renderDropdown("Home Team", "HomeTeam", teamsData.teams)}
          {renderDropdown("Away Team", "AwayTeam", teamsData.teams)}
          {renderDropdown("Referee", "Referee", refsData.refs)}
          {renderDropdown("Stadium", "Stadium", staData.sta)}

          {renderDropdown(
            "Month",
            "Month",
            Array.from({ length: 12 }, (_, i) => (i + 1).toString())
          )}
          {renderDropdown("Day of Week", "DayofWeek", [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
          ])}
          {renderDropdown(
            "Day of Month",
            "DayofMonth",
            Array.from({ length: 31 }, (_, i) => (i + 1).toString())
          )}
          {renderDropdown("Is Weekend", "is_weekend", ["Yes", "No"])}
          {renderDropdown("Time of Day", "TimeofDay", [
            "Morning",
            "Afternoon",
            "Evening",
          ])}
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary px-5">
            Predict
          </button>
        </div>
      </form>

      {result && (
        <div className="mt-5 p-4 bg-white border rounded shadow">
          <h5 className="text-center">Prediction Result</h5>
          <p className="mb-1 text-center">
            <strong>Predicted Outcome:</strong> {result.predicted_class}
          </p>
          <p className="mb-3 text-center">
            <strong>Confidence:</strong> {Math.round(result.confidence * 100)}%
          </p>
          <div className="mx-auto" style={{ maxWidth: "400px" }}>
            {Object.entries(result.class_probabilities).map(([label, prob]) => (
              <div key={label} className="mb-2">
                <label>{label}</label>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${prob * 100}%` }}
                  >
                    {Math.round(prob * 100)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div
        className="mt-4 text-center text-muted"
        style={{ fontSize: "0.9rem" }}
      >
        <p>
          This tool uses AI models trained on Egyptian league data to predict
          outcomes. It is not intended for betting, gambling, or any financial
          use. Use responsibly. <br />
          All predictions are made using historical public data, and confidence
          scores are purposely left conservative to prevent misuse.
        </p>
      </div>
      <Footer>
        <footer />
      </Footer>
    </div>
  );
}

export default App;
