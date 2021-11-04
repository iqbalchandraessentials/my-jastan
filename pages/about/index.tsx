import Accordion from '../../components/basic-components/Accordion';
import Head from '../../components/basic-components/Head';
import Navbar from '../../components/basic-components/Navbar';

export default function index() {
  return (
    <section className="sekilasInfo">
      <Navbar />
      <Head />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Accordion />
          </div>
          <div className="col-md-10 col-lg-8 col-xl-7">
            <main className="mb-4">
              <div className="">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                  <div className="text-justify">
                    <h2 className="">Sekilas Tentang Kami</h2>
                    <p>
                      PT Asuransi Jasa Tania Tbk (Asuransi Jastan) adalah
                      asuransi umum yang menyajikan berbagai jenis produk
                      Asuransi Standar diantaranya Asuransi Kebakaran, Kendaraan
                      Bermotor, Rekayasa, Pengangkutan Barang, Surety Bond,
                      Miscellaneous, dan Kesehatan.
                    </p>
                    <p>
                      Asuransi Jastan juga menyajikan produk Pengembangan
                      seperti Asuransi JT Oto, JT Griya, Ternak, Tanaman
                      Perkebunan, Askes JT Care Cash Plan, Askes JT Care Micro,
                      dan Tanggung Gugat Pelayanan Kesehatan Rumah Sakit.
                    </p>
                    <div className="text-right mt-5">
                      <img src="/img/jastan.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}
