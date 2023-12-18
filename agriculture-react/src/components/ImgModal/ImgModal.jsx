import "./ImgModal.css"
import Carousel from "react-multi-carousel";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

// CARA MENGGUNAKAN
// buat sebuah state berupa boolean, masukan sebagai prop modalstatus
// siapkan sebuah fungsi untuk mengganti state tersebut menjadi lawan booleannya. seprti >> !statemodal 
// fungsi tersebut dimasukkan di prop modalcloser DAN di prop onClick di tombol yang seharusnya membuka modal tersebut.
// fungsi di dalam props onlcik harus callback function dan memasukkan index image di parameternya
// misal : onClick={()=>handleonClick(1)}
// "1" disitu adalah index image.

// PROPS EXPLANATION
// modalstatus adalah status modal dibuka atau ditutup. isinya boolean
// modalcloser adalah fungsi untuk menutup modal.
// imgdatas adalah array yang setiap itemnya adalah seprti berikut :
// {
//   link:"https://loremflickr.com/640/480/abstract",
//   datecreated:"20-20-2907"
// }
// imgclickedindex isinya adalah index tertentu dari array imgdatas. ini gunanya agar ketika kita mengclick image yang (misalnya) ketiga, 
// carouselnya otomatis fokus ke image yang ketiga dari image image yang dikasih di imgdatas.

export default function ImgModal({modalstatus, modalcloser, imgdatas, imgclickedindex}) {
    const sliderRef = useRef(null);
    const jumpToSlide = () => {
        if (sliderRef && sliderRef.current) {
            sliderRef.current.goToSlide(imgclickedindex);
        }
    };

    useEffect(()=>{
        jumpToSlide()
        // console.log(imgclickedindex);
    },[imgclickedindex])



    const CustomRight = ({onClick}) => (
        <button onClick={onClick} className="imgmodal-btn fonts16"><FaAngleRight /></button>
    )
    const CustomLeft = ({onClick}) => (
        <button onClick={onClick} className="imgmodal-btn fonts16"><FaAngleLeft /></button>
    )

    if(!modalstatus) return null
    return (
        <>
            <div className="imgmodal-overlay z-3" onClick={modalcloser}>
                <div onClick={(e)=>{e.stopPropagation();}}
                className="imgmodal-container d-flex justify-content-center align-items-center">
                    {/* <CustomLeft/> */}
                    <Carousel className="imgmodal-carousel"
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    sliderClass="align-items-center justify-content-center"    
                    containerClass="container"
                    // customLeftArrow={<CustomLeft />}
                    // customRightArrow={<CustomRight />}
                    dotListClass=""
                    draggable
                    focusOnSelect
                    infinite={false}
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 1,
                        partialVisibilityGutter: 40
                        },
                        mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                        },
                        tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    slidesToSlide={1}
                    swipeable
                    ref={sliderRef} //ini untuk biar image yang diclick bisa ditampilkan langsung




                    >
                        {
                            imgdatas ?
                            imgdatas.map((imgdata, index) => {
                                return (
                                    <div key={index} className="d-flex flex-column imgmodal-imgscontainer justify-content-between">
                                        <div className="d-flex justify-content-center">
                                            <img className="imgmodal-imgs" src={imgdata.link} />
                                        </div>
                                        <div className="d-flex justify-content-between fontw600 fonts12 text-light imgmodal-belowtext">
                                            <p>Terakhir ditambahkan</p>
                                            <p>{imgdata.datecreated}</p>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            <div className="d-flex flex-column">
                                <div className="d-flex justify-content-center text-light">
                                    <p className="">No image...</p>
                                </div>
                                <div className="d-flex justify-content-between fontw600 fonts12 text-light imgmodal-belowtext">
                                    <p>-</p>
                                    <p>-</p>
                                </div>
                            </div>
                        }                
                    </Carousel>
                </div>
            
            </div> 
        </>
    );
}