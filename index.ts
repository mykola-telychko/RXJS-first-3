// RxJS v6+
import { from } from 'rxjs';
import { first } from 'rxjs/operators';

const list$ = from([1, 2, 3, 4, 5]);
//no value will pass, emit default
const example = list$.pipe(first((val: any) => val > 5, 'Nothing'));
const subscribe = example.subscribe((val) => console.log(val));
//output: 'Nothing'
