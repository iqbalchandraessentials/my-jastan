import Accordion from '../../components/basic-components/Accordion';
import Header from '../../components/basic-components/Head';
import Navbar from '../../components/basic-components/Navbar';

export default function index() {
  return (
    <section className='product'>
      <Navbar />
      <Header />

      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <Accordion />
          </div>
          <div className='col-md-10 col-lg-8 col-xl-7'>
            <main className='mb-4'>
              <div className=''>
                <div className='row gx-4 gx-lg-5 justify-content-center'>
                  <div className='text-justify'>
                    <h2 className=''>Sekilas Tentang Kami</h2>
                    <div className="my-slider">
  <div>fa</div>
  <div>df</div>
  <div>fdff</div>
</div>


                    <div className="col-12 my-slider">
                        <div className="row">
                            <div className="col">
                                <div className="gambar ">
                                <div className="row">
                        <div className="product-img col-6">
                        <img
                          src='http://bit.ly/2tMBBTd' className="img-fluid" />
                        </div>
                        <div className="text col-6">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore et cupiditate eum nihil, illo eveniet voluptatum voluptas ducimus veritatis soluta.</p>
                        </div>
                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="gambar ">
                                <div className="row">
                        <div className="product-img col-6">
                        <img
                          src='http://bit.ly/2tMBBTd' className="img-fluid" />
                        </div>
                        <div className="text col-6">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore et cupiditate eum nihil, illo eveniet voluptatum voluptas ducimus veritatis soluta.</p>
                        </div>
                    </div>
                                </div>
                            </div>
                        </div>
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
