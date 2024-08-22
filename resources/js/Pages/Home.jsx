import { Link } from "@inertiajs/react";
const Home = ({ posts }) => {
    return (
        <>
            <h1 className="italic font-bold">Welcome to my home page</h1>
            {posts.map((post) => (
                <div className="p-4 m-4 border rounded-md shadow-md">
                    <span className="text-sm text-slate-500">
                        Date de création :{" "}
                        {new Date(post.created_at).toLocaleDateString()}
                    </span>
                    <p>{post.body}</p>
                </div>
            ))}
        </>
    );
};

export default Home;
