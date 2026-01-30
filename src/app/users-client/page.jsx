"use client";

import { useEffect, useState } from "react";

export default function UsersClientPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);
  return (
    <div>
      <h1>Users Client Page</h1>
      <p>This is the users client page content.</p>
      {loading && <p>Loading users...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
