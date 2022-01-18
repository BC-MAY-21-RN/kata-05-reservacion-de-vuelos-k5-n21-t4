export function validation(m, setTxtWarn2) { 
    
    var expreg = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
    
    if(expreg.test(m))
    return true
    else 
      return false 
} 
export default validation;



