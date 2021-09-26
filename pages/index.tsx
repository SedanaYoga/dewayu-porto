import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Hero from '../components/Hero'

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
        </ContentStyled>
      </Layout>
    </HomeStyled>
  )
}

export default Home

export const HomeStyled = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    rgba(249, 252, 255, 0.64) 43%,
    rgba(255, 255, 255, 1) 87%
  );
`
