import Navbar from "../component/navbar/navbar";
import Footer from "../component/footer/footer";
import CaraPesan from "../component/carapesan/carapesan";
import DaftarMobil from "../component/daftarmobil/daftarmobil";

export default function Home() {
  return (
    <div>
      <Navbar />
      <DaftarMobil />
      <Footer />
    </div>
  );
}
