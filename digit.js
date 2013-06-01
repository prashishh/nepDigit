var nepDigit = {
  digit_map : ['', 'एक', 'दुई' ,'तीन', 'चार', 'पाँच' , 'छ', 'सात' , 'आठ' , 'नौँ' , 'दश', 'एघार', 'बह्र', 'तेह्र', 'चौध', 'पन्ध्र', 'शोह्र', 'सत्र', 'अठार', 'उन्नाइस', 'बीस', 'एकाइस', 'बाइस', 'तेइस', 'चौबीस', 'पचीस', 'छबीस', 'सत्ताइस', 'अठाइस', 'उन्नतीस', 'तीस', 'एकतीस', 'बतीस', 'तेइतीस', 'चौतीस', 'पैँतीस', 'छतीस', 'सैँतीस', 'अठसैँतीस', 'उन्नचालीस', 'चालीस', 'एकचालीस', 'बैयालीस', 'तीर्‍चालीस', 'चौवालीस', 'पैँतालीस', 'छैयालीस', 'सडचालीस', 'अडचालीस', 'उन्नपचास', 'पचास', 'एकौन्न', 'बाउन्न', 'तिर्‍पन्न', 'चौवन्न', 'पचपन्न', 'छपन्न', 'सन्तौन्न', 'आन्ठौन्न', 'उन्नसाठी', 'साठी', 'एकसाठी', 'बैसाठी', 'तीर्‍साठी', 'चौवसाठी', 'पैँसाठी', 'छैसाठी', 'सडसाठी', 'अडसाठी', 'उन्नसतरी', 'सतरी', 'एक्तर', 'बहतर', 'तिर्‍हतर', 'चौहतर', 'पच्चतर', 'छहतर', 'सत्त्ततर', 'अठत्त्ततर', 'उन्नाअशी', 'अशी',  'एकाशी', 'बैयाशी', 'तीर्याशी', 'चौवाशी', 'पचाशी', 'छैयाशी', 'सडाशी', 'अडाशी', 'उन्ननबे', 'नब्बे', 'एकानबे', 'बैयानबे', 'तिर्यानबे', 'चौवानबे', 'पन्चानबे', 'चयानबे', 'सन्तानबे', 'अन्ठानबे', 'उन्नसय', 'सय' ],

  multiple_map : [ '', 'सय','हजार', 'हजार', 'लाख', 'लाख', 'करोड', 'करोड', 'अरब', 'अरब', 'खरब', 'खरब' ],

// length 1 and 2 ie. 5 or 50
  convertTwo : function( number ) {
    return nepDigit.digit_map[+number];
},

  //function to convert unicode input to arabic. 
  unicodeToNumbers : function ( nepaliString ) {
    var i;
    var newStr = "";
	  for (i = 0; i<nepaliString.length; i++) {
		  switch( nepaliString[i] ){
			  case "०": newStr += "0" ; break;
			  case "१": newStr += "1" ; break;
			  case "२": newStr += "2" ; break;
			  case "३": newStr += "3" ; break;
			  case "४": newStr += "4" ; break;
			  case "५": newStr += "5" ; break;
			  case "६": newStr += "6" ; break;
			  case "७": newStr += "7" ; break;
			  case "८": newStr += "8" ; break;
			  case "९": newStr += "9" ; break;
			  default: //write code to throw error:)
		  }
	  }
	  newInt = eval(newStr);
	  return newInt;
  },
  
  // length > 2
  convertMe : function( number ) {
    // remove commas
    number = number.replace(/\,/g,'');

    // length of our number
    var len = number.length;

    // if length < 2, map 
    if (len == 2 || len == 1) {
      return nepDigit.convertTwo(number, len);
    // else recursively break the number
    } else {
      // if remainder not equal to 0, map first two digit and recursively break the rest of the digit - pattern
      if ( len % 2 != 0 ) {
        // exception for hundredth
        if ( len == 3 ) {
          var result = nepDigit.convertTwo(number[0]);
          if (result == '')
            return nepDigit.convertMe(number.substring(1,len));
          else 
            return result + ' ' + nepDigit.multiple_map[len-2] + ' ' + nepDigit.convertMe(number.substring(1,len));
        } 
        else {
          var result = nepDigit.convertTwo(number[0]+number[1]);
          if (result == '')
            return nepDigit.convertMe(number.substring(2,len));
          else 
            return nepDigit.convertTwo(number[0]+number[1]) + ' ' + nepDigit.multiple_map[len-2] + ' ' + nepDigit.convertMe(number.substring(1,len));
        }
      }
      // if remainder equal to 0, map first digit and recursively break the rest of the digit - pattern
      else {
        var result = nepDigit.convertTwo(number[0]);
        
        if (result == '')
          return nepDigit.convertMe(number.substring(1,len));
        else
          return nepDigit.convertTwo(number[0]) + ' ' + nepDigit.multiple_map[len-2] + ' ' + nepDigit.convertMe(number.substring(1,len));
      }
    }
  }
}



  
