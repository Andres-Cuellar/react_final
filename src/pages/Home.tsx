import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Profile from "../components/Profile";
import Services from "../components/Services";
import Works from "../components/Works";

const Home = () => {
  return (
    <>
      <Profile />
      <About />
      <Services />
      <Experience />
      <Works />
      <Contact />
    </>
  );
};

export default Home;
