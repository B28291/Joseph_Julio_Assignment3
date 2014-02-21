alert("JavaScript works!");
 
 	// Global Variables 
 var workToday = true;
 var hrsPerWeek = 40;
 var companyName = "NVC Logistics";
 var coWorkers = ["Sergio ", "Barbra ", "Sal ","Justin ", "Ernie "];
 var dailyLogHrs = [8, 7, 8, 9, 8];
 	
 	
 	
 	//functions 
 
 var myDay = function(today){
 var howsMyDay;
 	if( today == true ) {
 		
 	howsMyDay ="I will be going to " + companyName + " where I work.";
 	
 	}else{
 	
 	howsMyDay = "I guess it's family day." ;
 	
 	return howsMyDay;
 	
 	};
 
 };	  	
 
 
 var workWith = function(myCoWorkers){
 
 for (var i = 0; i < myCoWorkers.length; i++){
 
 	console.log("My co-workers are " + myCoWorkers[i]);
 	
   		};
   };
  

   
   
 var hrsPerDay = function(myhrs){
 var hrs;
     if (hrsPerWeek => 40){
   		
   		if(hrsPerWeek => 50){
   		
   			hrs = "Taxes is going to kill my overtime";
   		
   		}else{
   		
   			hrs =  "I had a good week"
   		
   		}
   				
   
   
   }else{
   
   	hrs = ("I had a bad week")
     
   }; 
    return hrs;   
 };
 
 
 var logIn = function(myLogs){
 	for(i = 0; i > mylogs.length; i++)
 	 console.log(myLogs[i] + "is " + (i + 1) + "Log in.") 
 	 myLogs.push(6)
 		 
 	 
 }
 
 


 
 
 
 	// Main code 
 myDay(workToday)
 workWith(coWorkers);
 logIn(daiyLogHrs);
 hrsPerDay(hrsPerWeek);
 