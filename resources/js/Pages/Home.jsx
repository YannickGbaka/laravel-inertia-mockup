import Layout from "../Layouts/Layout";
const Home = ({ appName }) => {
    return (
        <>
            <h1 className="italic font-bold">
                Welcome to my home page {appName}{" "}
            </h1>
        </>
    );
};

Home.layout = (page) => <Layout children={page} />;

export default Home;
