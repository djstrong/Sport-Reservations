  /*****************************/
  /* InSSshortCuts.dev.data.js */                   
  /*****************************/

  /* - format JSON, informacje o uzywanych skrotach klawiszowych
   * - przyklad:
   *    'gallery':{                         <- identyfikator grupy skrotow klawiszowych
   *      'id': 'sc_gallery',               <- identyfikator elementu HTML grupy
   *      'txt_lc': 'scGrGallery',          <- language code of txt - kod tlumaczenia nazwy grupy
   *      'keys':[                          <- lista klawiszy w grupie
   *        {'id': 'sc_gallery_arrow_up',   <- identyfikator elementu HTML danego skrotu
   *         'txt_lc': 'scPrevPage',        <- kod tlumaczenia nazwy grupy
   *         'kc': 'Up'},                   <- key code - kod klawisza
   *        {'id': 'sc_gallery_arrow_down', <- identyfikator elementu HTML danego skrotu
   *         'txt_lc': 'scNextPage',        <- kod tlumaczenia nazwy grupy
   *         'kc': 'Down'},                 <- key code - kod klawisza
   */   
  
  var shortCuts = {
    'gallery':{
      'id': 'sc_gallery',
      'txt_lc': 'scGrGallery',
      'keys':[
        {'id': 'sc_gallery_arrow_up',
         'txt_lc': 'scPrevPage',
         'kc': 'Up'},
        {'id': 'sc_gallery_arrow_down',
         'txt_lc': 'scNextPage',
         'kc': 'Down'},
        {'id': 'sc_gallery_arrow_left',
         'txt_lc': 'scPrevPhoto',
         'kc': 'Left'},
        {'id': 'sc_gallery_arrow_right',
         'txt_lc': 'scNextPhoto',
         'kc': 'Right'},
        {'id': 'sc_gallery_page_number',
         'txt_lc': 'scPageNumbers',
         'kc': 'Num1-Num9'},
        {'id': 'sc_gallery_functions',
         'txt_lc': 'scLanguages',
         'kc': 'F1-F5'},
        {'id': 'sc_gallery_I',
         'txt_lc': 'scShowCloseInfo',
         'kc': 'I'},
        {'id': 'sc_gallery_S',
         'txt_lc': 'scShowPhoto',
         'kc': 'S'},
        {'id': 'sc_gallery_Z',
         'txt_lc': 'scShowZoom',
         'kc': 'Z'},
        {'id': 'sc_gallery_G',
         'txt_lc': 'scGallerysIndex',
         'kc': 'G'},
        {'id': 'sc_gallery_H',
         'txt_lc': 'scHelp',
         'kc': 'H'},
        {'id': 'sc_gallery_esc',
         'txt_lc': 'scCloseGallery',
         'kc': 'Esc' }]
    },    
    'index':{
      'id': 'sc_index',
      'desc_lc': 'scGrIndex',
      'keys':[
        {'id': 'sc_index_arrow_up',
         'txt_lc': 'scNavigateUp',
         'kc': 'Up'},
        {'id': 'sc_index_arrow_down',
         'txt_lc': 'scNavigateDown',
         'kc': 'Down'},
        {'id': 'sc_index_arrow_left',
         'txt_lc': 'scNavigateLeft',
         'kc': 'Left'},
        {'id': 'sc_index_arrow_right',
         'txt_lc': 'scNavigateRight',
         'kc': 'Right'},
        {'id': 'sc_index_page_number',
         'txt_lc': 'scPageNumbers',
         'kc': 'Num1-Num9'},
        {'id': 'sc_index_functions',
         'txt_lc': 'scLanguages',
         'kc': 'F1-F5'},
        {'id': 'sc_index_enter',
         'txt_lc': 'scOpenGallery',
         'kc': 'Enter'},
        {'id': 'sc_index_esc',
         'txt_lc': 'scIndexEscape',
         'kc': 'Esc' }]
    },    
    'zoom':{
      'id': 'sc_zoom',
      'txt_lc': 'scGrZoom',
      'keys':[
        {'id': 'sc_zoom_arrow_up',
         'txt_lc': 'scMoveUp',
         'kc': 'Up'},
        {'id': 'sc_zoom_arrow_down',
         'txt_lc': 'scMoveDown',
         'kc': 'Down'},
        {'id': 'sc_zoom_arrow_left',
         'txt_lc': 'scMoveLeft',
         'kc': 'Left'},
        {'id': 'sc_zoom_arrow_right',
         'txt_lc': 'scMoveRight',
         'kc': 'Right'},
        {'id': 'sc_zoom_row_equals',
         'txt_lc': 'scIncreaseZoom',
         'kc': 'RowEquals'},
        {'id': 'sc_zoom_row_minus',
         'txt_lc': 'scDecreaseZoom',
         'kc': 'RowMinus'},
        {'id': 'sc_zoom_brackets_left',
         'txt_lc': 'scIncreaseWindowSize',
         'kc': 'BracketsLeft'},
        {'id': 'sc_zoom_brackets_right',
         'txt_lc': 'scDecreaseWindowSize',
         'kc': 'BracketsRight'},
        {'id': 'sc_zoom_comma',
         'txt_lc': 'scIncreaseLengthOfZoom',
         'kc': 'Comma'},
        {'id': 'sc_zoom_dot',
         'txt_lc': 'scDecreaseLengthOfZoom',
         'kc': 'Dot'},
        {'id': 'sc_zoom_I',
         'txt_lc': 'scShowCloseInfo',
         'kc': 'I'},
        {'id': 'sc_zoom_esc',
         'txt_lc': 'scCloseZoom',
         'kc': 'Esc' }]
    },    
    'languages':{
      'id': 'sc_languages',
      'txt_lc': 'scGrLanguages',
      'keys':[
        {'id': 'sc_languages_F1',
         'txt_lc': 'scEnglish',
         'kc': 'F1'},
        {'id': 'sc_languages_F2',
         'txt_lc': 'scPolish',
         'kc': 'F2'},
        {'id': 'sc_languages_F3',
         'txt_lc': 'scGerman',
         'kc': 'F3'},
        {'id': 'sc_languages_F4',
         'txt_lc': 'scRussian',
         'kc': 'F4'},
        {'id': 'sc_languages_F5',
         'txt_lc': 'scSpanish',
         'kc': 'F5' }]
    },    
    'help':{
      'id': 'sc_help',
      'txt_lc': 'scGrHelp',
      'keys':[ 
        {'id': 'sc_help_Num1',
         'txt_lc': 'scGallery',
         'kc': 'Num1'},
        {'id': 'sc_help_Num2',
         'txt_lc': 'scIndex',
         'kc': 'Num2'},
        {'id': 'sc_help_Num3',
         'txt_lc': 'scZoom',
         'kc': 'Num3'},
        {'id': 'sc_help_Num4',
         'txt_lc': 'scLanguages',
         'kc': 'Num4'},
        {'id': 'sc_help_Num5',
         'txt_lc': 'scHelp',
         'kc': 'Num5'}]
    }   
  };

  
