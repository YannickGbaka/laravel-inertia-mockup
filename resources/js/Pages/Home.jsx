import { Link } from "@inertiajs/react";
import { useRoute } from "./ziggy-js";

const Home = ({ posts }) => {
    const { route } = useRoute();

    return (
        <>
            <h1 className="italic font-bold">Welcome to my home page</h1>
            {posts.data.map((post) => (
                <div className="p-4 m-4 border rounded-md shadow-md">
                    <span className="text-sm text-slate-500">
                        Date de création :{" "}
                        {new Date(post.created_at).toLocaleDateString()}
                    </span>
                    <div className="flex justify-between">
                        <p>{post.body}</p>
                        <Link href={route("posts.show")}>Read more</Link>
                    </div>
                </div>
            ))}
            <div className="m-2">
                {posts.links.map((link) =>
                    link.url ? (
                        <Link
                            key={link.label}
                            href={link.url}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`p-1 mx-1 ${
                                link.active
                                    ? "text-blue-500 border p-2 rounded-md font-bold"
                                    : ""
                            }`}
                        />
                    ) : (
                        <span
                            key={link.label}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className="p-1 mx-1 text-slate-300"
                        ></span>
                    )
                )}
            </div>
        </>
    );
};

export default Home;
