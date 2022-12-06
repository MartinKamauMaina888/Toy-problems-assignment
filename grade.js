/////////////////////////////////////////////student grades/////////////////////////////////////////////////
const gradeCalculator= ()=>{

    if(a = +(prompt('Please insert your marks(Marks should be between 0 and 100'))){

      if(a>100 || a<0){
        alert("Input should be between 0 and 100")
        document.getElementById("student_grades").innerHTML = "" ;
      }else if(a>79){
        document.getElementById("student_grades").innerHTML = "Your Grade is A" ;

      }else if(a>=60 && a<=79){
        document.getElementById("student_grades").innerHTML = "Your Grade is B" ;

      }else if(a>49 && a<=59){
        document.getElementById("student_grades").innerHTML = "Your Grade is C" ;

      }else if(a>=40 && a<=49){
        document.getElementById("student_grades").innerHTML = "Your Grade is D" ;
      }
      else{
        document.getElementById("student_grades").innerHTML = "Your Grade is E" ;

      }
      }else if(a==0){
                  document.getElementById("student_grades").innerHTML = "Your Grade is E" ;
      }else if(a==''){
        alert("emopty")
      }
      else{
        alert("Your input is not a number");
      }
    }
  