import {React} from "react";
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import "./AboutMe.css";

export default function AboutMe(props) {

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description: "Hey! I’m a Senior Software Engineer living in London, and I love building things with C#, SQL, and React. I’m all about clean, efficient code and creating smooth, user-friendly experiences. Outside of work, you’ll probably find me exploring London’s coffee scene, checking out new tech trends, or just enjoying the city life. Let’s chat if you want to build something cool together!",
    highlights: {
      bullets: [
        "💡 Problem Solver: Whether it’s a tricky bug or a complex feature, I’m all about finding the best solution.",
        "🚀 Performance Geek: Optimizing code and improving app speed is my jam.",
        "🧑‍🤝‍🧑 Team Player: Collaboration is key – I love working with others to make projects shine.",
        "☕ Coffee Aficionado: Always on the lookout for the best coffee spots in London. Fuel for coding!",
        "🎮 Tech Enthusiast: When I'm not coding, I’m diving into new tech trends or playing around with side projects.",
        "🌍 London Explorer: Exploring the city’s hidden gems when I’m not deep in code."
      ],
      heading: "In a nutshell..."
    }
  }

  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"}/>
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
