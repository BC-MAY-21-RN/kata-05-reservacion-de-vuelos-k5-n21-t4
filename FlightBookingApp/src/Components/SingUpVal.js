export function validation() { 
    var m = document.getElementById("password").value;
    var expreg = /^[A-Z]{1,2}\s\d{4}\s([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]){3}$/;
    
    if(expreg.test(m))
      alert("La password es correcta"); 
    else 
      alert("La password NO es correcta"); 
} 
export default literal;
