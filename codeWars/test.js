  
   const arr = "abcdefghijklmnopqrstuvwxyz".split("");
 
   return text
     .replace(/[a-zA-z]/ig , (m) => arr.indexOf(m.toLowerCase()) + 1 + " ")
     
}