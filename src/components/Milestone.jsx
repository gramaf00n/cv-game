import React from 'react';
import './Milestone.css'; // if created, or remove this line

export default function Milestone({ label, content }) {
  return (
    <div className="milestone">
      <h2>{label}</h2>
      <p>{content}</p>
    </div>
  );
}
