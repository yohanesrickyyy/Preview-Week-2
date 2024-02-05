function hapusSimbol(str) {
  
  return str.replace(/[^a-z0-9]/g, "");
}

// Contoh penggunaan fungsi:
console.log(hapusSimbol("test!@#$%^")); // Output: test
console.log(hapusSimbol("123456789")); // Output: 123456789
console.log(hapusSimbol("a1b2c3d4")); // Output: a1b2c3d4
console.log(hapusSimbol("!@#$%^&*()_+")); // Output: ''
