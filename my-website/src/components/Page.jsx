import React from 'react';
import '../styles/page.css';

function Page({ children }) {
  return (
    <div className="page-container">
      <div className="page-content">
        {children}
      </div>
    </div>
  );
}

export default Page;
