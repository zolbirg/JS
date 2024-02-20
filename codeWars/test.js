function arrayDiff(a, b) {
    for(let i =0; i < a.length; i++) {
        if(b.indexOf(a[i]) === -1) {
            return a.splice(i, 1);
        }
  
  }}