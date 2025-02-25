function solution(n, arr1, arr2) {
  const arr1binMap = arr1.map((dec) => dec.toString(2).padStart(n, "0"));
  const arr2binMap = arr2.map((dec) => dec.toString(2).padStart(n, "0"));

  const result = arr1binMap.map((bin, i) => {
    const orResult = (parseInt(bin, 2) | parseInt(arr2binMap[i], 2)).toString(
      2
    );

    return orResult.replace(/1/g, "#").replace(/0/g, " ").padStart(n, " ");
  });

  return result;
}

