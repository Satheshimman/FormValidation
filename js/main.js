var frm=document.getElementById("form");
var fname=document.getElementById("firstname");
var lname=document.getElementById("lastname");
var mail=document.getElementById("email");
var pass=document.getElementById("psword");
var err=document.getElementsByClassName("error");



frm.addEventListener("submit",function(e){

	e.preventDefault();
	
	test(fname,0,"enter your first name");
	test(lname,1,"enter your last name");
	test(mail,2,"enter your first name");
	test(pass,3,"enter your first name");
	
	
	
})


let test=function(id,i,message){
	
	
	if(id.value.trim()==""){
	id.style.border="1px solid red";
	err[i].innerHTML=message;
	err[i].style.color="red"
	}
	
	
	else{
	id.style.border="1px solid green";
	err[i].innerHTML="correct";
	err[i].style.color="green"
	
	next();
	}
	
	
	
}




function next(){
	
	
	if(fname.value&&lname.value&&mail.value&&pass.value){
		
		
		
		localStorage.setItem("fsname",JSON.stringify(fname.value));
		localStorage.setItem("lsname",JSON.stringify(lname.value));
		localStorage.setItem("psword",JSON.stringify(pass.value));
		localStorage.setItem("email",JSON.stringify(mail.value));
		
		location.href="index-login.html"
		
	}
	else{
		alert("enter your coorect all values")
	}
}





