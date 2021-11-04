import React from 'react';

export default function Produk() {
  return (
    <div className="container ">
      <div className="d-flex justify-content-center">
        <section className="produk col-10 mt-5">
          <h1 className="text-center title">PRODUK</h1>

          <div className="category mt-md-5">
            <div className="row">
              <div className="standard col-md-6">
                <img
                  src="img/standard.png"
                  className="img-fluid"
                  width="390px"
                  alt="standard"
                />
                <div className="category-product">
                  <b>PRODUK STANDARD</b>
                </div>
                <div className="info">
                  <span className="text-muted">
                    Asuransi Kebakaran, Kendaraan Bermotor, Rekayasa,
                    Pengangkutan Barang, Surety Bond, Miscellaneous, dan
                    Kesehatan
                  </span>
                </div>
              </div>
              <div className="standard col-md-6">
                <img
                  src="img/pengembangan.png"
                  className="img-fluid"
                  width="390px"
                  alt="standard"
                />
                <div className="category-product">
                  <b>PRODUK PENGEMBANGAN</b>
                </div>
                <div className="info">
                  <span className="text-muted">
                    Asuransi JT Oto, JT Griya, Ternak, Tanaman Perkebunan, Askes
                    JT Care Cash Plan, Askes JT Care Micro, dan Tanggung Gugat
                    Pelayanan Kesehatan Rumah Sakit.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
