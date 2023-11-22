import React from "react";
import { returnPaginationRange } from "../utils/appUtils";

function Pagination({ totalPage, page, limit, siblings, onPageChange }) {
  let array = returnPaginationRange(totalPage, page, limit, siblings);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <span
            className="page-link"
            aria-hidden="true"
            onClick={() => onPageChange("&laquo")}
          >
            &laquo;
          </span>
        </li>
        <li className="page-item" onClick={() => onPageChange("&lsaquo")}>
          <span className="page-link" aria-hidden="true">
            &lsaquo;
          </span>
        </li>
        {array.map((value) => (
          <li
            key={value}
            onClick={() => onPageChange(value)}
            className={`page-item ${value === page ? "active" : ""}`}
          >
            <span className="page-link" aria-hidden="true">
              {value}
            </span>
          </li>
        ))}
        <li className="page-item">
          <span
            className="page-link"
            aria-hidden="true"
            onClick={() => onPageChange("&rsaquo")}
          >
            &rsaquo;
          </span>
        </li>
        <li className="page-item">
          <span
            className="page-link"
            aria-hidden="true"
            onClick={() => onPageChange("&raquo")}
          >
            &raquo;
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
