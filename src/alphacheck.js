function isLetter(char){
    return  (char.toLowerCase() >= 'a' &&  char.toLowerCase() < 'z' && char.toLowerCase() !=='x' 
              );
}
export default isLetter ;