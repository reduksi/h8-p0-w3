function pasanganTerbesar(num) {
    var j = 2;
    var i = 0;
    var strAngka = num.toString();
    var sliceAngka, angkaBaru;
    var angkaLama = 0;
    while(i < strAngka.length - 1){
        sliceAngka = strAngka.slice(i, j);
        angkaBaru = parseInt(sliceAngka);
        if(angkaBaru > angkaLama){
            angkaLama = angkaBaru;

        }
        i++;
        j++;
    }
    return angkaLama;
    
  }
  
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99