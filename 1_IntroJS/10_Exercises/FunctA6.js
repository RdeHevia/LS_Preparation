function compareByLength(str1, str2) {
  let l1=str1.length;
  let l2=str2.length;

  if (l1<l2) {
    return -1;
  } else if (l1>l2) {
    return 1;
  } else {
    return 0;
  }
}

console.log(compareByLength('sadasfdsggsadsafd','sadasfdsggsadsafd'));
