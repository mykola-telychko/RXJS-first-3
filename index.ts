// RxJS v6+
import { from } from 'rxjs';
import { first } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/first
// Example 3: Utilizing default value

const list$ = from([1, 2, 3, 4, 5]);
//no value will pass, emit default
const example = list$.pipe(first((val: any) => val > 5, 'Nothing'));
const subscribe = example.subscribe((val) => console.log(val));
//output: 'Nothing'
