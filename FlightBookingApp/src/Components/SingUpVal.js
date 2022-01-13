export function validation(m) { 
    
    var expreg = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
    
    if(expreg.test(m))
      return true
    else 
      return false 
} 
export default validation;
