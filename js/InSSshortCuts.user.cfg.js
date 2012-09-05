  /*****************************/
  /* InSSshortCuts.user.cfg.js */                   
  /*****************************/
  /* - format JSON, konfiguracja 
   */   
  
  utiles.params[ 'InSSshortCuts' ] = {

    /* identyfikator obiektu klasy skrotow klawiszowych InSSshortCuts 
       /wymagany, unikatowy, ustawiany jest najczesciej podczas inicjalizacji strony/ */
      'id':                 '',                                         

    /* identyfikator obiektu klasy nadrzednej 
       /wymagany,unikatowy/ */
      'parent':             'body',                                         

    /* obiekt JSON ze źródłem skrotow klawiszowych
       /nie wymagane, o ile przekaże się obiekt JSON w sourceJSONdivId */
      'sourceJSONobj':      utiles.json[ 'InSSshortCuts^html' ],             

    /* obiekt JSON ze stylami skrotow klawiszowych
       /nie wymagane/ */
      'sourceCssJSONobj':   utiles.json[ 'InSSshortCuts^css' ],             

    /* obiekt JSON z klawiszami skrotow pogrupowanych w konteksty
       /nie wymagane/ */
      'sourceContextKeys':  utiles.json[ 'InSSshortCuts^keys' ],             

    /* obiekt JSON z obrazkami klawiszy
       /nie wymagane/ */
      'sourceImgJSONobj':   utiles.json[ 'InSSshortCuts^img' ],             

    /* rozmiar klawisza (w px)
       /nie wymagane/ */
      'imgSize':            60             
  };