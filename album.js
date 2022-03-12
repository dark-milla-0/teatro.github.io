function abrirMenu(){
    let area = document.querySelector('.menu--area')
    if(area.classList.contains('menu--opened') == true) {
      area.classList.remove('menu--opened')
    } else {
      area.classList.add('menu--opened')
    }
  }

  
