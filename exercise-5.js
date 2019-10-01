function palindrome(kata) {
    var kebolak = kata.split('').reverse().join('');
    if(kata === kebolak){
        return true;
    }else{
        return false;
    }
  }
  
  console.log(palindrome('katak')); 
  console.log(palindrome('blanket')); 
  console.log(palindrome('civic')); 
  console.log(palindrome('kasur rusak')); 
  console.log(palindrome('mister')); 