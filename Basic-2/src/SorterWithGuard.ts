class SorterWithGuard {
  constructor(public collection: Number[] | String) { }
  // union operator -> also unions the properties of the parameter 
  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      // ADDING A TYPE GUARD
      if (this.collection instanceof Array) {
        for (let j = 0; j < length - i - 1 ; j++) {
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand; 
         } 
        }   
      }
      //TYPE GUARD FOR STRING
      //@NOTE: typeof works only for number, sting, boolean and symbol in typescript
      if (typeof this.collection === 'string') {
        
      }
     
    }
    console.log(this.collection);
  }
}