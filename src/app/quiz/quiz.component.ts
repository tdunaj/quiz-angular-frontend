import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"],
})
export class QuizComponent implements OnInit {
  quiz = {
    title: "",
  };

  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.api.quizSelected.subscribe((quiz) => (this.quiz = quiz));
  }

  post() {
    this.api.postQuiz(this.quiz);
  }

  reset() {
    this.quiz = {
      title: "",
    };
  }
}
