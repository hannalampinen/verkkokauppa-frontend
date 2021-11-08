import './App.css';

function App() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Bohemio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Etusivu</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tuotteet
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Pikkusälää</a></li>
                <li><a class="dropdown-item" href="#">Tilpehööriä</a></li>
                <li><a class="dropdown-item" href="#">Muuta kivaa</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tuotemerkit
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Merkki 1</a></li>
                <li><a class="dropdown-item" href="#">Merkki 2</a></li>
                <li><a class="dropdown-item" href="#">Merkki 3</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link">Kampanjat</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Tarjoukset</a>
            </li>
            <li class="nav-">
              <a class="nav-link">Ota yhteyttä</a>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Etsi tuotteita" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Etsi</button>
          </form>
        </div>
      </div>
    </nav>
    <div id='header'></div>
    <div className='container1'>
      <h3>Tervetuloa Bohemion verkkokauppaan!</h3>
      <p id='text'>Sisustustuotteemme ovat saaneet inspiraationsa trooppisien maiden luonnonmateriaaleista sekä 
        rennosta elämäntyylistä. Valikoimaamme kuuluu huonekaluja sekä piensisustustuotteita. Tuotteemme 
        valmistetaan käsityönä Balilla, ja jokainen tuote on uniikki. Arvostamme paikallisia yrittäjiä sekä heidän
        käsityötä, ja tuotteemme ovat vastuullisesti valmistettu. 
      </p>
  
    </div>
    {/* <footer>
      <p>Footer</p>
    </footer> */}

    </>
  );
}

export default App;
