export async function getServerSideProps(context) {
  let idMobil = context.params.id;
  let mobil = context.params.judul;
  return { props: { idMobil, mobil } };
}
const mobil = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>Spesifikasi</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr />
                </thead>
                <tbody>
                  <tr>
                    <td style={{ width: 205, color: "rgb(102,106,111)" }}>
                      Merk
                    </td>
                    <td>{props.mobil}</td>
                  </tr>
                  <tr>
                    <td style={{ width: 205, color: "rgb(102,106,111)" }}>
                      Merk
                    </td>
                    <td>Mitsubisi Padjero</td>
                  </tr>
                  <tr>
                    <td style={{ width: 205, color: "rgb(102,106,111)" }}>
                      Merk
                    </td>
                    <td>Mitsubisi Padjero</td>
                  </tr>
                  <tr>
                    <td style={{ width: 205, color: "rgb(102,106,111)" }}>
                      Merk
                    </td>
                    <td>Mitsubisi Padjero</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>Deskripsi</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              <br />
              Laptop Hp 7260N
              <br />
              <br />
              Prosesor Intel N2840
              <br />
              Ram 4GB <br />
              Storage 128GB SSD
              <br />
              VGA Intel HD grafiz
              <br />
              Layar 12,5 inch 60Hz
              <br />
              OS windows 10
              <br />
              <br /> Laptop mulus no kendala Siap pakai !!!
              <br />
              <br />
              Fitur2. <br />
              Port USB <br />
              HDMI. <br />
              Wf
              <br />
              LAN. <br />
              Camera
              <br />
              BLUETOOTH
              <br />
              Headset
              <br />
              <br /> Kelengkapan :charger,aplikasi, office,dll(siap pake) <br />
              <br /> Laptop tinggal siap pake semua sudah disetingkan dan di
              instal untuk aplikasi kebutuhan sehari-hari !!!
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default mobil;
