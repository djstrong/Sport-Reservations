  /*****************************/
  /* InSSshortCuts.user.cfg.js */                   
  /*****************************/
  /* - format JSON, konfiguracja 
   */   
  
  var scParams = {

    /* identyfikator obiektu klasy skrotow klawiszowych InSSshortCuts 
       /wymagany, unikatowy, ustawiany jest najczesciej podczas inicjalizacji strony/ */
      'id':                 '',                                         

    /* identyfikator pierwszej strony 
       /wymagany/ */
      'page':               'gallery',                                         

    /* identyfikator rodzica głownego kontenera 
       /zaawansowane, wymagane/ */
      'divParentId':        webId+'_content',          

    /* kontener ze źródłem skrotow klawiszowych w formacie JSON 
       /nie wymagane, o ile przekaże się obiekt JSON w sourceJSONobj */
      'sourceJSONdivId':    '',                     

    /* obiekt JSON ze źródłem skrotow klawiszowych
       /nie wymagane, o ile przekaże się obiekt JSON w sourceJSONdivId */
      'sourceJSONobj':      shortCuts,             

    /* obiekt JSON ze źródłem skrotow klawiszowych (w nowym formacie)
       /nie wymagane, o ile przekaże się obiekt JSON w sourceJSONdivId */
      'sourceNewJSONobj':   shortCutsNewFormat,             

    /* obiekt JSON ze stylami skrotow klawiszowych
       /nie wymagane/ */
      'sourceCssJSONobj':   shortCutsCSS,             

    /* rozmiar klawisza (w px)
       /nie wymagane/ */
      'imgSize':            64             
  };
                   
