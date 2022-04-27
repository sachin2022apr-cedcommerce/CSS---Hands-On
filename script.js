    function calc() {
        age=document.getElementById('age').value;
        weight=document.getElementById('weight').value;
            if(age>=5&&age<=7){
                if(weight>=15&&weight<=20){
                    document.getElementById('out').innerHTML="Keep it Up!";
                    document.getElementById('out').style.color="green";
                }
                else if(weight<15){
                    document.getElementById('out').innerHTML="You are underWeight.";
                    document.getElementById('out').style.color="Red";
                }
                else {
                    document.getElementById('out').innerHTML="You are overWeight";
                    document.getElementById('out').style.color="Red";
                }
                
            }
            if(age>=8&&age<=10){
                if(weight>=21&&weight<=25){
                    document.getElementById('out').innerHTML="Keep it Up!";
                    document.getElementById('out').style.color="green";
                }
                else if(weight<21){
                    document.getElementById('out').innerHTML="You are underWeight.";
                    document.getElementById('out').style.color="Red";
                }
                else {
                    document.getElementById('out').innerHTML="You are overWeight";
                    document.getElementById('out').style.color="Red";
                }
                
            }
            if(age>11&&age<=15){
                if(weight>=26&&weight<=30){
                    document.getElementById('out').innerHTML="Keep it Up!";
                    document.getElementById('out').style.color="green";
                }
             
                else if(weight<26){
                    document.getElementById('out').innerHTML="You are underWeight.";
                    document.getElementById('out').style.color="Red";
                }
                else {
                    document.getElementById('out').innerHTML="You are overWeight";
                    document.getElementById('out').style.color="Red";
                }
                
            }
            if(age>=16&&age<=20){
                if(weight>=31&&weight<=40){
                    document.getElementById('out').innerHTML="Keep it Up!";
                    document.getElementById('out').style.color="green";
                }
                else if(weight<15){
                    document.getElementById('out').innerHTML="You are underWeight.";
                    document.getElementById('out').style.color="Red";
                }
                else {
                    document.getElementById('out').innerHTML="You are overWeight";
                    document.getElementById('out').style.color="Red";
                }
                
            }
            if(age<5||age>20){
                    document.getElementById('out').innerHTML="enter valid Details!";
                    document.getElementById('out').style.color="Yellow";

                
            }
           
    }
    
