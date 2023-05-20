document.addEventListener('DOMContentLoaded', function() {
    const tooltip = document.querySelector('.tooltip');
    const span = document.querySelector('.tooltip-trigger');

    span.addEventListener('mousemove', function(event) {
      tooltip.style.top = (event.clientY + 10) + 'px';
      tooltip.style.left = (event.clientX + 10) + 'px';
    });

    span.addEventListener('mouseenter', function() {
      tooltip.style.display = 'block';
    });

    span.addEventListener('mouseleave', function() {
      tooltip.style.display = 'none';
    });
  });