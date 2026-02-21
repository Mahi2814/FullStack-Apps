import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Services = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim() !== "") {
      navigate(`/category/${search.toLowerCase()}`);
    }
  };

  const servicesList = [
    {
      name: "Electrician",
      type: "electrician",
      icon: "⚡",
      desc: "Electrical wiring & repairs",
    },
    {
      name: "Plumber",
      type: "plumber",
      icon: "🔧",
      desc: "Pipe fixing & leakage repair",
    },
    {
      name: "Carpenter",
      type: "carpenter",
      icon: "🔨",
      desc: "Furniture & wood works",
    },
    {
      name: "Painter",
      type: "painter",
      icon: "🎨",
      desc: "Interior & exterior painting",
    },
    {
      name: "AC Technician",
      type: "ac",
      icon: "❄️",
      desc: "AC installation & servicing",
    },
    {
      name: "House Cleaning",
      type: "cleaning",
      icon: "🧹",
      desc: "Deep home & office cleaning",
    },
    {
      name: "Packers & Movers",
      type: "packers",
      icon: "📦",
      desc: "Home & office relocation",
    },
    {
      name: "Gardener",
      type: "gardener",
      icon: "🌱",
      desc: "Garden maintenance services",
    },
    {
      name: "Pest Control",
      type: "pest",
      icon: "🐜",
      desc: "Termite & pest treatment",
    },
    {
      name: "Laptop Repair",
      type: "laptop",
      icon: "💻",
      desc: "Hardware & software repair",
    },
    {
      name: "Refrigerator Repair",
      type: "fridge",
      icon: "🧊",
      desc: "Fridge repair & maintenance",
    },
    {
      name: "Washing Machine Repair",
      type: "washing_machine",
      icon: "🧺",
      desc: "Washing machine servicing",
    },
    {
      name: "RO Water Purifier",
      type: "ro",
      icon: "🚰",
      desc: "RO installation & servicing",
    },
    {
      name: "TV Repair",
      type: "tv",
      icon: "📺",
      desc: "LED & Smart TV repair",
    },
    {
      name: "Home Sanitization",
      type: "sanitization",
      icon: "🧼",
      desc: "Complete home sanitization",
    },
    {
      name: "Interior Designer",
      type: "interior",
      icon: "🏠",
      desc: "Home & office interior design",
    },
    {
      name: "CCTV Installation",
      type: "cctv",
      icon: "📷",
      desc: "Security camera installation",
    },
    {
      name: "Water Tank Cleaning",
      type: "tank_cleaning",
      icon: "💧",
      desc: "Overhead & underground tank cleaning",
    },
    {
      name: "Solar Panel Service",
      type: "solar",
      icon: "☀️",
      desc: "Solar panel installation & repair",
    },
    {
      name: "Locksmith",
      type: "locksmith",
      icon: "🔐",
      desc: "Lock repair & key services",
    },
  ];

  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>

      {/* Search Box */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search plumber, electrician..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Service Cards
      <div className="services-cards">
        <div
          className="service-card"
          onClick={() => navigate("/category/electrician")}
        >
          <div className="service-icon">⚡</div>
          <h3>Electrician</h3>
          <p>Electrical wiring & repairs</p>
        </div>

        <div
          className="service-card"
          onClick={() => navigate("/category/plumber")}
        >
          <div className="service-icon">🔧</div>
          <h3>Plumber</h3>
          <p>Pipe fixing & leakage repair</p>
        </div>

        <div
          className="service-card"
          onClick={() => navigate("/category/carpenter")}
        >
          <div className="service-icon">🔨</div>
          <h3>Carpenter</h3>
          <p>Furniture & wood works</p>
        </div>

        <div
          className="service-card"
          onClick={() => navigate("/category/painter")}
        >
          <div className="service-icon">🎨</div>
          <h3>Painter</h3>
          <p>Interior & exterior painting</p>
        </div>
      </div> */}
      {
        <div className="services-cards">
          {servicesList.map((service) => (
            <div
              key={service.type}
              className="service-card"
              onClick={() => navigate(`/category/${service.type}`)}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.name}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default Services;
