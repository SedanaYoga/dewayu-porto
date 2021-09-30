/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'
import Image from 'next/image'

interface CardInterface {
  imgPath: string
  title: string
  description: string
}

const CardData: CardInterface[] = [
  {
    imgPath: '/research-icon.svg',
    title: 'Research & Discovery',
    description:
      'Fun and exciting to discover something new after long research. I enjoy spent my time discover something new.',
  },
  {
    imgPath: '/3d-icon.svg',
    title: '3D Modelling',
    description:
      'I enjoy designing my idea to 3D Files. Every product can be digitalize by different tools, based on their needs. It is chalengging to me. ',
  },
  {
    imgPath: '/human-centered-icon.svg',
    title: 'Human Centered',
    description:
      'Focusing on people and surroundings. As an empath, I love to discover the user’s problem and find the right solutions.',
  },
]

const toolList = [
  '/tool-list/ai-icon.png',
  '/tool-list/rhino-icon.png',
  '/tool-list/keyshot-icon.png',
  '/tool-list/figma-icon.png',
  '/tool-list/premiere-icon.png',
  '/tool-list/blender-icon.png',
  '/tool-list/fushion-icon.png',
]

const skillList = [
  'FAST LEARNER',
  'PROBLEM SOLVER',
  'OPTIMISTIC PERSON',
  'CHEERFULL',
  'PROACTIVE',
  'OPEN MINDED',
]

function MyExpertises() {
  return (
    <ExpertiseStyled>
      <h1>My Expertises</h1>
      <ExpertCard>
        {CardData.map((card, index) => (
          <CardStyled key={index} cardImage={card.imgPath}>
            <div className='card-image'>
              <div className='card-image-icon'>
                <Image src={card.imgPath} width='80' height='80' alt='image' />
              </div>
              <Image
                src='/card-img-bg.png'
                width='190'
                height='190'
                alt='image'
              />
            </div>
            <h3 className='title'>{card.title}</h3>
            <div className='card-description'>
              <p>{card.description}</p>
            </div>
          </CardStyled>
        ))}
      </ExpertCard>
      <SkillAndToolStyled>
        <div className='personal-skill'>
          <h3>Personal Skills</h3>
          <div className='skill-list'>
            {skillList.map((skill, index) => (
              <p key={index}>{skill}</p>
            ))}
          </div>
        </div>
        <div className='tools'>
          <h3>Tools</h3>
          <div className='tool-list'>
            {toolList.map((tool, index) => (
              <img
                src={tool}
                width='50px'
                height='50px'
                alt={tool}
                key={index}
                className='tool-image'
              />
            ))}
          </div>
        </div>
      </SkillAndToolStyled>
    </ExpertiseStyled>
  )
}

export default MyExpertises

export const SkillAndToolStyled = styled.div`
  margin: 3rem;
  width: 100%;
  min-height: 190px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  div {
    width: 410px;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* background: red; */
    h3 {
      font-size: 30px;
      color: ${(props) => props.theme.colors.font_color1};
    }
    .skill-list {
      display: grid;
      grid-template-columns: auto auto;
      column-gap: 70px;
      padding: 20px 20px 0 20px;
      background: linear-gradient(
        to top,
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0.2)
      );
      /* background: red; */
      border-radius: 10px;
      margin-top: 10px;
      p {
        position: relative;
        font-size: 1rem;
        /* width: 200px; */
        text-align: center;
        padding-bottom: 20px;
        font-weight: 600;
        color: #3c3c3c;
      }
      p::before {
        content: '';
        position: absolute;
        top: 25px;
        height: 2px;
        width: 100px;
        background: ${(props) => props.theme.colors.headerColor_2};
      }
    }
    .tool-list {
      width: 400px;
      min-height: 150px;
      display: flex;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
      background: linear-gradient(
        to top,
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0.2)
      );
      /* background: red; */
      border-radius: 10px;
      margin-top: 10px;
      padding: 10px;
      .tool-image {
        margin: 15px;
      }
    }
  }
`

interface CardProps {
  cardImage: string
}

export const CardStyled = styled.div<CardProps>`
  min-width: auto;
  min-height: 377px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .card-image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    .card-image-icon {
      position: absolute;
      left: ${(props) =>
        props.cardImage === '/human-centered-icon.svg' && '60px'};
      z-index: 2;
      img {
        width: ${(props) => props.cardImage === '/3d-icon.svg' && '100px'};
      }
    }
  }
  .title {
    font-size: 28px;
    color: ${(props) => props.theme.colors.font_color1};
    margin: 5px;
  }
  .card-description {
    max-width: 400px;
    min-height: 60px;
    padding: 1rem;
    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    );
    border-radius: 20px;
    text-align: center;
  }
`
export const ExpertCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: 353px;
  /* background: salmon; */
`
export const ExpertiseStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 30px;
  h1 {
    font-size: 180px;
    color: rgba(255, 255, 255, 0.4);
  }
`
