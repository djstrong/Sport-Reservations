  /******************************/
  /* InSSstructHTML.user.cfg.js */                   
  /******************************/
  /* - format JSON, konfiguracja 
   */   
  
  utiles.params[ 'InSSstructHTML' ] = {

    /* identyfikator obiektu klasy 
       /wymagany, unikatowy, ustawiany jest najczesciej podczas inicjalizacji strony/ */
      'id':                   '',                                         

    /* autogeneracja HTML wlaczona/wylaczona (TRUE/FALSE)
       jezeli wartosc parametru jest ustawiona na TRUE, wtedy na podstawie danych w JSONie
       system proboje sam wygenerowac kod HTML wlacznie ze stylami CSS wg okreslonego wzorca
       przy bardziej zaawansowanych strukturach, gdzie sama struktura HTML jest uzalezniona
       od innych parametrow, zmiennych i nie jest stala jest mozliwosc recznego stworzenia
       struktury HTML+CSS
       /zaawansowane, wymagane, domyslnie: true/ */
      'autoGenHTML':          true,          

    /* czy widoczny ma byc numer wiersza i z nim zwiazane smieci: constSpecialIdRow i constSpecialIdCol 
       /zaawansowane, niewymagane/ */
      'visibleRowNo':         true,          

    /* identyfikator rodzica głownego kontenera 
       /zaawansowane, wymagane/ */
      'divParentId':          'body',          

    /* kontener ze źrółdem danych w formacie JSON 
       /nie wymagane, o ile przekaże się obiekt JSON w sourceJSONobj */
      'sourceJSONdivId':      '',                     

    /* obiekt JSON z danymi 
       /nie wymagane, o ile przekaże się obiekt JSON w sourceJSONdivId */
      'sourceJSONobj':        utiles.json[ 'InSSstructHTML^data' ],             

    /* obiekt JSON z danymi specjalnymi struktury, np tabela ze zmienna iloscia kolumn i wierszy
       /nie wymagane/ */
      'sourceJSONobjSpecial': utiles.json[ 'InSSstructHTML^special' ],             

    /* obiekt JSON ze stylami skrotow klawiszowych
       /nie wymagane/ */
      'sourceCssJSONobj':     utiles.json[ 'InSSstructHTML^css' ],             
  };

