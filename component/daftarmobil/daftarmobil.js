import Card from "./card";
const daftarMobil = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>DAFTAR MOBIL</h1>
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
        <br/>
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
