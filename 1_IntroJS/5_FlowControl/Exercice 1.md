## Exercice 1:  What values do the following expressions evaluate to?

```javascript
false || (true && false); // false || false => false (left)  BIEN
true || (1 + 2); // true (left)  BIEN
(1 + 2) || true; // 3  BIEN
true && (1 + 2); // true && 3 => 3 BIEN
false && (1 + 2); // false  BIEN
(1 + 2) && true; // 3 && true => true  BIEN
(32 * 4) >= 129; // 128>=129 => 129 MAL(false)
false !== !true; //false !== false => false BIEN
true === 4; // true  MAL(false)
false === (847 === '847'); // false===false => true BIEN
false === (847 == '847'); // false === true => false BIEN
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; 
// (false || (!20===20)||((82===82)) || false) =>
// => false || false || true || false => true BIEN
```



## Exorcise 2: What does the following code log to the console, and why?

```javascript
function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

/*log:
Product1
Product2
Product3
Product not found! (because the break is missing)
*/
```

## Exercise 5: Refactor this statement to use an `if` statement instead.

```javascript
return foo() ? 'bar' : qux();

//Solution

If (foo()){
    return 'bar';
} else {
    return qux();
}
```

## Exercise 6: What does this code output to the console?

```javascript
function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
   console.log('Empty');
  }
}

isArrayEmpty([]);   // [] is an empty Array

// Output to console
Not Empty
```
## test






