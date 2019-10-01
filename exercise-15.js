function groupAnimals(animals) {
    animals.sort();
    var semua = [];
    var tampung = [];
    var huruf;
    for(var i = 0; i < animals.length; i++){
        
        if(huruf == undefined){
            huruf = animals[i][0];
            tampung.push(animals[i]);
        }
        else{
            if(huruf == animals[i][0]){
                tampung.push(animals[i]);
                
            }else{
                semua.push(tampung);
                tampung = [];
                tampung.push(animals[i]);
                huruf = animals[i][0];
            }
        }
        if(i == animals.length - 1 ){
            semua.push(tampung);
        }
    }
    return semua;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]