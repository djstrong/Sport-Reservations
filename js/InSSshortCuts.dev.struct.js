  /*******************************/
  /* InSSshortCuts.dev.struct.js */                   
  /*******************************/
  /* - format JSON, struktura HTML, style CSS 
   */   
  
  utiles.json[ 'InSSshortCuts^css' ] = {
    '_sc_hint_bg': {
      'width': '96%',
      'height': '100%',
      'height': '120px',
      'position': 'absolute',
      'bottom': '10px',
      'left': '2%',
      'zIndex': '4',
      'background': 'black',
      'opacity': '0.8',
      'BorderRadius': '6px 6px 6px 6px',
      'BoxShadow': '0px 0px 25px black'
    },
    '_sc_hint_info': {
      'zIndex': '13',
      'position': 'absolute',
      'bottom': '0px',
      'left': '0px',
      'width': '100%',
      'textAlign': 'center'
    },
    '_sc_hint_autohiding': {
      'position': 'absolute',
      'right': '35px',
      'top': '-10px',
      'color': 'silver',
      'fontSize': '12px'
    },
    '_sc_hint_txt': {
      'color': 'silver',
      'marginBottom': '5px'
    },
    '_sc_hint_key_': {
      'width': '60px',
      'BorderRadius': '6px 6px 6px 6px',
      'BoxShadow': '0px 0px 25px white',
      'margin': '5px 5px 25px 5px',
      'background': 'white'
    },
    '_sc_hint_key_selected': {
      'width': '60px',
      'BorderRadius': '6px 6px 6px 6px',
      'BoxShadow': '0px 0px 25px yellow',
      'margin': '5px 5px 25px 5px',
      'background': 'yellow'
    }                                                      
  };


  utiles.json[ 'InSSshortCuts^html' ] = {
    '_sc_hint_bg': {
      'sort':       'div',
      'parent':     ''
    },
    '_sc_hint_info': {
      'sort':       'div',                         
      'parent':     ''
    },
      '_sc_hint_autohiding': {
        'sort':       'div',
        'parent':     '_sc_hint_info',
      },
        '_sc_hint_autohiding_chk': {
          'sort':       'input',
          'type':       'checkbox',
          'name':       'autohiding',
          'value':      'checked',
          'alt':        '{lcScAutohide}',
          'title':      '{lcScAutohide}',
          'parent':     '_sc_hint_autohiding',
        },
      '_sc_hint_txt': {
        'sort':       'div',
        'parent':     '_sc_hint_info',
      },
      '_sc_hint_key_': {
        'sort':       'img',
        'copy':       19,
        'parent':     '_sc_hint_info',
      },
    '__evants__': {
      '_sc_hint_key_': {
        'onmouseover':  'fSChintChangeKey'
      }
    }
  };