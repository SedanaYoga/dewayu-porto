import Slider from 'react-slick'
import styled from 'styled-components'

interface TestiCarouselProps {
  data: { img: string; name: string; relation: string; comment: string }[]
}
const TestiCarousel = (props: TestiCarouselProps) => {
  const { data } = props
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    dots: false,
  }
  return (
    <TestiCarouselStyled>
      <Slider {...settings} className='slider-container'>
        <div className='card'>
          <h3>1</h3>
        </div>
        <div className='card'>
          <h3>2</h3>
        </div>
        <div className='card'>
          <h3>3</h3>
        </div>
        <div className='card'>
          <h3>4</h3>
        </div>
        <div className='card'>
          <h3>5</h3>
        </div>
        <div className='card'>
          <h3>6</h3>
        </div>
      </Slider>
    </TestiCarouselStyled>
  )
}

export default TestiCarousel

export const TestiCarouselStyled = styled.div`
  margin-top: 120px;
  .slider-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 373px;
    background: red;
  }
  .card {
    width: 480px;
    height: 297px;
    background: salmon;
    border: 1px solid black;
  }
`
