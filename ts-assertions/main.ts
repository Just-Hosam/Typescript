let message;
message = 'abc';
let endWithC = (<string>message).endsWith('c');
let altWay = (message as string).endsWith('c');

console.log(`endWithC`, endWithC);
