function Header(props) {
  return (
      <header>
          <h1>Chris Daniels</h1>
          <nav>
              <ul>
                  <li onClick={() => props.setCurrentSection("About Me")}>About Me</li>
                  <li onClick={() => props.setCurrentSection("Portfolio")}>Portfolio</li>
                  <li onClick={() => props.setCurrentSection("Contact")}>Contact</li>
                  <li onClick={() => props.setCurrentSection("Resume")}>Resume</li>
              </ul>
          </nav>
      </header>
  );
}

export default Header;