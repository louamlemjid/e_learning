class Timer {
  constructor(root) {
    root.innerHTML = Timer.getHTML();

    this.el = {
      minutes: root.querySelector(".diso__part--minutes"),
      seconds: root.querySelector(".diso__part--seconds"),
      control: root.querySelector(".diso__bt--control"),
      reset: root.querySelector(".diso__bt--reset")
    };
    
    this.interval = null;
    this.remainingSeconds = 0;

    this.el.control.addEventListener("click", () => {
      if (this.interval === null) {
        this.start();
      } else {
        this.stop();
      }
    });

    this.el.reset.addEventListener("click", () => {
      const inputMinutes = prompt("Enter number of minutes:");

      if (inputMinutes < 60) {
        this.stop();
        this.remainingSeconds = inputMinutes * 60;
        this.updateInterfaceTime();
      }
    });
  }

  updateInterfaceTime() {
    const minutes = Math.floor(this.remainingSeconds / 60);
    const seconds = this.remainingSeconds % 60;

    this.el.minutes.textContent = minutes.toString().padStart(2, "0");
    this.el.seconds.textContent = seconds.toString().padStart(2, "0");
  }

  updateInterfaceControls() {
    if (this.interval === null) {
      this.el.control.innerHTML = `<span class="material-icons">play_arrow</span>`;
      this.el.control.classList.add("diso__bt--start");
      this.el.control.classList.remove("diso__bt--stop");
    } else {
      this.el.control.innerHTML = `<span class="material-icons">pause</span>`;
      this.el.control.classList.add("diso__bt--stop");
      this.el.control.classList.remove("diso__bt--start");
    }
  }

  start() {
    if (this.remainingSeconds === 0) return;

    this.interval = setInterval(() => {
      this.remainingSeconds--;
      this.updateInterfaceTime();

      if (this.remainingSeconds === 0) {
        this.stop();
      }
    }, 1000);

    this.updateInterfaceControls();
  }

  stop() {
    clearInterval(this.interval);

    this.interval = null;

    this.updateInterfaceControls();
  }

  static getHTML() {
    return `
			<span class="diso__part diso__part--minutes">00</span>
			<span class="diso__part">:</span>
			<span class="diso__part diso__part--seconds">00</span>
			<button type="button" class="diso__bt diso__bt--control diso__bt--start">
				<span class="material-icons">play_arrow</span>
			</button>
			<button type="button" class="diso__bt diso__bt--reset">
				<span class="material-icons">timer</span>
			</button>
		`;
  }
}

new Timer(
	document.querySelector(".diso")
);