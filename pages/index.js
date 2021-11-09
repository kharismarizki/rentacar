import Navbar from "../component/navbar/navbar";
import Footer from "../component/footer/footer";
import CaraPesan from "../component/carapesan/carapesan";
import DaftarMobil from "../component/daftarmobil/daftarmobil";
import Card from "../component/daftarmobil/card";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <DaftarMobil />
        <Card />
      </div>
      <Footer />
    </div>
  );
}
