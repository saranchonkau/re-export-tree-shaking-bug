const pageOne = import("./pages/page-one");
const pageTwo = import("./pages/page-two");

export const result = new Date().valueOf() > 0 ? pageOne.then(console.log) : pageTwo.then(console.log)