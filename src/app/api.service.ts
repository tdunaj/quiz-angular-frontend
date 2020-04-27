import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private selectedQuestion = new Subject<any>();
  public questionSelected = this.selectedQuestion.asObservable();

  private selectedQuiz = new Subject<any>();
  public quizSelected = this.selectedQuiz.asObservable();

  //test
  // question = {
  //   text: "",
  //   correctAnswer: "",
  //   answer1: "",
  //   answer2: "",
  //   answer3: "",
  //   quizId: "",
  // };

  constructor(private http: HttpClient) {}

  getQuestions(quizId) {
    return this.http.get(`http://localhost:53582/api/questions/${quizId}`);
  }

  postQuestion(question) {
    this.http
      .post("http://localhost:53582/api/questions", question)
      .subscribe((res) => {
        console.log(res);
      });
  }

  putQuestion(question) {
    this.http
      .put(`http://localhost:53582/api/questions/${question.id}`, question)
      .subscribe((res) => {
        console.log(res);
      });
  }

  getQuizzes() {
    return this.http.get("http://localhost:53582/api/quizzes");
  }

  getAllQuizzes() {
    return this.http.get("http://localhost:53582/api/quizzes/all");
  }

  postQuiz(quiz) {
    this.http
      .post("http://localhost:53582/api/quizzes", quiz)
      .subscribe((res) => {
        console.log(res);
      });
  }

  putQuiz(quiz) {
    this.http
      .put(`http://localhost:53582/api/quizzes/${quiz.id}`, quiz)
      .subscribe((res) => {
        console.log(res);
      });
  }

  selectQuestion(question) {
    this.selectedQuestion.next(question);
  }

  selectQuiz(quiz) {
    this.selectedQuiz.next(quiz);
  }
}
