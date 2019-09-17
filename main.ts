import { interval } from "rxjs";
import { scan } from "rxjs/operators/";

// ****
//
// Welcome to your rxjs scratch pad 🤗
//
// ****

const source = interval(2000);

const sourceMessage = x => `rxjs logo spun ${x} times`;
const messageElement = document.querySelector(".message");

const print = x => (messageElement.textContent = x);

source
  .pipe(scan((rotation, count) => count + 1, 0))
  .subscribe(x => print(sourceMessage(x)));
