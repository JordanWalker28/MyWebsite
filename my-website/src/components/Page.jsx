import React from 'react';
import '../styles/page.css';

function Page({ title, children }) {
  return (
    <div className="page-container">
      <h2 className="page-title">{title}</h2>
      <div className="page-content">
        {children}
      </div>
    </div>
  );
}

export default Page;
