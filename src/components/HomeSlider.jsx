import React, { useCallback, useContext, useRef, useState } from 'react';
import { Navigation ,  Autoplay , Pagination } from "swiper";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ResponsiveContext } from '../context/Responsive';

export default function HomeSlider() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const mainSliderRef = useRef(null);
    const [mainSliderAuto , setMainSliderAuto] = useState(true);
    const responsive = useContext(ResponsiveContext);
    const onAutoplayTimeLeft = useCallback((s, time, progress) => {
        if(!responsive || s.slides.length === 1){return}
        progressContent.current.style.width = (1 - Math.abs(progress)) * 100 + '%';
    },[responsive])
    const autoPlayEvent = () =>{
        if(!responsive){return}
        if(mainSliderAuto ){
            mainSliderRef.current.swiper.autoplay.pause();
            setMainSliderAuto(!mainSliderAuto)
        }else{
            mainSliderRef.current.swiper.autoplay.resume();
            setMainSliderAuto(!mainSliderAuto)
        }
    }
    return (
        <div>
             <Swiper 
                ref={mainSliderRef}
                navigation={{
                    prevEl : '.navigation-basic .prev',
                    nextEl : '.navigation-basic .next',
                }}
                autoplay={{
                    el: '.autoPlay',
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el : '.pager',
                    clickable: true,
                    type: "fraction",
                }}
                modules={[Navigation , Autoplay ,Pagination]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                loop={true}
                className="mainSwiper"
            >
                <SwiperSlide>
                    <div>
                        <strong>
                            창업톡 첫걸음<br />
                            관심 창업아이템<br />
                            저장하기
                        </strong>
                        <Link to={'https://blog.naver.com/lenapower/222974469646'}>바로가기</Link>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div>
                        <strong>
                            창업톡 첫걸음<br />
                            관심 창업아이템<br />
                            저장하기
                        </strong>
                        <Link>바로가기</Link>
                    </div>
                </SwiperSlide> */}
                <div className="navigation-basic">
                    <div className='prev'></div>
                    <div className='next'></div>
                </div>
                <div className='playArea'>
                    <div>
                        <span className='progress' ref={progressCircle}>
                            <span ref={progressContent}></span>
                        </span>
                        <div className="pager"></div>
                        <button onClick={autoPlayEvent} className={mainSliderAuto ? 'pause' : 'resume'}>{mainSliderAuto ? '일시정지' : '재생'}</button>
                    </div>
                </div>
            </Swiper>
        </div>
    );
}

