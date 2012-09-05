  /*****************************/
  /* InSSgalleryIndex.class.js */                   
  /*****************************/
  /* - klasa sluzaca do tworzenia okna podpowiedzi ze skrotami klawiszowymi
   * - UWAGA: wymaga biblioteki InSSutiles.class.js 
   */   
  
  utiles.addJSsource( 'js/InSSgalleryIndex.dev.struct.js' ); 
  utiles.addJSsource( 'js/InSSgalleryIndex.dev.data.js' ); 
  utiles.addJSsource( 'js/InSSgalleryIndex.user.cfg.js' ); 

  function InSSgalleryIndex( p_params ){

    //parametry
    this.params = new Array();
    this.id = 'tempId';                 /* id */
    this.divId = '';
    this.divIdBg = '';
    this.divParentId = '';
    this.sourceJSONdivId = '';          /* identyfikator obiektu DIV z danymi JSON */
    this.sourceJSONobj = new Array();
    this.sourceJSONobjHTML = new Array();
    this.sourceJSONobjHTMLspecial = new Array();
    this.sourceCssJSONobj = new Array();

    //zmienne systemowe
    this.idPrefix = '';                 /* prefiks nadawanych wszystkim elementom HTML tworoznym w ramach danej klasy */
    this.pager = new Object();          /* obsługa stron */
    this.struct = new Object();         /* struktura HTML */
    
    //stale
    this.constDivId = '_gallery_index';
    this.constDivIdBg = '_gallery_index_bg';  
    this.constCols = 3;                 /* ilość kolumn */
    this.constRows = 3;                 /* ilość wierszy */
                   
    this.setId = function( p_value ){
      this.id = p_value;
    };
    this.getId = function(){
      return this.id;
    };
    this.setDivId = function( p_value ){
      this.divId = p_value;
    };
    this.getDivId = function(){
      return this.divId;
    };
    this.setDivIdBg = function( p_value ){
      this.divIdBg = p_value;
    };
    this.getDivIdBg = function(){
      return this.divIdBg;
    };
    this.setDivParentId = function( p_value ){
      this.divParentId = p_value;
    };
    this.getDivParentId = function(){
      return this.divParentId;
    };
    this.setSourceJSONobj = function( p_value ){
      this.sourceJSONobj = p_value;
    };
    this.getSourceJSONobj = function(){
      return this.sourceJSONobj;
    };
    this.setSourceJSONobjHTML = function( p_value ){
      this.sourceJSONobjHTML = p_value;
    };
    this.getSourceJSONobjHTML = function(){
      return this.sourceJSONobjHTML;
    };
    this.setSourceJSONobjHTMLspecial = function( p_value){
      this.sourceJSONobjHTMLspecial = p_value;
    };
    this.getSourceJSONobjHTMLspecial = function(){
      return this.sourceJSONobjHTMLspecial;
    };
    this.setIdPrefix = function( p_value ){
      this.idPrefix = p_value;
    };
    this.getIdPrefix = function(){
      return this.idPrefix;
    };

    this.init = function( p_params ){

      if( !this.setParams( p_params ) ){
        if( c.constAlertInitError != '' )
          alert( c.constAlertInitError );
        return false;
      }
      
      this.createHTML();
      this.pager = this.initPager();
    }
    this.setParams = function( p_params ){
      if( p_params == undefined )
        return false;
      if( p_params.length = 0 )
        return false;
      this.params = p_params;
      if( utiles.getParam( this.params, 'id' ) != '' )
        this.setId( utiles.getParam( this.params, 'id' ) );
      if( utiles.getParam( this.params, 'divParentId' ) != '' )
        this.setDivParentId( this.getId() + utiles.getParam( this.params, 'divParentId' ) );
      if( utiles.getParam( this.params, 'sourceJSONdivId' ) != '' )
        if( $( utiles.getParam( this.params, 'sourceJSONdivId' ) ) )
          eval( 'this.sourceJSONobj = {' + $( this.getSourceJSONdivId() ).innerHTML + '}' );
      if( utiles.getParam( this.params, 'sourceJSONobj' ) != '' )
        this.setSourceJSONobj( utiles.getParam( this.params, 'sourceJSONobj' ) );
      if( utiles.getParam( this.params, 'sourceJSONobjHTML' ) != '' )
        this.setSourceJSONobjHTML( utiles.getParam( this.params, 'sourceJSONobjHTML' ) );
      if( utiles.getParam( this.params, 'sourceJSONobjHTMLspecial' ) != '' )
        this.setSourceJSONobjHTMLspecial( utiles.getParam( this.params, 'sourceJSONobjHTMLspecial' ) );
      if( utiles.getParam( this.params, 'sourceCssJSONobj' ) != '' )
        this.setSourceCssJSONobj( utiles.getParam( this.params, 'sourceCssJSONobj' ) );
      this.setDivId( this.getId() + this.constDivId );
      this.setDivIdBg( this.getId() + this.constDivIdBg );
      this.setIdPrefix( this.getDivId()+'_' );
      return true;
    };

    this.createHTML = function(){

      /* konfiguracja obsługi klasy */    
      var params = {
  
      /* identyfikator obiektu klasy 
         /wymagany,unikatowy/ */
        'id':                   this.getId(),                                         
  
      /* identyfikator rodzica głownego kontenera 
         /zaawansowane, wymagane/ */
        'divParentId':          this.getDivParentId(),          
  
      /* obiekt JSON z danymi 
         /nie wymagane, o ile przekaże się obiekt JSON w sourceJSONdivId */
        'sourceJSONobj':        this.getSourceJSONobj(),             
  
      /* obiekt JSON ze struktura HTML - specjalne czesci, np tabela ze zmienna iloscia kolumn i wierszy
         /nie wymagane/ */
        'sourceJSONobjSpecial': this.getSourceJSONobjSpecial(),             
                                           
      /* obiekt JSON ze stylami 
         /nie wymagane/ */
        'sourceCssJSONobj':     this.getSourceCssJSONobj()             
      
      };

      this.struct = new InSSstructHMTL( params );
      return true;
    };
    
    /* PAGES*/
    
    this.initPager = function(){
      pagerClassParams['divParentId'] = this.getIdPrefix+'pager';
      return InSSpager( pagerClassParams );
    };
    
    this.init( p_params );  
  };
