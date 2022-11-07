const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);

function removeElement(array, item) {
  array.splice(item-1, 1);
  return removeElement;
}