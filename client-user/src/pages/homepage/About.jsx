// src/pages/homepage/About.jsx
import React, { useState } from "react";
import './About.css';
import Header from "../../components/homepage/Header.jsx";
import Footer from "../../components/homepage/Footer.jsx";

//image import
import SurajImg from "../../assets/instructors/suraj.jpg";
import RijuImg from "../../assets/instructors/riju.jpg";
import SubhamImg from "../../assets/instructors/subham.jpg";
import TuhinImg from "../../assets/instructors/tuhin.jpg";



// Leaflet
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* fix leaflet icons for CRA / Vite  */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

/* locations */
const locations = [
  { id: 1, name: "Kolkata", lat: 22.5726, lng: 88.3639, address: "SkillPointX, Kolkata Center" },
  { id: 2, name: "Durgapur", lat: 23.5204, lng: 87.3119, address: "SkillPointX, Durgapur Center" },
  { id: 3, name: "Panagarh", lat: 23.4340, lng: 87.4277, address: "SkillPointX, Panagarh Center" },
  { id: 4, name: "Raniganj", lat: 23.6164, lng: 87.1306, address: "SkillPointX, Raniganj Center" }
];

/*  instructors */
const instructors = [
  {
    id: 1,
    name: "Mr. Suraj kr. Agrawal",
    title: "Senior Web Developer",
    expertise: "Full Stack | React | Node.js",
    bio: "10+ years building scalable web apps and mentoring students to get hired.",
    photo: SurajImg,

    linkedin: "#",
    twitter: "#"
  },
  {
    id: 2,
    name: "Mr. Subhamoy Chowdhury",
    title: "Cyber Security Expert",
    expertise: "Ethical Hacking | Network Security",
    bio: "Industry pro with hands-on security training and real-world CTF experience.",
    photo: RijuImg,
    linkedin: "#",
    twitter: "#"
  },
  {
    id: 3,
    name: "Mr. Subham Kumar",
    title: "Data Scientist",
    expertise: "ML | Data Analytics | Python",
    bio: "Helps students build data portfolios and ace interviews with practical projects.",
    photo: SubhamImg,
    linkedin: "#",
    twitter: "#"
  },
  {
    id: 4,
    name: "Mr. Vidwattam Chowdhury",
    title: "UI/UX Lead",
    expertise: "Design Systems | Figma | Accessibility",
    bio: "Design lead who converts product ideas into delightful user experiences.",
    photo: TuhinImg,
    linkedin: "#",
    twitter: "#"
  }
];

/* helper component */
function FlyToLocation({ coords }) {
  // Moves map view when coords change
  const map = useMap();
  map.flyTo(coords, 13, { duration: 1.2 });
  return null;
}

/* main About */
export default function About() {
  const [activeLocation, setActiveLocation] = useState(locations[0]);

  return (
    <>
      <Header />

      <div className="about-1">
        <h1> █▓▒▒░░░ABOUT░░░▒▒▓█</h1>
      </div>

      <div className="content">
        <div className="content-up">
          <div className="content-up-left">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Hi4nawqqJOM?autoplay=1&mute=1&loop=1&playlist=Hi4nawqqJOM&controls=0&rel=0&modestbranding=1&playsinline=1"
              title="SkillPointX video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="content-up-right">
            <p>
              SkillPointX is one of West Bengal’s fastest-growing online learning and skill-development platforms, dedicated to helping students and professionals build a successful career in the digital world. For over 10 years, SkillPointX has been empowering learners through industry-ready courses, hands-on projects, and expert-led training.
              <br /><br />
              At SkillPointX, we believe that skills create opportunities. Our platform offers a wide range of career-focused programs—including Web Development, Software Engineering, Cyber Security, Data Analytics, and more—designed to help you learn, grow, and achieve real results.
              <br /><br />
              We combine modern teaching methods, practical training, and updated industry curriculum to ensure that every learner gains the confidence and expertise needed to succeed in today’s competitive job market.
            </p>
          </div>
        </div>

        <div className="content-down">
          <p>
            Whether you are a beginner looking to start a tech career or a professional wanting to upgrade your skills, SkillPointX gives you the tools, guidance, and support to turn your dreams into reality.
          </p>
        </div>

        {/* Location section */}
        <section className="location-section">
          <div className="location-left">
            <h2>Our Locations</h2>

            <ul className="branch-list">
              {locations.map((loc) => (
                <li
                  key={loc.id}
                  className={activeLocation.id === loc.id ? "active-branch" : ""}
                  onClick={() => setActiveLocation(loc)}
                >
                  {loc.name}
                </li>
              ))}
            </ul>

            <p>
              <strong>{activeLocation.name} Center</strong><br />
              {activeLocation.address}
            </p>

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${activeLocation.lat},${activeLocation.lng}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions on Google Maps →
            </a>
          </div>

          <div className="location-right">
            <MapContainer
              center={[activeLocation.lat, activeLocation.lng]}
              zoom={12}
              scrollWheelZoom={true}
              style={{ height: "100%", width: "100%", borderRadius: "10px" }}
            >
              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <FlyToLocation coords={[activeLocation.lat, activeLocation.lng]} />
              {locations.map((loc) => (
                <Marker key={loc.id} position={[loc.lat, loc.lng]}>
                  <Popup>
                    <strong>{loc.name}</strong><br />
                    {loc.address}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </section>

        {/* Teachers section */}
        <section className="teachers-section" aria-labelledby="teachers-heading">
          <div className="teachers-inner">
            <h2 id="teachers-heading">Our Top Instructors</h2>
            <p className="sub">Learn from experienced industry professionals — hands-on, mentor-led training.</p>

            <div className="teachers-grid">
              {instructors.map((t) => (
                <article key={t.id} className="teacher-card" aria-labelledby={`teacher-${t.id}-name`}>
                  <div className="teacher-photo">
                    <img src={t.photo} alt={`${t.name} — ${t.title}`} />
                  </div>

                  <div className="teacher-body">
                    <h3 id={`teacher-${t.id}-name`} className="teacher-name">{t.name}</h3>
                    <p className="teacher-title">{t.title}</p>
                    <p className="teacher-expertise">{t.expertise}</p>
                    <p className="teacher-bio">{t.bio}</p>

                    <div className="teacher-socials">
                      <a href={t.linkedin} target="_blank" rel="noreferrer" aria-label={`${t.name} LinkedIn`}>LinkedIn</a>
                      <a href={t.twitter} target="_blank" rel="noreferrer" aria-label={`${t.name} Twitter`}>Twitter</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p className="teachers-note">Every instructor at SkillPointX is handpicked for their expertise, teaching ability,
              and industry achievements. Their goal is simple: help you succeed with the right skills,
              the right guidance, and the right mindset.
              </p>
          </div>
        </section>
        
      </div>

      <Footer />
    </>
  );
}
