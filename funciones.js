var a =document.querySelector(".meguti");
	var b =document.getElementById("megus");
function apretar(color){
	
 if(color=="blanco"){
	 a.style.color= "white";
	  a.style.textShadow= "0px 2px 6px white";
	  b.style.backgroundColor="#0066CC";
	  
 }else if(color=="negro"){
	 
	 
	  a.style.textShadow= "0px 0px 0px";
	 b.style.backgroundColor="#0033CC";
 }


};
