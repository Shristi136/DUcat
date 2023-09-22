function calculate(){
    var a= parseInt(document.getElementById("first").value);
    var b= parseInt(document.getElementById("second").value);
    var o=document.getElementById("operator").value;


    switch(o){
        case "+" : document.getElementById("result").value=a + b;
        break;
        case  "-" : document.getElementById("result").value=a - b;
        break;
        case  "*" : document.getElementById("result").value=a * b;
        break;
        case "/" : document.getElementById("result").value=a / b;
        break;
        default:document.getElementById("result").value="Invalid Method";
    }
}
// return calculate;
// five
function counting(){
    var a=parseInt(document.getElementById("count").value)
    for (let i=a; i<=100; i=i+5){
        document.write("<br>Hi ",i);
    }
}

// three
function tin(){
    var b=parseInt(document.getElementById("three").value);
    let j=b;
    while(j>=3){
        if(j%3==0)
        document.write("<br> tin ",j);
        j--;
    }
}

// square
function square(){
   var c=parseInt(document.getElementById("sqq").value);
   var sum=0;
   for(let i=c; i<=30; i++){
    if(sum=i*i){
    document.write("<br> square ",sum);}
   }
}

// cube
function cube(){
    var d=parseInt(document.getElementById("cube").value);
    var sum=0;
    for(let i=d; i<=30; i++){
        if(sum=i**3){
            document.write("<br> cubes ", sum)
        }
    }
}

// fibonacci
function fibonacci(){
    var e=parseInt(document.getElementById("fibo").value);
    var f=e+1;
    for(let i=e; i<=12; i++){
        var temp=e+f;
        e=f;
        f=temp;
        document.write("<br> fibonacci ", temp);

    }
}

// table
function table(){
    var g=parseInt(document.getElementById("table").value);
    for(let i=1; i<=10; i++){
        document.write("<br>",g," X ",i," = ", g*i)
    }
}

// backtick
function backtick(){
    var h=parseInt(document.getElementById("backtick").value);
    for(let i=1; i<=10; i++){
        document.write(`<br> ${h} X ${i} = ${h*i}`);
    }
}

// nested tables with while
function tab(){
    var x=parseInt(document.getElementById("phla").value);
    var y=parseInt(document.getElementById("dusra").value);
    while(x<=y){
        for(let t=1; t<=10; t++){
            document.write(`<br> ${x} X ${t} = ${x*t}`);
        }
        (x=x+1);
        document.write("<hr>");
    }
}

// nested tables with For
function tables(){
    var n1=parseInt(document.getElementById("n1").value);
    var n2=parseInt(document.getElementById("n2").value);
    for(;n1<=n2;n1++){
        for(let j=1; j<=10; j++){
            document.write(`<br> ${n1} X ${j} = ${n1*j}`);
        }
        document.write("<hr>");
    }
}

// number pyramid
function pyramid(){
    for(let p1=1; p1<=5; p1++){
        for(let p2=1; p2<=p1;p2++){
            document.write(`&emsp; ${p2}`);
        }
        document.write("<br>");
    }
}

// number pyramid type 2
function type2(){
    for(let p3=1;p3<=7;p3++){
        for(let p4=1;p4<=p3;p4++){
            document.write(`&emsp; ${p3}`);
        }
        document.write("<br>");
    }
}

// number pyramid type 3
function type3(){
    for(let p5=1; p5<=5; p5++){
        let temp=p5;
        for( p6=1; p6<=p5; p6++){
            document.write(`&emsp; ${temp}`);
            temp++;
        }
        document.write("<br>")
    }
}

// number pyramid type 4
function type4(){
    let temp=1;
    for(let p7=1; p7<=5; p7++){
        for(let p8=1; p8<=p7; p8++){
            document.write(`&emsp; ${temp}`);
            temp++;
        }
        document.write("<br>");
    }
}

// star pyramid
function star(){
    for(let p9=1; p9<=5;p9++){
        for(let p10=1; p10<=p9;p10++){
            let temp="*";
            document.write(`&emsp; ${temp}`);
            temp++;
        }
        document.write("<br>");
    }
}


// ASCII code will be use to make the alphabet triangle
function utf(){
    for(let i=0;i<=65535;i++){
        document.write(i,"&emsp;",String.fromCharCode(i),"<br>");
    }
}


// alphabet pyramid
function alphabet(){

    // type 1:-
    document.write("<h1> &emsp; Type 1. <br></h1>")
    for(let a1=1; a1<=5; a1++){
        let alpha=65;
        for(let a2=1;a2<=a1;a2++){
            document.write("&emsp;",String.fromCharCode(alpha));
            alpha++;
        }
        document.write("<br>");
    }

    //type 2:-
    document.write("<h1> &emsp; Type 2. <br> </h1>");
    let alpha=65;
    for(let b1=1;b1<=5;b1++){
        for(b2=1; b2<=b1; b2++){
            document.write("&emsp;",String.fromCharCode(alpha));
        }
        alpha++
        document.write("<br>");
    }

    // type3:-
    document.write("<h1> &emsp; Type 3. <br> </h1>");
    let alp=65;
    for(let c1=1; c1<=5; c1++){
        for(let c2=1; c2<=c1; c2++){
            document.write("&emsp;", String.fromCharCode(alp));
            alp++;
        }
        document.write("<br>");
    }
}


// FROM HERE WE START ARRAY 
// ARRAY FUNCTION
function array1(){
    var x1=["sita","raam","hanumaan","lakshman"];
    for(let i=0;i<x1.length;i++){
        // x1.length is object.property here
        document.write("<br>",x1[i].fontsize(7).fontcolor("red").bold());
        // here i use more then one string method to proofe that we can use morw then one method
    }
}

// now object array with ihs property:-
function obj(){
    var employee={
        e_name:" Shristi Verma",
        e_age: 24,
        e_field:" Full Stack Developer",
        e_salary: 30000
    };
    document.write("<br> Employee name :", employee.e_name);
    document.write("<br> Employee age :", employee.e_age);
    document.write("<br> Employee field :", employee.e_field);
    document.write("<br> Employee salary :", employee.e_salary);
}

// now experiment with object-property-method
var obt={
    like:" Dog",
    why:" lover",
    fullname:function(){
        return this.like +"   "+ this.why
    }
};
document.write("<h1><br> fullly:-  </h1>",obt.fullname().fontsize(7).fontcolor("green").bold());

// members of an array :-
var m=[34,15,"hello",78,114,"jack"];
function chalo(){
    altert("we are the members of array family");
};
var l=[12,13,m,chalo,obj,obt];
    for( let j=0; j<l.length; j++){
        document.write("<br>",l[j]);
    };

    document.write("<h1><br>HERE IS THE PROOF:- Members of an array having function, array, and Object!!!</h1>")
