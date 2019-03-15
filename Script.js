/*
 function myFunction(){

    var grade;
   var myInput = document.getElementById("myInput").value;
    if (myInput >= 75){
        grade = "Excellence";
    }else if(myInput >= 65 && myInput < 75){
        grade = "Very Good";
    }else if(myInput >= 55 && myInput < 65){
        grade = "Credit";
    }else if(myInput >= 45 && myInput < 55){
        grade = "Pass";
    } else if(myInput < 45){
        grade = "Fail";
    }
    document.getElementById("demo1").innerHTML = grade;
    
 }*/

 document.getElementById("gradeTable")
    .addEventListener("change", function(e) {
        var scoreInput = e.target.dataset.inputfield;
        var element = document.getElementById(scoreInput);
        element.innerHTML= convertToGrade(e.target.value); 

 });
 
 function convertToGrade(num){
     if(num >= 75){
        return 'Excellent';
     }else if (num >= 65 && num < 75){
         return 'Very Good';
     }else if(num >= 55 && num < 65){
         return 'Credit';
     }else if(num >= 45 && num < 55){
         return 'Pass';
     }else if(num < 45){
         return 'Fail';
     }
   
 }