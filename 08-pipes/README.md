# Pipes

| Type   | pipe                  | Examples                                                                                     | Syntax                                    |
| ------ | --------------------- | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| String | None                  | Test system                                                                                  | `{{name}}`                                |
|        | lowercase             | test system                                                                                  | `{{name | lowercase}}`                    |
|        | uppercase             | TEST SYSTEM                                                                                  | `{{name | uppercase}}`                    |
|        | titlecase             | Test System                                                                                  | `{{name | titlecase}}`                    |
|        | slice:3               | t System                                                                                     | `{{name | slice:3}}`                      |
|        | slice:3:6             | t S                                                                                          | `{{name | slice:3:6}}`                    |
| Object | None                  | [object Object],[object Object],[object Object]                                              | `{{object}}`                              |
|        | json                  | [ { "sno": 1, "name": "Ram" }, { "sno": 2, "name": "Kumar" }, { "sno": 3, "name": "Babu" } ] | `{{object | json}}`                       |
| Number | None                  | 12.34543534534                                                                               | `{{myNumber}}`                            |
|        | number                | 12.345                                                                                       | `{{myNumber|number}}`                     |
|        | number:3.2            | 012.345                                                                                      | `{{myNumber | number:'3.2'}}`             |
|        | number:5.2-6          | 00,012.345435                                                                                | `{{myNumber | number:'5.2-6'}}`           |
|        | percent               | 34%                                                                                          | `{{myNumberPer | percent}}`               |
|        | currency              | \$0.34                                                                                       | `{{myNumberPer | currency}}`              |
|        | currency:'INR'        | ₹0.34                                                                                        | `{{myNumberPer | currency:'INR'}}`        |
|        | currency:'INR':'code' | INR0.34                                                                                      | `{{myNumberPer | currency:'INR':'code'}}` |
| Date   | None                  | Sun Apr 05 2020 23:58:25 GMT+0530 (India Standard Time)                                      | `{{myDate}}`                              |
|        | date Apr              | 5, 2020                                                                                      | `{{myDate | date}}`                       |
|        | date:'short'          | 4/5/20, 11:58 PM                                                                             | `{{myDate | date:'short'}}`               |
|        | date:'shortDate'      | 4/5/20                                                                                       | `{{myDate | date:'shortDate'}}`           |
|        | date:'shortTime'      | 11:58 PM                                                                                     | `{{myDate | date:'shortTime'}}`           |
|        | date:'long'           | April 5, 2020 at 11:58:25 PM GMT+5                                                           | `{{myDate | date:'long'}}`                |
|        | date:'longDate'       | April 5, 2020                                                                                | `{{myDate | date:'longDate'}}`            |
|        | date:'longTime'       | 11:58:25 PM GMT+5                                                                            | `{{myDate | date:'longTime'}}`            |
|        | date:'medium'         | Apr 5, 2020, 11:58:25 PM                                                                     | `{{myDate | date:'medium'}}`              |
|        | date:'mediumDate'     | Apr 5, 2020                                                                                  | `{{myDate | date:'mediumDate'}}`          |
|        | date:'mediumTime'     | 11:58:25 PM                                                                                  | `{{myDate | date:'mediumTime'}}`          |
