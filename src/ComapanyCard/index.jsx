import React from "react";
import "./companyCard.css";
import { companies } from "../constantdata/constantdata.js";
// Sample company data array

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
