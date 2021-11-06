import styles from "./Daftarmobil.module.css";
const daftarMobil = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div>
              <div>Cara Pemesanan</div>
              <br />
              <div>Mulai rental dengan 3 Langkah mudah</div>
            </div>
          </div>
          <div className="col-6">
            <div className={styles.align}>
              <div>Cara Pemesanan</div>
              <br />
              <div>Mulai rental dengan 3 Langkah mudah</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">tes</div>
          <div className="col-4">tes</div>
          <div className="col-4">tes</div>
        </div>
      </div>
    </>
  );
};
export default daftarMobil;
