function tentukanDeretGeometri(arr) {
    var j = 1;
    var acuan, status;
    for(var i = 0; i < arr.length - 1; i++){
        var selisih = arr[j] / arr[i];
        if(acuan === undefined){
            acuan = selisih;
        }else{
            if(selisih !== acuan){
                status = false;
            }else{
                status = true;
            }
        }
        j++;
    }
    return status;
  }
  
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false