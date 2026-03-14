import './Header.css';
import { Link } from 'react-router-dom';
function Header(){
    return(
        <>
            <div className="main">
    
                <div className="notification">
                    <div className="ticker-wrapper">
                        <div className="ticker-content">
                            50% OFF on Fullstack Web Development &nbsp;|&nbsp; 20% OFF on Cyber Security &nbsp;|&nbsp; 30% OFF on Java Development &nbsp;|&nbsp; 40% OFF on Python Programming &nbsp;|&nbsp; 25% OFF on MERN Stack Mastery &nbsp;|&nbsp; 35% OFF on Data Science & Machine Learning &nbsp;|&nbsp; 50% OFF on Web Design UI/UX Courses &nbsp;|&nbsp; 30% OFF on Cloud Computing & DevOps &nbsp;|&nbsp; 45% OFF on Mobile App Development &nbsp;|&nbsp; 20% OFF on Digital Marketing &nbsp;|&nbsp; 30% OFF on SQL & Database Engineering &nbsp;|&nbsp; 40% OFF on C++ & DSA Masterclass &nbsp;|&nbsp; 15% OFF on Ethical Hacking &nbsp;|&nbsp; 50% OFF on Interview Preparation &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                    </div>
                </div>

                <div className="header">

                    <div className="left-header">
    
                        <div className="left-header1">
                            <img src="/images-homepage/logo2.webp" alt="SkillPointX Logo"/>
                        </div>
    
                        <div className="left-header2">
                            <h1>SkillPointX ᴘᴠᴛ .ʟᴛᴅ.</h1>
                        </div>
                        
                    </div>
    
                    <div className="right-header">
    
                        <div className="right-header1">
                            <i className="fa fa-map-marker"></i>
                            location
                            <br/>
                            ᴷᴼᴸᴷᴬᵀᴬ | ᴰᵁᴿᴳᴬᴾᵁᴿ | ᴾᴬᴺᴬᴳᴬᴿᴴ | ᴿᴬᴺᴵᴳᴬᴺᴶ
                        </div>

                        <div className="right-header2">
                            <br/>
                            <p>follow us on -</p>
                            <Link to="https://www.facebook.com/" target="_blank">
                                <i className="fa fa-facebook"></i>
                            </Link>
                            <Link to="https://www.instagram.com/" target="_blank">
                                <i className="fa fa-instagram"></i>
                            </Link>
                            <Link to="https://twitter.com/" target="_blank">
                                <i className="fa fa-twitter"></i>
                            </Link>
                            <Link to="https://youtube.com/@theminecrafters05?si=rJpc1vtlu3nSi9vb" target="_blank">
                                <i className="fa fa-youtube-play"></i>
                            </Link>
                        </div>
                    </div>
                    
                </div>

                <div className="navbar">
                    <div className="left-navbar">
                        <ul className="menu-list">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/login" className="btn">Login</Link></li>
                        </ul>
                    </div>
                    <div className="right-navbar">
                        <a href="tel:+918653530190" className="nav-enquiry">
                            📞 Have questions? Call us: +91 86535 3019
                        </a>
                        <a href="mailto:support@skillpointx.com" className="nav-email">
                            ✉️ support@skillpointx.com
                        </a>
                    </div>
                </div>

                <br/>
                <br/>

            </div>
        </>
    );
}
export default Header;
