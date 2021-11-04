import Accordion from "../../components/basic-components/Accordion"
import Head from "../../components/basic-components/Head"
import Navbar from "../../components/basic-components/Navbar"

export default function index() {
    return (
        <section className="pemegang-saham">
            <Navbar/>
            <Head />
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <Accordion />
                    </div>
                    <div className="col-md-8 col-lg-8 col-xl-7">
                        <main className="mb-4">
                            
                                <div className="row gx-4 gx-lg-5 justify-content-center">
                                    <div className="lead text-justify">
                                        <h2 className="blockquote">PEMEGANG SAHAM</h2>

                                        <p>
                                            Komposisi kepemilikan saham per 30 September 2021, Pemegang Saham Pengendali Perseroan adalah Dana Pensiun Perkebunan (DAPENBUN) sebesar 77,39%.
                                        </p>

                                        <div className="table-responsive">
                                            <table className="table table-striped table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <td><strong>No.</strong></td>
                                                        <td><strong>Pemilik Saham</strong></td>
                                                        <td ><strong>Jumlah Saham</strong></td>
                                                        <td ><strong>Nominal Saham</strong></td>
                                                        <td ><strong>Persentase</strong></td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Dana Pensiun Perkebunan</td>
                                                        <td>1.083.519.966</td>
                                                        <td>108.351.996.600</td>
                                                        <td>77,39%</td>
                                                    </tr>
                                                    <tr>
                                                        <td  >2</td>
                                                        <td>Direktur Perseroan</td>
                                                        <td>263.300</td>
                                                        <td>26.330.000</td>
                                                        <td>&nbsp;0,01%</td>
                                                    </tr>
                                                    <tr>
                                                        <td  >3</td>
                                                        <td>Masyarakat</td>
                                                        <td>316.216.734</td>
                                                        <td>31.621.673.400</td>
                                                        <td>22,60%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td><strong>Jumlah</strong></td>
                                                        <td><strong>1.400.000.000</strong></td>
                                                        <td><strong>140.000.000.000</strong></td>
                                                        <td><strong>100,00%</strong></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </section>
    )
}
