const header = () => {
  return (
    <div>
      <header
        className="text-center text-white d-flex"
        id="about"
        style={{ backgroundImage: 'url("/header.png")' }}
      >
        <div className="container my-auto">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h1 className="text text-dark text-uppercase">
                <br/>
                <br/>
                <br/>
                <br/>
                <strong>RENTACAR</strong>
              </h1>
              <hr />
            </div>
          </div>
          <div className="col-lg-8 mx-auto">
            <h2 className="text text-dark text-faded mb-5">
            Sewa sebuah Mobil Hanya dengan menggunakan jari
            </h2>
            <button
              className="btn btn-primary btn-xl"
              role="button"
              href="#transaksi"
              style={{ background: "#1687a7"}}
            >
              RENTAL SEKARANG
            </button>
          </div>
          <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
        </div>
        
      </header>
      <br/>
    </div>
  );
};
export default header;
