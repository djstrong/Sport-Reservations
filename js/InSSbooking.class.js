  /************************/
  /* InSSbooking.class.js */
  /************************/
  /* - klasa z zestawem funkcji graficznych typu kreator ikon 
   */   

  utiles.addJSsource( 'js/InSSbooking.dev.data.js' ); 
  utiles.addJSsource( 'js/InSSbooking.user.cfg.js' ); 

  function InSSbooking( p_params ){

    //parametry
    this.params = new Array();
    this.defaultPrefixId = 'default';                 
    this.defaultSchema = 'default';                 
    this.defaultParentId = 'body';                 
    this.sourceJSONobj = new Array();

    //zmienne systemowe
    this.iterator = 0;                  /* sluzy do generowania id obiektow */
    this.errFun = '';                   /* sluzy do lokalizacji bledu */
    
    //stale
    this.constJSONstructIcons       = 'icons';
    this.constJSONstructDesign      = 'design';
    this.constJSONstructInfo        = 'info';
    this.constJSONstructSchema      = 'schema';
    this.constJSONstructFile        = 'file';
    this.constJSONstructWidth       = 'width';
    this.constJSONstructHeight      = 'height';
    this.constJSONstructPositions   = 'positions';
    this.constJSONstructPositionsH  = 'H';
    this.constJSONstructPositionsW  = 'W';
    this.constJSONdescriptionSufix  = '_description';

    this.setDefaultPrefixId = function( p_value ){
      this.defaultPrefixId = p_value;
    };
    this.getDefaultPrefixId = function(){
      return this.defaultPrefixId;
    };
    this.setDefaultParentId = function( p_value ){
      this.defaultParentId = p_value;
    };
    this.getDefaultParentId = function(){
      return this.defaultParentId;
    };
    this.setDefaultSchema = function( p_value ){
      this.defaultSchema = p_value;
    };
    this.getDefaultSchema = function(){
      return this.defaultSchema;
    };
    this.incIterator = function(){
      this.iterator = this.getIterator() + 1;
    };
    this.getIterator = function(){
      return this.iterator;
    };
    this.setSourceJSONobj = function( p_value ){
      this.sourceJSONobj = p_value;
    };
    this.getSourceJSONobj = function(){
      return this.sourceJSONobj;
    };
    
    //dodatkowe get,set
    this.getIconsFromSchema = function( p_schema ){
      return this.sourceJSONobj[this.constJSONstructSchema][p_schema][this.constJSONstructIcons]; 
    };
    this.getDesignFromSchema = function( p_schema ){
      return this.sourceJSONobj[this.constJSONstructSchema][p_schema][this.constJSONstructDesign]; 
    };
    this.getDesignJSONfromSchema = function( p_schema ){
      return this.sourceJSONobj[this.constJSONstructDesign][this.getDesignFromSchema( p_schema )]; 
    };
    this.getInfoFromSchema = function( p_schema ){
      return this.sourceJSONobj[this.constJSONstructSchema][p_schema][this.constJSONstructInfo]; 
    };
    this.getInfoJSONfromSchema = function( p_schema ){
      return this.sourceJSONobj[this.constJSONstructInfo][this.getInfoFromSchema( p_schema )]; 
    };
    this.getIconsInfo = function( p_schema, p_param ){
      return this.sourceJSONobj[this.constJSONstructIcons]
                               [this.getIconsFromSchema( p_schema )]
                               [p_param];
    };
    this.getIconsPositionH = function( p_icon, p_schema ){
      return this.getIconsPosition( p_icon, p_schema, this.constJSONstructPositionsH );
    };
    this.getIconsPositionW = function( p_icon, p_schema ){
      return this.getIconsPosition( p_icon, p_schema, this.constJSONstructPositionsW );
    };
    this.getIconsPosition = function( p_icon, p_schema, p_param ){
      return this.sourceJSONobj[this.constJSONstructIcons]
                               [this.getIconsFromSchema( p_schema )]
                               [this.constJSONstructPositions]
                               [p_icon]
                               [p_param];
    };
    this.setCSS = function( p_e, p_schema ){
      return utiles.setCSS( p_e, this.getDesignJSONfromSchema( p_schema ) )
    };
    this.setIcon = function( p_icon, p_schema ){
      return ( ( 1-this.getIconsPositionW( p_icon, p_schema ) ) * this.getIconsInfo( p_schema, this.constJSONstructWidth ) )+'px '+
             ( ( 1-this.getIconsPositionH( p_icon, p_schema ) ) * this.getIconsInfo( p_schema, this.constJSONstructHeight ) )+'px';
    };

    //p_icon, p_id - obowiazkowe parametry, p_parent, p_schema - defaltowe
    this.createIconByIdPrivate = function( p_icon, p_id, p_parent, p_schema ){
      p_parent = utiles.nvl( p_parent, this.getDefaultParentId() ); 
      p_schema = utiles.nvl( p_schema, this.getDefaultSchema() ); 
      
      if( !this.validParent( p_parent ) )
        return false;
      if( !this.validId( p_id ) )
        return false;
      if( !this.validSchema( p_schema ) )
        return false;
      if( !this.validIcon( p_icon, p_schema ) )
        return false;
      var e = document.createElement( 'div' );
      e.id = p_id;
      e = this.setCSS( e, p_schema );
      e.style.backgroundImage = 'url('+this.getIconsInfo( p_schema, this.constJSONstructFile )+')';
      e.style.backgroundPosition = this.setIcon( p_icon, p_schema );
      $( p_parent ).appendChild( e );
      return true;
    };
    //p_parent, p_schema - obowiazkowy parametr, p_description - defaultowy parametr
    this.createIconDescription = function( p_parent, p_schema, p_description ){
      p_schema = utiles.nvl( p_schema, this.getDefaultSchema() ); 
      if( !$( p_parent ) )
        return false;
      p_description = utiles.getValue( p_description, '' );
      if( p_description == '' )
        return true;
      var e = document.createElement( 'div' );
      e.id = p_parent + this.constJSONdescriptionSufix;
      e = utiles.setCSS( e, this.getInfoJSONfromSchema( p_schema ) );
      e.innerHTML = p_description;
      $( p_parent ).appendChild( e );
      return true;
    };
    
    //p_icon, p_id - obowiazkowe parametry, p_parent, p_schema - defaltowe
    this.createIconById = function( p_icon, p_id, p_parent, p_schema, p_description ){
      if( !this.createIconByIdPrivate( p_icon, p_id, p_parent, p_schema ) )
        return false;
      return this.createIconDescription( p_id, p_schema, p_description );
    };
    
    //p_icon - obowiazkowe parametry, p_parent, p_schema - defaltowe
    //funkcja zwraca wygenerowany nr id
    this.createIcon = function( p_icon, p_parent, p_schema ){
      var id = this.generateId();
      p_parent = utiles.getValue( p_parent, this.getDefaultParentId() ); 
      p_schema = utiles.getValue( p_schema, this.getDefaultSchema() ); 
      
      if( this.createIconById( p_icon, id, p_parent, p_schema ) ) 
        return id;
      else
        return '';
    };
    //p_icon, p_id - obowiazkowe parametry; p_schema - defaltowe
    //funkcja zmienia ikone
    this.changeIcon = function( p_icon, p_id, p_schema ){
      p_schema = utiles.getValue( p_schema, this.getDefaultSchema() ); 
      
      if( !this.validId( p_id ) )
        return false;
      if( !this.validSchema( p_schema ) )
        return false;
      if( !this.validIcon( p_icon, p_schema ) )
        return false;

      $( p_id ).style.backgroundImage = 'url('+this.getIconsInfo( p_schema, this.constJSONstructFile )+')';
      $( p_id ).style.backgroundPosition = this.setIcon( p_icon, p_schema );
    
      return true;
    };
    //p_icon, p_id, p_schema - obowiazkowe parametry
    //funkcja zmienia ikone w innym schemacie
    this.changeIconWithSchema = function( p_icon, p_id, p_schema ){
      if( !this.validId( p_id ) )
        return false;
      if( !this.validSchema( p_schema ) )
        return false;
      if( !this.validIcon( p_icon, p_schema ) )
        return false;
    
      $( p_id ) = this.setCSS( $( p_id ), p_schema );
      $( p_id ).style.backgroundImage = 'url('+this.getIconsInfo( p_schema, this.constJSONstructFile )+')';
      $( p_id ).style.backgroundPosition = this.setIcon( p_icon, p_schema );

      return true;
    };
    //funkcja ukrywa ikone
    this.hideIcon = function( p_id ){
      if( !this.validId( p_id ) )
        return false;
      $( p_id ).style.display = 'none';
      return true;
    };
    //funkcja pokazuje ikone
    this.showIcon = function( p_id ){
      if( !this.validId( p_id ) )
        return false;
      $( p_id ).style.display = '';
      return true;
    };
    //zmienia opacity ikony
    this.changeIconOpacity = function( p_id, p_opacity ){
      if( !this.validId( p_id ) )
        return false;
      $( p_id ).style.opacity = p_opacity;
      $( p_id ).style.filter = 'alpha(opacity='+(p_opacity*100)+')';
      return true;
    };
    //funkcja sluzaca do generowania id obiektu
    //zwraca identyfikator kolejnego id
    this.generateId = function(){
      this.incIterator();
      return $( this.getDefaultPrefixId() + this.getIterator() ) ? this.generateId() : this.getDefaultPrefixId() + this.getIterator();  
    };


    //schematy,designy i ikony
    this.addIcons = function( p_name, p_json ){
      if( !this.validName( p_name ) )
        return false;
      if( !this.validJSON( p_json ) )
        return false;
      this.addJSONdata( this.constJSONstructIcons, p_name, p_json );
    };
    this.addDesign = function( p_name, p_json ){
      if( !this.validName( p_name ) )
        return false;
      if( !this.validJSON( p_json ) )
        return false;
      this.addJSONdata( this.constJSONstructDesign, p_name, p_json );
    };
    this.addDesign = function( p_name, p_icons, p_design ){
      if( !this.validName( p_name ) )
        return false;
      if( !this.validIcons( p_icons ) )
        return false;
      if( !this.validDesign( p_design ) )
        return false;
      var p_json = {
        'icons':  p_icons,
        'design': p_design 
      };
      this.addJSONdata( this.constJSONstructSchema, p_name, p_json );
    };
    this.addJSONdata = function( p_type, p_name, p_json ){
      this.sourceJSONobj[p_type][p_name] = p_json; 
    };
    

    //walidacje
    this.validName = function( p_name ){
      /*#030101#*/
      this.errFun = c.constErrLocNoInSSdesignName;

      if( p_name != '' )
        return true;
      else
        return this.exceptCreate( c.constErrNameNo, c.constErrLocNoInSSdesignNameValid );
    };
    this.validIcons = function( p_schema ){
      /*#030201#*/
      this.errFun = c.constErrLocNoInSSdesignIcons;

      if( utiles.exists( this.sourceJSONobj[this.constJSONstructIcons][p_schema] ) )
        return true;
      else
        return this.exceptCreate( c.constErrJSONobjNotExists, c.constErrLocNoInSSdesignIconsValid );
    };
    this.validDesign = function( p_schema ){
      /*#030301#*/
      this.errFun = c.constErrLocNoInSSdesignDesign;

      if( utiles.exists( this.sourceJSONobj[this.constJSONstructDesign][p_schema] ) )
        return true;
      else
        return this.exceptCreate( c.constErrJSONobjNotExists, c.constErrLocNoInSSdesignDesignValid );
    };
    this.validSchema = function( p_schema ){
      /*#030401#*/
      this.errFun = c.constErrLocNoInSSdesignSchema;

      if( utiles.exists( this.sourceJSONobj[this.constJSONstructSchema][p_schema] ) )
        return true;
      else
        return this.exceptCreate( c.constErrJSONobjNotExists, c.constErrLocNoInSSdesignSchemaValid );
    };
    this.validJSON = function( p_json ){
      /*#030501#*/
      this.errFun = c.constErrLocNoInSSdesignJSON;

      if( utiles.isJSON( p_json ) )
        return true;
      else
        return this.exceptCreate( c.constErrJSONinvalidObj, c.constErrLocNoInSSdesignJSONvalid );
    };
    this.validParent = function( p_parent ){
      /*#030601#*/
      this.errFun = c.constErrLocNoInSSdesignParent;

      if( utiles.exists( $( p_parent ) ) )
        return true;
      else
        return this.exceptCreate( c.constErrIdNotExists, c.constErrLocNoInSSdesignParentValid );
    };
    this.validId = function( p_id ){
      /*#030701#*/
      this.errFun = c.constErrLocNoInSSdesignId;

      if( !utiles.exists( $( p_id ) ) )
        return true;
      else
        return this.exceptCreate( c.constErrIdExists, c.constErrLocNoInSSdesignIdValid );
    };
    this.validIcon = function( p_icon, p_schema ){
      /*#030801#*/
      this.errFun = c.constErrLocNoInSSdesignIcon;

      if( utiles.exists( this.sourceJSONobj[this.constJSONstructIcons] 
                                          [this.sourceJSONobj[this.constJSONstructSchema]
                                                             [p_schema]
                                                             [this.constJSONstructIcons]]
                                          [this.constJSONstructPositions]
                                          [p_icon] ) )
        return true;
      else
        return this.exceptCreate( c.constErrJSONobjNotExists, c.constErrLocNoInSSdesignIconValid );
    };
    
    //funkcje standardowe klasy
    this.exceptCreate = function( p_err_code, p_block_no, p_params ){
      return except.createExcept( p_err_code, 
                                  c.constErrLocNoInSSdesign, 
                                  except.getLocError( c.constErrLocNoInSSdesign, this.errFun, p_block_no ), 
                                  p_params );
    };
    
    //inicjalizacja obiektu
    this.init = function( p_params ){

      if( !this.setParams( p_params ) ){
        if( c.constAlertInitError != '' )
          alert( c.constAlertInitError );
        return false;
      }
    };
    this.setParams = function( p_params ){
      //p_params
      if( p_params == undefined )
        return false;
      if( p_params.length = 0 )
        return false;
      this.params = p_params;
      if( utiles.getParam( this.params, 'defaultPrefixId' ) != '' )
        this.setDefaultPrefixId( utiles.getParam( this.params, 'defaultPrefixId' ) );
      if( utiles.getParam( this.params, 'defaultSchema' ) != '' )
        this.setDefaultSchema( utiles.getParam( this.params, 'defaultSchema' ) );
      if( utiles.getParam( this.params, 'defaultParentId' ) != '' )
        this.setDefaultParentId( utiles.getParam( this.params, 'defaultParentId' ) );
      if( utiles.getParam( this.params, 'sourceJSONobj' ) != '' )
        this.setSourceJSONobj( utiles.getParam( this.params, 'sourceJSONobj' ) );
      return true;
    };

    p_params = utiles.getValue( p_params, utiles.params[ 'InSSdesign' ] );
    this.init( p_params );  
  };