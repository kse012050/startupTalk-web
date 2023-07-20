import React, { useContext, useEffect, useState } from 'react';
import * as api from '../api/api'
import { Navigation , FreeMode, } from "swiper";
import { Link } from 'react-router-dom';
import Item from '../components/item/Item';

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { mainDataApi } from '../api/api';
import { ResponsiveContext } from '../context/Responsive';

export default function Home() {
    const responsive = useContext(ResponsiveContext);
    const [firstEntry, setFirstEntry] = useState(true)
    const [mainData , setMainData] = useState()
    useEffect(()=>{
        mainDataApi().then(setMainData)
        setFirstEntry(localStorage.getItem('firstEntry') ? false : true)
    },[])
    
    const onFirstEntry = () =>{
        localStorage.setItem('firstEntry', false)
        setFirstEntry(false)
    }

    return (
        <>
            {(!responsive && firstEntry) &&
                <div className="appView">
                    <p>
                        앱에서는<br/>
                        관심 창업브랜드 관리와<br/>
                        1:1채팅이 가능해요!
                    </p>
                    <a href="#">편리한 앱으로 보기</a>
                    <button onClick={onFirstEntry}>괜찮아요. 모바일 웹으로 볼게요.</button>
                </div>
            }
            <h2 className='textHidden'>메인 페이지</h2>

            <div>
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
                            {mainData?.categorys.map((data)=><SwiperSlide key={data.category_id}><Link to={`/category/show/id/${data.category_id}`}>{data.category}</Link></SwiperSlide>)}
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
                            breakpoints={{
                                1180 : {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                                950 : {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                780 : {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                                320 : {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                }
                            }}
                            modules={[Navigation]}
                            className="itemSwiper"
                        >
                            {mainData?.recommands.map((data)=>
                                <SwiperSlide key={data.brand_id}>
                                    <Item img={data.brand_main_store_file} info={{title : data.brand_name , shop : data.store_count , cost : data.start_up_money / 1000 , taik : data.chat_count}} support={data.promotion_yn} id={data.brand_id}/>
                                </SwiperSlide>
                            )}
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
                            breakpoints={{
                                950 : {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                780 : {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                320 : {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                }
                            }}
                            modules={[Navigation]}
                            className="itemSwiper bestList"
                        >
                            {mainData?.hots.map((data)=>
                                <SwiperSlide key={data.brand_id}>
                                    <Item img={data.brand_main_store_file} type="best" bookMark={data.interest_yn} info={{brand_name : data.brand_name , category : data.category , today_interest_cnt :data.today_interest_cnt}} id={data.brand_id}/>
                                </SwiperSlide>
                            )}
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
                        {/* {mainData?.marketings.map((data)=>
                            <Link to={'/marketing/detail/marketing'} key={data.marketing_id}>
                                <img src={data.marketing_image_file} alt={data.title} />
                            </Link>
                        )} */}
                        <Link to={`/marketing/detail/0`}>
                            <img src={require('../images/main-marketing01.png')} alt="우리 매장에 딱! 필요한 최적화 마케팅" />
                        </Link>
                        <Link to={'/marketing/detail/1'}>
                            <img src={require('../images/main-marketing02.png')} alt="창업톡만의 특별한 파워 전문 컨설팅"/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

