import Carousel from "react-multi-carousel"
import React, { useEffect, useState } from "react";
import ModalTrigger from "../Modal/ModalTrigger";
import TrashIcon from "../../assets/trash.svg";
import ViewIcon from "../../assets/view-icon.svg";
import Modal from "../Modal/Modal";
import ImgModal from "../ImgModal/ImgModal";
import "./ImgSliderS.css"

export default function ImgSliderS({imagesdata, deleteImgModalName, handleDeleteClick, modalImageTrigger }){
    const [showButtons, setShowButtons] = useState(false);
    const handleMouseEnter = () => {
        setShowButtons(true);
    };
    const handleMouseLeave = () => {
        setShowButtons(false);
    };



    const [imagedatastate, setImageDataState] = useState(imagesdata);
    const [showButtonsEach, setShowButtonsEach] = useState(()=>{
        return new Array(imagesdata.length).fill({btnstatus: false})
    })
    // [{btnstatus: true}, {btnstatus: false}]
    const initialButton = () =>{
        const list= []
        imagesdata.map(()=>{
            list.push({btnstatus: false})
        })
        setShowButtonsEach(list)
    }
    function handleButtonShow(id){
        setShowButtonsEach(prevData => {
            const newData = prevData.map((item, index) => {
            if (index === id) {
                return {btnstatus: true}; 
            }
            return item; 
            });
            return newData;
        });
    }
    function handleButtonLeave(id){
        setShowButtonsEach(prevData => {
            const newData = prevData.map((item, index) => {
            if (index === id) {
                return {btnstatus: false}; 
            }
            return item; 
            });
            return newData;
        });
    }
    
    useEffect(()=>{
        initialButton()
        console.log("show button each",showButtonsEach)
    }, [imagesdata])



    return (
        <>
            <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className="imgsliders-carousel"
            containerClass="imgsliders-container"
            itemClass="imgsliders-item"
            dotListClass=""
            sliderClass="imgsliders-carouselslider"
            draggable
            focusOnSelect={false}
            infinite={false}
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
                items: 3,
                partialVisibilityGutter: 0
                },
                mobile: {
                breakpoint: {
                    max: 464,
                    min: 0
                },
                items: 1,
                partialVisibilityGutter: 0
                },
                tablet: {
                breakpoint: {
                    max: 1024,
                    min: 464
                },
                items: 1,
                partialVisibilityGutter: 0
                }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            slidesToSlide={1}
            swipeable
            partialVisible={false}
            >
                {   
                    
                    (imagesdata &&  imagesdata.length > 0 ) ?
                    imagesdata.map((item, index) => {
                        return (
                            <div className="imgsliders-eachimg-div " key={index}>
                                <div className="imglsiders-eachimg-incontainer">
                                    {
                                        showButtonsEach[index] && showButtonsEach[index].btnstatus?
                                        <div
                                        className="overlay"
                                        style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        }}
                                        onMouseLeave={()=>handleButtonLeave(index)}
                                        >
                                            <button style={{ display: "flex", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0)", borderStyle: "none"}} onClick={()=>{modalImageTrigger(index)}} >
                                                <img src={ViewIcon} alt="View Icon" className="ml-2" width="16" height="16" />
                                            </button>
                                            <ModalTrigger
                                            modalTarget={deleteImgModalName} // Pastikan variabel ini didefinisikan dan diteruskan dari komponen induk
                                            style={{ display: "flex", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0)", borderStyle: "none"}}
                                            onClick={() => handleDeleteClick(item.id)} // Perhatikan 'item', pastikan variabel ini didefinisikan dan diteruskan dari komponen induk
                                            >
                                                <img src={TrashIcon} alt="Delete Icon" className="ml-2" width="16" height="16" />   
                                            </ModalTrigger>
                                        </div>
                                        :
                                        null
                                    }
                                    <img 
                                    
                                    onMouseEnter={()=> handleButtonShow(index)} 
                                    className="imgsliders-img" src={item.link} />
                                </div>
                            </div>
                        )
                    }) :
                    <></>
                }
            </Carousel>
        </>
    )
}