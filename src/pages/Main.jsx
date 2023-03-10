import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , FreeMode } from "swiper";

// Import Swiper styles
import 'swiper/css';
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <section>
            <h2 className='textHidden'>메인 페이지</h2>

            <Swiper 
                navigation={{
                    prevEl : '.navigation-basic .prev',
                    nextEl : '.navigation-basic .next',
                }}
                modules={[Navigation]}
                className="mainSwiper"
            >
                <SwiperSlide style={{backgroundImage: `url(${require('../images/mainSliderImg.png')})`}}>
                    <div className="contentSize">
                        <strong>
                            창업톡 첫걸음<br />
                            관심 창업아이템<br />
                            저장하기
                        </strong>
                        <a href="">바로가기</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{backgroundImage: `url(${require('../images/mainSliderImg.png')})`}}>
                    <div className="contentSize">
                        <strong>
                            창업톡 첫걸음<br />
                            관심 창업아이템<br />
                            저장하기
                        </strong>
                        <a href="">바로가기</a>
                    </div>
                </SwiperSlide>
                <div className="navigation-basic">
                    <div className='prev'></div>
                    <div className='next'></div>
                </div>
            </Swiper>

            <div className='contentSize'>
                <div className='popularArea'>
                    <h3>인기 창업 키워드</h3>
                    <div className='sliderArea'>
                        <Swiper 
                            navigation={{
                                prevEl : '.sliderArea .navigation-circle .prev',
                                nextEl : '.sliderArea .navigation-circle .next',
                            }}
                            slidesPerView={"auto"}
                            freeMode={true}
                            modules={[FreeMode ,Navigation]}
                            className="popularSwiper"
                        >
                            <SwiperSlide><Link>한식</Link></SwiperSlide>
                            <SwiperSlide><Link>타일</Link></SwiperSlide>
                            <SwiperSlide><Link>양식</Link></SwiperSlide>
                            <SwiperSlide><Link>디저트</Link></SwiperSlide>
                            <SwiperSlide><Link>독서실</Link></SwiperSlide>
                            <SwiperSlide><Link>퓨전요리</Link></SwiperSlide>
                            <SwiperSlide><Link>제과제빵</Link></SwiperSlide>
                            <SwiperSlide><Link>스터디카페</Link></SwiperSlide>
                            <SwiperSlide><Link>한식</Link></SwiperSlide>
                            <SwiperSlide><Link>타일</Link></SwiperSlide>
                            <SwiperSlide><Link>타일</Link></SwiperSlide>
                            <SwiperSlide><Link>타일</Link></SwiperSlide>
                        </Swiper>
                        <div className="navigation-circle">
                            <div className='prev imgBox'></div>
                            <div className='next imgBox'></div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3>홍길동님에게 추천하는 창업아이템</h3>
                    <div className='sliderArea'>
                        <Swiper 
                            navigation={{
                                prevEl : '.sliderArea .navigation-circle .prev',
                                nextEl : '.sliderArea .navigation-circle .next',
                            }}
                            slidesPerView={"auto"}
                            freeMode={true}
                            modules={[FreeMode ,Navigation]}
                            className="popularSwiper"
                        >
                            <SwiperSlide><Link>한식</Link></SwiperSlide>
                            <SwiperSlide><Link>타일</Link></SwiperSlide>
                            <SwiperSlide><Link>양식</Link></SwiperSlide>
                            <SwiperSlide><Link>디저트</Link></SwiperSlide>
                            <SwiperSlide><Link>독서실</Link></SwiperSlide>
                            <SwiperSlide><Link>퓨전요리</Link></SwiperSlide>
                            <SwiperSlide><Link>제과제빵</Link></SwiperSlide>
                            <SwiperSlide><Link>스터디카페</Link></SwiperSlide>
                            <SwiperSlide><Link>한식</Link></SwiperSlide>
                            <SwiperSlide><Link>타일</Link></SwiperSlide>
                            <SwiperSlide><Link>타일</Link></SwiperSlide>
                            <SwiperSlide><Link>타일</Link></SwiperSlide>
                        </Swiper>
                        <div className="navigation-circle">
                            <div className='prev imgBox'></div>
                            <div className='next imgBox'></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

