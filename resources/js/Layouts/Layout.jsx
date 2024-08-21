import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <>
            <header>
                <nav>
                    <Link className="nav-link" href="/">
                        Home
                    </Link>
                    <Link className="nav-link" href="/create">
                        Create
                    </Link>
                    <Link className="nav-link" href="/about">
                        About
                    </Link>
                </nav>
            </header>
            <main>{children}</main>
        </>
    );
}
