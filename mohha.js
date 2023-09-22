function add(){
    var habit_name=prompt("Habit name : ");
    
    var habit_time=prompt("time you stopped doing the habit : ",'day/month/year');
    var habit_description=prompt("write something like a note : ");
    console.log(habit_name,habit_time,habit_description);
    
    cal(habit_time);
    const div=document.createElement("div");
    const h2el=document.createElement("h2");
    h2el.innerHTML=habit_name;
    h2el.setAttribute("id","h2");
    const h5el=document.createElement("h5");
    h5el.innerHTML=habit_time;
    h5el.setAttribute("id","h5");
    const pel=document.createElement("p");
    pel.innerHTML=habit_description;
    pel.setAttribute("id","p");
    //const h6el=document.createElement("h6");
    //h6el.innerHTML=;
    div.appendChild(h2el);
    div.appendChild(h5el);
    div.appendChild(pel);
    
    div.setAttribute("style",'padding: 10px 10px;margin-top:10px;background-color:rgba(120, 120, 120, 0.262);border-radius: 20px;color: black;');
    div.setAttribute("onclick","show()");
    
    document.querySelector("div.side-note").appendChild(div);
    
    
}
function cal(date){
    var habit_date=date.split("/");
    var current_date=new Date();
    var current_day=current_date.getDay();
    var current_month=current_date.getMonth();
    var current_year=current_date.getFullYear();
    console.log(current_day,current_month,current_year);
    var numh=(habit_date[0])+(habit_date[1]-1)*30+habit_date[2]*365;
    var numc=(current_day)+(current_month-1)*30+current_year*365;
    console.log(habit_date[0],habit_date[1],habit_date[2])
    console.log(numc,numh);
}

var notes=[];
function show(){
    const h2_el=document.getElementsByTagName('h2')[0];
    const h5_el=document.getElementsByTagName('h5')[0];
    const p_el=document.getElementsByTagName('p')[0];
    console.log(h2_el);
    if (notes[0]==null||notes[0]!=h2_el){
        console.log("it works");
        const div1=document.createElement("div");
        
        notes.push(h2_el,h5_el,p_el);
        div1.appendChild(h2_el);
        div1.appendChild(h5_el);
        div1.appendChild(p_el);
        div1.setAttribute("style","background-color: rgb(216, 240, 222);text-align: center;")
        document.querySelector("div.main-note").appendChild(div1);
        console.log(notes);
        
    } else{return}
    
}
