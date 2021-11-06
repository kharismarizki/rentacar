const pesan = () => {
  return (
    <>
      <div>
        <div className="container" style={{ maxWidth: 960 }}>
          <main>
            <div className="py-5 text-center">
              <img
                className="d-block mx-auto mb-4"
                src="/docs/5.1/assets/brand/bootstrap-logo.svg"
                alt
                width={72}
                height={57}
              />
              <h2>Iki Dinggo Card</h2>
              <p className="lead">isine card atau ono deskripsi singkat</p>
            </div>
            <div className="row g-5">
              <div className="col-md-5 col-lg-4 order-md-last">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-primary">Keranjang Anda</span>
                  <span className="badge bg-primary rounded-pill">3</span>
                </h4>
                <ul className="list-group mb-3">
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Jenis Mobil</h6>
                      <small className="text-muted">Deskripsi</small>
                    </div>
                    <span className="text-muted">Rp. Harga</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between bg-light">
                    <div className="text-success">
                      <h6 className="my-0">Kode Promo</h6>
                      <small>KSHDBFKSDB9798</small>
                    </div>
                    <span className="text-success">−Rp. 50.000</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total (RP)</span>
                    <strong>300.000</strong>
                  </li>
                </ul>
                <form className="card p-2">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Kode Promo"
                    />
                    <button type="submit" className="btn btn-secondary">
                      TUKAR
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-7 col-lg-8">
                <h4 className="mb-3">Form Pemesanan</h4>
                <form className="needs-validation" noValidate>
                  <div className="row g-3">
                    <div className="col-sm-12">
                      <label htmlFor="lastName" className="form-label">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder
                        defaultValue
                        required
                      />
                      <div className="invalid-feedback">
                        Masukkan Nama Anda.
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="lastName" className="form-label">
                        Nomer Handphone
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="number"
                        placeholder="Ex. 0812xxxxxxxxxx"
                        defaultValue
                        required
                      />
                      <div className="invalid-feedback">
                        Masukkan Nomer Handphone Anda.
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">
                        Email <span className="text-muted">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="you@example.com"
                      />
                      <div className="invalid-feedback">
                        Mohon Untuk Memasukkan Email Anda.
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="address" className="form-label">
                        Alamat
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="JL contoh no.15"
                        required
                      />
                      <div className="invalid-feedback">
                        Mohon Untuk Memasukkan ALamat Anda.
                      </div>
                    </div>
                    <div className="col-md-5">
                      <label htmlFor="startDate" className="form-label">
                        Mulai Tanggal
                      </label>
                      <br />
                      <input type="date" />
                      <div className="invalid-feedback">
                        Pilih Mulai Tanggal Rental
                      </div>
                    </div>
                    <div className="col-md-5">
                      <label htmlFor="endDate" className="form-label">
                        Sampai Tanggal
                      </label>
                      <br />
                      <input type="date" />
                      <div className="invalid-feedback">
                        Pilih Akhir Tanggal Rental
                      </div>
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="state" className="form-label">
                        Tambahan
                      </label>
                      <select className="form-select" id="state">
                        <option value>Tanpa Sopir</option>
                        <option>Sopir</option>
                      </select>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <button
                    className="w-100 btn btn-primary btn-lg"
                    type="submit"
                  >
                    Pesan Sekarang
                  </button>
                </form>
                <br className="my-4" />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
export default pesan;
