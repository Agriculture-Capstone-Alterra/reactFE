
import "./LandingPage.css"
import { Bunga,Pohon, Kacangkacangan,TanamanHias,Umbiumbian,Sayuran,
IlustrasiPromosi1, IlustrasiPromosi1Hover, IlustrasiPromosi2, IlustrasiPromosi2Hover,
Mockup, Logo1, Logo2, Tangan, StepbyStep, InfoCuacaAkurat, PengingatWaktuMenyiram, 
Avatar1,Avatar2,Avatar3,Avatar4,Avatar5, GetitGplay, DownloadonAppStore, } from "../../assets"
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6"
import { AiFillInstagram } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import LPCarousel from "../../components/LandingPageCarousel/LandingPageCarousel";

function JenisTanaman({jenistanaman}){
    return(
        <>
            <div className="d-flex flex-column align-items-center lp-jenistnmn-picgroup">
                <img src={jenistanaman.piclink} className="rounded-circle lp-jenistnmnpic"/>
                <p className="fonts16 fontw600 lp-jenistnmnpicwords">{jenistanaman.nama}</p>
            </div>
        </>
    )
}


export default function LandingPage(){
    const jenistnmn = [
        {nama: "Bunga", piclink: Bunga},
        {nama: "Tanaman Hias", piclink: TanamanHias},
        {nama: "Umbi-umbian", piclink: Umbiumbian},
        {nama: "Kacang-kacangan", piclink: Kacangkacangan},
        {nama: "Pohon", piclink: Pohon},
        {nama: "Sayuran", piclink: Sayuran},
    ]
    const testimonies = [
        {
            nama: "Fulan",age:"25",score: "5.0",avatar: Avatar1,
            message: "Aplikasi ini sungguh luar biasa! Saya seorang pemula dalam pertanian, dan fitur 'Menanam Step by Step' benar-benar membantu saya memahami langkah-langkah yang diperlukan untuk merawat tanaman saya. Saya juga sangat menghargai fitur 'Melihat Cuaca' yang memungkinkan saya untuk merencanakan dengan baik. Fitur CS Chatbot yang responsif sangat membantu saat saya membutuhkan bantuan instan."
        },
        {
            nama: "Fulani",age:"19",score: "5.0",avatar: Avatar2,
            message: "Aplikasi ini telah membantu bisnis pertanian saya tumbuh pesat. Fitur 'History Menanam' memungkinkan saya untuk melacak perkembangan setiap tanaman dari awal hingga panen. Saya juga menemukan artikel pertanian yang informatif dan berguna. Aplikasi ini telah menjadi mitra penting dalam pertanian saya."
        },
        {
            nama: "Ulain",age:"30",score: "5.0",avatar: Avatar3,
            message: "Aplikasi ini adalah perangkat wajib bagi saya sebagai pemilik kebun. Saya dapat mengatur jadwal perawatan tanaman dengan mudah berkat 'Pengingat Merawat Tanaman'. Fitur 'Menanam Step by Step' memberikan panduan yang sangat berguna untuk tanaman tertentu. Saya sangat puas dengan kemudahan penggunaan aplikasi ini."
        },
        {
            nama: "Julan",age:"21",score: "5.0",avatar: Avatar4,
            message: "Saya selalu mencari sumber informasi yang terpercaya dalam pertanian, dan aplikasi ini memberikan itu. Artikel pertanian yang tersedia sangat informatif dan terus diperbarui. Aplikasi ini memberikan wawasan yang berharga tentang praktik pertanian terbaru."
        },
        {
            nama: "Fulan",age:"25",score: "5.0",avatar: Avatar5,
            message: "Aplikasi ini sungguh luar biasa! Saya seorang pemula dalam pertanian, dan fitur 'Menanam Step by Step' benar-benar membantu saya memahami langkah-langkah yang diperlukan untuk merawat tanaman saya. Saya juga sangat menghargai fitur 'Melihat Cuaca' yang memungkinkan saya untuk merencanakan dengan baik. Fitur CS Chatbot yang responsif sangat membantu saat saya membutuhkan bantuan instan."
        },
        
    ]

    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg lp-navbar">
                <div className="container-fluid">
                    <div classname="lp-logonbrand">
                        <img src={Logo1} className="lp-logo" />
                    </div>
                    <div classname="">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav lp-btn-group">
                            <li className="nav-item">
                                <a className="lp-nav-link nav-link fonts16 fontw600" aria-current="page" href="#scrollspyhome" >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="lp-nav-link nav-link fonts16 fontw600" href="#scrollspyfitur">
                                    Fitur
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="lp-nav-link nav-link fonts16 fontw600" href="#scrollspyaplikasi">
                                    Aplikasi
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="lp-nav-link nav-link fonts16 fontw600" href="#scrollspytestimoni">
                                    Testimoni
                                </a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" >
                <div className="lp-home-div container-fluid d-flex" id="scrollspyhome">
                    <div className="lp-home-leftpart text-light">
                        <p className="fonts40 fontw700">Ubah Pertanianmu dengan Aplikasi Mobile Kami!</p>
                        <p className="fonts20 fontw400">Selamat datang di solusi modern untuk pertanianmu. Aplikasi mobile kami membantu kamu mengelola tanaman, memonitor cuaca, dan merencanakan perawatan tanaman dengan mudah.</p>
                        <div className="">
                            <button className="lp-btn-unduh fontw600">Unduh Sekarang!</button>
                        </div>
                    </div>
                    <div className="lp-home-rightpart">
                        <img src={Tangan} className="lp-home-tangan"/>
                    </div>
                </div>
                <div className="lp-fitur-div container-fluid" id="scrollspyfitur">
                    <div className="lp-fitur-subdiv text-light">
                        <div className="lp-fitur-container stepbystep">
                            <div className="lp-fitur-wordsetpbystep">
                                <p className="fonts24 fontw700">Step by Step</p>
                                <p className="fonts14 fontw400 lp-fitur-words">Jelajahi panduan langkah demi langkah tentang cara menanam tanaman dengan benar</p>
                            </div>
                            <img src={StepbyStep} className="lp-stepbystep"/>
                        </div>
                        <div className="lp-fitur-container infocuaca">
                            <div className="lp-fitur-wordinfocuaca">
                                <p className="fonts24 fontw700">Informasi Cuaca Akurat</p>
                                <p className="fonts14 fontw400 lp-fitur-words">Perkiraan cuaca secara real-time untuk wilayah kamu, sehingga dapat merencanakan perubahan cuaca yang tiba-tiba</p>
                                <img src={InfoCuacaAkurat} className="lp-infocuacaakurat"/>
                            </div>
                        </div>
                        <div className="lp-fitur-container waktusiram">
                            <div className="lp-fitur-wordwaktusiram">
                                <p className="fonts24 fontw700 title">Pengingat Waktu Menyiram</p>
                                <p className="fonts14 fontw400 lp-wordwaktusiram lp-fitur-words">Kamu dapat menjadwalkan penyiraman, pemupukan, dan perawatan lainnya sehingga tanaman kamu selalu dalam kondisi prima</p>
                                <img src={PengingatWaktuMenyiram} className="lp-pengingatwaktumenyiram"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lp-jenistnmn-div container-fluid">
                    <div className="d-flex justify-content-center align-items-center flex-column lp-jenistnmn-words">
                        <p className="fonts32 fontw700 lp-font-primary800">Jenis-Jenis Tanaman</p>
                        <p className="fonts20 fontw400 lp-font-primary800">Tersedia panduan dari berbagai jenis <span className="fontw600">macam tanaman</span> yang bisa kamu coba</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center lp-jenistnmn-variant">
                        {jenistnmn ?
                            jenistnmn.map((items)=>{
                                return (
                                    <JenisTanaman jenistanaman={items}/>
                                )
                            })
                        
                        :
                        <></>}
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="d-flex align-items-center justify-content-center lp-fiturpromote">
                        <div className="d-flex flex-column lp-fiturpromote-wordpart">
                            <p className="fonts32 fontw800">Pilih Produk Terbaik untuk Pertanian Kamu</p>
                            <p className="fonts16 fontw400">Dengan aplikasi kami, kamu Dapat Mengakses Produk Pertanian Berkualitas Tinggi dengan Cepat. Seperti bibit tanaman dan benih. Kami siap mengirim pesananmu dimanapun kamu berada.</p>
                        </div>
                        <img src={IlustrasiPromosi1} className="lp-fiturpromote-img"/>
                    </div>
                    <div className="d-flex align-items-center justify-content-center lp-fiturpromote">
                        <img src={IlustrasiPromosi2} className="lp-fiturpromote-img left"/>
                        <div className="d-flex flex-column lp-fiturpromote-wordpart">
                            <p className="fonts32 fontw800">Pantau dengan Cermat, Panen dengan Percaya Diri!</p>
                            <p className="fonts16 fontw400">Kamu bisa membagikan progres perkembangan dari tanamanmu berupa foto setiap minggunya untuk melihat perubahannya melalui fitur Riwayat Menanam.</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid lp-home-div text-light" id="scrollspyaplikasi">
                    <div className="d-flex align-items-center justify-content-center lp-aplikasi">
                        <div className="d-flex flex-column lp-fiturpromote-wordpart">
                            <div className="lp-aplikasi-wordgroup">
                                <p className="fonts32 fontw800">Unduh Aplikasinya Sekarang Juga!</p>
                                <p className="fonts16 fontw400">Jadikan pertanian kamu lebih efisien dengan aplikasi kami. Dapatkan aplikasinya melalui tautan di bawah ini.</p>
                            </div>
                            <div className="lp-aplikasi-dlbtngroup d-flex">
                                <img src={GetitGplay} className="lp-aplikasi-dlbtn"/>
                                <img src={DownloadonAppStore} className="lp-aplikasi-dlbtn"/>
                            </div>
                        </div>
                        <img src={Mockup} className="lp-aplikasi-img"/>
                    </div>
                </div>
                <div className="lp-jenistnmn-div container-fluid" id="scrollspytestimoni">
                    <div className="d-flex justify-content-center align-items-center flex-column lp-jenistnmn-words">
                        <p className="fonts32 fontw700 lp-font-primary800">Testimoni Kami</p>
                        <p className="fonts20 fontw400 lp-font-primary800">Bergabunglah dengan ribuan petani yang telah memanfaatkan sumber daya kami untuk <span className="fontw600">pertanian yang lebih baik</span></p>
                    </div>
                    <div className="d-flex align-items-center lp-testimoni">
                        {/* <EmblaCarouselLP slides={testimonies} /> */}
                        <LPCarousel slides={testimonies} />
            
                    </div>
                </div>
                <div className="lp-footer d-flex flex-column align-items-center jusitfy-content-center">
                    <div className="lp-footer-nav d-flex align-items-center justify-content-between">
                        <div className="lp-footernav-logobrand">
                            <img src={Logo2} className="lp-logo" />
                        </div>
                        <div className="lp-footernav-navbtns d-flex justify-content-between">
                            <a className="removelinkdecor" href="#scrollspyhome"><p className=" fonts12 fontw400">Home</p></a>
                            <a className="removelinkdecor" href="#scrollspyfitur"><p className="fonts12 fontw400">Fitur</p></a>
                            <a className="removelinkdecor" href="#scrollspyaplikasi"><p className="fonts12 fontw400">Aplikasi</p></a>
                            <a className="removelinkdecor" href="#scrollspytestimoni"><p className="fonts12 fontw400">Testimoni</p></a>
                        </div>
                    </div>
                    <div className="lp-footer-line"></div>
                    <div className="lp-footer-lower d-flex justify-content-between align-items-center">
                        <p className="fonts12 fontw400">© Copyright 2023</p>
                        <div className="lp-footer-socialsgroup d-flex justify-content-between">
                            <AiFillInstagram className="lp-footersocialbtn" />
                            <FaLinkedinIn className="lp-footersocialbtn" />
                            <FaTwitter className="lp-footersocialbtn" />
                            <IoMdMail className="lp-footersocialbtn" />
                            <FaFacebookF className="lp-footersocialbtn" />

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}