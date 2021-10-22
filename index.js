const refs = {
  body: document.body,
  divTimer: document.querySelector(".timer"),
  spanDays: document.querySelector('[data-value="days"]'),
  spanHours: document.querySelector('[data-value="hours"]'),
  spanMins: document.querySelector('[data-value="mins"]'),
  spanSecs: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ targetDate, selector }) {
    this.targetDate = targetDate.getTime();
    this.selector = selector.slice(1);
    this.start();
  }

  start() {
    refs.divTimer.setAttribute("id", this.selector);
    setInterval(() => {
      const correntTime = Date.now();
      const deltaTime = this.targetDate - correntTime;
      const { days, hours, mins, secs } = this.getTimeComponents(deltaTime);

      // console.log(`${days}:${hours}:${mins}:${secs}`);

      refs.spanDays.textContent = days;
      refs.spanHours.textContent = hours;
      refs.spanMins.textContent = mins;
      refs.spanSecs.textContent = secs;
    }, 1000);
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const timer1 = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2022"),
});
