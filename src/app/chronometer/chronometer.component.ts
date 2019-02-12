import { Component, OnInit } from "@angular/core";
//import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
//import { start } from "repl";

export enum chronoType {
  resting,
  serie
}
@Component({
  selector: "app-chronometer",
  templateUrl: "./chronometer.component.html",
  styleUrls: ["./chronometer.component.css"]
})
export class ChronometerComponent implements OnInit {
  restTime: number;
  serieTime: number;
  buttonText: string;
  message: string;
  chronometer: number;
  chronoState: chronoType;
  timer;
  constructor() {
    this.buttonText = "START";
  }

  ngOnInit() {
    this.chronometer = 0;
    this.serieTime = 20;
    this.restTime = 40;
  }

  startStop() {
    this.message = "";

    if (!this.validateForm()) return false;

    if (this.buttonText == "START") {
      this.buttonText = "STOP";
      this.chronoState = chronoType.serie;
      this.message = "Let's begin with the first ...";
      this.startTimer();
    } else {
      this.buttonText = "START";
      this.message = "Stopped by user";
      this.chronometer = 0;
      this.stopTimer();
    }
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.chronometer++;
      if (
        (this.chronometer == this.restTime &&
          this.chronoState == chronoType.resting) ||
        (this.chronometer == this.serieTime &&
          this.chronoState == chronoType.serie)
      ) {
        this.chronometer = 0;

        if (this.chronoState == chronoType.resting) {
          this.chronoState = chronoType.serie;
          this.message = "COME ON!!! LET'S DO IT";
        } else if (this.chronoState == chronoType.serie) {
          this.chronoState = chronoType.resting;
          this.message = "REST " + this.restTime + " SECONDS";
        }
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  validateForm() {
    let res: Boolean = true;

    if (this.restTime == 0 || this.serieTime == 0) {
      this.message = "Some value is zero";
      res = false;
    }

    if (isNaN(this.restTime) || isNaN(this.serieTime)) {
      this.message = "Values must be numbers";
      res = false;
    }

    return res;
  }
}
