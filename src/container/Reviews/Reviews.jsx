import React from "react";
import "./Reviews.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";
import { images } from "../../constants";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Reviews = () => {
  return (
    <>
      <div className="app__reviews">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper-slide app__flex">
            <p>
              Firma logistyczna zapewniła mi doskonałą jakość usług. Ich
              profesjonalizm, łatwa w użyciu strona internetowa oraz uprzejmy
              personel były na najwyższym poziomie. Usługi były konkurencyjne
              cenowo i dostosowane do moich potrzeb. Polecam każdemu, kto
              potrzebuje niezawodnej obsługi logistycznej.
            </p>
            <img src={images.face} alt="face" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide app__flex">
            <p>
            Firma transportowa, z którą miałem do czynienia, zapewniła mi szybką i niezawodną dostawę. 
            Ich kierowcy byli bardzo profesjonalni i uprzejmi, a moje towary dotarły w doskonałym stanie. 
            Gorąco polecam!
            </p>
            <img src={images.face} alt="face" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide app__flex">
            <p>
            Korzystałem z usług tej firmy transportowej wielokrotnie i nigdy mnie nie zawiedli. 
            Dostawa zawsze była punktualna, a moje towary były bezpiecznie zapakowane. 
            Jestem bardzo zadowolony i polecam ich usługi innym.
            </p>
            <img src={images.face} alt="face" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide app__flex">
            <p>
            Firma transportowa była nie tylko szybka i niezawodna, 
            ale także bardzo elastyczna i dostosowała się do moich potrzeb. 
            Ich kierowcy byli kompetentni i uprzejmi, a moje towary dotarły bezpiecznie na miejsce. 
            Bardzo polecam tę firmę transportową.
            </p>
            <img src={images.face} alt="face" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Reviews;
