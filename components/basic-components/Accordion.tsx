import Link from 'next/link'
export default function Accordion() {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button className="accordion-button collapsed text-capitalize" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Tentang Kami
          </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            <Link href="/about">
              Sekilas Tentang Kami
            </Link>
          </div>
          <div className="accordion-body">
            <Link href="/about/visi-misi">
              Visi, Misi, Budaya Perseroan
            </Link>
          </div>
          <div className="accordion-body">
            <Link href="/about/riwayat-perseroan">
              Riwayat Perseroan
            </Link>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <div className="single-accordion">
          <Link href="/about/struktur-organisasi">
            Struktur Organisasi
          </Link>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button className="accordion-button collapsed text-capitalize" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Manajem Perseroan
          </button>
        </h2>
        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            <Link href='/about/manajemen-perseroan/dewan-komisaris'>
            Komisaris Perseroan
            </Link>
          </div>
          <div className="accordion-body">
            Direksi Perseroan
          </div>
          <div className="accordion-body">
            Komite
          </div>
          <div className="accordion-body">
            Corporate Secretary
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <div className="single-accordion">
          <Link href="/about/pemegang-saham">
          Pemegang Saham
          </Link>
        </div>
      </div>
      <div className="accordion-item">
        <div className="single-accordion">
          <Link href="/about/anggaran-dasar">
          Anggaran Dasar
          </Link>
        </div>
      </div>
      <div className="accordion-item">
        <div className="single-accordion">
        <Link href="/about/penghargaan">
          Penghargaan
          </Link>
        </div>
      </div>
      <div className="accordion-item">
        <div className="single-accordion">
        <Link href="/about/karir">
          Karir
        </Link>
        </div>
      </div>

    </div>
  )
}
