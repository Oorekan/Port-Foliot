import IntroductionPage from "./IntroductionPage";
import LandingPage from "./LandingPage";
import ProjectPage from "./ProjectsPage";
import Contact from "./ContactPage";

export default function Home() {
  return (
    <>
      <LandingPage />
      <IntroductionPage />
      <ProjectPage />
      <Contact />
    </>
  )
}