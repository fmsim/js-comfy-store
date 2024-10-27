import { Header, Navbar } from "@/components";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="align-element py-20">
        {/*
         * An <Outlet> should be used in parent route elements to render their child route elements.
         * This allows nested UI to show up when child routes are rendered.
         * If the parent route matched exactly, it will render a child index route or nothing if there is no index route.
         */}
        <Outlet />
      </div>
    </>
  );
}
export default HomeLayout;
