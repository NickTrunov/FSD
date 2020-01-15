$('.like').on('click', function(count) {
    var $this = $(this),
        count = $this.attr('data-count'),
        active = $this.hasClass('active');
  
  $this.attr('data-count', active ? --count : ++count).toggleClass('active');

  });