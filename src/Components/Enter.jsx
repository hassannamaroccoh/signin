import "../assets/Styles/Enter.css";
const Enter = () => {
    return ( 
        <>
         <aside>
        <h2>Enter the email address or phone<br/> number related to your account</h2>
       
        <div className="input">
         <label for="Email address"></label>
         <input type="text"  id="email" placeholder="Email address /phone number"/>
        
         </div>
         
         <div className="one">
         <p>Already have an account ? login</p><button className="btn">Reset password</button>
         </div>
        
    
        

        
          
        </aside>
       
        
        </>
     );
}
 
export default Enter;