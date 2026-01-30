export async function fetchUserPosts(userId) {
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
  ).then((res) => res.json());
  return posts;
}

export async function fetchUserAlbums(userId) {
  const albums = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`,
  ).then((res) => res.json());
  return albums;
}

export default async function UserProfile({ params }) {
  const { id } = await params;
  const postData = fetchUserPosts(id);
  const albumData = fetchUserAlbums(id);

  const [posts, albums] = await Promise.all([postData, albumData]);

  return (
    <div>
      <h1>User Profile Page - User ID: {id}</h1>
      <div style={{ display: "flex" }}>
        <section>
          <h2>Posts</h2>
          <ul>
            {posts.map((post) => (
              <li
                key={post.id}
                style={{ border: "1px solid", margin: "10px", padding: "10px" }}
              >
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Albums</h2>
          <ul>
            {albums.map((album) => (
              <li
                key={album.id}
                style={{ border: "1px solid", margin: "10px", padding: "10px" }}
              >
                <h3>{album.title}</h3>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
