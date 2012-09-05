  /************************/
  /* InSSzoom.user.cfg.js */                   
  /************************/
  /* - format JSON, konfiguracja 
   */   
  
  utiles.params[ 'InSSzoom' ] = {

    /* identyfikator obiektu klasy 
       /wymagany, unikatowy, ustawiany jest najczesciej podczas inicjalizacji strony/ */
      'id':                 '',                                         

    /* prefiks nadawanych wszystkim elementom HTML tworzonym w ramach danej klasy 
       /nie wymagany, w przypadku, gdy jest pusty - domyslnie nadaje sie id obiektu klasy/ */
      'prefix':             '',                                         

    /* identyfikator rodzica głownego kontenera 
       /zaawansowane, wymagane/ */
      'parentId':           'body',          

    /* identyfikator zdjecia głownego kontenera 
       /zaawansowane, wymagane/ */
      'parentImageId':      '_photo',          
      
    /* kontener ze źrółdem danych w formacie JSON 
       /nie wymagane, o ile przekaże się obiekt JSON w sourceJSONobj */
      'sourceJSONdivId':    '',                     

    /* obiekt JSON z danymi 
       /nie wymagane, o ile przekaże się obiekt JSON w sourceJSONdivId */
      'sourceJSONobj':      utiles.json[ 'InSSzoom^html' ],             

    /* obiekt JSON ze stylami skrotow klawiszowych
       /nie wymagane/ */
      'sourceCssJSONobj':   utiles.json[ 'InSSzoom^css' ]             
  };

