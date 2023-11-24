let isOver18;
let hasCriminalBlacklist;

let isAllow;

// Start coding here

isOver18 = true;
hasCriminalBlacklist = false;
let isThai = true;
isAllow = (isOver18 && !hasCriminalBlacklist) || !isThai;

console.log(isAllow);
