function mostrarCurso(valor) {
    var Curso = document.getElementById("curso-outro");
    if (valor == "Possuo") {
      Curso.style.display = "block";
  } else {
    Curso.style.display = 'none';
  }
  };
  
  function mostrarCampoOutro(valor) {
      var campoOutro = document.getElementById("campo-outro");
      if (valor == "Possuo") {
        campoOutro.style.display = "block";
    } else {
      campoOutro.style.display = 'none';
    }
  };
  
  function mostrarNivel(valor) {
    var Nivel = document.getElementById("nivel");
    if (valor == "Possuo") {
      Nivel.style.display = "block";
  } else {
    Nivel.style.display = 'none';
  }
  };