//Run-length Encoding
//Input--> aaabbcccdd 
//Output--> 3a2b3c2d
var runLengthEncode = function(str) {

    var re = /(\D)\1*/g;

    /*
    (\D)    #Capture a non-digit character for using backreferencing (i.e match the first a)
    \1*     #Check whether captured character are repeated zero or more (search for other a's)
    */

    return str.replace(re, function(string, match) {

        //string --> aaa
        //match --> a
        //return --> 3a
        return string.length + match;

    });

}
