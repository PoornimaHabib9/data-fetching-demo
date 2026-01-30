export default async function UsersServerPage() {
  async function fetchUsers() {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      { cache: "no-store" },
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }

  const users = await fetchUsers();

  return (
    <div>
      <h1>Users Server Page</h1>
      <p>This is the users server page content.</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}