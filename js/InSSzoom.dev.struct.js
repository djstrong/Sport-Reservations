  /**************************/
  /* InSSzoom.dev.struct.js */                   
  /**************************/
  /* - format JSON, struktura HTML, style CSS 
   */   
  
  utiles.json[ 'InSSzoom^css' ] = {
    '_photo_zoom_window': {
      'border':     '1px solid black',
      'overflow':   'hidden',
      'width':      '170px',
      'height':     '170px',
      'filter':     'alpha(opacity=100)',
      'opacity':    '1',
      'zIndex':     '2',
      'right':      '0',            
      'top':        '0',
      'position':   'absolute',
      'display':    'none'
    },
    '_photo_zoom_window_info': {
      'zIndex':     '2',
      'position':   'absolute',
      'right':      '0',            
      'top':        '0',
      'width':      '100%',
      'height':     '20px',
      'filter':     'alpha(opacity=70)',
      'opacity':    '0.7',
      'background': 'black'
    },
    '_photo_zoom_window_info_table': {
      'display':    'table',
      'width':      '100%',
      'fontSize':   '12px',
      'color':      'white'
    },
    '_photo_zoom_window_info_table_row': {
      'display':    'table-row'
    },
    '_photo_zoom_window_info_table_cell_length': {
      'display':    'table-cell',
      'width':      '33%',
      'textAlign':  'left'
    },
    '_photo_zoom_window_info_table_cell_length_img': {
      'margin':     '0px 2px 2px 2px'
    },
    '_photo_zoom_window_info_table_cell_length_txt': {
    
    },
    '_photo_zoom_window_info_table_cell_size': {
      'display':    'table-cell',
      'textAlign':  'center',
      'width':      '38%'
    },
    '_photo_zoom_window_info_table_cell_size_img': {
      'padding':    '2px 2px 0 0',
      'margin':     '0px 2px 2px 2px'
    },
    '_photo_zoom_window_info_table_cell_size_txt': {
      'padding':    '2px 2px 0 0'
    },
    '_photo_zoom_window_info_table_cell_zoom': {
      'display':    'table-cell',
      'textAlign':  'right',
      'width':      '28%'
    },
    '_photo_zoom_window_info_table_cell_zoom_img': {
      'margin':     '0px 2px 2px 2px'
    },
    '_photo_zoom_window_info_table_cell_zoom_txt': {
      'padding':    '2px 2px 0 0'
    },
    '_photo_zoom_window_img': {
      'zIndex':     '4'
    }
  };      
  
  /* struktura HTML */
  utiles.json[ 'InSSzoom^html' ] = {
    '_photo_zoom_window': {
      'sort':       'div',
      'parent':     ''
    },
      '_photo_zoom_window_info': {
        'sort':       'div',
        'parent':     '_photo_zoom_window'
      },
        '_photo_zoom_window_info_table': {
          'sort':       'div',
          'parent':     '_photo_zoom_window_info'
        },
          '_photo_zoom_window_info_table_row': {
            'sort':       'div',
            'parent':     '_photo_zoom_window_info_table'
          },
            '_photo_zoom_window_info_table_cell_length': {
              'sort':       'div',
              'parent':     '_photo_zoom_window_info_table_row'
            },
              '_photo_zoom_window_info_table_cell_length_img': {
                'sort':       'img',
                'src':        'buttons/zoom_position.png',
                'align':      'top',
                'parent':     '_photo_zoom_window_info_table_cell_length'
              },
              '_photo_zoom_window_info_table_cell_length_txt': {
                'sort':       'span',
                'innerHTML':  '10px',
                'parent':     '_photo_zoom_window_info_table_cell_length'
              },
            '_photo_zoom_window_info_table_cell_size': {
              'sort':       'div',
              'parent':     '_photo_zoom_window_info_table_row'
            },
              '_photo_zoom_window_info_table_cell_size_img': {
                'sort':       'img',
                'src':        'buttons/zoom_size.png',
                'align':      'top',
                'parent':     '_photo_zoom_window_info_table_cell_size'
              },
              '_photo_zoom_window_info_table_cell_size_txt': {
                'sort':       'span',
                'innerHTML':  '170px',
                'parent':     '_photo_zoom_window_info_table_cell_size'
              },
            '_photo_zoom_window_info_table_cell_zoom': {
              'sort':       'div',
              'parent':     '_photo_zoom_window_info_table_row'
            },
              '_photo_zoom_window_info_table_cell_zoom_img': {
                'sort':       'img',
                'src':        'buttons/zoom_in.png',
                'align':      'top',
                'parent':     '_photo_zoom_window_info_table_cell_zoom'
              },
              '_photo_zoom_window_info_table_cell_zoom_txt': {
                'sort':       'span',
                'innerHTML':  '3x',
                'parent':     '_photo_zoom_window_info_table_cell_zoom'
              },
      '_photo_zoom_window_img': {
        'sort':       'img',
        'src':        'buttons/spacer.gif',
        'parent':     '_photo_zoom_window'
      },
    
    '__evants__': {
      '_photo_content': {
        'onmousemove':  'setCursorPosition'
      },
      '_photo_zoom_window': {
        'onmousemove':  'setCursorPosition'
      }
    }
  };

  var classZoomStructHTMLspecial = new Array();

