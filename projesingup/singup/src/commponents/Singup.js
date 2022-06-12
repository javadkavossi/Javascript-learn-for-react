import React, { useState , useEffect } from 'react';
import { validate } from './validate';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';
const Singup = () => {

const [data, setData] = useState({

    name:"",
    email:"",
    password:"",
    password2:"",
    //confiramPassword:"",                                                                                       
    isAccepted: false

});
const [errors, setErrors] = useState({});
const [touched, setTouched] = useState({});
useEffect(()=> {
 setErrors(validate(data))
    console.log(errors)
}, [data ,touched])

const changeHandler= event => {
    if(event.target.name === "isAccepted"){
        setData({...data, [event.target.name]: event.target.checked})
    }else{
        setData({...data,[event.target.name]: event.target.value})
    }
    console.log(data)
    }
    
    const focusHandler = event =>{
        setTouched({...touched, [event.target.name]: true})
    }

   const submitHnd= event=>{
   
       event.preventDefault();
       
       if (!Object.keys(errors).length){
           notify("you signed in succssfully" , "success")
       }else {
        notify("invalid data" , "error")

           setTouched({
               name: true,
               email:true,
               password:true,
               //confiramPassword:true,
               password2:true,
               isAccepted:true,
              
           })
       }
   }
  

    return (
        <div>
            <form onSubmit={submitHnd}>
                <h2>Sing up</h2>
                <div>
                    <label>Nmae</label>
                    <input type="text" name="name" value={data.name} onChange={changeHandler} onFocus= {focusHandler}></input>
                    {errors.name && touched.name &&<span>{errors.name}</span>}
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={data.email} onChange={changeHandler} onFocus= {focusHandler}></input>
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label>password</label>
                    <input type="password" name="password" value={data.password} onChange={changeHandler} onFocus= {focusHandler}></input>
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div>
                    <label>ConfiramPassword</label>
                    <input type="password" name="password2" value={data.password2} onChange={changeHandler} onFocus= {focusHandler}></input>
                    {errors.password2 && touched.password2 && <span>{errors.password2}</span>}
                </div>
                
                <div>
                    <label>i accet terms of privacy policy </label>
                    <input type="checkbox" name="isAccepted" value={data.isAccepted } onChange={changeHandler} onFocus= {focusHandler}></input>
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}               
                </div>
                <div>
                    <button type='submit'>Sing Up</button>
                </div>
            </form>
            <ToastContainer />
        </div>

    );
};

export default Singup;