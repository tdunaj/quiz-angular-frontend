import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuestionComponent } from "./question/question.component";
import { QuestionsComponent } from "./questions/questions.component";
import { HomeComponent } from "./home/home.component";
import { QuizComponent } from "./quiz/quiz.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { PlayComponent } from "./play/play.component";
import { PlayQuizComponent } from "./play-quiz/play-quiz.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "question", component: QuestionComponent },
  { path: "question/:quizId", component: QuestionComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "quiz", component: QuizComponent },
  { path: "play", component: PlayComponent },
  { path: "playQuiz/:quizId", component: PlayQuizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
