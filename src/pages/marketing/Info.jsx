import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Item from '../../components/Item';

export default function Info() {
    return (
        <div className='infoArea'>
            <mark className='support'><strong>창업비 지원</strong>현재 프로모션을 진행 중인 업체입니다.</mark>

            <div className='videoArea'>
                <iframe title='동영상' src="https://www.youtube.com/embed/eIUIknTz3-8" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </div>

            <div className='detailArea'>
                <div>상세 영역</div>
                <button>더보기</button>
            </div>

            <div className='menuArea'>
                <h3>대표 메뉴</h3>
                <div className='sliderArea'>
                    <Swiper 
                        slidesPerView={"auto"}
                        freeMode={true}
                        className="menuSwiper"
                    >
                        <SwiperSlide><Item img={require('../../images/item02.png')} type='price'/></SwiperSlide>
                        <SwiperSlide><Item img={require('../../images/item02.png')} type='price'/></SwiperSlide>
                        <SwiperSlide><Item img={require('../../images/item02.png')} type='price'/></SwiperSlide>
                        <SwiperSlide><Item img={require('../../images/item02.png')} type='price'/></SwiperSlide>
                        <SwiperSlide><Item img={require('../../images/item02.png')} type='price'/></SwiperSlide>
                        <SwiperSlide><Item img={require('../../images/item02.png')} type='price'/></SwiperSlide>
                        <SwiperSlide><Item img={require('../../images/item02.png')} type='price'/></SwiperSlide>
                        <SwiperSlide><Item img={require('../../images/item02.png')} type='price'/></SwiperSlide>
                        <SwiperSlide><Item img={require('../../images/item02.png')} type='price'/></SwiperSlide>
                        <SwiperSlide><Item img={require('../../images/item02.png')} type='price'/></SwiperSlide>
                        <SwiperSlide><Item img={require('../../images/item02.png')} type='price'/></SwiperSlide>
                        <SwiperSlide><Item img={require('../../images/item02.png')} type='price'/></SwiperSlide>
                        <SwiperSlide><Item img={require('../../images/item02.png')} type='price'/></SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div className='interiorArea'>
                <h3>인테리어</h3>
                <div className='sliderArea'>
                    <Swiper 
                        navigation={{
                            prevEl : '.popularArea .sliderArea .navigation-circle .prev',
                            nextEl : '.popularArea .sliderArea .navigation-circle .next',
                        }}
                        className="interiorSwiper"
                    >
                        <SwiperSlide><div className="imgBox" style={{backgroundImage : `url(${require('../../images/item02.png')})`}}></div></SwiperSlide>
                        <SwiperSlide><div className="imgBox" style={{backgroundImage : `url(${require('../../images/item02.png')})`}}></div></SwiperSlide>
                        <SwiperSlide><div className="imgBox" style={{backgroundImage : `url(${require('../../images/item02.png')})`}}></div></SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div className='locationArea'>
                <h3>위치</h3>
                <iframe title='서울특별시 관악구 남부순환로226길 31' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.2176335958457!2d126.95118987637785!3d37.47919032913109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f89e6b36b9b%3A0x100d3f7b5575cbe3!2z7ISc7Jq47Yq567OE7IucIOq0gOyVheq1rCDrgqjrtoDsiJztmZjroZwyMjbquLggMzE!5e0!3m2!1sko!2skr!4v1678781851082!5m2!1sko!2skr" loading="lazy" ></iframe>
                <p>서울특별시 관악구 남부순환로226길 31</p>
            </div>
        </div>
    );
}

