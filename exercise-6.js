function angkaPalindrome(num) {
    var status = '';
    while(status !== 'ketemu'){
        var strNum = num.toString();
        var kebolak = strNum.split('').reverse().join('');
        if(strNum === kebolak){
            return kebolak;
            status = 'ketemu';
        }
        else{
            num++;
        }
    }
  }
  
  console.log(angkaPalindrome(8));
  console.log(angkaPalindrome(10));
  console.log(angkaPalindrome(117));
  console.log(angkaPalindrome(175));
  console.log(angkaPalindrome(1000)); 

  console.log(angkaPalindrome(2002)); 