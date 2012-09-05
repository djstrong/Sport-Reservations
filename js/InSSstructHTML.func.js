  /**************************/
  /* InSSstructHTML.func.js */                   
  /**************************/
  /* - zestaw funkcji sluzacych do struktur HTML
   * UWAGA! Wymaga klasy InSSstructHTML
   */   
  
  //tworzy strukture HTML
  function fSHcreateHTML( p_obj ){
    /* konfiguracja obsługi klasy */    
    var params = {

    /* obiekt JSON z danymi 
       /nie wymagane, o ile przekaże się obiekt JSON w sourceJSONdivId */
      'sourceJSONobj':        p_obj['html'],             

    /* obiekt JSON ze struktura HTML - specjalne czesci, np tabela ze zmienna iloscia kolumn i wierszy
       /nie wymagane/ */
      'sourceJSONobjSpecial': p_obj['special'],             
                                           
    /* obiekt JSON ze stylami skrotow klawiszowych
       /nie wymagane/ */
      'sourceCssJSONobj':     p_obj['css']             
    
    };

    this.struct = new InSSstructHMTL( params );
    return true;
  }