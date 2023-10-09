import React, { useState } from 'react'
 const Form = ()=>{
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [msg,setMessage] = useState('')
  const collectData = async ()=>{
    console.log(name,email,phone,msg);
    let result = await fetch('http://localhost:27017',{
      method:'post',
      body:JSON.stringify({name,email,phone,msg}),
      headers:{
        'Content-Type':'application/json'
      }
    })
    result = await result.json()
    console.log(result);
  }


  return (
    <div>
      <h4 className="contact-head" data-aos="flip-up">
    Have some question ?
   </h4>
   <p className='contact-para' data-aos="flip-up">any question or remarks? Just write us message</p>
   <div className="contact-info">
    <div className="mydata" data-aos="flip-left">
    <h4 className="info-head">Contact Information</h4>
    <p className="info-para">Fil up the form and our Team will get back to you within 24 hrs.</p>
    <div className="icon-info">
    <p ><i class="fa-solid  fa-phone-volume"></i> :8278710241</p>
    <p><i class="fa-regular fa-envelope"></i> :infernokid60@gmail.com</p>
    
    </div>
    </div>
    <div className="c-form" data-aos="flip-left">
      <form action="">
     <div><b> Name</b>  <br /><input type="text" value={name} onChange={(e)=>setName(e.target.value)} id="" placeholder='Enter Your Name ' /></div><br />
     <div><b>E-mail </b> <br /><input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} id="" placeholder='write valid email address' /></div><br />
     <div><b> Phone No. </b><br /> <input type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} id="" placeholder='Enter valid phone no.'/></div><br />
     <div><b> Message </b><br /><input type="text" value={msg} onChange={(e)=>setMessage(e.target.value)} id="" placeholder='write your message'/></div><br />
     <div className='s-message'><input type="submit" onClick={collectData} value="Send Message" /></div>
     </form>
    </div>

   </div>
    </div>
  )
}
export default Form;
