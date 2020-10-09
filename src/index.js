module.exports = function check(str, bracketsConfig, index = 0, level = 0) {
  function isCloseBracket(index) {
    for (let i = 0; i < bracketsConfig.length; i ++) {
      if (str[index] === bracketsConfig[i][1]) {
        return true;
      }
    }
    return false;
  }

  function isOpenBracket(index) {
    for (let i = 0; i < bracketsConfig.length; i ++) {
      if (str[index] === bracketsConfig[i][0]) {
        return true;
      }
    }
    return false;
  }

  function isCollapse(leftIndex, rightIndex) {
    for (let i = 0; i < bracketsConfig.length; i ++){
      if (bracketsConfig[i][0] === str[leftIndex] && bracketsConfig[i][1] === str[rightIndex]) {
        return true;
      }
    }
    return false;
  }

  if (!isCloseBracket(str.length-1) || !isOpenBracket(0)) return false;

  let bracketLevels = [];

  for (let i = 0; i < str.length; i++) {

    if (bracketLevels.length && isCollapse(bracketLevels[bracketLevels.length-1], i)){
      bracketLevels.pop();
    } else if (isOpenBracket(i)) {
      bracketLevels.push(i);
    } else {
      return false;
    }
  }

  return bracketLevels.length === 0 ? true : false;
}
