import "./Main.css";

export default function Main() {
  return (
    <>
      <div className="container">
        <div className="parent-grid">
          <div className="image-main-container">
            <div className="image-main-background">
              <img src="/assets/myPic.jpg" alt="" />
            </div>
          </div>
          <div className="introduction-main-container">
            <div className="introduction-sub-main-container">
              <div className="intro-name">
                <h1>Moeez Ahmad Bakhshi</h1>
              </div>
              <div className="intro-description">
                <h3>
                  A seasoned Software Engineer capable of turning ideas into
                  reality.
                </h3>
              </div>
              <div className="intro-social-media-icons"></div>
            </div>
          </div>
          <div className="projects-main-container"></div>
          <div className="skills-main-container"></div>
        </div>
      </div>
    </>
  );
}
