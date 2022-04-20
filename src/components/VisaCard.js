 import './VisaCard.css'
 import img from './img/image.png'
 function VisaCard(){
     return(
         <div className='card'>
             <div className='card_header'> 
             <img className='img' src={img} alt=""></img>
                 <h1>VISA</h1>
             </div>
             <div className='card_number'>
                 <p>4901</p>
                 <p>4901</p>
                 <p>4901</p>
                 <p>4901</p>
                 </div>
<div className='card_data'>
    <h3>YOUR NAME HERE</h3>
    <div className='card_date'>
        <p >valid thru</p>
        <p >12 / 18</p>
    </div>
</div>
            
         </div>
     )
 }

 export default VisaCard