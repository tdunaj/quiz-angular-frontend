import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ApiService } from "../api.service";

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.css"],
})
export class QuestionsComponent implements OnInit {
  question = {
    text: "",
    correctAnswer: "",
    answer1: "",
    answer2: "",
    answer3: "",
  };

  questions;
  quizId;

  constructor(public api: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.quizId = this.route.snapshot.paramMap.get("quizId");
    this.api.getQuestions(this.quizId).subscribe((res) => {
      console.log("q c " + res);
      this.questions = res;
    });
  }
}
