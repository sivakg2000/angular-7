import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IResult } from "./result";
import { throwError as ObservableThrowError, Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}

  private url: string = "https://api1.github.com/search/users?q=test";

  getUsersViaHttp(): Observable<IResult> {
    return this.http
      .get<IResult>(this.url)
      .pipe(catchError(this.httpErrorHandler));
  }

  httpErrorHandler(error: HttpErrorResponse) {
    return ObservableThrowError(error.message || "Server Error");
  }

  getUsers() {
    return [
      {
        login: "test",
        id: 383316,
        node_id: "MDQ6VXNlcjM4MzMxNg==",
        avatar_url: "https://avatars3.githubusercontent.com/u/383316?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/test",
        html_url: "https://github.com/test",
        followers_url: "https://api.github.com/users/test/followers",
        following_url:
          "https://api.github.com/users/test/following{/other_user}",
        gists_url: "https://api.github.com/users/test/gists{/gist_id}",
        starred_url: "https://api.github.com/users/test/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/test/subscriptions",
        organizations_url: "https://api.github.com/users/test/orgs",
        repos_url: "https://api.github.com/users/test/repos",
        events_url: "https://api.github.com/users/test/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/test/received_events",
        type: "User",
        site_admin: false,
        score: 1.0
      },
      {
        login: "astaxie",
        id: 233907,
        node_id: "MDQ6VXNlcjIzMzkwNw==",
        avatar_url: "https://avatars3.githubusercontent.com/u/233907?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/astaxie",
        html_url: "https://github.com/astaxie",
        followers_url: "https://api.github.com/users/astaxie/followers",
        following_url:
          "https://api.github.com/users/astaxie/following{/other_user}",
        gists_url: "https://api.github.com/users/astaxie/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/astaxie/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/astaxie/subscriptions",
        organizations_url: "https://api.github.com/users/astaxie/orgs",
        repos_url: "https://api.github.com/users/astaxie/repos",
        events_url: "https://api.github.com/users/astaxie/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/astaxie/received_events",
        type: "User",
        site_admin: false,
        score: 1.0
      },
      {
        login: "testerSunshine",
        id: 20162049,
        node_id: "MDQ6VXNlcjIwMTYyMDQ5",
        avatar_url: "https://avatars1.githubusercontent.com/u/20162049?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/testerSunshine",
        html_url: "https://github.com/testerSunshine",
        followers_url: "https://api.github.com/users/testerSunshine/followers",
        following_url:
          "https://api.github.com/users/testerSunshine/following{/other_user}",
        gists_url:
          "https://api.github.com/users/testerSunshine/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/testerSunshine/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/testerSunshine/subscriptions",
        organizations_url: "https://api.github.com/users/testerSunshine/orgs",
        repos_url: "https://api.github.com/users/testerSunshine/repos",
        events_url:
          "https://api.github.com/users/testerSunshine/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/testerSunshine/received_events",
        type: "User",
        site_admin: false,
        score: 1.0
      },
      {
        login: "libenhe",
        id: 10752102,
        node_id: "MDQ6VXNlcjEwNzUyMTAy",
        avatar_url: "https://avatars0.githubusercontent.com/u/10752102?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/libenhe",
        html_url: "https://github.com/libenhe",
        followers_url: "https://api.github.com/users/libenhe/followers",
        following_url:
          "https://api.github.com/users/libenhe/following{/other_user}",
        gists_url: "https://api.github.com/users/libenhe/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/libenhe/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/libenhe/subscriptions",
        organizations_url: "https://api.github.com/users/libenhe/orgs",
        repos_url: "https://api.github.com/users/libenhe/repos",
        events_url: "https://api.github.com/users/libenhe/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/libenhe/received_events",
        type: "User",
        site_admin: false,
        score: 1.0
      },
      {
        login: "TestLeafPages",
        id: 21636478,
        node_id: "MDQ6VXNlcjIxNjM2NDc4",
        avatar_url: "https://avatars0.githubusercontent.com/u/21636478?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/TestLeafPages",
        html_url: "https://github.com/TestLeafPages",
        followers_url: "https://api.github.com/users/TestLeafPages/followers",
        following_url:
          "https://api.github.com/users/TestLeafPages/following{/other_user}",
        gists_url: "https://api.github.com/users/TestLeafPages/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/TestLeafPages/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/TestLeafPages/subscriptions",
        organizations_url: "https://api.github.com/users/TestLeafPages/orgs",
        repos_url: "https://api.github.com/users/TestLeafPages/repos",
        events_url:
          "https://api.github.com/users/TestLeafPages/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/TestLeafPages/received_events",
        type: "User",
        site_admin: false,
        score: 1.0
      },
      {
        login: "test123",
        id: 27031,
        node_id: "MDQ6VXNlcjI3MDMx",
        avatar_url: "https://avatars3.githubusercontent.com/u/27031?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/test123",
        html_url: "https://github.com/test123",
        followers_url: "https://api.github.com/users/test123/followers",
        following_url:
          "https://api.github.com/users/test123/following{/other_user}",
        gists_url: "https://api.github.com/users/test123/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/test123/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/test123/subscriptions",
        organizations_url: "https://api.github.com/users/test123/orgs",
        repos_url: "https://api.github.com/users/test123/repos",
        events_url: "https://api.github.com/users/test123/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/test123/received_events",
        type: "User",
        site_admin: false,
        score: 1.0
      }
    ];
  }
}
