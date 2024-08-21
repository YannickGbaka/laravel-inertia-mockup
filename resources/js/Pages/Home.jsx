import { Link } from "@inertiajs/react";
const Home = ({ appName }) => {
    return (
        <>
            <h1 className="italic font-bold">
                Welcome to my home page {appName}{" "}
            </h1>
            <Link className="block mt-[1000px] title" preserveScroll href="#">
                {new Date().toLocaleDateString()}
            </Link>
        </>
    );
};

export default Home;
