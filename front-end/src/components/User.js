import React from "react";

export default function Users({users}) {
  if (!users.length) {
    return null
  }
  const name = users[0].name
  return <h2>Hello {name}</h2>;
}