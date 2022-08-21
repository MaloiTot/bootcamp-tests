
function countAllPaarl(regCount) {
    
    var plates= regCount.split(',');

    return plates.startsWith('CJ').length;
  }