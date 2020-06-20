import React from "react";

function NumberList({ numbers }) {
  return (
    <ul>
      {numbers.map((n) => (
        <ListItem key={n} value={n} />
      ))}
    </ul>
  );
}

//don't specify key here
function ListItem({ value }) {
  return <li>{value}</li>;
}

export default NumberList;
