import {createRangeIterable} from "./createRangeIterable";
const iterator = createRangeIterable(1, 3 + 1)
/*
while(true) {
    const {value, done} = iterator.next()
    if(done) break
    console.log(value)
}
 */
console.log(iterator)

import {RangeIterable} from "./RangeIterable";
const iterator2 = new RangeIterable(1, 3 + 1)
const temp = iterator2[Symbol.iterator]()
 while(true) {
    const {value, done} = temp.next()
    if(done) break
     console.log(value)
}
/*
for(let value of iterator2)
    console.log(value)
console.log(iterator2)
 */
/*
import {range} from "./range";
for (let value of range(1, 3 + 1))
    console.log(value)

console.log(range(1, 5))
*/
import {StringIterable} from "./StringIterable";
for(let value of new StringIterable(['hello', 'world', '!']))
    console.log(value)
/*
import {rangeGenerator} from "./rangeGenerator";

let iterator3 = rangeGenerator(1, 4 + 1);
while(1){
    const {value, done} = iterator3.next();
    if(done) break
    console.log(value);
}

for(let value of rangeGenerator(4, 6 + 1))
    console.log(value)
 */

import {IterableUsingGenerator} from "./IterableUsingGenerator";

for (let item of new IterableUsingGenerator([1, 2, 3]))
    console.log(item)

for (let item of new IterableUsingGenerator(['hello', 'world', '!']))
    console.log(item)
