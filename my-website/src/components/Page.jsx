import React from 'react';

function Page({ title, children }) {
  return (
    <div style={{ padding: 20 }}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Page;