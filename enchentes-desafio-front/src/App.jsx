import "./globalStyle.scss";

import { Routes, Route } from "react-router-dom";

// LAYOUT
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

// HOME
import HeroSection from "./components/Home/HeroSection/HeroSection";
import FeaturesSection from "./components/Home/FeaturesSection/FeaturesSection";
import HelpSection from "./components/Home/HelpSection/HelpSection";

// SISTEMA
import DonationSection from "./components/Sistema/DonationSection/DonationSection";
import SheltersSection from "./components/Sistema/SheltersSection/SheltersSection";
import VolunteerSection from "./components/Sistema/VolunteerSection/VolunteerSection";

// PÁGINAS
function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
    </>
  );
}

function HelpPage() {
  return <HelpSection />;
}

function DonationsPage() {
  return <DonationSection />;
}

function SheltersPage() {
  return <SheltersSection />;
}

function VolunteersPage() {
  return <VolunteerSection />;
}

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ajuda" element={<HelpPage />} />
        <Route path="/doacoes" element={<DonationsPage />} />
        <Route path="/abrigos" element={<SheltersPage />} />
        <Route path="/voluntarios" element={<VolunteersPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;