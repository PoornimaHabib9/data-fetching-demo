export default async function Author({ authorId }) {
    const authorDetails = await fetch(`https://jsonplaceholder.typicode.com/users/${authorId}`).then(res => res.json());
    return (
        <p>Written by {authorDetails.name}</p>
    );
}