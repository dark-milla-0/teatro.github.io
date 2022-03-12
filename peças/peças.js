document.addEventListener('DOMContentLoaded', function() {
    let stream = document.querySelector('.gallery--steam');
    let items = document.querySelectorAll('.gallery--item');
    let prev = document.querySelector('.gallery--prev');
    let next = document.querySelector('.gallery--next');
  
    prev.addEventListener('click', function() {
      stream.insertBefore(items[items.length - 1], items[0]);
      items = document.querySelectorAll('.gallery--item');
    });
  
    next.addEventListener('click', function() {
      stream.appendChild(items[0]);
      items = document.querySelectorAll('.gallery--item');
    });
  });

  