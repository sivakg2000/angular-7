import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IResult } from './result';
import { throwError as ObservableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'





@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  private url: string = "https://api1.github.com/search/users?q=test";

  getUsersViaHttp(): Observable<IResult> {
    return this.http.get<IResult>(this.url).pipe(catchError(this.httpErrorHandler))
  }

  httpErrorHandler(error: HttpErrorResponse) {
    return ObservableThrowError(error.message || "Server Error")
  }

  getUsers() {
    return [
      {
        "login": "sivagao",
        "id": 697853,
        "node_id": "MDQ6VXNlcjY5Nzg1Mw==",
        "avatar_url": "https://avatars2.githubusercontent.com/u/697853?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/sivagao",
        "html_url": "https://github.com/sivagao",
        "followers_url": "https://api.github.com/users/sivagao/followers",
        "following_url": "https://api.github.com/users/sivagao/following{/other_user}",
        "gists_url": "https://api.github.com/users/sivagao/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/sivagao/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/sivagao/subscriptions",
        "organizations_url": "https://api.github.com/users/sivagao/orgs",
        "repos_url": "https://api.github.com/users/sivagao/repos",
        "events_url": "https://api.github.com/users/sivagao/events{/privacy}",
        "received_events_url": "https://api.github.com/users/sivagao/received_events",
        "type": "User",
        "site_admin": false,
        "score": 112.67974
      },
      {
        "login": "sivaprasadreddy",
        "id": 542428,
        "node_id": "MDQ6VXNlcjU0MjQyOA==",
        "avatar_url": "https://avatars3.githubusercontent.com/u/542428?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/sivaprasadreddy",
        "html_url": "https://github.com/sivaprasadreddy",
        "followers_url": "https://api.github.com/users/sivaprasadreddy/followers",
        "following_url": "https://api.github.com/users/sivaprasadreddy/following{/other_user}",
        "gists_url": "https://api.github.com/users/sivaprasadreddy/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/sivaprasadreddy/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/sivaprasadreddy/subscriptions",
        "organizations_url": "https://api.github.com/users/sivaprasadreddy/orgs",
        "repos_url": "https://api.github.com/users/sivaprasadreddy/repos",
        "events_url": "https://api.github.com/users/sivaprasadreddy/events{/privacy}",
        "received_events_url": "https://api.github.com/users/sivaprasadreddy/received_events",
        "type": "User",
        "site_admin": false,
        "score": 83.82907
      },
      {
        "login": "byteshiva",
        "id": 10637299,
        "node_id": "MDQ6VXNlcjEwNjM3Mjk5",
        "avatar_url": "https://avatars0.githubusercontent.com/u/10637299?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/byteshiva",
        "html_url": "https://github.com/byteshiva",
        "followers_url": "https://api.github.com/users/byteshiva/followers",
        "following_url": "https://api.github.com/users/byteshiva/following{/other_user}",
        "gists_url": "https://api.github.com/users/byteshiva/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/byteshiva/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/byteshiva/subscriptions",
        "organizations_url": "https://api.github.com/users/byteshiva/orgs",
        "repos_url": "https://api.github.com/users/byteshiva/repos",
        "events_url": "https://api.github.com/users/byteshiva/events{/privacy}",
        "received_events_url": "https://api.github.com/users/byteshiva/received_events",
        "type": "User",
        "site_admin": false,
        "score": 79.9626
      },
      {
        "login": "sivareddyg",
        "id": 2864742,
        "node_id": "MDQ6VXNlcjI4NjQ3NDI=",
        "avatar_url": "https://avatars2.githubusercontent.com/u/2864742?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/sivareddyg",
        "html_url": "https://github.com/sivareddyg",
        "followers_url": "https://api.github.com/users/sivareddyg/followers",
        "following_url": "https://api.github.com/users/sivareddyg/following{/other_user}",
        "gists_url": "https://api.github.com/users/sivareddyg/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/sivareddyg/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/sivareddyg/subscriptions",
        "organizations_url": "https://api.github.com/users/sivareddyg/orgs",
        "repos_url": "https://api.github.com/users/sivareddyg/repos",
        "events_url": "https://api.github.com/users/sivareddyg/events{/privacy}",
        "received_events_url": "https://api.github.com/users/sivareddyg/received_events",
        "type": "User",
        "site_admin": false,
        "score": 75.22394
      },
      {
        "login": "sivapvarma",
        "id": 1314675,
        "node_id": "MDQ6VXNlcjEzMTQ2NzU=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/1314675?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/sivapvarma",
        "html_url": "https://github.com/sivapvarma",
        "followers_url": "https://api.github.com/users/sivapvarma/followers",
        "following_url": "https://api.github.com/users/sivapvarma/following{/other_user}",
        "gists_url": "https://api.github.com/users/sivapvarma/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/sivapvarma/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/sivapvarma/subscriptions",
        "organizations_url": "https://api.github.com/users/sivapvarma/orgs",
        "repos_url": "https://api.github.com/users/sivapvarma/repos",
        "events_url": "https://api.github.com/users/sivapvarma/events{/privacy}",
        "received_events_url": "https://api.github.com/users/sivapvarma/received_events",
        "type": "User",
        "site_admin": false,
        "score": 74.13175
      }
    ]
  }
}
