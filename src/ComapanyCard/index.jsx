import React from "react";
import "./companyCard.css";
import { companies } from "../constantdata/constantdata.js";

const CompanyCard = () => {
  return (
    <div className="company-container">
      <h1 className="company-title">🌍 Company Profiles</h1>
      <div className="company-grid">
        {companies.map((company) => (
          <div key={company.id} className="company-card">
            <div className="company-header">
              <h2 className="company-name">{company.name}</h2>
              <span className="company-id">#{company.id}</span>
            </div>
            <div className="company-details">
              <p>
                📍 <strong>Company Location:</strong> {company.location}
              </p>
              <p>
                💰 <strong>Revenue:</strong> {company.revenue}
              </p>
              <p>
                📈 <strong>Stock Price:</strong> {company.stockPrice}
              </p>
              <p>
                🌍 <strong>International:</strong> {company.international}
              </p>
              <p>
                🏬 <strong>Offices:</strong> {company.offices}
              </p>
              <p>
                👥 <strong>Employees:</strong> {company.employees}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyCard;
