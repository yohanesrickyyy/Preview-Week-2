function cariPelaku(kalimat) {

  let regex = /abc/g;
  let count = 0;

  while (regex.test(kalimat)) {
    count++;
  }

  return count;
}

console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2
