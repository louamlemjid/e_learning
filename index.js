var n1 ="";
var n2="";
var isn=false;
var equalsign=document.getElementById("equal");

function formnumber(n){
  if(!isn){
    n1+=n;
    document.getElementById("disn").textContent=n1
  }
  else{
    n2+=n;
    document.getElementById("disn").textContent=n2
  }
}
function sum(n1,n2){  
  return n1+n2;}
function mul(n1,n2){  
  return n1*n2;}
function div(n1,n2){  
  return n1/n2;}
function sub(n1,n2){  
  return n1-n2;}

function cal(p1,p2,operation){
  p2=Number(p2)
  result=operation(p1,p2)
  document.getElementById("disn").textContent=result
}
function opsum(){
  n1=Number(n1); 
  isn=true;
  equalsign.setAttribute("onclick","cal(n1,n2,sum)");
}
function opsub(){
  n1=Number(n1);
  isn=true;
  equalsign.setAttribute("onclick","cal(n1,n2,sub)");
}
function opdiv(){
  n1=Number(n1);
  isn=true;
  equalsign.setAttribute("onclick","cal(n1,n2,div)");
}
function opmul(){
  n1=Number(n1);
  isn=true;
  equalsign.setAttribute("onclick","cal(n1,n2,mul)");
}

