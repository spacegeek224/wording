module.exports = {};

module.exports.word = {
  isWord: function(s) {
    return (String(s).match(/(\w+)\S/g).length == 1);
  },
//   howManyWords: function(s) {
//     return String(s).match(/(\w+)\S/g).length;
//   },
  numWords: function(s) {
    return String(s).split(/\s/g).length;
  },
  toVerb: function(s) {
    var end = s.charAt(s.length-1);
    switch (end) {
      case 'n':
      case 't':
        return s+end+'ing';
        break;h
        case 'e':
          return s.substr(0,s.length-1)+'ing';
          break;
      case 'y':
        return s+'ing';
        break; 
        default:
        return s+'ing';
        break; 
    }
  }
}
