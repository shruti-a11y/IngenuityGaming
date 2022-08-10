var student = {
    name : "Shruti Sharma",
    age : 21,
    address : {
        city : "Aligarh",
        state  :"Uttar Pradesh",
        pincode : 202001
    },
    details: function(){
        return this.name +" "+ this.age + " year old"+" live in " + this.address.city+" " ;
    }
};
document.write(student.details());