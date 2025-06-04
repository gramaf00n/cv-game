import React from 'react';
import './Character.css';

export default function Character({ pose }) {
  console.log('Rendered Character with pose:', pose);
  return (
    <div className="character" style={{ background: 'yellow', padding: '10px' }}>
      <div className="emoji">🧍‍♂️</div>
    </div>
  );
}
