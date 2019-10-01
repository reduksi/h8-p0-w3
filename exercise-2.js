function balikString(kata){
    var tampung='';
    for(var i = kata.length - 1; i >= 0; i--){
        tampung += kata[i];
    }
    return tampung
}
console.log(balikString('hello world!'));