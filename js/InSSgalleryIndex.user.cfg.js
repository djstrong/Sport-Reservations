  /********************************/
  /* InSSgalleryIndex.user.cfg.js */                   
  /********************************/
  /* - format JSON, konfiguracja 
   */   
  
  utiles.params[ 'InSSgalleryIndex' ] = {

    /* identyfikator obiektu klasy 
       /wymagany, unikatowy, ustawiany jest najczesciej podczas inicjalizacji strony/ */
      'id':                       '',                                         

    /* identyfikator rodzica głownego kontenera 
       /zaawansowane, wymagane/ */
      'divParentId':              '_content',          

    /* kontener ze źrółdem danych w formacie JSON 
       /nie wymagane, o ile przekaże się obiekt JSON w sourceJSONobj */
      'sourceJSONdivId':          '',                     

    /* obiekt JSON z danymi 
       /nie wymagane, o ile przekaże się obiekt JSON w sourceJSONdivId */
      'sourceJSONobj':            utiles.json[ 'InSSzoom^data' ],             
                                           
    /* obiekt JSON ze struktura HTML
       /wymagane/ */
      'sourceJSONobjHTML':        utiles.json[ 'InSSzoom^html' ],             

    /* obiekt JSON ze struktura HTML - specjalne czesci, np tabela ze zmienna iloscia kolumn i wierszy
       /nie wymagane/ */
      'sourceJSONobjHTMLSpecial': utiles.json[ 'InSSzoom^special' ],             
                                           
    /* obiekt JSON ze stylami skrotow klawiszowych
       /nie wymagane/ */
      'sourceCssJSONobj':         utiles.json[ 'InSSzoom^css' ]             
  };
