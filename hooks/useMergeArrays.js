export default function mergeArrays(arrayA, arrayB) {
  const idSet = new Set(arrayA.map((obj) => obj.id));
  const mergedArray = [...arrayA];

  for (const obj of arrayB) {
    if (!idSet.has(obj.id)) {
      mergedArray.push(obj);
      idSet.add(obj.id);
    }
  }

  mergedArray.sort((a, b) => a.id - b.id);

  return mergedArray;
}
