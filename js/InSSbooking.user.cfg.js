
  /***************************/
  /* InSSbooking.user.cfg.js */
  /***************************/
  /* - format JSON, konfiguracja obslugi klasy designowej 
   */   

  /* konfiguracja obsługi klasy */    
  utiles.params[ 'InSSbooking' ] = {

    /* identyfikator obiektu klasy 
       /wymagany, unikatowy, ustawiany jest najczesciej podczas inicjalizacji strony/ */
      'id':                 '',                                         

    /* defaultowy prefix id, dodawany na poczatku kazdego generowanego id 
       /nie wymagany/ */
      'defaultIdPrefix':    'booking',                                         

    /* defaultowy schemat ikon 
       /nie wymagany/ */
      'defaultSchema':      'booking',                                         

    /* obiekt JSON z danymi 
       /nie wymagane, o ile przekaże się obiekt JSON w sourceJSONdivId */
      'sourceJSONobj':      utiles.json[ 'InSSdesign^data^icons' ]             
  };