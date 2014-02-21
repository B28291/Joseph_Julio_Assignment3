alert("JavaScript works!");
 
 	// Global Variables 
 var workToday = true;
 var hrsPerWeek = 40;
 var companyName = "NVC Logistics";
 var coWorkers = ["Sergio ", "Barbra ", "Sal ","Justin ", "Ernie "];
 var dailyLogHrs = [8, 7, 8, 9, 8];
 	
 	
 	
 	//functions 
 
 
 var workWith = function(myCoWorkers){
   		for(var i = 0; i < coWorkers.length; i++){
   		 	console.log("My co-workers are " + coWorkers[i]);
   		};
   };
  

   
   
 var hrsPerDay = function(myhrs){
     if (hrsPerWeek => 40){
   		
   		if(hrsPerWeek => 50){
   		
   			console.log("Taxes is going to kill my overtime");
   		
   		}else{
   			console.log("I had a good week")
   		}
   				
   
   
   }else{
   
   	console.log("I had a bad week")
     
   };    
 };
 
 
 var logIn = function(myLogs){
 	for(i = 0; i > mylogs.length; i++)
 	 console.log(myLogs[i] + "is " + (i + 1) + "Log in.") 
 	 myLogs.push(6)
 		 
 	 
 }
 
 



 
 
 
 	// Main code 
 workWith(coWorkers[2]);
 logIn(daiyLogHrs);
 hrsPerDay();
