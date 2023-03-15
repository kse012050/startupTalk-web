import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , FreeMode } from "swiper";

// Import Swiper styles
import 'swiper/css';
import { Link } from 'react-router-dom';
import Item from '../components/item/Item';

export default function Home() {
    return (
        <>
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
                        <a href="/">바로가기</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{backgroundImage: `url(${require('../images/mainSliderImg.png')})`}}>
                    <div className="contentSize">
                        <strong>
                            창업톡 첫걸음<br />
                            관심 창업아이템<br />
                            저장하기
                        </strong>
                        <a href="/">바로가기</a>
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
                                prevEl : '.popularArea .sliderArea .navigation-circle .prev',
                                nextEl : '.popularArea .sliderArea .navigation-circle .next',
                            }}
                            slidesPerView={"auto"}
                            freeMode={true}
                            modules={[FreeMode ,Navigation]}
                            className="popularSwiper"
                        >
                            <SwiperSlide><Link to={'/'}>한식</Link></SwiperSlide>
                            <SwiperSlide><Link to={'/'}>타일</Link></SwiperSlide>
                            <SwiperSlide><Link to={'/'}>양식</Link></SwiperSlide>
                            <SwiperSlide><Link to={'/'}>디저트</Link></SwiperSlide>
                            <SwiperSlide><Link to={'/'}>독서실</Link></SwiperSlide>
                            <SwiperSlide><Link to={'/'}>퓨전요리</Link></SwiperSlide>
                            <SwiperSlide><Link to={'/'}>제과제빵</Link></SwiperSlide>
                            <SwiperSlide><Link to={'/'}>스터디카페</Link></SwiperSlide>
                            <SwiperSlide><Link to={'/'}>한식</Link></SwiperSlide>
                            <SwiperSlide><Link to={'/'}>타일</Link></SwiperSlide>
                            <SwiperSlide><Link to={'/'}>타일</Link></SwiperSlide>
                            <SwiperSlide><Link to={'/'}>타일</Link></SwiperSlide>
                        </Swiper>
                        <div className="navigation-circle">
                            <div className='prev imgBox'></div>
                            <div className='next imgBox'></div>
                        </div>
                    </div>
                </div>

                <div className='itemArea'>
                    <h3>홍길동님에게 추천하는 창업아이템</h3>
                    <div className='sliderArea'>
                        <Swiper 
                            navigation={{
                                prevEl : '.itemArea .navigation-circle .prev',
                                nextEl : '.itemArea .navigation-circle .next',
                            }}
                            slidesPerView={4}
                            spaceBetween={20}
                            modules={[Navigation]}
                            className="itemSwiper"
                        >
                            <SwiperSlide>
                                <Item img={require('../images/item01.png')} info={{title : '하노이 맥주 밤거리' , shop : 72 , cost : 1 , taik : 3}} support={true}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Item img={require('../images/item02.png')} info={{title : '지금 보고싶다' , shop : 120 , cost : 1, taik : 1}} support={true}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Item img={require('../images/item01.png')} info={{title : '하노이 맥주 밤거리' , shop : 72 , cost : 1 , taik : 3}}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Item img={require('../images/item02.png')} info={{title : '지금 보고싶다' , shop : 120 , cost : 1, taik : 1}} support={true}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Item img={require('../images/item01.png')} info={{title : '하노이 맥주 밤거리' , shop : 72 , cost : 1 , taik : 3}} support={true}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Item img={require('../images/item02.png')} info={{title : '지금 보고싶다' , shop : 120 , cost : 1, taik : 1}}/>
                            </SwiperSlide>
                        </Swiper>
                        <div className="navigation-circle">
                            <div className='prev imgBox'></div>
                            <div className='next imgBox'></div>
                        </div>
                    </div>
                </div>

                <div className='bastArea'>
                    <h3>지금 핫한 창업아이템</h3>
                    <div className='sliderArea'>
                        <Swiper 
                            navigation={{
                                prevEl : '.bastArea .navigation-circle .prev',
                                nextEl : '.bastArea .navigation-circle .next',
                            }}
                            slidesPerView={3}
                            spaceBetween={20}
                            modules={[Navigation]}
                            className="itemSwiper bestList"
                        >
                            <SwiperSlide>
                                <Item img={require('../images/item-best01.png')} type="best" bookmark={true}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Item img={require('../images/item-best02.png')} type="best" bookmark={true}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Item img={require('../images/item-best01.png')} type="best" bookmark={true}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Item img={require('../images/item-best02.png')} type="best" bookmark={true}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Item img={require('../images/item-best01.png')} type="best" bookmark={true}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Item img={require('../images/item-best02.png')} type="best" bookmark={true}/>
                            </SwiperSlide>
                        </Swiper>
                        <div className="navigation-circle">
                            <div className='prev imgBox'></div>
                            <div className='next imgBox'></div>
                        </div>
                    </div>
                </div>

                <div className='marketingArea'>
                    <h3>연계 마케팅 정보</h3>
                    <div>
                        <Link to={'/marketing'}>
                            <img src={require('../images/main-marketing01.png')} alt="우리 매장에 딱! 필요한 최적화 마케팅" />
                        </Link>
                        <Link to={'/marketing'}>
                            <img src={require('../images/main-marketing02.png')} alt="창업톡만의 특별한 파워 전문 컨설팅"/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

