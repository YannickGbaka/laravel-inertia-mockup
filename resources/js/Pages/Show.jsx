export default function Show({ post }) {
    return (
        <>
            <h2 className="title">Post details</h2>
            <p className="text-lg">{post.body}</p>
        </>
    );
}
