export default function appendToEachArrayValue(array, appendString) {
  const Narray = [];
  for (let idx of array) {
    idx = appendString + idx;
    Narray.push(idx);
  }
  return Narray;
}
