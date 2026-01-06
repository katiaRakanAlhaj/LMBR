import About from "../features/home/component/about";
import Companies from "../features/home/component/companies";
import ImageHome from "../features/home/component/imageHome";
import Projects from "../features/home/component/projects";
import Services from "../features/home/component/services";
import Contact from './../features/home/component/contact';
const Home = () => {
  return (
    <div>
      <ImageHome />
      <About />
      <Services />
      <Projects />
      <Companies />
      <Contact />
    </div>
  );
};

export default Home;
