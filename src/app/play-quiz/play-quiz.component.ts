import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../api.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { FinishedComponent } from "../finished/finished.component";

@Component({
  selector: "app-play-quiz",
  templateUrl: "./play-quiz.component.html",
  styleUrls: ["./play-quiz.component.css"],
})
export class PlayQuizComponent implements OnInit {
  seasons: string[] = ["Winter", "Spring", "Summer", "Autumn"];
  favoriteSeason; //placeholder
  quizId;
  questions;
  question = {
    text: "",
    correctAnswer: "",
    answer1: "",
    answer2: "",
    answer3: "",
    quizId: "",
  };

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor(
    public api: ApiService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.quizId = this.route.snapshot.paramMap.get("quizId");
    this.api.getQuestions(this.quizId).subscribe((res) => {
      this.questions = res;

      this.questions.forEach((q) => {
        q.answers = [q.correctAnswer, q.answer1, q.answer2, q.answer3];
        this.shuffle(q.answers);
        console.log("q ", q.answers);
      });
    });
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  finish() {
    let correct = 0;
    this.questions.forEach((q) => {
      if (q.correctAnswer == q.selectedAnswer) correct++;
    });

    const dialogRef = this.dialog.open(FinishedComponent, {
      data: { correct, total: this.questions.length },
    });
  }
}
