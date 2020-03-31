import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "app-cp-counter",
  templateUrl: "./cp-counter.component.html",
  styleUrls: ["./cp-counter.component.scss"]
})
export class CpCounterComponent implements OnInit, OnDestroy {
  clock: any;
  minutes: any = "00";
  seconds: any = "00";
  milliseconds: any = "00";
  rMinutes: any = "00";
  rSeconds: any = "00";
  rMilliseconds: any = "00";
  showForward: boolean;
  showBackward: boolean;

  @Input() start: boolean;
  @Input() durationInMin: number;
  @Input() showTimerControls: boolean;

  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes["start"]);
    if (changes["start"].currentValue) {
      this.startTimer();
      this.showBackward = true;
    } else {
      this.clearTimer();
    }
  }

  laps: any = [];
  counter: number;
  timerRef;
  timerRef1;
  timer: number;
  running: boolean = false;
  startText = "Start";

  forwardTime(startTime) {
    this.counter = Date.now() - startTime;
    this.milliseconds = Math.floor(
      Math.floor(this.counter % 1000) / 10
    ).toFixed(0);
    this.minutes = Math.floor(this.counter / 60000);
    this.seconds = Math.floor(Math.floor(this.counter % 60000) / 1000).toFixed(
      0
    );
    if (Number(this.minutes) < 10) {
      this.minutes = "0" + this.minutes;
    } else {
      this.minutes = "" + this.minutes;
    }
    if (Number(this.milliseconds) < 10) {
      this.milliseconds = "0" + this.milliseconds;
    } else {
      this.milliseconds = "" + this.milliseconds;
    }
    if (Number(this.seconds) < 10) {
      this.seconds = "0" + this.seconds;
    } else {
      this.seconds = "" + this.seconds;
    }
  }

  startTimer() {
    this.running = !this.running;
    if (this.running) {
      this.startText = "Stop";
      const startTime = Date.now() - (this.counter || 0);

      this.timerRef = setInterval(() => {
        this.forwardTime(startTime);
      });

      const endTimeInMin = this.durationInMin * 60;
      this.timer = endTimeInMin;
      this.timerRef1 = setInterval(() => {
        this.rMinutes = parseInt(this.timer / 60 + "", 10);
        this.rSeconds = parseInt((this.timer % 60) + "", 10);

        this.rMinutes =
          this.rMinutes < 10 ? "0" + this.rMinutes : this.rMinutes;
        this.rSeconds =
          this.rSeconds < 10 ? "0" + this.rSeconds : this.rSeconds;

        if (--this.timer < 0) {
          this.timer = endTimeInMin;
        }
      }, 1000);
    } else {
      this.startText = "Resume";
      clearInterval(this.timerRef);
    }
  }
  lapTimeSplit() {
    let lapTime = this.minutes + ":" + this.seconds + ":" + this.milliseconds;
    this.laps.push(lapTime);
  }

  clearTimer() {
    this.running = false;
    this.startText = "Start";
    this.counter = undefined;
    (this.milliseconds = "00"), (this.seconds = "00"), (this.minutes = "00");
    this.laps = [];
    clearInterval(this.timerRef);
  }

  ngOnDestroy() {
    clearInterval(this.timerRef);
  }
  ngOnInit() {}
}
