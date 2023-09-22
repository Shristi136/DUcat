function validname(){
    var name=document.getElementById("name").value;
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        document.getElementById("nameerror").innerHTML="Please Mention fullname";
        return false;
    }
    else{
        document.getElementById("nameerror").innerHTML="Valid"; 
        return true;
    }
}

function validclass(){
    var sclass =document.getElementById("class").value;
    if(sclass<=0 || sclass>=13){
        document.getElementById("classerror").innerHTML="class should be from 1st to 12th";
        return false;
    }
    else{

        document.getElementById("classerror").innerHTML="valid";
        return true; 
    }
    
}

function validrollno(){
    var roll =document.getElementById("rollno").value;
    if(roll<1 || roll>25){
       document.getElementById("rollerror").innerHTML="Roll no. can be from 1 to 25";
       return false;
    }
    else{
        document.getElementById("rollerror").innerHTML="valid";
        return true;
    }
}

function validsection(){
    var sec =document.getElementById("section").value;
    if(sec ==="A" || sec==="B" || sec==="C" || sec==="D"){
        document.getElementById("sectionerror").innerHTML="valid";
        return true;
    }
    else{
        document.getElementById("sectionerror").innerHTML="section can be from A to D";
        return false;
    }
}

function validpname(){
    var pname=document.getElementById("pname").value;
    if(!pname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        document.getElementById("pnerror").innerHTML="Please Mention Full Name";
        return false;
    }
    else{
        document.getElementById("pnerror").innerHTML="valid"; 
        return true;
    }
}

function validphn(){
    var phn=document.getElementById("phn").value;
    if(phn.length !== 10){
        document.getElementById("phnerror").innerHTML="Phone number should have 10 digits";
        return false;
    }
    else{
        document.getElementById("phnerror").innerHTML="valid";
        return true;
    }
}

function validemail(){
    var email=document.getElementById("email").value;
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        document.getElementById("emailerror").innerHTML="Email Invalid"; 
        return false;
    }
    else{
        document.getElementById("emailerror").innerHTML="valid";
        return true;
    }
}

function validationform(){
    if(!validname() || !validclass()|| !validrollno()|| !validsection()|| !validpname()|| !validphn() || !validemail()){
        alert("Please fix the error before submition...");
        // return false;

    }
    else{
        alert("Your form has submitted, Kindly check your result");
        // return true;
    }
}

function calculate(){
    var phy=parseInt(document.getElementById("phy").value);
    var chem=parseInt(document.getElementById("chem").value);
    var eng=parseInt(document.getElementById("eng").value);
    var math=parseInt(document.getElementById("math").value);
    var cs=parseInt(document.getElementById("cs").value);

    if(phy>100 || chem>100 || eng>100 || math>100 || cs>100){
        alert("Please Enter Correcr Marks..");
    }
    else{
        var obtain = phy+chem+eng+math+cs;
        document.getElementById("obtain").innerHTML=obtain;

        var percentage=obtain/500*100;
        document.getElementById("per").innerHTML=percentage+"%";

        if(percentage>=80){
            document.getElementById("grade").innerHTML="A";
        }
        else if(percentage>=70){
            document.getElementById("grade").innerHTML="B";
        }
        else if(percentage>=60){
            document.getElementById("grade").innerHTML="C";
        }
        else if(percentage>=50){
            document.getElementById("grade").innerHTML="D";
        }
        else if(percentage>=40){
            document.getElementById("grade").innerHTML="E";
        }
        else {
            document.getElementById("grade").innerHTML="F";
        }

        if(phy>40 && chem>40 && eng>40 && math>40 && cs>40){
            document.getElementById("remarks").innerHTML="<h1 style=color:green >Pass</h1>";
            document.getElementById("image").src="https://www.eventstodayz.com/wp-content/uploads/2021/10/good-luck-animated-image-660x400.gif";
        }
        else{
            document.getElementById("remarks").innerHTML="<h1 style=color:red >Fail</h1>";
            document.getElementById("image").src="https://www.shutterstock.com/image-vector/better-luck-next-time-red-260nw-219836698.jpg";
        }


    }
}