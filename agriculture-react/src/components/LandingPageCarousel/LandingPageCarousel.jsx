import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import './LandingPageCarousel.css'


export default function LPCarousel({slides}){
    return(
        <>
            <Carousel className="lp-carousel"
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
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
                    items: 3,
                    partialVisibilityGutter: 40
                    },
                    mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                    },
                    tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable>

            

            {
                slides?
                    slides.map((items)=>{
                        return(
                            <div className="d-flex flex-column align-items-center lp-testimoni-div">
                                <div className="lp-testimonidiv-toppart d-flex">
                                    <img src={items.avatar} className="rounded-circle lp-testimoni-pic "/>
                                    <div className="lp-testimoni-profilword">
                                        <p className="fonts20 fontw700">{items.nama}, {items.age} Tahun</p>
                                        <div className="fonts14 fontw500">
                                            <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                                <path d="M14.2229 8.31688L12.5846 9.97158C12.3597 10.1984 12.2138 10.6451 12.269 10.9609L12.5739 12.8481C12.7717 14.0557 12.0328 14.5987 10.9339 14.0597L9.07014 13.1389C8.75806 12.9854 8.25454 13.0059 7.95909 13.191L6.37015 14.1711C5.11524 14.9435 4.34217 14.4012 4.64726 12.9602L5.07361 10.9473C5.1519 10.5804 4.97952 10.0848 4.70014 9.84374L3.14366 8.50296C2.03059 7.5428 2.31357 6.64113 3.77866 6.49379L5.63395 6.31122C5.98074 6.27701 6.39553 5.99356 6.54896 5.68148L7.46981 3.81769C8.0133 2.72308 8.92965 2.70592 9.50671 3.78293L10.4064 5.465C10.5608 5.74814 10.9408 6.01728 11.2589 6.05761L13.5692 6.37707C14.8158 6.54768 15.11 7.42276 14.2229 8.31688Z" fill="#F59E0B"/>
                                            </svg>
                                            {items.score}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lp-testimoni-bottompart">
                                    <p className="fonts14 fontw400">{items.message}</p>
                                </div>
                            </div>
                        )
                    }):
                    <></>
            }
            </Carousel>


        </>
    )
}