import Image from 'next/image'
import styled from 'styled-components'

function MyWorks() {
  return (
    <MyWorksStyled>
      <h1 className='title'>MY WORKS</h1>
      <CardContainer>
        <div className='item-a'>
          <div className='3d-modelling card'>
            <div className='img'>
              <Image
                src='/home-3d.png'
                width='327.03'
                height='230.66'
                alt='3d-modelling'
              />
            </div>
            <h3>3D Modelling</h3>
          </div>
        </div>
        <div className='item-b'>
          <div className='uxdesign card'>
            <div className='ux img'>
              <Image
                src='/home-ux.png'
                width='360'
                height='380'
                alt='uxdesign'
              />
            </div>
            <h3>UX Design</h3>
          </div>
        </div>
        <div className='item-c'>
          <div className='misc card'>
            <div className='img'>
              <Image
                src='/home-misc.png'
                width='272.78'
                height='264.39'
                alt='3d-modelling'
              />
            </div>
            <h3>Miscellaneous</h3>
          </div>
        </div>
        <div className='item-d'>
          <a href='/works' className='view-all'>
            VIEW ALL!
          </a>
        </div>
      </CardContainer>
      <div className='asset4'>
        <Image src='/asset4.png' width='1250' height='280' alt='asset' />
      </div>
    </MyWorksStyled>
  )
}

export default MyWorks

export const MyWorksStyled = styled.div`
  position: relative;
  margin-top: 70px;
  h1.title {
    font-size: 191px;
    line-height: 286px;
    letter-spacing: -0.02em;
    font-weight: 600;
    text-align: center;
    color: rgba(255, 255, 255, 0.53);
  }
  .asset4 {
    position: absolute;
    top: 20px;
  }
`
export const CardContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 406px 406px 406px;
  grid-template-rows: 66px 318px 66px;
  grid-template-areas:
    'model view misc'
    'model uxdesign misc'
    '. uxdesign .';
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 93%;
    height: 95%;
    background: white;
    border-radius: 20px;
    background: #ffffff;
    box-shadow: 0px 9px 25px rgba(0, 0, 0, 0.08),
      inset 0px 4px 25px rgba(0, 0, 0, 0.11);
    color: #36288c;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    letter-spacing: -0.02em;
  }
  .img {
    width: 327.03px;
    height: 240.66px;
    overflow: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .view-all {
    padding: 3%;
    text-align: center;
    font-weight: 700;
    font-size: 25px;
    line-height: 92%;
    color: #d1d1d1;
  }
  .item-a {
    grid-area: model;
  }
  .item-b {
    grid-area: uxdesign;
  }
  .item-c {
    grid-area: misc;
  }
  .item-d {
    grid-area: view;
    justify-content: flex-start;
    flex-direction: column;
  }
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`
