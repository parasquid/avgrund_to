//= require_tree .
/*!
 * avgrund 0.1
 * http://lab.hakim.se/avgrund
 * MIT licensed
 *
 * Copyright (C) 2012 Hakim El Hattab, http://hakim.se
 */
jQuery(function(){

  var container = document.documentElement,
    popup = document.querySelector( '.avgrund-popup' ),
    cover = document.querySelector( '.avgrund-cover' ),
    currentState = null;
    
    //Added draggable popup
    //$( ".avgrund-popup" ).draggable({ cursor: "move" });

  container.className = container.className.replace( /\s+$/gi, '' ) + ' avgrund-ready';

  // Deactivate on ESC
  function onDocumentKeyUp( event ) {
    if( event.keyCode === 27 ) {
      deactivate();
    }
  }

  // Deactivate on click outside
  function onDocumentClick( event ) {
    if( event.target === cover ) {
      deactivate();
    }
  }

  function activate( state, pos ) {
    
    document.addEventListener( 'keyup', onDocumentKeyUp, false );
    document.addEventListener( 'click', onDocumentClick, false );

    removeClass( popup, currentState );
    addClass( popup, 'no-transition' );
    addClass( popup, state );

    setTimeout( function() {
      removeClass( popup, 'no-transition' );
      addClass( container, 'avgrund-active' );
    }, 0 );

    currentState = state;
  }

  function deactivate() {
    document.removeEventListener( 'keyup', onDocumentKeyUp, false );
    document.removeEventListener( 'click', onDocumentClick, false );

    removeClass( container, 'avgrund-active' );
    jQuery('.modal-body').html('<div id=\"spinner\"><\/div>')
    var opts = {
      lines: 13, // The number of lines to draw
      length: 7, // The length of each line
      width: 4, // The line thickness
      radius: 10, // The radius of the inner circle
      corners: 1, // Corner roundness (0..1)
      rotate: 0, // The rotation offset
      color: '#000', // #rgb or #rrggbb
      speed: 1, // Rounds per second
      trail: 60, // Afterglow percentage
      shadow: false, // Whether to render a shadow
      hwaccel: true, // Whether to use hardware acceleration
      className: 'spinner', // The CSS class to assign to the spinner
      zIndex: 2e9, // The z-index (defaults to 2000000000)
      top: 'auto', // Top position relative to parent in px
      left: 'auto' // Left position relative to parent in px
    };
    var target = document.getElementById('spinner');
    var spinner = new Spinner(opts).spin(target);
  }

  function disableBlur() {
    addClass( document.documentElement, 'no-blur' );
  }

  function addClass( element, name ) {
    element.className = element.className.replace( /\s+$/gi, '' ) + ' ' + name;
  }

  function removeClass( element, name ) {
    element.className = element.className.replace( name, '' );
  }

  window.avgrund = {
    activate: activate,
    deactivate: deactivate,
    disableBlur: disableBlur
  }

});