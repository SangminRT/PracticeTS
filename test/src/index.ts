import {testMakePerson} from "./utils/makePerson";
import {IPerson, makePerson} from "./utils/Person";

testMakePerson()

const testMakePerson_2 = (): void => {
    let jane: IPerson = makePerson('Jane');
    let jack: IPerson = makePerson('Jack');
    console.log(jane, jack)
}

testMakePerson_2()