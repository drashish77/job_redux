import './Home.scss'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import Section3 from './Section3'
import Section2 from './Section2'
const Home2 = () => {
  return (
    <div className='home'>
      <div className='main__section'>
        <div className='left__section'>
          <div className='heading'>
            <p>Welcome to</p>
            <p>
              My<span>Jobs</span>
            </p>
          </div>

          <Button title='Get Started' color='btn-light' />
        </div>

        <div className='right__section'>
          <img
            src='https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            className=''
            alt=''
          />
        </div>
      </div>
      <div className='section__two'>
        <Section2 />
      </div>
      <div className='section__three'>
        <Section3 />
      </div>
    </div>
  )
}

export default Home2
