import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  get IsAuthenticated() {
    return !!localStorage.getItem("token");
  }

  HTTPOptions: Object = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
    responseType: "text",
  };

  register(credentials) {
    // let HTTPOptions: Object = {
    //   headers: new HttpHeaders({
    //     "Content-Type": "application/json",
    //   }),
    //   responseType: "text",
    // };

    this.http
      .post<any>(
        "http://localhost:53582/api/account",
        credentials,
        this.HTTPOptions
      )
      .subscribe((res) => {
        this.authenticate(res);
      });
  }

  login(credentials) {
    this.http
      .post<any>(
        "http://localhost:53582/api/account/login",
        credentials,
        this.HTTPOptions
      )
      .subscribe((res) => {
        this.authenticate(res);
      });
  }

  logout() {
    localStorage.removeItem("token");
  }

  authenticate(res) {
    localStorage.setItem("token", res);

    this.router.navigate(["/"]);
  }
}
