// interface Sortable {
//   length: number;
//   swap(leftIndex:number, rightIndex: number):void;
//   compare(leftIndex: number, rightIndex: number): boolean;
// }


//Example for abstract Class
export abstract class Sorter {
 
  // constructor(public collection: Sortable) { }
  // union operator -> also unions the properties of the parameter 
  
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;
  
  sort(): void {
    const { length } = this;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1 ; j++) {
          if (this.compare(j, j + 1)) {
            this.swap(j, j + 1);
         } 
        }        
      }
  }
}