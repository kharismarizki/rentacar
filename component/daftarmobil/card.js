import styles from "./Card.module.css";
const card = () => {
  return (
    <>
      <div className="card" style={{ width: "20rem" }}>
        <img
          src="https://dummyimage.com/300"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <div className={styles.position}>
            <h5 className="card-title">
              <b>Mitsubishi Pajero</b>
            </h5>
            <div>Rp.300.0000/hari</div>
          </div>
          <div className={styles.transmisi}>Manual</div>
          <div className="card-body">
            <center>
              <div className="row">
                <div className="col">
                  <b className="bi bi-people-fill"> Penumpang</b>
                  <br />
                  <div>4</div>
                </div>
                <div className="col">
                  <b className="bi bi-bag-check-fill"> Bagasi</b>
                  <br />
                  <div>4</div>
                </div>
              </div>
            </center>
          </div>
          <center>
            <div className="row">
              <div className="col">
                <button type="button" class="btn btn-primary btn-sm">
                  Selengkapnya
                </button>
              </div>
              <div className="col">
                <button type="button" class="btn btn-primary btn-sm">
                  Pesan Sekarang
                </button>
              </div>
            </div>
          </center>
        </div>
      </div>
    </>
  );
};
export default card;
