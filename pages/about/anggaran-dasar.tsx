import Accordion from '../../components/basic-components/Accordion';
import Head from '../../components/basic-components/Head';
import Navbar from '../../components/basic-components/Navbar';
import Footer from '../../components/basic-components/Footer';

export default function anggaranDasar() {
  return (
    <section className='anggaran-dasar'>
      <Navbar />
      <Head />
      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <Accordion />
          </div>
          <div className='col-md-10 col-lg-8 col-xl-7'>
            <main className='mb-4'>
              <div className=''>
                <div className='row gx-4 gx-lg-5 justify-content-center'>
                  <div className=''>
                    <h2 className='blockquote'>Anggaran Dasar</h2>
                    <p>
                      Komposisi kepemilikan saham per 30 September 2021,
                      Pemegang Saham Pengendali Perseroan adalah Dana Pensiun
                      Perkebunan (DAPENBUN) sebesar 77,39%.
                    </p>

                    <div className='col-md-10 col-sm-6 mb-4'>
                      <img
                        src={
                          'https://jastan.co.id/storage/img/blog/1633516967PAD.jpg'
                        }
                        width='500'
                        alt='anggaran dasar'
                        className='img-fluid'
                      />
                      <div className='desk'>
                        <span>Perubahan Anggaran Dasar Nomor 11 Tanggal 7 Juli 2021.</span>
                        <br />
                        <b><a href="">Download</a></b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      <Footer/>
      </div>
    </section>
  );
}
