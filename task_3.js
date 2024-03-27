function isValid(line) {
    var stack = [];
    var pairs = {
      "(": ")",
      "[": "]",
      "{": "}"
    };
    
    for (let char of line) {
      if (char in pairs) {
        stack.push(char);
      } else {
        if (stack.length === 0 || pairs[stack.pop()] !== char) {
          return false;
        }
      }
    }
    
    return stack.length === 0;
  }