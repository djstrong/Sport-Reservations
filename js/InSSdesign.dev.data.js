
  /**************************/
  /* InSSdesign.dev.data.js */
  /**************************/
  /* - format JSON, informacje o ikonkach
   * - sklada sie z trzech czesci: icons - informacje o plikach ikon oraz opis ikon i ich lokalizacje w pliku
   *                               design - informacje o stylach CSS ikon, 
   *                               schema - schematy ikon lacza design z konkretnymi plikami ikon
   * - przyklad:
   *
   *    'icons': {                           <- w tym miejscu znajduja sie informacje tylko o ikonach
   *      'booking': {                       <- identyfikator zestawu ikon
   *        'file':   'plik.png',            <- plik zrodlowy ikon 
   *        'width':  30,                    <- szerokosc ikony
   *        'height': 30,                    <- wysokosc ikony
   *        'positions': {                   <- pozycje ikon
   *          'arbour': { 'H': 1, 'W': 1 },  <- identyfikator ikony oraz jej polozenie: `H`eight (wiersz) oraz `W`idth (kolumna)
   *
   *    'design': {                          <- w tym miejscu znajduja sie informacje tylko o stylach ikon
   *      'booking': {                       <- identyfikator designu
   *        'float': 'left',                 <- style
   *
   *    'schema': {                          <- w tym miejscu znajduja sie informacje tylko o schematach ikon
   *      'booking': {                       <- identyfikator schematu
   *        'icons':  'booking',             <- identyfikator zestawu ikon
   *        'design':  'booking'             <- identyfikator designu
   *      }
   */   

  /* dane */
  utiles.json[ 'InSSdesign^data' ] = {
    'icons': {             
      'booking': {
        'file':   'buttons/ico/inssbooking_30x30_20110512v1.png',
        'width':  30,
        'height': 30,
        'positions': {
          'arbour':                     { 'H': 1, 'W': 1 },
          'kitchen_annex':              { 'H': 1, 'W': 2 },
          'pharmacy':                   { 'H': 1, 'W': 3 },
          'balcony':                    { 'H': 1, 'W': 4 },
          'bank':                       { 'H': 1, 'W': 5 },
          'bar':                        { 'H': 1, 'W': 6 },
          'swimming_pool':              { 'H': 1, 'W': 7 },
          'library':                    { 'H': 1, 'W': 8 },
          'billiards':                  { 'H': 1, 'W': 9 },
          'bowling':                    { 'H': 1, 'W':10 },
          'chaise':                     { 'H': 2, 'W': 1 },
          'whole_year_round':           { 'H': 2, 'W': 2 },
          'cordless_kettle':            { 'H': 2, 'W': 3 },
          'ironing_board':              { 'H': 2, 'W': 4 },
          'access_to_computer':         { 'H': 2, 'W': 5 },
          'drink_bar':                  { 'H': 2, 'W': 6 },
          'big_garden':                 { 'H': 2, 'W': 7 },
          'disco':                      { 'H': 2, 'W': 8 },
          'golf':                       { 'H': 2, 'W': 9 },
          'mountains':                  { 'H': 2, 'W':10 },
          'grill':                      { 'H': 3, 'W': 1 },
          'mushrooms':                  { 'H': 3, 'W': 2 },
          'helicopter':                 { 'H': 3, 'W': 3 },
          'internet':                   { 'H': 3, 'W': 4 },
          'jacuzzi':                    { 'H': 3, 'W': 5 },
          'lake':                       { 'H': 3, 'W': 6 },
          'kayaks':                     { 'H': 3, 'W': 7 },
          'exchange_office':            { 'H': 3, 'W': 8 },
          'coffe_bar':                  { 'H': 3, 'W': 9 },
          'cinema':                     { 'H': 3, 'W':10 },
          'air_conditioning':           { 'H': 4, 'W': 1 },
          'fireplace':                  { 'H': 4, 'W': 2 },
          'courts':                     { 'H': 4, 'W': 3 },
          'church':                     { 'H': 4, 'W': 4 },
          'basketball':                 { 'H': 4, 'W': 5 },
          'lang_eng':                   { 'H': 4, 'W': 6 },
          'lang_fra':                   { 'H': 4, 'W': 7 },
          'lang_ger':                   { 'H': 4, 'W': 8 },
          'lang_ita':                   { 'H': 4, 'W': 9 },
          'lang_rus':                   { 'H': 4, 'W':10 },
          'forest':                     { 'H': 5, 'W': 1 },
          'fridge':                     { 'H': 5, 'W': 2 },
          'airport':                    { 'H': 5, 'W': 3 },
          'market':                     { 'H': 5, 'W': 4 },
          'microwave':                  { 'H': 5, 'W': 5 },
          'monitoring':                 { 'H': 5, 'W': 6 },
          'sea':                        { 'H': 5, 'W': 7 },
          'partial_denture_enable':     { 'H': 5, 'W': 8 },
          'museum':                     { 'H': 5, 'W': 9 },
          'dishes':                     { 'H': 5, 'W':10 },
          'handicapped':                { 'H': 6, 'W': 1 },
          'antique_builings':           { 'H': 6, 'W': 2 },
          'fire':                       { 'H': 6, 'W': 3 },
          'paraglide':                  { 'H': 6, 'W': 4 },
          'umbrella':                   { 'H': 6, 'W': 5 },
          'parking':                    { 'H': 6, 'W': 6 },
          'guarded_parking':            { 'H': 6, 'W': 7 },
          'football':                   { 'H': 6, 'W': 8 },
          'football_table':             { 'H': 6, 'W': 9 },
          'bus':                        { 'H': 6, 'W':10 },
          'coach':                      { 'H': 7, 'W': 1 },
          'playground':                 { 'H': 7, 'W': 2 },
          'music_shows':                { 'H': 7, 'W': 3 },
          'gallery':                    { 'H': 7, 'W': 4 },
          'pay_by_cards_enable':        { 'H': 7, 'W': 5 },
          'train':                      { 'H': 7, 'W': 6 },
          'post':                       { 'H': 7, 'W': 7 },
          'tented_field':               { 'H': 7, 'W': 8 },
          'port':                       { 'H': 7, 'W': 9 },
          'laundry':                    { 'H': 7, 'W':10 },
          'shower':                     { 'H': 8, 'W': 1 },
          'viewpoint':                  { 'H': 8, 'W': 2 },
          'radio':                      { 'H': 8, 'W': 3 },
          'restaurant':                 { 'H': 8, 'W': 4 },
          'river':                      { 'H': 8, 'W': 5 },
          'banquetting_hall':           { 'H': 8, 'W': 6 },
          'gym':                        { 'H': 8, 'W': 7 },
          'sauna':                      { 'H': 8, 'W': 8 },
          'bicycle_paths':              { 'H': 8, 'W': 9 },
          'tourist_paths':              { 'H': 8, 'W':10 },
          'safe':                       { 'H': 9, 'W': 1 },
          'volleyball':                 { 'H': 9, 'W': 2 },
          'power_house':                { 'H': 9, 'W': 3 },
          'grocery':                    { 'H': 9, 'W': 4 },
          'health_service':             { 'H': 9, 'W': 5 },
          'fish_fry':                   { 'H': 9, 'W': 6 },
          'solarium':                   { 'H': 9, 'W': 7 },
          'beach_equipment':            { 'H': 9, 'W': 8 },
          'squash':                     { 'H': 9, 'W': 9 },
          'station':                    { 'H': 9, 'W':10 },
          'stud':                       { 'H':10, 'W': 1 },
          'ship':                       { 'H':10, 'W': 2 },
          'canteen':                    { 'H':10, 'W': 3 },
          'hair_drier':                 { 'H':10, 'W': 4 },
          'common_room':                { 'H':10, 'W': 5 },
          'new_years_eve':              { 'H':10, 'W': 6 },
          'terrace':                    { 'H':10, 'W': 7 },
          'taxi':                       { 'H':10, 'W': 8 },
          'theatre':                    { 'H':10, 'W': 9 },
          'tv_set':                     { 'H':10, 'W':10 },
          'tennis':                     { 'H':11, 'W': 1 },
          'enclosure':                  { 'H':11, 'W': 2 },
          'bicycle_routes':             { 'H':11, 'W': 3 },
          'children':                   { 'H':11, 'W': 4 },
          'toilet':                     { 'H':11, 'W': 5 },
          'chairlift':                  { 'H':11, 'W': 6 },
          'ski_lift':                   { 'H':11, 'W': 7 },
          'ski_tow':                    { 'H':11, 'W': 8 },
          'lend_ski_equipment_enable':  { 'H':11, 'W': 9 },
          'iron':                       { 'H':11, 'W':10 },
          'small_animals_acceptant':    { 'H':12, 'W': 1 },
          'animals_not_acceptant':      { 'H':12, 'W': 2 },
          'animals_acceptant':          { 'H':12, 'W': 3 }
  
        }
      }
    },
    'design': {
      'booking': {
        'borderRadius': '6px 6px 6px 6px',
        'opacity': '1',
        'filter': 'alpha(opacity=70)',   
        'background': '#7F9BD9',
        'color': '#F7F5FF',
        'textAlign': 'center',
        'fontSize': '24px',
        'fontWeight': 'bold',
        'fontWeight': 'bold',
        'padding': '0',
        'cssFloat': 'left',
        'width': '30px',
        'marginTop': '2px',
        'height': '30px',
        'border': '3px solid #7F9BD9'
      }
    },
    'info': {
      'booking': {
        'position': 'relative',
        'top': '31px',
        'left': '-3px',
        'width': '36px',
        'color': 'white',
        'fontSize': '9px',
        'background': 'navy',
        'borderRadius': '3px 3px 3px 3px'
      }        
    },
    'schema': {
      'booking': { 'icons': 'booking',  'design': 'booking',  'info': 'booking' }
    }
  };
  