import React from 'react';

export default function Berita() {
  return (
    <div className='container-fluid'>
      <div className=' d-flex justify-content-center'>
        <section className='berita col-10 mt-5'>
          <h1 className='text-center title'>BERITA</h1>

          <div className='mt-lg-5 mt-md-4'>
            <div className='row'>
              <div className='artikle col-lg-4'>
                <img
                  src='img/berita.png'
                  className='img-fluid'
                  width='390px'
                  alt='artikle'
                />
                <div className='info'>
                  <span className="tanggal"> 10 MAR 2021</span>
                  <br />
                  <span className="judul-berita">Peringatan HUT 42 PT Asuransi Jasa Tania Tbk</span>
                </div>
              </div>
              <div className='artikle col-lg-4'>
                <img
                  src='img/berita.png'
                  className='img-fluid'
                  width='390px'
                  alt='artikle'
                />
                <div className='info'>
                  <span className="tanggal"> 10 MAR 2021</span>
                  <br />
                  <span className="judul-berita">Peringatan HUT 42 PT Asuransi Jasa Tania Tbk</span>
                </div>
              </div>
              <div className='artikle col-lg-4'>
                <img
                  src='img/berita.png'
                  className='img-fluid'
                  width='390px'
                  alt='artikle'
                />
                <div className='info'>
                  <span className="tanggal"> 10 MAR 2021</span>
                  <br />
                  <span className="judul-berita">Peringatan HUT 42 PT Asuransi Jasa Tania Tbk</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
