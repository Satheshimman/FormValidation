

var frm1=document.getElementById("form1")




frm1.addEventListener("submit",function(e1){
	
	e1.preventDefault();
	let lgemail=document.getElementById("useremail").value
let lgpass=document.getElementById("upass").value

	
	let checkmail=JSON.parse(localStorage.getItem("email"));
let checkpass=JSON.parse(localStorage.getItem("psword"));
console.log(typeof(checkmail),typeof(lgemail))
console.log(typeof(lgpass),typeof(checkpass))
   if((lgemail==checkmail)&&(lgpass==checkpass)){
	   
	   alert("loginsuccess");
	  
	   
   }
   
   else{
	   alert("failed to login");
   }

   console.log(checkmail,checkpass)
	console.log(lgemail,lgpass)
	
	
	
})











// let btn=document.getElementById("btn");
// btn.addEventListener('click', function(){
	// var username = document.getElementById('username').value
 	// var password = document.getElementById('password').value
	 // objPeople.forEach(function(e){

				// if(username==e.username && password==e.password){
					
					// location.href="success.html";
					
				// }
				
				// else{
				// alert("incorrect username or password")}
			// })
// })

