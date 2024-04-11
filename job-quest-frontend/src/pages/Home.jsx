import HeroSection from "../components/HeroSection";
import ButtonsSection from "../components/ButtonsSection";
import ProfileSection from "../components/ProfileSection";
import ApplicationsSection from "../components/ApplicationsSection";

const Home = () => {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return (
      <div className="pt-40 px-32">
        <HeroSection />
        <ButtonsSection />
      </div>
    );
  }

  return (
    <div className="pt-40 px-32">
      <ProfileSection />
      <ApplicationsSection />
    </div>
  );
};

export default Home;
