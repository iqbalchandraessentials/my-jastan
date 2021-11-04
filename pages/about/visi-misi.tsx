import Accordion from "../../components/basic-components/Accordion"
import Head from "../../components/basic-components/Head"
import Navbar from "../../components/basic-components/Navbar";
export default function VisiMisi() {
  return (
    <section className="visi-misi">
      <Navbar/>
      <Head />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Accordion />
          </div>
          <div className="col-md-10 col-lg-8 col-xl-7">
            <main className="">
              <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className='card-body'>
                      <div className=''>
                        <div className='col'>
                          <div className='visi'>
                            <h5 className='mb-4'>Visi</h5>
                            <ul className=''>
                              <li className='mb-2 '>
                                Menjadi perusahaan yang tangguh dan terpercaya
                                dalam memberikan perlindungan asuransi serta
                                berperan aktif dalam pengembangan Industri
                                Asuransi Nasional.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='col'>
                          <div className='visi'>
                            <h5 className='mb-4'>Misi</h5>
                            <ul className=''>
                              <li className='mb-2'>
                                Memenuhi kebutuhan pelanggan secara efektif dan
                                inovatif.
                              </li>
                              <li className='mb-2'>
                                Meningkatkan kompetensi dan produktifitas
                                karyawan
                              </li>
                              <li className='mb-2'>
                                Menjadikan perusahaan sebagai Badan Usaha yang
                                membanggakan dan menguntungkan bagi stakeholder{' '}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className='visi mt-4'>
                      <h5 className='mb-4'>Budaya Perseroan</h5>
                        <ul className='list-unstyled'>
                          <li className='mb-2'>
                        {/* <b className='mb-4'>I CARE</b> */}
                          </li>
                          <ul className=''>
                            <li className='mb-2'>
                              <b>Integrity</b> <br />
                              Jujur, Konsisten, Obyektif, dan mengutamakan
                              kepentingan perseroan.
                            </li>
                            <li className='mb-2'>
                              <b>Competent</b> <br />
                              Memiliki Kemampuan dan dapat diandalkan.
                            </li>
                            <li className='mb-2'>
                              <b>Active</b> <br />
                              Bertindak positif secara aktif dan proaktif.
                            </li>
                            <li className='mb-2'>
                              <b>Responsible</b> <br />
                              Bertanggungjawab atas setiap pelaksanaan
                              pekerjaan.
                            </li>
                            <li className='mb-2'>
                              <b>Effective & Efficient</b> <br />
                              Memberikan hasil kerja terbaik sesuai sasaran
                              kerja.
                            </li>
                          </ul>
                        </ul>
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
