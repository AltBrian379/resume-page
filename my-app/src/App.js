import './App.css';

const App = () => {
  return (
    <div className="" style={{maxWidth: "100%", margin: "0px"}}>
      <div className="d-flex flex-column align-items-center">
        <Header/>
        <Section/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

      </div>
    </div>
  );
}

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{width: "100%"}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Brian Altamirano</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="../public/index.html">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/AltBrian379"><i class="fab fa-github"></i> Github</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="mailto:brianaltamirano.business@gmail.com"><i class="fa fa-envelope"></i> E-Mail</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}


const Section = () => {
  return (
    <div class="card mb-3" style={{maxWidth: "100%"}}>
      <div class="row g-0">
      <div class="col-md-4">
        <img src="..." class="img-fluid rounded-start" alt="..."/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
    </div>
  );
};
const Card = () => {
  return (
    <div className="card mb-3" style={{width: "18rem"}}>
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}

export default App;
