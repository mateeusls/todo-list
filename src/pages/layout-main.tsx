import { Outlet } from "react-router";
import { Header } from "../components/commons/header";
import { MainContent } from "../components/commons/main-content";
import { Footer } from "../components/commons/footer";

export function LayoutMain() {
  return (
    <>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </>
  );
}
