import './App.css';

const movieReviewObj = {title: "Fullstack Movie Review Website", description: "Built a fullstack movie review website that dynamically pulls data from a backend to fill two static HTML pages, by using pure HTML/CSS/JS for the front-end, MongoDB as the backend, and Express.js to build the middleware."}

const App = () => {
  return (
    <div className="" style={{maxWidth: "100%", margin: "0px"}}>
      
      <div className="d-flex flex-column align-items-center">
        <Header/>
        <Section/>
        <div className="secondary-section d-flex flex-column flex-wrap align-items-center">
          <h2 className='big-header'>Projects</h2>
          <Card titleText={movieReviewObj.title} descriptionText={movieReviewObj.description} imageSrc="../images/movie-review-website.png"/>
          <Card titleText="JenniGame" descriptionText="Developed a mobile game application with 5 complete micro-games, by using the Unity Game engine framework written in C#." imageSrc="../images/Jennigame.gif"/>
          <Card titleText={null} descriptionText={null}/>
          <Card titleText={null} descriptionText={null}/>
        </div>

      </div>
    </div>
  );
}

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{width: "100%", padding: "0px", position: "fixed", zIndex: "2" }}>
      <div className="container-fluid" >
        <a className="navbar-brand" >Brian Altamirano</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="../public/index.html">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-link-highlight" href="https://github.com/AltBrian379" ><i class="fab fa-github"></i> Github</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-link-highlight" href="mailto:brianaltamirano.business@gmail.com" ><i class="fa fa-envelope"></i> E-Mail</a>
        </li>
        {/* 
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Game Design</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
            */}
        {/* 
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>*/}
  
      </ul>
    </div>
  </div>
</nav>
  );
}


const Section = () => {
  return (
    <div class="card mb-3 section-card" style={{width: "100%", margin: "55px 0px 0px 0px"}}>
      <div class="row g-0">
      <div class="col-md-4">
        <img src="./images/stock_html.jpg" class="img-fluid rounded-start" alt="Stock HTML Photo"/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title" style={{fontSize:"2em"}}>Hello, my name is <span className="fw-bold">Brian Altamirano</span></h5>
          <p class="card-text">
            <ul>
              <li>Graduated CSU Fullerton with a bachelors in Computer Science</li>
              <li>Front-End Web Developer with strong HTML/CSS, Javascript, and React skills</li>
                <ul>
                  <li>with Full-Stack knowledge using Express.js and MongoDB</li>
                </ul>
              <li>Hobbyist Game Developer using Godot and Source Engine</li>
            </ul>
          </p>
          <p class="card-text"><small class="text-muted"><i>This resume built with the React Framework.</i></small></p>
          <a href="#" className="btn btn-primary section-card-btn">Go somewhere</a>
          <a href="#" className="btn btn-primary section-card-btn">Go somewhere</a>
          <a href="#" className="btn btn-primary section-card-btn">Go somewhere</a>
        </div>
      </div>
    </div>
    </div>
  );
};
const Card = (props) => {
  return (
    <div className="card col-sm-12 col-md-8 col-lg-8 project-card" >
      <img src={props.imageSrc} style={{objectFit:"contain"}} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.titleText}</h5>
        <p className="card-text">{props.descriptionText}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}

export default App;
