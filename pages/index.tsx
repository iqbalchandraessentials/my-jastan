import type { NextPage } from 'next';
import Berita from '../components/basic-components/branda/Berita';
import Carousel from '../components/basic-components/branda/Carousel';
import Produk from '../components/basic-components/branda/Produk';
import Sekilas from '../components/basic-components/branda/Sekilas';
import Footer from '../components/basic-components/Footer';
import Navbar from '../components/basic-components/Navbar';


import Head from 'next/head'

const Home: NextPage = () => (
  <>
  <Head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
  </Head>
    <Navbar />
    <Carousel />
    <Sekilas />
    <Produk /> 
    <Berita />
  </>
);

export default Home;
