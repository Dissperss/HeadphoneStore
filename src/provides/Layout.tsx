import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components/layout";

export function Layout() {
    return (
        <>
            <Header />

            <main className="container">
                {/* The child route element will be rendered here */}
                <Outlet />
            </main>

            <Footer />
        </>
    );
}
