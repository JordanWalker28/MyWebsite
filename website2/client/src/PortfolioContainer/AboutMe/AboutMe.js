import {React} from "react";
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
// import ScrollService from '../../utilities/ScrollService'
// import Animations from '../../utilities/Animations'
import "./AboutMe.css";

export default function AboutMe(props) {

  // let fadeInScreenHandler = (screen) => {
  //   if(screen.fadeInScreenHandler !== props.id) return;
  //   Animations.animations.fadeInScreen(props.id);
  // };

  // const fadeInSubscription =
  //   ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description: "Blah blah",
    highlights: {
      bullets: [
        "blah",
        "blah blah",
        "more blah blah"
      ],
      heading: "heading:"
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
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
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
