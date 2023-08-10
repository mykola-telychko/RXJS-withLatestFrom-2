import { withLatestFrom, map } from 'rxjs/operators';
import { interval } from 'rxjs';

// Example 2: Slower second source
// https://www.learnrxjs.io/learn-rxjs/operators/combination/withlatestfrom

const srcInterval = interval(5000);

const secondSrcInterval = interval(1000);

//withLatestFrom slower than source
const example = secondSrcInterval.pipe(
  //both sources must emit at least 1 value (5s) before emitting
  withLatestFrom(srcInterval),
  map(([first, second]) => {
    return `Source (1s): ${first} Latest From (5s): ${second}`;
  })
);

const subscribe = example.subscribe((val) => console.log(val));
