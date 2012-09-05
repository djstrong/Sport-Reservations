  /**********************************/
  /* InSSgalleryIndex.dev.struct.js */                   
  /**********************************/
  /* - format JSON, struktura HTML, style CSS 
   */   
  
  utiles.json[ 'InSSzoom^html' ] = {
    '_gallery_index_bg': {
      'sort':       'div',
      'parent':     ''
    },
    '_gallery_index': {
      'sort':       'div',
      'align':      'center',
      'parent':     ''
    },
      '_gallery_index_table': {
        'sort':       'div',
        'parent':     '_gallery_index',
        'special':    '_special_1'
      }
  };

  utiles.json[ 'InSSzoom^special' ] = {
    '_special_1': {
      'rows':       '3',
      'cols':       '3',
      'row_css':    '_gallery_index_table_row',
      'cell_css':   '_gallery_index_table_row_cell',
      'model': {
        '_back': {
          'sort':       'div',
          'parent':     'root',
          'css':        '_gallery_index_table_row_cell_back'
        },
          '_back_img': {
            'sort':       'img',
            'parent':     '_back',
            'src':        'buttons/back.png',
            'css':        '_gallery_index_table_row_cell_back_img'
          },
        '_content': {
          'sort':       'div',
          'parent':     'root'
        },
          '_content_title': {
            'sort':       'div',
            'parent':     '_content',
            'css':        '_gallery_index_table_row_cell_content_title'
          },
          '_content_folder': {
            'sort':       'div',
            'parent':     '_content'
          },
            '_content_folder_img': {
              'sort':       'img',
              'parent':     '_content_folder',
              'src':        'buttons/folder.png',
              'css':        '_gallery_index_table_row_cell_content_folder_img'
            },                  
          '_content_mini': {
            'sort':       'div',
            'parent':     '_content'
          },
            '_content_mini_img_1': {
              'sort':       'img',
              'parent':     '_content_mini',
              'src':        'buttons/spacer.gif',
              'css':        '_gallery_index_table_row_cell_content_mini_img'
            },
            '_content_mini_img_2': {
              'sort':       'img',
              'parent':     '_content_mini',
              'src':        'buttons/spacer.gif',
              'css':        '_gallery_index_table_row_cell_content_mini_img'
            },
            '_content_mini_img_3': {
              'sort':       'img',
              'parent':     '_content_mini',
              'src':        'buttons/spacer.gif',
              'css':        '_gallery_index_table_row_cell_content_mini_img'
            },
            '_content_mini_img_4': {
              'sort':       'img',
              'parent':     '_content_mini',
              'src':        'buttons/spacer.gif',
              'css':        '_gallery_index_table_row_cell_content_mini_img'
            },
          '_content_info': {
            'sort':       'div',
            'parent':     '_content',
            'css':        '_gallery_index_table_row_cell_content_info'
          },
            '_content_info_date': {
              'sort':       'div',
              'parent':     '_content_info',
              'css':        '_gallery_index_table_row_cell_content_info_date'
            },
              '_content_info_date_txt': {
                'sort':       'span',
                'parent':     '_content_info_date'
              },
              '_content_info_date_colon': {
                'sort':       'span',
                'innerHTML':  ': ',
                'parent':     '_content_info_date'
              },
              '_content_info_date_value': {
                'sort':       'span',
                'parent':     '_content_info_date'
              },
            '_content_info_count': {
              'sort':       'div',
              'parent':     '_content_info',
              'css':        '_gallery_index_table_row_cell_content_info_count'
            },
              '_content_info_count_txt': {
                'sort':       'span',
                'parent':     '_content_info_count'
              },
              '_content_info_count_colon': {
                'sort':       'span',
                'innerHTML':  ': ',
                'parent':     '_content_info_count'
              },
              '_content_info_count_value': {
                'sort':       'span',
                'parent':     '_content_info_count'
              }
      }              
    }
  };
    
  utiles.json[ 'InSSzoom^css' ] = {
    '_gallery_index_bg': {
      'top':        '0',
      'background': 'black',
      'color':      'white',
      'filter':     'alpha(opacity=95)',
      'opacity':    '0.95',
      'left':       '0',
      'position':   'absolute',
      'width':      '100%',
      'height':     '100%',
      'zIndex':     '100'
    },
    '_gallery_index': {
      'top':        '0',
      'left':       '0',
      'position':   'absolute',
      'width':      '100%',
      'height':     '100%',
      'color':      '#ADAF99',
      'filter':     'alpha(opacity=100)',
      'opacity':    '1',
      'zIndex':     '101',
    },
    '_gallery_index_table': {
      'display':    'table', 
      'borderSpacing': '8px', 
    }, 
    '_gallery_index_table_row': {
      'display':    'table-row',
    },
    '_gallery_index_table_row_cell': {
      'display':    'table-cell',
      'textAlign':  'center',
      'verticalAlign': 'top',
      'width':      '200px',
      'height':     '200px',
      'padding':    '2px',
      'border':     '2px solid grey',
      'filter':     'alpha(opacity=70)',
      'opacity':    '0.7',
    },
    '_gallery_index_table_row_cell_back': {
      'height':     '50px',
      'fontSize':   '64px',
      'color':      'white',
      'opacity':    '1',
      'marginTop':  '70px'
    },
    '_gallery_index_table_row_cell_back_img': {
      'width':     '50px'
    },
    '_gallery_index_table_row_cell_content_title': {
      'color':      'white',
      'padding':    '0 3px',
      'overflow':   'hidden',
      'textAlign':  'center',
      'fontFamily': 'Tahoma, Verdena, Helvetica, Arial, sans-serif',
      'height':     '40px',
    },
    '_gallery_index_table_row_cell_content_folder_img': {
      'height':     '130px'
    },
    '_gallery_index_table_row_cell_content_info': {
      'color':      'white',
      'padding':    '3px',
      'textAlign':  'left',
      'fontFamily': 'Tahoma, Verdena, Helvetica, Arial, sans-serif',
      'fontSize':   '12px',
    },
    '_gallery_index_table_row_cell_content_info_count': {
      'float':      'right'
    },
    '_gallery_index_table_row_cell_content_info_date': {
      'float':      'left'
    },               
    '_gallery_index_table_row_cell_content_mini_img': {
      'width':      '97px',
      'height':     '64px',
      'margin':     '1px',
    },
    '_gallery_index_pager': {
      'position':   'absolute',
      'bottom':     '4px',
      'left':       '4px',
      'width':      '98%',
      'height':     '25px',
      'background': 'url(buttons/scroll_bg.png) no-repeat center',
      'zIndex':     '1',
      'marginTop':  '-8px'
    }
  };
