import "./HeroStyles.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        {/* <img alt="HerImg" src={props.heroImg} /> */}

        <div
          className="hero-wave"
          style={{ height: "150px", overflow: "hidden" }}
        >
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none", fill: "#fff" }}
            ></path>
          </svg>
        </div>

        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
        <div>
          <h1 className="logo">
            <i className="fa-solid fa-head-side-brain"></i>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Hero;
