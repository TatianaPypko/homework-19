const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);

function removeElement(array, item) {
  return array.filter((elem) => elem !== item);
}
