/////////////////////////////////////////////speed generator/////////////////////////////////////////////////
const speedCalculator= ()=>{

    if(input = +(prompt('Please insert the cars speed'))){

      if(input<70){
        document.getElementById("speed_results").innerHTML = "OK" ;
      }else{

        var receivedInput=input
        function calcDelimeter(val){
        

          var calculation=Math.floor(((val-70)/5))
          

          if(calculation>12){
                   return  document.getElementById("speed_results").innerHTML = "License suspended" ;

          }else{
                   return  document.getElementById("speed_results").innerHTML = `Points: ${calculation}`;
          }

        }
      }

      calcDelimeter(receivedInput)
      
      }
      else{
        alert("Your input is not a number");
      }
  
}
