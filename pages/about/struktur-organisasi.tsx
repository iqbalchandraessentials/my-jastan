import Accordion from '../../components/basic-components/Accordion';
import Head from '../../components/basic-components/Head';
import Image from 'next/image';

export default function StrukturOrganisasi() {
  return (
    <section className='strukturOrganisasi'>
      <Head />
      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <Accordion />
          </div>
          <div className='col-md-10 col-lg-8 col-xl-7'>
            <main className='mb-4'>
              <h2 className='mb-5'>Struktur Organisasi</h2>
              <Image
                src='/img/Struktur-organisasi-Perseroan.webp'
                height={500}
                width={700}
              />
              <div className='row gx-4 gx-lg-5 justify-content-center'>
                <div className='struktur mt-4'>
                  <h4 className='block'>Dewan Komisaris</h4>
                  <div className='col-12'>
                    <div className='row'>
                      <div className='col-6'>
                        <p>Komisaris Utama</p>
                        <p>Komisaris</p>
                        <p>Komisaris Independen</p>
                        <p>Komisaris Independen</p>
                      </div>
                      <div className='col-6'>
                        <p>: Ir. Alexander Maha, MM, QCRO</p>
                        <p>: Ir. Doni P. Gandamihardja, QCRO</p>
                        <p>: Ir. Teten Djaka Triana, MM, QCRO</p>
                        <p>: Ir. Slamet Solikhun, SE, QCRO</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='struktur mt-4'>
                  <h4>Direktur</h4>
                  <div className='col-12'>
                    <div className='row'>
                      {/* <div className='col-12'>
                        <div className='row'>
                          <div className='col'>
                            <p>Direktur Utama</p>
                          </div>
                          <div className='col'>
                            <p>: Megang Kacaribu, SE AMRP</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-12'>
                        <div className='row'>
                          <div className='col'>
                            <p>Direktur Keuangan & SDM</p>
                          </div>
                          <div className='col'>
                            <p>
                              : Arifia Indah Liany ST, AAIK, AAAK, AIIS, QCRO
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='col-12'>
                        <div className='row'>
                          <div className='col'>
                            <p>Direktur Pemasaran</p>
                          </div>
                          <div className='col'>
                            <p>: Hendrawan Siregar, SP, ANZIIF., CRMO</p>
                          </div>
                        </div>
                      </div> */}
                      <div className='col-6'>
                        <p>Direktur Utama</p>
                        <p>Direktur Keuangan & SDM</p>
                        <p>Direktur Teknik</p>
                        <p>Direktur Pemasaran</p>
                      </div>
                      <div className='col-6'>
                        <p>: Hasbi Ashsiddiqi, S.Pi., AAIK, AIIS, CRGP</p>
                        <p>: Megang Kacaribu, SE AMRP</p>
                        <p>: Hendrawan Siregar, SP, ANZIIF., CRMO</p>
                        <p>: Arifia Indah Liany ST, AAIK, AAAK, AIIS, QCRO</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="lead text-justify">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td>Direktur Utama</td>
                                                <td>:</td>
                                                <td>Megang Kacaribu, SE AMRP</td>
                                            </tr>
                                            <tr>
                                                <td>Direktur Keuangan & SDM</td>
                                                <td>:</td>
                                                <td>Arifia Indah Liany ST, AAIK, AAAK, AIIS, QCRO</td>
                                            </tr>
                                            <tr>
                                                <td >Larry the Bird</td>
                                                <td>:</td>
                                                <td>Hendrawan Siregar, SP, ANZIIF., CRMO</td>
                                            </tr>
                                            <tr>
                                                <td >Direktur Teknik</td>
                                                <td>:</td>
                                                <td>Hasbi Ashsiddiqi, S.Pi., AAIK, AIIS, CRGP</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> */}
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}
