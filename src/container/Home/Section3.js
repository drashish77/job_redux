import brand1 from '../../assets/images/ambassador.png'
import brand2 from '../../assets/images/app.png'
import brand3 from '../../assets/images/something.png'
import brand4 from '../../assets/images/brand-positioning.png'
import brand5 from '../../assets/images/tinder.png'
import brand6 from '../../assets/images/brand-awareness.png'
import brand7 from '../../assets/images/flyers.png'
import brand8 from '../../assets/images/snapchat.png'
import brand9 from '../../assets/images/photos.png'
const Section3 = () => {
  return (
    <>
      <h2 className='card__heading'>Companies who trust us</h2>
      <div className='clients'>
        <div className='client'>
          <div className='img'>
            <img src={brand1} alt='' />
          </div>
          <span>Solatic</span>
        </div>
        <div className='client'>
          <div className='img'>
            <img src={brand2} alt='' />
          </div>
          <span>Solatic</span>
        </div>
        <div className='client'>
          <div className='img'>
            <img src={brand3} alt='' />
          </div>
          <span>love</span>
        </div>

        <div className='client'>
          <div className='img'>
            <img src={brand4} alt='' />
          </div>
          <span>Solatic</span>
        </div>
        <div className='client'>
          <div className='img'>
            <img src={brand5} alt='' />
          </div>
          <span>Solatic</span>
        </div>
        <div className='client'>
          <div className='img'>
            <img src={brand6} alt='' />
          </div>
          <span>Solatic</span>
        </div>
        <div className='client'>
          <div className='img'>
            <img src={brand7} alt='' />
          </div>
          <span>Solatic</span>
        </div>
        <div className='client'>
          <div className='img'>
            <img src={brand8} alt='' />
          </div>
          <span>Solatic</span>
        </div>
        <div className='client'>
          <div className='img'>
            <img src={brand9} alt='' />
          </div>
          <span>Solatic</span>
        </div>
      </div>
    </>
  )
}

export default Section3
