class Habit{
    constructor(){
        this.habits=[];
        this.habit_name=prompt("what is the habit you want to quit : ");
        this.habit_date=prompt("last time you stopped it :","DD/MM/YYYY");
        this.habit_description=prompt("write something :","for example: i would like to stop for one month");
    }
    addHabit(){
        this.habits.push([this.habit_name,this.habit_date,this.habit_description]);
        const thish2=document.createElement("h2");
        thish2.innerText=this.habit_name;
        const thish5=document.createElement("h5");
        thish5.innerText=this.habit_date;
        const thisp=document.createElement("p");
        thisp.innerText=this.habit_description;
        const thisdiv=document.createElement("div");
        thisdiv.appendChild(thish2);
        thisdiv.appendChild(thish5);
        thisdiv.appendChild(thisp);
        document.querySelector("div.side-note").appendChild(thisdiv);
    }
}