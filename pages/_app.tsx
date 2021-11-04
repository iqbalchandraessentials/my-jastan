import '../styles/globals.css';
import '../styles/themify-icons/themify-icons.css';
import '../styles/accordion.css';
import '../styles/highlightAbout.scss';
import '../styles/struktur-organisasi.scss';
import '../styles/dewan-komisaris.scss';
import '../styles/pemegang-saham.scss';
import '../styles/anggaran-dasar.scss';
import '../styles/visi-misi.scss';
import '../styles/footer.scss';
import '../styles/navbar.css';
import '../styles/vertical-progress.css';
import '../styles/sekilas.scss';
import '../styles/produk-index.scss';
import '../styles/berita.scss';

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* google Fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
