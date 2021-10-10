import styled from 'styled-components'
import Image from 'next/image'
import ImportIcon from './svg/ImportIcon'

const Footer = () => {
  return (
    <FooterStyled>
      <p>Reach Me</p>
      <div className='reach-sosmed'>
        <a href='/google.com'>
          <Image
            src='/sosmed-footer/google.png'
            width='32'
            height='32'
            alt='google'
          />
        </a>
        <a href='/linkedin.com'>
          <Image
            src='/sosmed-footer/linkedin.png'
            width='32'
            height='32'
            alt='linkedin'
          />
        </a>
        <a href='/instagram.com'>
          <Image src='/sosmed-footer/ig.png' width='32' height='32' alt='ig' />
        </a>
        <a href='/twitter.com'>
          <Image
            src='/sosmed-footer/twitter.png'
            width='32'
            height='32'
            alt='twitter'
          />
        </a>
        <a href='/whatsapp.com'>
          <Image src='/sosmed-footer/wa.png' width='32' height='32' alt='wa' />
        </a>
      </div>
      <div className='download-container'>
        <p>Download My Files</p>
        <div className='download-buttons'>
          <div className='button'>
            <div className='download-logo'>
              <ImportIcon />
            </div>
            <p>PORTOFOLIO</p>
          </div>
          <div className='button'>
            <div className='download-logo'>
              <ImportIcon />
            </div>
            <p>CV</p>
          </div>
        </div>
      </div>
    </FooterStyled>
  )
}

export default Footer

export const FooterStyled = styled.div`
  margin-top: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  /* background: salmon; */
  font-size: 24px;
  font-weight: 600;
  color: white;
  .reach-sosmed {
    margin-top: 24px;
    width: 260px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .download-container {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .download-buttons {
      margin-top: 14px;
      width: 300px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 10px;
        border-radius: 7px;
        color: #36288c;
        font-size: 18px;
        font-weight: 600;
        width: auto;
        height: 37px;
        background: white;
        p {
          padding-left: 5px;
        }
        .download-logo {
          padding-right: 5px;
          border-right: 1px solid #e7edff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
`
