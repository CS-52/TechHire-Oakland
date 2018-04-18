class Navbar extends Component{

  render(){
    return(
      <header>
      <div className="container">
        <a href="#home" className="logo">Pathways</a>
        <nav className="nav-collapse">
          <ul>
            <li className="menu-item active">
              <a href="#home">Home</a>
            </li>
            <li className="menu-item">
              <a href="#goals">Goals</a>
            </li>
            <li className="menu-item">
              <a href="#pathways">Pathways</a>
            </li>
            <li className="menu-item">
              <a href="#profile">Profile</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    )


  }

}
