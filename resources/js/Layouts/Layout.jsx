export default function Layout({ children }) {
    return (
        <>
            <header>
                <nav>
                    <a className="nav-link" href="/home">
                        Home
                    </a>
                    <a className="nav-link" href="/create">
                        Create
                    </a>
                    <a className="nav-link" href="/about">
                        About
                    </a>
                </nav>
            </header>
            <main>{children}</main>
        </>
    );
}
