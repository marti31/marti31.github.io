     

function animateprogress (id){     
    
    var max=document.querySelector(id).getAttribute("max"); 
    
    
    if(val<max){
        val++;
        console.log(val);
        document.querySelector(id).setAttribute("value",val);
          
    }         
        
           
                 
}

