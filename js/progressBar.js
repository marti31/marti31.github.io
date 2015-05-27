     

function animateprogress (id){     
    
    var max=document.querySelector(id).getAttribute("max"); 
    
    
    if(val<max){
        val++;
        document.querySelector(id).setAttribute("value",val);
        if(val===600){
        document.querySelector(id).style.backgroundColor = "#F8DA43"; 
    	}
    	if(val===900){
        document.querySelector(id).style.backgroundColor = "#EF0000"; 
    	}
    }         
        
           
                 
}

