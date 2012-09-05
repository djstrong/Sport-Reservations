  /*************************/
  /* InSSpager.user.cfg.js */                   
  /*************************/
  /* - format JSON, konfiguracja 
   */   
  
  utiles.params[ 'InSSpager' ] = {

    /* identyfikator obiektu klasy 
       /wymagany, unikatowy, ustawiany jest najczesciej podczas inicjalizacji strony/ */
      'id':                 '',                                         

    /* grupa
       /wymagany,unikatowy/ */
      'group':              'index',                                         

    /* prefix identyfikatora elementu
       /wymagany,unikatowy/ */
      'divElementPrefixId': 'element_',          

    /* identyfikator rodzica głownego kontenera 
       /zaawansowane, wymagane/ */
      'divParentId':        '',          

    /* folder z grafika 
       /nie wymagane/ */
      'imgSrc':            'buttons/',                     

    /* grafika strony
       /wymagane, jesli nie podano klasy stylow/ */
      'imgPage':           'pages_balls_off25.png',                     

    /* grafika wybranej strony
       /wymagane, jesli nie podano klasy stylow wybranej strony/ */
      'imgPageSelected':   'pages_balls_on25.png',                     

    /* klasa stylow strony
       /wymagane, jesli nie podano grafiki strony/ */
      'classCssPage':      '',                     

    /* klasa stylow wybranej strony
       /wymagane, jesli nie podano grafiki wybranej strony/ */
      'classCssPageSelected':   '',                     

    /* klasa stylow przycisku: poprzednia strona
       /wymagane, jesli nie podano grafiki strony/ */
      'classCssPagePrev':   '',                     

    /* klasa stylow przycisku: nastepna strona
       /wymagane, jesli nie podano grafiki strony/ */
      'classCssPageNext':   '',                     

    /* klasa stylow elementu
       /wymagane/ */
      'classCssElement':      '',                     

    /* klasa stylow zaznaczonego elementu
       /wymagane/ */
      'classCssElementSelected':   '',                     

    /* stronicowanie
       /nie wymagane; domyślnie none; wartości:
        - none - brak stronicowania
        - horizontal - stronicowanie poziome ( lewo -> poprzednia strona; prawo -> nastepna strona )
        - vertical - stronicowanie pionowe ( gora -> poprzednia strona; dol -> nastepna strona )
        - both - stronicowanie poziome oraz pionowe ( lewo, gora -> poprzednia strona; prawo, dol -> nastepna strona ) / */
      'paging':             'horizontal',                     
    
    /* zapętlenie
       /nie wymagane; domyślnie false/ */
      'kink':               true,                     
    
    /* ilość wierszy
       /wymagane/ */
      'rows':               3,                     
    
    /* ilość kolumn
       /wymagane/ */
      'cols':               3,                     
    
    /* ilość elementów
       /wymagane/ */
      'count':              20,                     
    
    /* numer wybranej strony
       /nie wymagane, domyslnie 1/ */
      'page':               1,                     
    
    /* numer zaznaczonego elementu
       /nie wymagane, domyslnie 1/ */
      'element':            1,                     
    
    /* nazwa obiektu uzywajacego klase
       /wymagane/ */
      'objectParent':       'parent',                     
    
    /* nazwa obiektu pagera
       /wymagane/ */
      'objectPager':        'parent.pager',                     
    
    /* kontener ze źrółdem danych w formacie JSON 
       /nie wymagane, o ile przekaże się obiekt JSON w sourceJSONobj/ */
      'sourceJSONdivId':    '',                     

    /* obiekt JSON z danymi 
       /nie wymagane, o ile przekaże się obiekt JSON w sourceJSONdivId/ */
      'sourceJSONobj':      new Array(),             

    /* obiekt JSON ze stylami skrotow klawiszowych
       /nie wymagane/ */
      'sourceCssJSONobj':   utiles.json[ 'InSSpager^css' ]             
  };

