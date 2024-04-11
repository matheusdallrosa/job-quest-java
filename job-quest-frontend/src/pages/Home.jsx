import HeroSection from "../components/HeroSection";
import ButtonsSection from "../components/ButtonsSection";
import ProfileSection from "../components/ProfileSection";
import ApplicationsSection from "../components/ApplicationsSection";

const Home = () => {
  const isLoggedIn = true;
  const isRecruiter = true;

  if (!isLoggedIn) {
    return (
      <div className="pt-40 px-32">
        <HeroSection />
        <ButtonsSection />
      </div>
    );
  }

  if (isRecruiter) {
    return (
      <div className="pt-40 px-32">
        <ProfileSection />
        <ApplicationsSection />
      </div>
    );
  }

  // FOR CANDIDATES
  return (
    <div className="pt-40 px-32">
      <ProfileSection />
      <ApplicationsSection />
    </div>
  );
};

export default Home;
