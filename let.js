function foo() {
  console.log( x );
  console.log( y );
  let y;
  var x = 1;

  if (x === 1) {
    y = 2;
  }
  console.log( y );
}

foo();
console.log( x );