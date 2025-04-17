import React from "react";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import { User } from "../utils/generateLargeList";

type Props = {
  users: User[];
};

// Memoized row renderer to avoid unnecessary re-renders
const Row = React.memo(({ index, style, data }: ListChildComponentProps) => {
  const user: User = data[index];
  return (
    <div style={style} className="row">
      {user.name}
    </div>
  );
});

const VirtualizedList: React.FC<Props> = ({ users }) => {
  return (
    <List
      height={500} // viewport height
      itemCount={users.length}
      itemSize={35} // row height
      width={"100%"}
      itemData={users} // passes data to each row
    >
      {Row}
    </List>
  );
};

export default React.memo(VirtualizedList);
