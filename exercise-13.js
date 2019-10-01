function targetTerdekat(arr) {
    var ketemu, xOro, index;
    var jarak = 0;
    var kumpulanJarak = [];
    for(var i = 0; i < arr.length; i++){
        if(ketemu === undefined){
            if(arr[i] == 'x' || arr[i] == 'o'){
                ketemu = true;
                xOro = arr[i];
                index = i;
            }
        }else{
            if(arr[i] === xOro){
                index = i;
            }
            if(arr[i] != ' ' && arr[i] != xOro){
                jarak = i - index;
                kumpulanJarak.push(jarak);
                xOro = arr[i];
                index = i;
            }
        }        
    }
    kumpulanJarak.sort();
    if(kumpulanJarak[0] === undefined){
        kumpulanJarak[0] = 0;
    }
    return kumpulanJarak[0];
  }
  
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2