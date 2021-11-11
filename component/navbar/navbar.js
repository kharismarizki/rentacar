import Styles from "./Navbar.module.css";
import Link from "next/link";
const navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-light navbar-expand-lg"
        style={{ background: "#276678" }}
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand text-white" href="/">
            Rentacar
          </a>
          <button
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            className="navbar-toggler navbar-toggler-right"
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-align-justify" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/">
                  <a className={Styles.tulisan}>Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#mobil">
                  <a className={Styles.tulisan}>Daftar Mobil</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#about">
                  <a className={Styles.tulisan}>Tentang Kami</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default navbar;
