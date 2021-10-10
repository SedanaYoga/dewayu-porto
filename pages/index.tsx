import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Hero from '../components/Hero'
import MyExpertises from '../components/MyExpertises'
import MyWorks from '../components/MyWorks'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <HomeStyled>
      <Head>
        <title>Dewayu | Home</title>
        <meta
          name='description'
          content='Dewa Ayu Indah Wista Sari portfolio website'
        />
      </Head>
      <Layout>
        <ContentStyled>
          <Hero />
          <MyExpertises />
          <MyWorks />
          <Testimonial />
          <Footer />
        </ContentStyled>
      </Layout>
      <HeroBackgroundImage>
        <div className='hero-photo-container'>
          <div className='hero-photo-bg'>
            <Image
              src='/hero-asset1.png'
              width='901'
              height='867.39'
              alt='hero-asset1'
            />
          </div>
          <div className='hero-photo'>
            <Image
              src='/hero-photo.png'
              width='595.55'
              height='755.78'
              alt='hero-photo'
            />
          </div>
          <div className='hero-asset1'>
            <Image src='/asset1.png' width='240' height='240' alt='asset1' />
          </div>
          <div className='hero-asset2'>
            <Image src='/asset2.png' width='180' height='180' alt='asset2' />
          </div>
          <div className='hero-asset3'>
            <Image src='/asset3.png' width='150' height='150' alt='asset3' />
          </div>
        </div>
      </HeroBackgroundImage>
      <HomeBackgroundImage>
        <div>
          <Image src='/home-bg.png' width='1920' height='3100' alt='home-bg' />
        </div>
      </HomeBackgroundImage>
    </HomeStyled>
  )
}

export default Home

export const HomeBackgroundImage = styled.div`
  position: absolute;
  top: 1000px;
  pointer-events: none;
`

export const HomeStyled = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const HeroBackgroundImage = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  width: 901px;
  height: 867.39px;

  .hero-photo-container {
    position: relative;
    width: 100%;
    min-height: 100px;
  }
  .hero-photo-container > div {
    position: absolute;
    pointer-events: none;
  }
  .hero-photo {
    left: 270px;
    top: 50px;
    z-index: 3;
  }
  .hero-photo-bg {
    top: 0;
    left: 0;
    z-index: 2;
  }
  .hero-asset1 {
    left: 230px;
    top: 200px;
    z-index: 2;
  }
  .hero-asset2 {
    right: -860px;
    top: 120px;
    z-index: 2;
  }
  .hero-asset3 {
    right: 30px;
    top: 60px;
    z-index: 2;
  }
`
export const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 6.875rem;
  border-radius: 50px;
  padding: 78px;
  width: 1500px;
  height: 2310px;
  background: rgb(221, 249, 255);
  background: linear-gradient(
    162deg,
    rgba(221, 249, 255, 0.7287289915966386) 0%,
    rgba(110, 191, 244, 0.17970938375350143) 7%,
    rgba(249, 252, 255, 0.2) 43%,
    rgba(255, 255, 255, 0.1) 87%
  );
  backdrop-filter: blur(20px);
  z-index: 2;
`
