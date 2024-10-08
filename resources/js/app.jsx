import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import "../css/app.css";
import Layout from "@/Layouts/Layout";
import { Ziggy } from "./ziggy.js";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        let current_page = pages[`./Pages/${name}.jsx`];
        current_page.default.layout =
            current_page.default.layout ||
            ((page) => <Layout children={page} />);
        return current_page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
    progress: {
        color: "#fff",
        showSpinner: true,
    },
});
globalThis.Ziggy = Ziggy;
