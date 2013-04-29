
digit_map = ['', 'एक', 'दुई' ,'तीन', 'चार', 'पाँच' , 'छ', 'सात' , 'आठ' , 'नौँ' , 'दश', 'एघार', 'बह्र', 'तेह्र', 'चौध', 'पन्ध्र', 'शोह्र', 'सत्र', 'अठार', 'उन्नाइस', 'बीस', 'एकाइस', 'बाइस', 'तेइस', 'चौबीस', 'पचीस', 'छबीस', 'सत्ताइस', 'अठाइस', 'उन्नतीस', 'तीस', 'एकतीस', 'बतीस', 'तेइतीस', 'चौतीस', 'पैँतीस', 'छतीस', 'सैँतीस', 'अठसैँतीस', 'उन्नचालीस', 'चालीस', 'एकचालीस', 'बैयालीस', 'तीर्‍चालीस', 'चौवालीस', 'पैँतालीस', 'छैयालीस', 'सडचालीस', 'अडचालीस', 'उन्नपचास', 'पचास', 'एकौन्न', 'बाउन्न', 'तिर्‍पन्न', 'चौवन्न', 'पचपन्न', 'छपन्न', 'सन्तौन्न', 'आन्ठौन्न', 'उन्नसाठी', 'साठी', 'एकसाठी', 'बैसाठी', 'तीर्‍साठी', 'चौवसाठी', 'पैँसाठी', 'छैसाठी', 'सडसाठी', 'अडसाठी', 'उन्नसतरी', 'सतरी', 'एक्तर', 'बहतर', 'तिर्‍हतर', 'चौहतर', 'पच्चतर', 'छहतर', 'सत्त्ततर', 'अठत्त्ततर', 'उन्नाअशी', 'अशी',  'एकाशी', 'बैयाशी', 'तीर्याशी', 'चौवाशी', 'पचाशी', 'छैयाशी', 'सडाशी', 'अडाशी', 'उन्ननबे', 'नब्बे', 'एकानबे', 'बैयानबे', 'तिर्यानबे', 'चौवानबे', 'पन्चानबे', 'चयानबे', 'सन्तानबे', 'अन्ठानबे', 'उन्नसय', 'सय' ];

multiple_map = [ '', 'सय','हजार', 'हजार', 'लाख', 'लाख', 'करोड', 'करोड', 'अरब', 'अरब', 'खरब', 'खरब' ];

// length 1 and 2 ie. 5 or 50
function convertTwo ( number ) {
  return digit_map[+number];
}

// length > 2
function convertMe ( number ) {
  // length of our number
  number = number.replace(/\,/g,'');
  var len = number.length;

  // if length < 2, map 
  if (len == 2 || len == 1) {
    return convertTwo(number);
  // else recursively break the number
  } else {
    // if remainder not equal to 0, map first two digit and recursively break the rest of the digit - pattern
    if ( len % 2 != 0 ) {
      // exception for hundredth
      if ( len == 3 )
        return convertTwo(number[0]) + ' ' + multiple_map[len-2] + ' ' + convertMe(number.substring(1,len));
      else
        return convertTwo(number[0]+number[1]) + ' ' + multiple_map[len-2] + ' ' + convertMe(number.substring(2,len));
    }
    // if remainder equal to 0, map first digit and recursively break the rest of the digit - pattern
    else {
      return convertTwo(number[0]) + ' ' + multiple_map[len-2] + ' ' + convertMe(number.substring(1,len));
    }
  }
}



	
