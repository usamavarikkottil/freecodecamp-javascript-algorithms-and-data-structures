// Only change code below this line
function countdown(n){
  if(n<1) {
    return [];
  } else {
    return [ n, ...countdown(n-1)];
  }

}
// Only change code above this line