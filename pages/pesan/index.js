import Card from "../../component/card/cardpesan";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {useState} from "react";

const initFormValues = {
  namaLengkap: "",
  nomerHP: "",
  email: "",
  alamat: "",
  date: "",
  lamaSewa: "",
};
const handleOnSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};
const skemaValidasi = Yup.object({
  namaLengkap: Yup.string().required("Nama lengkap harus diisi"),
  nomerHP: Yup.number().required("Nomer HP harus diisi"),
  email: Yup.string().email("Format email salah").required("Email harus diisi"),
  alamat: Yup.string().required("Alamat tidak boleh dikosongi"),
  date: Yup.date().required("Pilih Tangggal Mulai sewa"),
  lamaSewa: Yup.number().required("Lama Sewa tidak boleh dikosongi"),
}); // Custom component untuk pesan error
const PesanError = (props) => (
  <div className="form-text text-danger">{props.children}</div>
);

const pesan = () => {
  let [harga, setHarga]=useState(0);
  let [hari, setHari]=useState(0);
  let [sopir, setSopir]=useState(0);

  return (
    <Formik
      initialValues={initFormValues}
      onSubmit={handleOnSubmit}
      validationSchema={skemaValidasi}
    >
      {({ isSubmitting }) => (
        <Form>
          <>
            <div>
              <div className="container" style={{ maxWidth: 960 }}>
                <main>
                  <div className="text-center">
                    <Card />
                  </div>
                  <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                      <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-primary">Keranjang Anda</span>
                        {/* <span className="badge bg-primary rounded-pill">3</span> */}
                      </h4>
                      <ul className="list-group mb-3">
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                          <div>
                            <h6 className="my-0">Jenis Mobil</h6>
                            <small className="text-muted">Deskripsi</small>
                          </div>
                          <span className="text-muted">Rp. 300000</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between bg-light">
                          <div className="text-success">
                            <h6 className="my-0">Lama Sewa</h6>
                          </div>
                          <span className="text-success">{hari} hari</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                          <span>Total (RP)</span>
                          <strong>{harga}</strong>
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
                            <Field
                              type="text"
                              className="form-control"
                              name="namaLengkap"
                              id="name"
                              placeholder
                              defaultValue
                              required
                            />
                            <ErrorMessage
                              name="namaLengkap"
                              component={PesanError}
                            />
                          </div>
                          <div className="col-sm-12">
                            <label htmlFor="lastName" className="form-label">
                              Nomer Handphone
                            </label>
                            <Field
                              type="number"
                              className="form-control"
                              id="number"
                              name="nomerHP"
                              placeholder="Ex. 0812xxxxxxxxxx"
                              defaultValue
                              required
                            />
                            <ErrorMessage
                              name="nomerHP"
                              component={PesanError}
                            />
                          </div>
                          <div className="col-12">
                            <label htmlFor="email" className="form-label">
                              Email{" "}
                              <span className="text-muted">(Optional)</span>
                            </label>
                            <Field
                              type="email"
                              className="form-control"
                              id="email"
                              name="email"
                              placeholder="you@example.com"
                            />
                            <ErrorMessage name="email" component={PesanError} />
                          </div>
                          <div className="col-12">
                            <label htmlFor="address" className="form-label">
                              Alamat
                            </label>
                            <Field
                              type="text"
                              className="form-control"
                              id="address"
                              name="alamat"
                              placeholder="JL contoh no.15"
                              required
                            />
                            <ErrorMessage
                              name="Alamat"
                              component={PesanError}
                            />
                          </div>
                          <div className="col-md-12">
                            <label htmlFor="startDate" className="form-label">
                              Mulai Tanggal
                            </label>
                            <br />
                            <Field type="date" name="date" />
                            <ErrorMessage
                              name="date"
                              component={PesanError}
                            />
                          </div>
                          <div className="col-sm-5">
                            <label htmlFor="lastName" className="form-label">
                              Lama Sewa (hari)
                            </label>
                            <Field
                              type="number"
                              className="form-control"
                              id="number"
                              value={hari}
                              name="lamaSewa"
                              placeholder="Masukkan Lama Sewa"
                              defaultValue
                              required
                              onChange={(e)=>{setHari(e.target.value);
                              setHarga((e.target.value)*300000)}}
                            />
                            <ErrorMessage
                              name="lamaSewa"
                              component={PesanError}
                            />
                          </div>
                          <div className="col-md-4">
                            <label htmlFor="state" className="form-label">
                              Tambahan
                            </label>
                            <select className="form-select" id="state"
                            onChange={(e)=>{setSopir(e.target.value)}}>
                              <option disabled="disabled" selected="selected">Masukan pilihan</option>
                              <option value={0}>Tanpa Sopir</option>
                              <option value={50000}>Sopir</option>
                            </select>
                          </div>
                        </div>
                        <hr className="my-4" />
                        <button
                          className="w-100 btn btn-primary btn-lg"
                          type="submit"
                          disabled={isSubmitting}
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
        </Form>
      )}
    </Formik>
  );
};
export default pesan;
