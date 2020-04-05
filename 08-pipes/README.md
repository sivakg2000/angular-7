# Pipes

| Type   | pipe                  | Examples                                                                                     | Syntax                 |
| ------ | --------------------- | -------------------------------------------------------------------------------------------- | ---------------------- |
| String | None                  | Test system                                                                                  | `{{name}}`             |
|        | lowercase             | test system                                                                                  | `{{name | lowercase}}` |
|        | uppercase             | TEST SYSTEM                                                                                  | `{{name | uppercase}}` |
|        | titlecase             | Test System                                                                                  | `{{name | titlecase}}` |
|        | slice:3               | t System                                                                                     | `{{name | slice:3}}`   |
|        | slice:3:6             | t S                                                                                          | `{{name | slice:3:6}}` |
| Object | None                  | [object Object],[object Object],[object Object]                                              | `{{object}}`           |
|        | json                  | [ { "sno": 1, "name": "Ram" }, { "sno": 2, "name": "Kumar" }, { "sno": 3, "name": "Babu" } ] | `{{object | json}}`    |
| Number | None                  | 12.34543534534                                                                               |                        |
|        | number                | 12.345                                                                                       |                        |
|        | number:3.2            | 012.345                                                                                      |                        |
|        | number:5.2-6          | 00,012.345435                                                                                |                        |
|        | percent               | 34%                                                                                          |                        |
|        | currency              | \$0.34                                                                                       |                        |
|        | currency:'INR'        | ₹0.34                                                                                        |                        |
|        | currency:'INR':'code' | INR0.34                                                                                      |                        |
| Date   | None                  | Sun Apr 05 2020 23:58:25 GMT+0530 (India Standard Time)                                      |                        |
|        | date Apr              | 5, 2020                                                                                      |                        |
|        | date:'short'          | 4/5/20, 11:58 PM                                                                             |                        |
|        | date:'shortDate'      | 4/5/20                                                                                       |                        |
|        | date:'shortTime'      | 11:58 PM                                                                                     |                        |
|        | date:'long'           | April 5, 2020 at 11:58:25 PM GMT+5                                                           |                        |
|        | date:'longDate'       | April 5, 2020                                                                                |                        |
|        | date:'longTime'       | 11:58:25 PM GMT+5                                                                            |                        |
|        | date:'medium'         | Apr 5, 2020, 11:58:25 PM                                                                     |                        |
|        | date:'mediumDate'     | Apr 5, 2020                                                                                  |                        |
|        | date:'mediumTime'     | 11:58:25 PM                                                                                  |                        |
