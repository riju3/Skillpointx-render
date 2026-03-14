"@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Main, openState } from "./AppNavBar";
import { adminIsLoggedInState } from "../store/selectors/adminIsLoggedIn";
import "./style.css";

function LandingPage() {
  const [isLoggedIn] = useRecoilState(adminIsLoggedInState);
  const [open] = useRecoilState(openState);
  const navigate = useNavigate();
  console.log(isLoggedIn);
  return (
    <Main open={open}>
      <div className="landing-page-container">
        <div className="text-content">
          <h1 className="title">Admin Dashboard</h1>

          <button
            className="button-style"
            onClick={() => navigate(isLoggedIn ? "/courses" : "/login")}
          >
            {isLoggedIn ? "View Courses" : "Login Here"}
          </button>
        </div>
        <div>
          <img
            className="img-content"
            src="https://img.freepik.com/free-photo/attractive-young-woman-giving-virtual-class-english-lesson-pandemic_662251-2242.jpg?semt=ais_hybrid&w=740&q=80"
            alt=""
          />
        </div>
      </div>
    </Main>
  );
}

export default LandingPage;
