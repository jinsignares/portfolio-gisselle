import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ImpactSlider from '../components/ImpactSlider';
import TheWork from '../components/TheWork';
import Endorsements from '../components/Endorsements';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ImpactSlider />
      <div id="work">
        <TheWork />
      </div>
      <div id="endorsements">
        <Endorsements />
      </div>
      <Footer />
    </div>
  );
}
