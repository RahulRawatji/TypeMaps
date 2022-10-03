import fs from "fs";

//Generic class
export abstract class CsvFileReader<TypeofData> {
  data: TypeofData[] = [];
  constructor(public fileName: string) {}
  
  abstract mapRow(row: string[]): TypeofData
  
  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((f: string): string[] => {
        return f.split(",");
      })
      .map(this.mapRow);
  }

}
