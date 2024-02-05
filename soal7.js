function pasanganTerbesar(num)
{
  let a = num.toString();
  let pasanganTerbesar = Number(a.slice(0, 2));

  for (let i = 1; i < a.length - 1; i++) {
    let pasangan = Number(a.slice(i, i + 2));
    if (pasangan > pasanganTerbesar) {
      pasanganTerbesar = pasangan;
    }
  }
  return pasanganTerbesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
