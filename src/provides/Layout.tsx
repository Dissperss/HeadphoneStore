import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components/layout";

export function Layout() {
    return (
        <>
            <Header>
                {/* <Link to="/">Home</Link> | <Link to="/cart">Cart</Link> */}
            </Header>

            <main className="container">
                {/* The child route element will be rendered here */}
                <Outlet />
            </main>

            <Footer></Footer>
        </>
    );
}
