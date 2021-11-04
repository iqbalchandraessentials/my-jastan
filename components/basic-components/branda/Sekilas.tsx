import Image from "next/image";

export default function Sekilas() {
  return (
    <div className='container'>
      <div className='d-flex justify-content-center mt-5'>
        <section className='sekilas col-10  mt-lg-5 mt-md-2'>
          <div className='row'>
            <div className='col-lg-6 col-md-12'>
              <div className="logo-jastan">
              <Image src='/img/jastan.png' height={50} width={202} alt='logo-jastan' className="img-fluid" />
              </div>
              <p className='jastan-adalah'>
                PT Asuransi Jasa Tania Tbk (Asuransi Jastan) adalah asuransi
                umum yang menyajikan berbagai jenis produk Asuransi Standar
                diantaranya Asuransi Kebakaran, Kendaraan Bermotor, Rekayasa,
                Pengangkutan Barang, Surety Bond, Miscellaneous, dan Kesehatan.
                <br />
                <br />
                Asuransi Jastan juga menyajikan produk Pengembangan seperti
                Asuransi JT Oto, JT Griya, Ternak, Tanaman Perkebunan, Askes JT
                Care Cash Plan, Askes JT Care Micro, dan Tanggung Gugat
                Pelayanan Kesehatan Rumah Sakit
              </p>
            </div>
            <div className='col-lg-6 col-md-12 image-sekilas'>
              <Image src='/img/opening.png' className="img-fluid " height={575} width={572} alt='image-sekilas' />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
