// React SwiperJS (for carousel)
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'
import styled from 'styled-components'

interface TestiCarouselProps {
  data: { img: string; name: string; relation: string; comment: string }[]
}
const TestiCarousel = (props: TestiCarouselProps) => {
  const { data } = props

  return (
    <TestiCarouselStyled>
      <Swiper
        slidesPerView={5}
        centeredSlides={true}
        loop={true}
        spaceBetween={20}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((testi, index) => (
          <SwiperSlide key={index}>
            <div className='testi-photo'>
              <Image src={testi.img} width='96' height='96' alt={testi.name} />
            </div>
            <div className='testi-user'>
              <h3>
                {testi.name}
                <span>{`-${testi.relation}-`}</span>
              </h3>
            </div>
            <div className='comment'>
              <p>{testi.comment}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </TestiCarouselStyled>
  )
}

export default TestiCarousel

export const TestiCarouselStyled = styled.div`
  margin-top: 50px;
  position: relative;
  left: -287px;
  width: 1910px;
  height: auto;
  padding: 100px 0 100px;
  overflow: hidden;
  /* background: red; */
  .swiper {
    width: 2500px;
    left: -300px;
    min-height: 200px;
    overflow: visible;
  }
  .swiper-slide {
    width: 200px;
    height: 297px;
    text-align: center;
    font-size: 18px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.5);
    transition: all 0.3s ease;
    background: linear-gradient(
      104.66deg,
      rgba(188, 243, 255, 0.43) -9.17%,
      rgba(247, 252, 255, 0.0963021) 43.3%,
      rgba(211, 234, 255, 0.0817) 65.76%,
      rgba(249, 252, 255, 0.2752) 102.6%,
      rgba(255, 255, 255, 0.4257) 129.21%
    );

    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    backdrop-filter: blur(20px);
    border-radius: 20px;

    &.swiper-slide-active {
      color: #fff;
      background: linear-gradient(
        104.66deg,
        #bcf3ff -9.17%,
        rgba(174, 182, 255, 0.8) 43.3%,
        rgba(159, 209, 255, 0.9) 85.76%,
        rgba(193, 224, 255, 0.9) 102.6%,
        rgba(255, 255, 255, 1) 129.21%
      );

      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(80px);
      -webkit-backdrop-filter: blur(80px);
      border: 2px solid rgba(255, 255, 255, 0.18);
      border-radius: 20px;
      .testi-photo {
        transform: scale(1.2);
      }
      transform: scale(1.33);
      z-index: 2;
    }
  }
  .testi-photo {
    border-radius: 96px;
  }
  .testi-user {
    h3 {
      margin: 10px 0 20px;
      font-size: 18px;
      font-weight: 400;
      line-height: 1;
      span {
        display: block;
        font-size: 14px;
      }
    }
  }
  .comment {
    position: relative;
    font-size: 20px;
    line-height: 1.3;
    ::before {
      content: '“';
      position: absolute;
      font-size: 60px;
      top: -25px;
      left: 0;
    }
    p::before {
      content: '“';
      position: absolute;
      font-size: 60px;
      bottom: -45px;
      right: 10px;
    }
  }
`
