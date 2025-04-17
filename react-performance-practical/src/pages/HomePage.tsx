import React from "react";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>React Performance-Focused Practical</h1>
      <ul style={{ lineHeight: "2" }}>
        <li>
          <Link to="/custom-hook">🪝 3.1 - Custom Hook: useFetchWithCache</Link>
        </li>
        <li>
          <Link to="/virtual-list">
            🔁 3.2 - Virtualized List (10,000 items)
          </Link>
        </li>
        {/* Add future exercises here */}
      </ul>
    </main>
  );
};

export default HomePage;
