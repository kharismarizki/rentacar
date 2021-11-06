import styles from "./Footer.module.css";
import "./Footer.module.css";

const footer = () => {
  return (
    <div className={styles.margin}>
      <footer className="footer-dark" style={{ background: "rgb(39,102,120)" }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#" className={styles.a}>
                    Rent car
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.a}>
                    Guarantee
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.a}>
                    Hosting
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>Social Media</h3>
              <ul>
                <li>
                  <i className="bi bi-facebook"></i>
                  <a href="#" className={styles.a}>
                    Facebook
                  </a>
                </li>
                <li>
                  <i className="bi bi-twitter"></i>
                  <a href="#" className={styles.a}>
                    Twitter
                  </a>
                </li>
                <li>
                  <i className="bi bi-instagram"></i>
                  <a href="#" className={styles.a}>
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>RENTACAR</h3>
              <p className={styles.a}>
                Melalui web ini kita dapat membuktikan bahwa dengan menggunakan
                web browser kita dapat menyewa mobil dengan mudah.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default footer;
