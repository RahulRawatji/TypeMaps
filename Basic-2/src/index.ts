import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumberCollection";
import { CharacterCollection } from "./CharacterCollection";

// const numberCollection = new NumberCollection([0, 10, -5, 11, 12, 40]);
// const sortArray = new Sorter(numberCollection);
// sortArray.sort();

// console.log(numberCollection.data);

// const charCollection = new CharacterCollection('AppLbBe');
// const sortChar = new Sorter(charCollection);
// sortChar.sort();

// console.log(charCollection.data);

const charCollection = new CharacterCollection("PLAssaaeeff");
charCollection.sort();
console.log(charCollection.data);
