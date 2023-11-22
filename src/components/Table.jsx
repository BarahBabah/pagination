import React from "react";

function Table(props) {
  return (
    <table className="table text-center">
      <thead>
        <tr>
          <th className="p-3">x</th>
          <th className="p-3">y</th>
          <th className="p-3">u</th>
          <th className="p-3">z</th>
          <th className="p-3">l</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>

            <td>{user.fullName}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
