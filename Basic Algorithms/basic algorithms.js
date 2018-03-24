//Reverse a string!!!
var str;
function reverseString(str) {
   var array=str.split('');
   var reverse=array.reverse();
   var reversed=array.join('');
  return reversed;
}

reverseString("hello");

//Factorize a number!!!
function factorialize(num) {
    if (num==0)
      return 1;
    product=num*factorialize(num-1);
    
    return product;
  }
  
  factorialize(5);

//Check a number is palindrome or not
function palindrome(str) {
    // Good luck!
    
    return str.replace(/[\W_]/g, '').toLowerCase() ===
           str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
  
  }

  palindrome('eye');
  
//Longest Word in a string
var str;
function findLongestWord(str) {
  var arr=str.split(' ');
  var maxlength=0;
  for(i=0;i<arr.length;i++){
   if(arr[i].length>maxlength){
     maxlength=arr[i].length;
     
   }
  }
  return maxlength;
}

  findLongestWord("The quick brown fox jumped over the lazy dog");

//Title case a sentence
function titleCase(str) {
    var convertToArray = str.toLowerCase().split(" ");
    var result = convertToArray.map(function(val){
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(" ");
  
  }
  
  titleCase("I'm a little tea pot");

//Largest Numbers of Array
function largestOfFour(arr) {
    var results = [];
    for (var n = 0; n < arr.length; n++) {
      var largestNumber = arr[n][0];
      for (var sb = 1; sb < arr[n].length; sb++) {
        if (arr[n][sb] > largestNumber) {
          largestNumber = arr[n][sb];
        }
      }
  
      results[n] = largestNumber;
    }
  
    return results;
  }

