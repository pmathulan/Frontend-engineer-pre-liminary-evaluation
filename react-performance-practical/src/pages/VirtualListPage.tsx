import React, { useMemo } from "react";
import { generateLargeList } from "../utils/generateLargeList";
import VirtualizedList from "../components/VirtualizedList";

const VirtualListPage = () => {
  // Memoize to avoid recreating the list on every render
  const users = useMemo(() => generateLargeList(10000), []);

  return (
    <main style={{ padding: "2rem" }}>
      <h2>👨‍💻 Virtualized List (10,000 Users)</h2>
      <VirtualizedList users={users} />
    </main>
  );
};

export default VirtualListPage;
