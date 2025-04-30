import React from 'react';
import './Card.css';

function Card({ title, children }) {
  return (
    <section className="dashboard-card">
      <h2>{title}</h2>
      <div className="card-content">{children}</div>
    </section>
  );
}

export default Card;
