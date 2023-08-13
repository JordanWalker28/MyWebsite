import {Outlet } from 'react-router-dom';

function Posts() {
    return (
      <div style={{ padding: 20 }}>
        <Outlet />
      </div>
    );
  }

  export default Posts;