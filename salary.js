/////////////////////////////////////////////salary generator/////////////////////////////////////////////////
const salaryCalculator= ()=>{

    if(money = +(prompt('Please insert your basic salary and benefits'))){

      if(money <= 167){
        document.getElementById("gross_salary").innerHTML = `Gross Salary  is kshs. ${money}` ;
        document.getElementById("NHIF").innerHTML = `NHIF Deductions is kshs.0` ;
        document.getElementById("paye").innerHTML = `Paye is kshs. 0` ;
        document.getElementById("net_salary").innerHTML = `Net Salary  is kshs. ${money}` ;

      }
      else if(money<=24000){

        var paye=(0.1*money)
        document.getElementById("paye").innerHTML = `Paye is kshs. ${paye.toFixed(2)}` ;
        document.getElementById("gross_salary").innerHTML = `Gross Salary  is kshs. ${money}` ;
        
        if(money<=5999){
        document.getElementById("NHIF").innerHTML = `NHIF Deductions is kshs. 150` ;
        var net_salary= (money - (paye+150)).toFixed(2)
        document.getElementById("net_salary").innerHTML = `Net Salary  is kshs. ${net_salary}` ;
       }
       else if(money>=6000 && money<=7900){
        document.getElementById("NHIF").innerHTML = `NHIF Deductions is kshs. 300` ;
        var net_salary= (money - (paye+300)).toFixed(2)
        document.getElementById("net_salary").innerHTML = `Net Salary  is kshs. ${net_salary}` ;
       }
       else if(money>=8000 && money<=11999){
        document.getElementById("NHIF").innerHTML = `NHIF Deductions is kshs. 400` ;
        var net_salary= (money - (paye+400)).toFixed(2)
        document.getElementById("net_salary").innerHTML = `Net Salary  is kshs. ${net_salary}` ;
       }

       else if(money>=12000 && money<=14999){
        document.getElementById("NHIF").innerHTML = `NHIF Deductions is kshs. 500` ;
        var net_salary= (money - (paye+500)).toFixed(2)
        document.getElementById("net_salary").innerHTML = `Net Salary  is kshs. ${net_salary}` ;
       }

       else if(money>=15000 && money<=19999){
        document.getElementById("NHIF").innerHTML = `NHIF Deductions is kshs. 600` ;
        var net_salary= (money - (paye+600)).toFixed(2)
        document.getElementById("net_salary").innerHTML = `Net Salary  is kshs. ${net_salary}` ;
       }
        else if(money>=20000 && money<=24000){
        document.getElementById("NHIF").innerHTML = `NHIF Deductions is kshs. 750` ;
          var net_salary= (money - (paye+700)).toFixed(2)
        document.getElementById("net_salary").innerHTML = `Net Salary  is kshs. ${net_salary}` ;
       }

      }
      else if(money>24000 && money<=32333){
        document.getElementById("gross_salary").innerHTML = `Gross Salary  is kshs. ${money}` ;

        var paye=(0.25*money)
        document.getElementById("paye").innerHTML = `Paye is kshs. ${paye.toFixed(2)}` ;

         if(money>=24000 && money<=24999){
        document.getElementById("NHIF").innerHTML = `NHIF Deductions is kshs. 750` ;
        var net_salary= (money - (paye+750)).toFixed(2)
        document.getElementById("net_salary").innerHTML = `Net Salary  is kshs. ${net_salary}` ;

       }
       else if(money>=25000 && money<=29999){
        document.getElementById("NHIF").innerHTML = `NHIF Deductions is kshs. 850` ;
        var net_salary= (money - (paye+850)).toFixed(2)
        document.getElementById("net_salary").innerHTML = `Net Salary  is kshs. ${net_salary}` ;
       }
       else if(money>=30000 && money<=32333){
        document.getElementById("NHIF").innerHTML = `NHIF Deductions is kshs. 900` ;
        var net_salary= (money - (paye+900)).toFixed(2)
        document.getElementById("net_salary").innerHTML = `Net Salary  is kshs. ${net_salary}` ;
       }
      }else if(money>32333){
        document.getElementById("gross_salary").innerHTML = `Gross Salary  is kshs. ${money}` ;

      var paye=(0.3*money)
        document.getElementById("paye").innerHTML = `Paye is ${paye.toFixed(2)}` ;

        if(money>=32333 && money<=34999){
        document.getElementById("NHIF").innerHTML = `NHIF Deductions is kshs. 900` ;
          var net_salary= (money - (paye+900)).toFixed(2)
        document.getElementById("net_salary").innerHTML = `Net Salary  is kshs. ${net_salary}` ;
       }
       else if(money>=35000 && money<=39999){
        document.getElementById("NHIF").innerHTML = `NHIF Deductions is kshs. 950` ;
        var net_salary= (money - (paye+950)).toFixed(2)
        document.getElementById("net_salary").innerHTML = `Net Salary  is kshs. ${net_salary}` ;
       }else{
        document.getElementById("NHIF").innerHTML = `NHIF Deductions is kshs. 1000` ;
        var net_salary= (money - (paye+1000)).toFixed(2)
        document.getElementById("net_salary").innerHTML = `Net Salary  is kshs. ${net_salary}` ;
       }

      }
     
      }else if(money == 0){
        document.getElementById("gross_salary").innerHTML = `Gross Salary  is kshs. 0` ;
        document.getElementById("NHIF").innerHTML = `NHIF Deductions is kshs.0` ;
        document.getElementById("paye").innerHTML = `Paye is kshs. 0` ;
        document.getElementById("net_salary").innerHTML = `Net Salary  is kshs. 0` ;

      }
    
      else{
        alert("Your input is not a number");
      }
  
}