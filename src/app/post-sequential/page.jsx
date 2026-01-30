import Author from "./author";

export default async function PostSequentialPage() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

  return (
    <div>
      <h1>Post Sequential Page</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id} style={{ border: '1px solid', margin: '10px', padding: '10px'}}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Author authorId={post.userId} />
          </li>
        ))}
      </ul>
    </div>
  );
}