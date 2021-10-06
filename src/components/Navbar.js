import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="navbar-center">
      <nav className="navbar">
        <h2 className="navbar__heading">Fotografis</h2>
        <ul className="navbar__links-container">
          <li className="navbar__link">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar__link">
            <Link to="upload-photo">Upload</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
