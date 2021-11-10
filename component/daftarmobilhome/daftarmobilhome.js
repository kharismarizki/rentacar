import Card from "../daftarmobil/card";
const daftarMobil = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "5%" }}>
        <div className="row">
          <div className="col-sm-10">
            <h1>DAFTAR MOBIL</h1>
          </div>
          <div className="col-sm-2 text-end">
            <button className="btn btn-primary" style={{ background: "#1687a7"}}>Lihat Selengkapnya</button>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};
export default daftarMobil;
