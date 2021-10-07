import styled from 'styled-components'
import TestiCarousel from './TestiCarousel'

const testiData = [
  {
    img: '/testi-img/img1.png',
    name: 'Huda',
    relation: 'Intership Partner at Lab',
    comment: 'Hard Worker and Always give positives vibes to the team',
  },
  {
    img: '/testi-img/img3.png',
    name: 'Qonita',
    relation: 'Campus Organization Partner',
    comment:
      'She is responsible leader and supportive teammate who always make the work situation fun and on the right track',
  },
  {
    img: '/testi-img/img1.png',
    name: 'Huda',
    relation: 'Intership Partner at Lab',
    comment: 'Hard Worker and Always give positives vibes to the team',
  },
  {
    img: '/testi-img/img1.png',
    name: 'Huda',
    relation: 'Intership Partner at Lab',
    comment: 'Hard Worker and Always give positives vibes to the team',
  },
  {
    img: '/testi-img/img2.png',
    name: 'Huda',
    relation: 'Intership Partner at Lab',
    comment: 'Hard Worker and Always give positives vibes to the team',
  },
]

const Testimonial = () => {
  return (
    <TestiStyled>
      <TitleStyled>
        <h3 className='title-text'>What They Say About Me</h3>
      </TitleStyled>
      <TestiCarousel data={testiData} />
    </TestiStyled>
  )
}

export default Testimonial

export const TestiStyled = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 90px;
  padding-top: 40px;
`
export const TitleStyled = styled.div`
  font-weight: 600;
  font-size: 90px;
  line-height: 135px;
  text-align: center;
  letter-spacing: -0.02em;
  .title-text {
    background: linear-gradient(
      180deg,
      rgba(3, 74, 212, 0.35),
      rgba(71, 106, 174, 0)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
