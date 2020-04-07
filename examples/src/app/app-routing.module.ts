import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TestComponent } from "./test/test.component";
import { CounterComponent } from "./counter/counter.component";
import { ReadExcelComponent } from "./read-excel/read-excel.component";

const routes: Routes = [
  { path: "test", component: TestComponent },
  { path: "counter", component: CounterComponent },
  { path: "read-excel", component: ReadExcelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
