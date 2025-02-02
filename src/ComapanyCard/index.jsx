import React from "react";
import "./companyCard.css";

// Sample company data array
const companies = [
  {
    id: 101,
    name: "Tech Solutions Inc.",
    location: "San Francisco, USA",
    revenue: "$500M",
    stockPrice: "$350",
    international: "Yes",
    offices: 15,
    employees: "10,000+",
  },
  {
    id: 102,
    name: "Green Energy Ltd.",
    location: "Berlin, Germany",
    revenue: "$300M",
    stockPrice: "$220",
    international: "No",
    offices: 10,
    employees: "7,500",
  },
  {
    id: 103,
    name: "FinTech Corp.",
    location: "London, UK",
    revenue: "$750M",
    stockPrice: "$500",
    international: "Yes",
    offices: 20,
    employees: "12,000",
  },
  {
    id: 104,
    name: "AI Innovations",
    location: "Tokyo, Japan",
    revenue: "$1.2B",
    stockPrice: "$650",
    international: "Yes",
    offices: 25,
    employees: "15,000",
  },
];

const CompanyCard = () => {
  return (
    <div className="company-cards-container">
      <h1 className="title">Company Profiles</h1>
      <div className="company-cards-grid">
        {companies.map((company) => (
          <div key={company.id} className="company-card">
            <h2 className="company-name">{company.name}</h2>
            <p className="company-info">🏢 ID: {company.id}</p>
            <p className="company-info">📍 Location: {company.location}</p>
            <p className="company-info">💰 Revenue: {company.revenue}</p>
            <p className="company-info">📈 Stock Price: {company.stockPrice}</p>
            <p className="company-info">
              🌍 International: {company.international}
            </p>
            <p className="company-info">🏬 Offices: {company.offices}</p>
            <p className="company-info">👥 Employees: {company.employees}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyCard;
