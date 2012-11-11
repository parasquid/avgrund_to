jQuery(function(){
  jQuery('a[data-avgrund-url*=]').prop('href','#');
  jQuery('a[data-avgrund-url]').click(function(){
    avgrund.activate('', this);
    jQuery.ajax({url: $(this).data('avgrund-url'),
      success: function(data){
        jQuery('.modal-body').html(data);
      },
      async: true
    });
    return false;
  });
});
