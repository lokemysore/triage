var i=0;
var fruits = ["Banana", "Orange", "Apple", "Mango"];
function timedCount() {
	
	do{
    	i=i+1;
    	postMessage('This is to cause hang leak'+i);
    if (i== 100000000) {
	    break; 
    }
	} while(true);
    
}

timedCount();