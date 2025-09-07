import Benefits from '../components/HomeComponents/Benefits';
import Hero from '../components/HomeComponents/Hero';
import Process from '../components/HomeComponents/Process';
import Visas from '../components/HomeComponents/Visas';
import PageTitle from '../components/PageTitle';

export default function Home() {
  return (
    <>
      <Hero />
      <Process />
      <Visas />
      <Benefits />
    </>
  );
}
