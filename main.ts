import { interval } from "rxjs";
import { scan } from "rxjs/operators";

// ****
// Welcome to your rxjs scratch pad 🤗
// ****

const source = interval(2000);
const messageElement = document.querySelector('.message');

const sourceMessage = x => `rxjs logo spun ${ x } times`;
const log = x => messageElement.textContent = x;

source
  .pipe(scan((_, count) => count + 1, 0))
  .subscribe(message => log(sourceMessage(message)));
