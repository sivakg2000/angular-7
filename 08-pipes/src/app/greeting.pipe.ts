import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "greeting",
})
export class GreetingPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value.length > 0) return "Hi " + value;
    else return "";
  }
}
