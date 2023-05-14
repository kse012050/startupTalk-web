import React, { useCallback, useState } from 'react';
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import Item from '../../components/item/Item';

export default function Info({detailData}) {
    // 페이지 서브 데이터 이름
    const [imgClass , setImgClass] = useState('');

    const imgMore = useCallback(()=>{
        setImgClass((prev)=>{
            return prev + ' active';
        })
    },[])
    return (
        <div className='infoArea'>
            {detailData.brand_video_link &&
                <div className='videoArea'>
                    <iframe title='동영상' src={`https://www.youtube.com/embed/${detailData.brand_video_link.substring(detailData.brand_video_link.length - 11)}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </div>
            }

            <div className='detailArea'>
                <div className={imgClass}>
                    {<img src={detailData.brand_detail_image} alt=""/>}
                </div>
                <button onClick={imgMore}>더보기</button>
            </div>

            <div className='menuArea'>
                <h3>대표 메뉴</h3>
                <div className='sliderArea mobileFull'>
                    <Swiper 
                        slidesPerView={"auto"}
                        freeMode={true}
                        className="menuSwiper"
                    >
                        {detailData && detailData?.menus.map((data)=><SwiperSlide key={data.menu_id}><Item img={data.menu_file} info={data} type='price'/></SwiperSlide>)}
                    </Swiper>
                </div>
            </div>

            <div className='interiorArea'>
                <h3>인테리어</h3>
                <div className='sliderArea'>
                    <Swiper 
                        navigation={{
                            prevEl : '.interiorArea .sliderArea .navigation-circle .prev',
                            nextEl : '.interiorArea .sliderArea .navigation-circle .next',
                        }}
                        modules={[Navigation]}
                        className="interiorSwiper"
                    >
                        <SwiperSlide><div className="imgBox" style={{backgroundImage : `url(${detailData.brand_interior_file})`}}></div></SwiperSlide>
                        {/* <SwiperSlide><div className="imgBox" style={{backgroundImage : `url(${require('../../images/item02.png')})`}}></div></SwiperSlide>
                        <SwiperSlide><div className="imgBox" style={{backgroundImage : `url(${require('../../images/item02.png')})`}}></div></SwiperSlide> */}
                        {/* <div className="navigation-circle">
                            <div className='prev imgBox'></div>
                            <div className='next imgBox'></div>
                        </div> */}
                    </Swiper>
                </div>
            </div>

            {/* <div className='locationArea'>
                <h3>위치</h3>
                <iframe title='서울특별시 관악구 남부순환로226길 31' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.2176335958457!2d126.95118987637785!3d37.47919032913109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f89e6b36b9b%3A0x100d3f7b5575cbe3!2z7ISc7Jq47Yq567OE7IucIOq0gOyVheq1rCDrgqjrtoDsiJztmZjroZwyMjbquLggMzE!5e0!3m2!1sko!2skr!4v1678781851082!5m2!1sko!2skr" loading="lazy" ></iframe>
                <p>서울특별시 관악구 남부순환로226길 31</p>
            </div> */}
        </div>
    );
}

