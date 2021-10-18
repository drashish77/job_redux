import Card from "../../components/Card/Card"

const Section2 = () => {
 return (
   <>
     <h2 className='card__heading'>Why Us</h2>
     <div className='card__wrap'>
       <Card
         title='Get More Visibility'
         description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
       />
       <Card
         title='Organize Your Candidates'
         description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
       />
       <Card
         title='Verify Their Abilities'
         description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
       />
     </div>
   </>
 )
}

export default Section2
