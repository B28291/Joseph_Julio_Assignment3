alert("JavaScript works!");
 
 	// Global Variables 
 var workToday = true;
 var hrsPerWeek = 40;
 var companyName = "NVC Logistics";
 var coWorkers = ["Sergio ", "Barbra ", "Sal ","Justin ", "Ernie "];
 var dailyLogHrs = [8, 7, 8, 9, 8];
 	
 	
 	
 	//functions 
 
 var myDay = function(today){
 var workDay;
 var homeDay
 	if( today == true ) {
 		
 	howsMyDay ="I will be going to " + companyName + " where I work.";
 	
 	}else{
 	
 	homeDay = "I guess it's family day." ;
 	
 	return howsMyDay;
 	
 	};
 
 };	  	
 
 
 var workWith = function(myCoWorkers){
 
 for (var i = 0; i < myCoWorkers.length; i++){
 
 	console.log("My co-workers are " + myCoWorkers[i]);
 	
   		};
   };
  

   
   
 var hrsPerDay = function(myHrs){
 var okHrs;
 var goodHrs;
 var badHrs;
     if (myHrs => 40){
   		
   		if(myHrs => 50){
   		
   			okhrs = "Taxes is going to kill my overtime";
   		
   		}else{
   		
   			Goodhrs =  "I had a good week"
   		
   		}
   				
   
   
   }else{
   
   	badHrs = ("I had a bad week")
     
   }; 
    return hrs;   
 };
 
 
 var logIn = function(myLogs){
 var logs;
 
 	for(i = 0; i > mylogs.length; i++)
 	
 	 logs = myLogs[i] + "is " + (i + 1) + "Log in." 
 	 myLogs.push(6)
 	 
 	 return logs; 
 		 
 	 
 }
 
 


 
 
 
 	// Main code 
 myDay(workToday)
 workWith(coWorkers);
 logIn(daiyLogHrs);
 hrsPerDay(hrsPerWeek);
 