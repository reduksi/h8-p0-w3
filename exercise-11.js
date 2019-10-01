function tentukanDeretAritmatika(arr) {
    var j = 1;
    var acuan, status;
    for(var i = 0; i < arr.length - 1; i++){
        var selisih = arr[j] - arr[i];
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
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false