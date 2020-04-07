import { Component, OnInit } from "@angular/core";
import * as XLSX from "xlsx";

type AOA = any[][];

@Component({
  selector: "app-read-excel",
  templateUrl: "./read-excel.component.html",
  styleUrls: ["./read-excel.component.scss"],
})
export class ReadExcelComponent implements OnInit {
  data: any;
  constructor() {}

  ngOnInit() {}

  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>evt.target;
    if (target.files.length !== 1) throw new Error("Cannot use multiple files");
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: "binary" });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <AOA>XLSX.utils.sheet_to_json(ws);
    };
    reader.readAsBinaryString(target.files[0]);
  }
}
