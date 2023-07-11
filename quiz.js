var quiz={question:[
    "Who invented C Language.?",
    "C Language is a successor to which language.?",
    "What is the present C Language Standard.?",
    "C language was invented in which laboratories.?",
    "C language was invented to develop which Operating System.?",
    "C language was invented in the year.?",
    "BCPL Language is also called.?",
    "C language is used in the development of .?",
    "A C program is a combination of.?",
    "Single Line Comment // is also called.?"],
    option:[
        ["Charles Babbage","Grahambel","Dennis Ritchie","Steve Jobs"],
        ["FORTRAN","D Language"," BASIC","B Language"],
        ["C99 ISO/IEC 9899:1999","C11 ISO/IEC 9899:2011","C05 ISO/IEC 9899:2005","C10 ISO/IEC 9899:2010"],
        ["Uniliver Labs","IBM Labs","AT&T Bell Labs","Verizon Labs"],
        ["Android","Linux","Ubuntu","Unix"],
        ["1999","1978","1972","1990"],
        ["C Language","B Language","D Language","None"],
        ["Databases","Graphic applications","Word Processors","All of the above"],
        ["Statements","Functions","Variables","All of the above"],
        ["C++ Style Comment","Java Style Comment","PHP Style Comment","All of the above"]
        ],
        answer:[
            "Dennis Ritchie","B Language","C11 ISO/IEC 9899:2011",
            "AT&T Bell Labs","Unix","1972","None","All of the above",
            "All of the above","All of the above"]
    };

    var index=0;
    var count=0;

function nextname(){
var name=document.getElementById("name").value;
if(name!==""){
    document.getElementById("welcome").innerHTML="Welcome"+" "+name+" "+"🙏 ";}
    else{
       return document.getElementById("name").value="";
    }
    document.getElementById("username").style.display="none";
document.getElementById("welcome").style.display="block";
document.getElementById("load").style.display="block";
document.getElementById("qn").style.display="block";
next();    
}

function next(){
document.getElementById("load").value+=10;
document.getElementById("qnno").innerHTML="Question"+" "+(index+1)+" :";
document.getElementById("score").innerHTML="Score : 0/1";
document.getElementById("score").style.color="Black";
document.getElementById("qndet").innerHTML=quiz.question[index];
quiz.option[index].map((i,ind)=>{
    document.getElementById("op"+(ind+1)).value=i;
    document.getElementById("opt"+(ind+1)).innerHTML=i;
    document.getElementById(`opt${ind + 1}`).style.color='black';
    document.getElementById(`op${ind + 1}`).checked=false;
});
index=index+1;
if(index===quiz.question.length){
    document.getElementById("nextbtn").style.display="none";
document.getElementById("submit").style.display="block";
}
}
function check(val){
    value=document.getElementById(val).value;
    ans=quiz.answer[index-1];
    quiz.option[index-1].map((i,ind)=>{
        let textans=document.getElementById("opt"+(ind+1));
        if(i===ans){
            textans.style.color="Green";
        }
        else{
            textans.style.color="red";
        }
    });
    if(ans===value){
        document.getElementById("score").innerHTML="Score : 1/1";
        document.getElementById("score").style.color="green";
        count++;
    }
    else{
        document.getElementById("score").style.color="red";
    }
}
function submitbtn(){
    document.getElementById("scorect").value=count;
    document.getElementById("urname").value=document.getElementById("name").value;
    document.getElementById("tabel").style.display="block";
document.getElementById("result").style.display="block";
document.getElementById("container").style.display="none";
if(count>=5){
    document.getElementById("pass").innerHTML="You are passed the Examination ✅ with "+(count*10)+"%"
    document.getElementById("passscore").innerHTML="Your Score is "+count+ " out of 10";
    document.getElementById("pass").style.color="Green"; 
}
else{
    document.getElementById("pass").innerHTML="You are failed the Examination ❌ with "+(count*10)+"%"
    document.getElementById("passscore").innerHTML="Your Score is "+count+ " out of 10";
    document.getElementById("pass").style.color="red"; 
}


}