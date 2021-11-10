import Navbar from "../component/navbar/navbar";
import Footer from "../component/footer/footer";
import CaraPesan from "../component/carapesan/carapesan";
import DaftarMobil from "../component/daftarmobil/daftarmobil";
import Card from "../component/daftarmobil/card";
import Header from "../component/header/header";

export default function Home() {
  return (
    <div>
      <div className="site-header sticky-top">
        <Navbar />
      </div>
      <Header />
      <main>
        <div className="container">
          <CaraPesan />
          <DaftarMobil />
        </div>
      </main>

      <Footer />
    </div>
  );
}
