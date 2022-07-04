import React from "react";
import { Link } from "react-router-dom";

import "./CompanyCard.css";

/** Show limited information about a company
 *
 * Is rendered by CompanyList to show a "card" for each company.
 *
 * CompanyList -> CompanyCard
 */

function CompanyCard({ name, description, logoUrl, handle, colorIndex }) {
  console.debug("CompanyCard", logoUrl);

  let bg = (colorIndex % 2 === 0 )? "bg1": "bg2";

  return (
      <Link className={`CompanyCard card ${bg}`} to={`/companies/${handle}`}>
        <div className="card-body">
          <h6 className="card-title">
            {name}
            {logoUrl && <img src={logoUrl}
                             alt={name}
                             className="float-right ml-5" />}
          </h6>
          <p><small>{description}</small></p>
        </div>
      </Link>
  );
}

export default CompanyCard;
