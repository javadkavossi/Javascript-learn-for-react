export const validate = data =>{
 const errors = {};
 if (!data.name.trim()) {
     errors.name = "username required"

 }else{
     delete errors.name 
 } 
if (!data.email){
    errors.email = "Email required"

}else if (!/\S+@\S+\.\S+/.test(data.email)){
    errors.email= "email address is invalid"

}else{
    delete errors.email
}
if(!data.password){
    errors.password ="Password is invalid"
}else if(data.password.length < 6 ){  
    errors.password="password need to be 6 character or mor "
}
else {
    delete errors.password
}

if (!data.password2){
    errors.password2="confiram pass word"
}else if(data.password2 !== data.password){
    errors.password2="password is not mach !"
}

else {
    delete errors.password2
}
//if(!data.confirmPassword){
//errors.confirmPassword="Confrim the password"
  
//}

  //  else if (data.confirmPassword !== data.password){
    //    errors.confirmPassword = "password do not matc"    
   //}
    //else {
            delete errors.confirmPassword
  //      }

if(data.isAccepted) {
            delete errors.isAccepted
        }else{
            errors.isAccepted = "Accept our requlation "
        }
return errors;
}
