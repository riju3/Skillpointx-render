import AppNavBar from "../components/AppNavBar";
import { Outlet } from "react-router-dom";

function ClientLayout() {
  return (
    <>
      <AppNavBar />
      <Outlet />   
    </>
  );
}

export default ClientLayout;
