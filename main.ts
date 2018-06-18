import { interval } from 'rxjs';
import { scan } from 'rxjs/operators/';

// ****
//
// Welcome to your rxjs scratch pad 🤗
// 
// ****

var source = interval(2000);

source
    .pipe(scan((rotation, count) => count + 1, 0))
    .subscribe(x => console.log(`rxjs logo spun ${x} times`));