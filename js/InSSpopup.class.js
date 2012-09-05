
  /**********************/
  /* InSSpopup.class.js */
  /**********************/
  // wymaga klas: InSSutiles, InSSconst, InSSexcept

  utiles.addJSsource( 'js/InSSpopup.user.cfg.js' ); 

  function InSSpopup( p_params ){

    //parametry
    this.params = new Array();
    this.id = 'tempId';                 /* id */
    this.divId = '';
    this.divIdBg = '';
    this.divParentId = '';
    this.sourceJSONobj = new Array();
    this.sourceHtmlJSONobj = new Array();
    this.sourceCssJSONobj = new Array();

    //zmienne systemowe
    this.prefix = '';                   /* prefiks nadawanych wszystkim elementom HTML tworoznym w ramach danej klasy */
                   
    this.setId = function( p_value ){
      this.id = p_value + this.objNo;
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
    this.setSourceCssJSONobj = function( p_value ){
      this.sourceCssJSONobj = p_value;
    };
    this.getSourceCssJSONobj = function(){
      return this.sourceCssJSONobj;
    };
    this.setSourceHtmlJSONobj = function( p_value ){
      this.sourceHtmlJSONobj = p_value;
    };
    this.getSourceHtmlJSONobj = function(){
      return this.sourceHtmlJSONobj;
    };
    
    this.setPrefix = function( p_value ){
      this.prefix = p_value;
    };
    this.getPrefix = function(){
      return this.prefix;
    };

    this.init = function( p_params ){

      if( !this.setParams( p_params ) ){
        if( c.constAlertInitError != '' )
          alert( c.constAlertInitError );
        return false;
      }
      
      this.createHTML();
    };
    this.setParams = function( p_params ){
      if( p_params == undefined )
        return false;
      if( p_params.length = 0 )
        return false;
      this.params = p_params;
      if( utiles.getParam( this.params, 'id' ) != '' )
        this.setId( utils.getParam( this.params, 'id' ) );
      if( utiles.getParam( this.params, 'prefix' ) != '' )
        this.setPrefix( utiles.getParam( this.params, 'prefix' ) );
      else
        this.setPrefix( ( utiles.getParam( this.params, 'id' ) + '_' ) );
      if( utiles.getParam( this.params, 'divParentId' ) != '' )
        this.setDivParentId( utils.getParam( this.params, 'divParentId' ) );
      if( utiles.getParam( this.params, 'sourceJSONdivId' ) != '' )
        if( $( utiles.getParam( this.params, 'sourceJSONdivId' ) ) )
          eval( 'this.sourceJSONobj = {' + $( this.getSourceJSONdivId() ).innerHTML + '}' );
      if( utiles.getParam( this.params, 'sourceJSONobj' ) != '' )
        this.setSourceJSONobj( utiles.getParam( this.params, 'sourceJSONobj' ) );
      if( utiles.getParam( this.params, 'sourceCssJSONobj' ) != '' )
        this.setSourceCssJSONobj( utiles.getParam( this.params, 'sourceCssJSONobj' ) );
      if( utiles.getParam( this.params, 'sourceHtmlJSONobj' ) != '' )
        this.setSourceHtmlJSONobj( utiles.getParam( this.params, 'sourceHtmlJSONobj' ) );
      this.setDivId( this.getId() + this.cosntDivId );
      this.setDivIdBg( this.getId() + this.cosntDivIdBg );
      this.setIdPrefix( this.getDivId()+'_' );
      return true;
    };

    this.createHTML = function(){
      /* ... */
      return true;
    };

    p_params = utils.getValue( p_params, popupParams );
    this.init();  
  };
