  /************************/
  /* InSSlang.user.cfg.js */                   
  /************************/
  /* - format JSON, konfiguracja obslugi wielu jezykow dla wlasciciela serwisu 
   */   
  
  utiles.params[ 'InSSlang' ] = {

    /* identyfikator obiektu klasy tlumaczenia InSSlang
       zazwyczaj identyfiaktor wspolny dla calego serwisu 
       /wymagany, unikatowy, ustawiany jest najczesciej podczas inicjalizacji strony/ */
      'id':                 '',                                         

    /* domyslny jezyk 
       jezyk bedzie ustawiany na wejsciu, chyba ze w inna funkcjonalnosc pozwoli
       odczytac jezyk uzytkownika, np ostatnio ustawiany i zapisany w ciasteczkach
       /wymagany, jeden z listy langsList/ */
      'lang':               'eng',                  

    /* lista jezykow 
       wazne jest zachowanie standardow kodow jezykow
       !WAZNE - UWAGA DLA DEVELOPERA!
       Podczas dodawania nowego jezyka, wymagane jest, aby w katalogu z plikami 
       graficznymi z flagami (np w katalogu buttons/flags) znajdowaly sie odpowiednie
       grafiki flag dla danego kraju, np. Niemcy - kod de: 
       - de.gif - wybrana flaga, 
       - de-dim.gif - flaga z listy do wyboru (przymglona),
       /wymagany bynajmniej jeden jezyk/ */
      'langsList':          'eng,pl,de,ru,es',

    /* w przypadku nie znalezenia kodu tlumaczenia w podanej grupie, 
       czy szukac w pozostalych grupach 
       /nie wymagane, true/false/ */
      'searchOthersGroups': true,                   

    /* jezeli tlumaczenie w podanym jezyku nie jest uzupelnione, 
       czy zastosowac tlumaczenie z jezyka domyslnego 
       /nie wymagane, true/false/ */
      'useDefaultLang':     true,                   

    /* identyfikator głownego kontenera 
       /zaawansowane, wymagane, unikatowe w ramach strony/ */
      'divId':              '_photo_lang',       

    /* identyfikator rodzica głownego kontenera 
       /zaawansowane, wymagane/ */
      'divParentId':        '_content',          

    /* identyfikator kontenera listy jezyków 
       /zaawansowane, wymagane/ */
      'divListId':          '_photo_lang_list',  

    /* kontener ze źrółdem tłumaczeń w formacie JSON 
       /nie wymagane, o ile przekaże się obiekt JSON w sourceJSONobj */
      'srcJSONdivId':       '',                     

    /* obiekt JSON ze źródłem tłumaczeń 
       /nie wymagane, o ile przekaże się obiekt JSON w sourceJSONdivId */
      'srcJSON': {
        'translations': {
          'de':  utiles.params[ 'InSSlang^translations^de'  ],
          'eng': utiles.params[ 'InSSlang^translations^eng' ],
          'es':  utiles.params[ 'InSSlang^translations^es'  ],
          'pl':  utiles.params[ 'InSSlang^translations^pl'  ],
          'ru':  utiles.params[ 'InSSlang^translations^ru'  ]
        },
        'destiny': utiles.params[ 'InSSlang^destiny' ]                    
      }             
  };
 /*
  //JSON - zbior danych klasy lang
  var trans = new Array();
  trans['translations'] = new Array();
  trans['destiny'] = new Array();

  //funkcja przepisujaca tlumaczenia na sobie zrozumialy format
  function createLangJSONobj( p_trans ){
    var tempObj = new Array();
    if( (p_trans['destiny'] == undefined) ||  (p_trans['translations'] == undefined) )
      return tempObj;
    
    var langs = new Array();
    for( var lang in p_trans['translations'] )
      langs[lang] = true;
    
    for( var el in p_trans['destiny'] ){
      tempObj[el] = new Array();
      tempObj[el]['destiny'] = new Array();
      tempObj[el]['destiny'] = p_trans['destiny'][el];
      for( var lang in langs )
        tempObj[el][lang] = p_trans['translations'][lang][el]; 
    }
    return tempObj;
  }
  */
