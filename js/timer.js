export default class Timer{
    constructor (root){
        
        this.el={
            minutes : root.querySelector(".diso__part--minutes"),
            seconds : root.querySelector(".diso__part--seconds"),
            control : root.querySelector(".diso__bt--control"),
            reset : root.querySelector(".diso__bt--rest")
            
        };
        
        this.inteval = null;
        this.remainingseconds = 0;

        
        
        this.el.control.addEventListener("click",() => {
            if(this.inteval===null){
                this.start();
            }else{
                this.stop();
            }
        });   
        this.el.reset.addEventListener("click",() => {
            const inputMinutes= prompt("enter a time");
            if(inputMinutes<60){
                this.stop();
                this.remainingseconds = inputMinutes *60;
                this.updateInterfaceTime();
            }
        });   
    }
    start(){
        if(this.remainingseconds===0) return0;
        this.inteval = setInterval(() => {
            this.remainingseconds--;
            this.updateInterfaceTime();

            if(this.remainingseconds===0){
                this.stop();
            }
        },1000);

        console.log(this.updateInterfaceControl());
    }
    stop(){
        clearInterval(this.inteval);
        this.inteval=null;
        this.updateInterfaceControl();
    }
    updateInterfaceTime () {
        const minutes = Math.floor(this.remainingseconds /60);
        const seconds = this.remainingseconds % 60;
        
        this.el.minutes.textContent = minutes.toString().padStart(2,"0");
        this.el.seconds.textContent = seconds.toString().padStart(2,"0");
    }
    updateInterfaceControl(){
        if(this.inteval===null){
            this.el.control.innerHTML = `<span class="material-symbols-outlined">arrow_right</span>`;
            this.el.control.classList.add("diso__bt--start");
            this.el.control.classList.remove("diso__bt--stop");
        }
        else{
            this.el.control.innerHTML = `<span class="material-symbols-outlined">pause</span>`;
            this.el.control.classList.add("diso__bt--stop");
            this.el.control.classList.remove("diso__bt--start");
        }
    }
    static getHTML(){
        return `
            <span class="diso__part diso__part--minutes">00</span>
            <span class="diso__part">:</span>
            <span class="diso__part diso__part--seconds">00</span>
        

            <button  style="grid-column: 1/2;grid-row: 2;" type="button" class="diso__bt diso__bt--control diso__bt--start">
                <span class="material-symbols-outlined">arrow_right</span>
            </button>
            <button  style="grid-column: 3/4;grid-row: 2;" type="button" class="diso__bt diso__bt--reset">
                <span class="material-symbols-outlined">timer</span>
            </button>
        `;
    }
  }