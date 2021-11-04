import Accordion from '../../../components/basic-components/Accordion';
import Head from '../../../components/basic-components/Head';
import Navbar from '../../../components/basic-components/Navbar';

export default function DewanKomisaris() {
  return (
    <section className="dewan-komisaris">
        <Navbar/>
      <Head />
      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <Accordion />
          </div>
          <div className='col-md-10 col-lg-8 col-xl-7'>
            <main className='mb-4'>
              <div className=''>
                <div className='row gx-4 gx-lg-5'>
                  <h3 className="mb-4">KOMISARIS PERSEROAN</h3>
                 
                  <div className='col-md-6 col-sm-6 mb-4'>
                    <img
                      src={
                        'https://jastan.co.id/storage/img/managements/1633503075Alexander-Maha.jpg'
                      }
                      width='300'
                      alt='team member'
                      className='img-responsive'
                    />
                    <div className='desk'>                      
                       <b>Ir. Alexander Maha, M.M., QCRO </b> 
                            <br />
                        <span>Komisaris Utama</span>
                    </div>
                  </div>
                  <div className='col-md-6 col-sm-6 mb-4'>
                    <img
                      src={
                        'https://jastan.co.id/storage/img/managements/1633500982Doni-P-Gandamihardja-Web.jpg'
                      }
                      width='300'
                      alt='team member'
                      className='img-responsive'
                    />
                    <div className='desk'>                      
                       <b>Ir. Doni P. Gandamihardja, QCRO </b> 
                       <br />
                        <span>Komisaris</span>
                    </div>
                  </div>

                  <div className='col-md-6 col-sm-6 mb-4'>
                    <img
                      src={
                        'https://jastan.co.id/storage/img/managements/1633501506Slamet-Solikhun.jpg'
                      }
                      width='300'
                      alt='team member'
                      className='img-responsive'
                    />
                    <div className='desk'>                      
                       <b>Slamet Solikhun, S.E., QCRO </b> 
                       <br />
                        <span>Komisaris Independen</span>
                    </div>
                  </div>

                  <div className='col-md-6 col-sm-6 mb-4'>
                    <img
                      src={
                        'https://jastan.co.id/storage/img/managements/1633501079Tetetn-Djaka-Triana-Web.jpg'
                      }
                      width='300'
                      alt='team member'
                      className='img-responsive'
                    />
                    <div className='desk'>                      
                       <b>Ir. Teten Djaka Triana, M.M., QCRO </b> 
                       <br />
                        <span>Komisaris Independen</span>
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
