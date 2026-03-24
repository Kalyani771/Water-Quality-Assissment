import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    ph: "",
    turbidity: "",
    dissolvedOxygen: "",
    temperature: "",
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { ph, turbidity, dissolvedOxygen } = formData;

    if (ph >= 6.5 && ph <= 8.5 && turbidity < 5 && dissolvedOxygen > 6) {
      setResult("Good Water Quality ✅");
    } else {
      setResult("Poor Water Quality ❌");
    }
  };

  return (
    <div className="container">
      <h1>Water Quality Assessment</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="ph"
          placeholder="pH Level"
          value={formData.ph}
          onChange={handleChange}
        />

        <input
          type="number"
          name="turbidity"
          placeholder="Turbidity"
          value={formData.turbidity}
          onChange={handleChange}
        />

        <input
          type="number"
          name="dissolvedOxygen"
          placeholder="Dissolved Oxygen"
          value={formData.dissolvedOxygen}
          onChange={handleChange}
        />

        <input
          type="number"
          name="temperature"
          placeholder="Temperature"
          value={formData.temperature}
          onChange={handleChange}
        />

        <button type="submit">Analyze</button>
      </form>

      <div className="result">{result}</div>
    </div>
  );
}

export default App;