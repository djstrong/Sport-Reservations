  /***************************/
  /* InSSlang.dev.destiny.js */                   
  /***************************/
  /* - format JSON, dedykowany raczej dla developerow/webmasterow 
   * - wykaz identyfikatorow wraz z właściwościami elementow HTML, w których przechowywane są
   *   tresci, ktore maja byc tlumaczone na stronie
   * - przyklad:
   *   '{lcLangENG}':[                  <- unikatowy identyfikator wybranego tlumaczenia / format kodu: {lc<KOD>}   
   *      { 'id': webId+'_lang_eng',    <- identyfikator elementu HTML (div,span...)
   *        'property': 'alt,title'}],  <- lista wlasciwosci elementu (alt,title,innerHTML...)
   * - dla jednego identyfikatora tlumaczenia moze istniec wiele elementow HTML, ktorych
   *   tlumaczenie dotyczy i w ktorych system ma ustawic odpowiednie tlumaczenie      
   */   
  
  utiles.params[ 'InSSlang^destiny' ] = {
    
    /* wersje jezykowe */
    '{lcLangENG}':                  [ {'id': 'sc_lang_eng',                         'property': 'alt,title'} ],
    '{lcLangPL}':                   [ {'id': 'sc_lang_pl',                          'property': 'alt,title'} ],
    '{lcLangDE}':                   [ {'id': 'sc_lang_de',                          'property': 'alt,title'} ],
    '{lcLangRU}':                   [ {'id': 'sc_lang_ru',                          'property': 'alt,title'} ],
    '{lcLangES}':                   [ {'id': 'sc_lang_es',                          'property': 'alt,title'} ],
    
    /* skroty klawiszowe - chmurka */
    '{lcScAutohide}':               [ {'id': 'sc_hint_autohiding_chk',              'property': 'alt,title'} ],
    
    /* galeria */
    '{lcScGrGallery}':              [ {'id': 'sc_gallery',                          'property': 'innerHTML'} ],
    '{lcScGrIndex}':                [ {'id': 'sc_index',                            'property': 'innerHTML'} ],
    '{lcScGrZoom}':                 [ {'id': 'sc_zoom',                             'property': 'innerHTML'} ],
    '{lcScGrLanguages}':            [ {'id': 'sc_lang',                             'property': 'innerHTML'} ],
    '{lcScGrHelp}':                 [ {'id': 'sc_help',                             'property': 'innerHTML'} ],
    '{lcScPrevPage}':               [ {'id': 'sc_gallery_arrow_up',                 'property': 'innerHTML'} ],
    '{lcScNextPage}':               [ {'id': 'sc_gallery_arrow_down',               'property': 'innerHTML'} ],
    '{lcScPrevPhoto}':              [ {'id': 'sc_gallery_arrow_left',               'property': 'innerHTML'} ],
    '{lcScNextPhoto}':              [ {'id': 'sc_gallery_arrow_right',              'property': 'innerHTML'} ],
    '{lcScPageNumbers}':            [ {'id': 'sc_gallery_page_number',              'property': 'innerHTML'},
                                      {'id': 'sc_index_page_number',                'property': 'innerHTML'} ],
    '{lcScLanguages}':              [ {'id': 'sc_gallery_functions',                'property': 'innerHTML'} ],
    '{lcScShowCloseInfo}':          [ {'id': 'sc_gallery_I',                        'property': 'innerHTML'},
                                      {'id': 'sc_zoom_I',                           'property': 'innerHTML'} ],
    '{lcScShowPhoto}':              [ {'id': 'sc_gallery_S',                        'property': 'innerHTML'} ],
    '{lcScShowZoom}':               [ {'id': 'sc_gallery_Z',                        'property': 'innerHTML'} ],
    '{lcScGallerysIndex}':          [ {'id': 'sc_gallery_G',                        'property': 'innerHTML'} ],
    '{lcScHelp}':                   [ {'id': 'sc_gallery_H',                        'property': 'innerHTML'} ],
    '{lcScCloseGallery}':           [ {'id': 'sc_gallery_esc',                      'property': 'innerHTML'} ],
    '{lcScNavigateUp}':             [ {'id': 'sc_index_arrow_up',                   'property': 'innerHTML'} ],
    '{lcScNavigateDown}':           [ {'id': 'sc_index_arrow_down',                 'property': 'innerHTML'} ],
    '{lcScNavigateLeft}':           [ {'id': 'sc_index_arrow_left',                 'property': 'innerHTML'} ],
    '{lcScNavigateRight}':          [ {'id': 'sc_index_arrow_right',                'property': 'innerHTML'} ],
    '{lcScOpenGallery}':            [ {'id': 'sc_index_enter',                      'property': 'innerHTML'} ],
    '{lcScIndexEscape}':            [ {'id': 'sc_index_esc',                        'property': 'innerHTML'} ],
    '{lcScMoveUp}':                 [ {'id': 'sc_zoom_arrow_up',                    'property': 'innerHTML'} ],
    '{lcScMoveDown}':               [ {'id': 'sc_zoom_arrow_down',                  'property': 'innerHTML'} ],
    '{lcScMoveLeft}':               [ {'id': 'sc_zoom_arrow_left',                  'property': 'innerHTML'} ],
    '{lcScMoveRight}':              [ {'id': 'sc_zoom_arrow_right',                 'property': 'innerHTML'} ],
    '{lcScIncreaseZoom}':           [ {'id': 'sc_zoom_row_equals',                  'property': 'innerHTML'} ],
    '{lcScDecreaseZoom}':           [ {'id': 'sc_zoom_row_minus',                   'property': 'innerHTML'} ],
    '{lcScIncreaseWindowSize}':     [ {'id': 'sc_zoom_comma',                       'property': 'innerHTML'} ],
    '{lcScDecreaseWindowSize}':     [ {'id': 'sc_zoom_dot',                         'property': 'innerHTML'} ],
    '{lcScIncreaseLengthOfZoom}':   [ {'id': 'sc_gallery_arrow_down',               'property': 'innerHTML'} ],
    '{lcScDecreaseLengthOfZoom}':   [ {'id': 'sc_gallery_arrow_down',               'property': 'innerHTML'} ],
    '{lcScCloseZoom}':              [ {'id': 'sc_zoom_esc',                         'property': 'innerHTML'} ],
    '{lcScEnglish}':                [ {'id': 'sc_languages_F1',                     'property': 'innerHTML'} ],
    '{lcScPolish}':                 [ {'id': 'sc_languages_F2',                     'property': 'innerHTML'} ],
    '{lcScGerman}':                 [ {'id': 'sc_languages_F3',                     'property': 'innerHTML'} ],
    '{lcScRussian}':                [ {'id': 'sc_languages_F4',                     'property': 'innerHTML'} ],
    '{lcScSpanish}':                [ {'id': 'sc_languages_F5',                     'property': 'innerHTML'} ],
    '{lcScGallery}':                [ {'id': 'sc_help_G',                           'property': 'innerHTML'} ],
    '{lcScIndex}':                  [ {'id': 'sc_help_I',                           'property': 'innerHTML'} ],
    '{lcScZoom}':                   [ {'id': 'sc_help_Z',                           'property': 'innerHTML'} ],
    '{lcScLanguages}':              [ {'id': 'sc_help_L',                           'property': 'innerHTML'} ],
    '{lcScHelp}':                   [ {'id': 'sc_help_H',                           'property': 'innerHTML'} ]
  };
