//Object destructuring 
const userdata = {

    name:"JAVAD",
    age:26 ,
    address:{
        city:"birjand",
        street:"alaheh",
    }
};
//const desired="name";
//const name=userdata["name"];
//const age=userdata.age;
//const address= userdata.address;


const{name, age, address:{city,street}} = userdata;
console.log(name);
console.log(age);
console.log(street);

