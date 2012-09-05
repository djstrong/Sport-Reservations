  /*********************/                                                                
  /* InSSinit.class.js */                   
  /*********************/
  /* klasa inicjacyjna
   */

  utiles.addJSsource( 'js/InSSinit.user.cfg.js' ); 




  function InSSinit( p_params ){

    //parametry
    this.params = new Object();
    this.id = 'tempId';                 /* id */
    this.divParentId = '';
    this.modules = new Object();
    this.langs = new Object();                                  
    this.serviceMode = false;                                  
    
    //zmienne systemowe
    this.errFun = '';                   /* sluzy do lokalizacji bledu */
    
    //stale
    this.constEnable                = 'enable';       //czy dostepny: true/false
    this.constSingleton             = 'singleton';    //czy singleton: true/false
    this.constObj                   = 'obj';          //obiekt singletonu/obiekt weryfikujacy poprawnosc i istnienie danej klasy
    this.constId                    = 'id';           //identyfikator obiektu przepisywany z klasy glownej InSSinit
    this.constCheckObjectTypeOf     = 'o_typeof';     //weryfikacja - czy zmienna jest obiektem
    this.constCheckObjectInstanceOf = 'o_instanceof'; //weryfikacja - czy obiekt jes instancja danej klasy
    this.constCheckClassDisabled    = 'c_disabled';   //weryfikacja - czy obiekt nie jest zablokowana
    this.constCheckObjectExists     = 'o_exists';     //weryfikacja - czy obiekt wogole istnieje
    this.constCheckClassExists      = 'c_exists';     //weryfikacja - czy klasa wogole istnieje
    this.constInitExceptInfo        = 'System initiate error!\nPlease contact with administrator.';
    this.constInitExceptNo01const   = '01'; //inicjalizacja klasy stalych
    this.constInitExceptNo02except  = '02'; //inicjalizacja klasy wyjatkow bledow
    this.constInitExceptNo03params  = '03'; //zaczytywanie parametrow
    
                       
    this.setId = function( p_value ){
      this.id = p_value;
    };
    this.getId = function(){
      return this.id;
    };
    this.setDivParentId = function( p_value ){
      this.divParentId = p_value;
    };                                                                                      
    this.getDivParentId = function(){
      return this.divParentId;
    };
    this.setModules = function( p_value ){
      this.modules = p_value;
    };
    this.getModules = function(){
      return this.modules;
    };
    this.setLangs = function( p_value ){
      this.langs = p_value;
    };
    this.getLangs = function(){
      return this.langs;
    };
    this.setServiceMode = function( p_value ){
      this.serviceMode = p_value;
    };
    this.getServiceMode = function(){
      return this.serviceMode;
    };

    this.init = function( p_params ){
      //this.errFun = c.constErrLocNoInSSinitInit;
      
      //pierwsza bardzo wazna klasa - ze stalymi
      /*#150101#*/
      try{
        c = new InSSconst();
      }
      catch(e){
        return this.initExceptCreate( this.constInitExceptNo01const, e, c.constErrLocNoInSSinitInitInSSconst );
      }
      
      //druga bardzo wazna klasa - wyjatkow bledow
      /*#150102#*/
      try{
        except = new InSSexcept();
      }
      catch(e){
        return this.initExceptCreate( this.constInitExceptNo02except, e, c.constErrLocNoInSSinitInitInSSexcept );
      }
      /*#150103#*/
      try{
        if( !this.setParams( p_params ) )
          return false;
      }
      catch(e){
        return this.initExceptCreate( this.constInitExceptNo03init, e, c.constErrLocNoInSSinitInitParams );
      }
      
      this.initModules();
    };
    this.setParams = function( p_params ){                        
      if( p_params == undefined )
        return false;
      if( p_params.length = 0 )
        return false;
      this.params = p_params;
      if( utiles.getParam( this.params, 'id' ) != '' )
        this.setId( utiles.getParam( this.params, 'id' ) );
      if( utiles.getParam( this.params, 'divParentId' ) != '' )
        this.setDivParentId( utiles.getParam( this.params, 'divParentId' ) );
      if( utiles.getParam( this.params, 'modules' ) != '' )
        this.setModules( utiles.getParam( this.params, 'modules' ) );
      if( utiles.getParam( this.params, 'langs' ) != '' )
        this.setLangs( utiles.getParam( this.params, 'langs' ) );
      if( utiles.getParam( this.params, 'serviceMode' ) != '' )
        this.setServiceMode( utiles.getParam( this.params, 'serviceMode' ) );
      return true;
    };

    this.initModules = function(){
      this.errFun = c.constErrLocNoInSSinitInitModules;

      for( var _class in this.modules ){
        
        //uwspolnienie id wszystkich klas (jezeli puste)
        if( utiles.exists( utiles.params[ _class ] ) &&
            utiles.exists( utiles.params[ _class ][ this.constId ] ) &&
            ( utiles.getValue( utiles.params[ _class ][ this.constId ], '' ) == '' ) )
          utiles.params[ _class ][ this.constId ] = this.getId();
      
        //jezeli klasa nie istnieje, nie istnieje globalny obiekt albo klasa jest zablokowana -> pomijamy tworzenie jej obiektu
        if( !this.checkObject( _class, [ this.constCheckClassDisabled, this.constCheckClassExists, this.constCheckObjectExists ], true ) )
          continue;
        
        /*#150301#*/
        var obj = this.modules[ _class ][ this.constObj ];
        var params = utiles.params[ _class ];
        if( this.getServiceMode() ){
          eval( obj +' = new '+ _class +'( params );' );
        }
        else{
          try{
            eval( obj +' = new '+ _class +'( params );' );
          }
          catch(e){
            return this.catchCreate(  c.constErrObjectInitCreate, 
                                      e, 
                                      c.constErrLocNoInSSinitInitModulesCreateObject, 
                                      [ this.modules[ _class ][ this.constObj ], _class ] );
          }
        }
      }
      
      return true;
    };
    
    
    this.checkObject = function( p_class, p_verifications, p_silent ){
      this.errFun = c.constErrLocNoInSSinitCheckObject;

      if( !utiles.exists( p_silent ) )
        p_silent = false;
      
      if( !utiles.exists( p_verifications ) ||
          !utiles.isArray( p_verifications ) ||
          ( p_verifications.length == 0 ) )
        p_verifications = [ 
          this.constCheckClassExists,
          this.constCheckObjectExists,
          this.constCheckClassDisabled,
          this.constCheckObjectTypeOf,
          this.constCheckObjectInstanceOf
        ];

      for( var i=0; i<p_verifications.length; i++ )
        switch( p_verifications[i] ){

          /*#150201#*/
          case this.constCheckClassExists:
            params = utiles.params[ p_class ];
            if( this.getServiceMode() ){
              eval('test = new '+p_class+'( params )' );
            }
            else{
              try{
                eval('test = new '+p_class+'( params )' );
              }
              catch(e){
                return this.catchCreate(  c.constErrClassNoExists, 
                                          e, 
                                          c.constErrLocNoInSSinitCheckObjectCexists, 
                                          [ p_class ],
                                          p_silent );
              }
            }
            break;

          /*#150202#*/
          case this.constCheckObjectExists:
            if( this.getServiceMode() ){
              if( !utiles.exists( eval( this.modules[ p_class ][ this.constObj ] ) ) )
                return false;
            }
            else{
              try{
                if( !utiles.exists( eval( this.modules[ p_class ][ this.constObj ] ) ) )
                  throw false;
              }
              catch(e){
                return this.catchCreate(  c.constErrObjectNoExists, 
                                          e, 
                                          c.constErrLocNoInSSinitCheckObjectOexists, 
                                          [ this.modules[ p_class ][ this.constObj ] ],
                                          p_silent );
              }
            }
            break;

          /*#150203#*/
          case this.constCheckClassDisabled:
            if( this.getServiceMode() ){
              if( !this.modules[p_class][this.constEnable] )
                return false;
            }
            else{
              try{
                if( !this.modules[p_class][this.constEnable] )
                  throw false;
              }
              catch(e){
                return this.catchCreate(  c.constErrClassDisabled, 
                                          e, 
                                          c.constErrLocNoInSSinitCheckObjectOdisabled, 
                                          [ p_class ],
                                          p_silent );
              }
            }
            break;

          /*#150204#*/
          case this.constCheckObjectTypeOf:
            if( this.getServiceMode() ){
              if( !eval( '( typeof( '+ this.modules[ p_class ][ this.constObj ] +' ) == \'object\' )' ) )
                return false;
            }
            else{
              try{
                if( !eval( '( typeof( '+ this.modules[ p_class ][ this.constObj ] +' ) == \'object\' )' ) )
                  throw false;
              }
              catch(e){
                return this.catchCreate(  c.constErrObjectTypeOf, 
                                          e, 
                                          c.constErrLocNoInSSinitCheckObjectOtypeof, 
                                          [ this.modules[ p_class ][ this.constObj ] ],
                                          p_silent );
              }
            }
            break;

          /*#150205#*/
          case this.constCheckObjectInstanceOf:
            if( this.getServiceMode() ){
              if( !eval( '( '+ this.modules[p_class][this.constObj] +' instanceof '+ p_class + ' )' ) )
                return false;
            }
            else{
              try{
                if( !eval( '( '+ this.modules[p_class][this.constObj] +' instanceof '+ p_class + ' )' ) )
                  throw false;
              }
              catch(e){
                return this.catchCreate(  c.constErrObjectInstanceOf, 
                                          e, 
                                          c.constErrLocNoInSSinitCheckObjectOinstanceof, 
                                          [ this.modules[ p_class ][ this.constObj ], p_class ],
                                          p_silent );
              }
            }
            break;
        };
      
      return true;
    };
    
    this.getObject = function( p_class, p_params ){
      this.errFun = c.constErrLocNoInSSinitGetObject;

      //najpierw sprawdzamy:
      //- czy podana klasa wogole istnieje
      //- czy obiekt tej klasy istnieje (podczas inicjacji wszystkie sa tworzone, nawet nie singletony)
      //- czy klasa nie jest zablokowana
      if( !this.checkObject( p_class, [ this.constCheckClassExists, this.constCheckObjectExists, this.constCheckClassDisabled ] ) ) 
        return false;
      
      //nastepnie sprawdzamy czy klasa jest singletonem
      if( this.modules[ p_class ][ this.constSingleton ] ){
        
        //sprawdzamy czy poprawny obiekt jest instancji zadanej klasy
        if( !this.checkObject( p_class, [ this.constCheckObjectTypeOf, this.constCheckObjectInstanceOf ] ) ) 
          return false;
        
        //proba zwrocenia wskaznika do tego obiektu
        try{
          return eval( this.modules[ p_class ][ this.constObj ] );
        }
        catch(e){
          return this.catchCreate(  c.constErrObjectGetExists, 
                                    e, 
                                    c.constErrLocNoInSSinitGetObjectGetExists, 
                                    [ this.modules[ p_class ][ this.constObj ], p_class ] );
        }
      }
      else{
        
        //jezeli nie singleton proba utworzenia nowje instancji zadanej klasy
        try{
          return eval( 'new '+ p_class +'('+ utiles.params[ _class ] +')' );
        }
        catch(e){
          return this.catchCreate(  c.constErrObjectCreateNew, 
                                    e, 
                                    c.constErrLocNoInSSinitGetObjectCreateNew, 
                                    [ p_class ] );
        }
      }
    };

    //funkcja bledow podczas inicjalziacji systemu, gdy jeszcze nie ma zainicjowanej klasy obslugi wyjatkow bledow
    this.initExceptCreate = function( p_no, p_err, p_block_no ){
      alert( 'Error #'+p_no+': ' + this.constInitExceptInfo );
      return false;
    }
    
    //funkcje standardowe klasy
    this.exceptCreate = function( p_err_code, p_block_no, p_params, p_silent ){
      return except.create( p_err_code, 
                            c.constErrLocNoInSSinit, 
                            except.getLocError( c.constErrLocNoInSSinit, this.errFun, p_block_no ), 
                            p_params,
                            p_silent );
    };
    
    //funkcje standardowe klasy - wyjatek
    this.catchCreate = function( p_err_code, e, p_block_no, p_params, p_silent ){
      return except.createCatch(  p_err_code, 
                                  c.constErrLocNoInSSinit, 
                                  e, 
                                  except.getLocError( c.constErrLocNoInSSinit, this.errFun, p_block_no ), 
                                  p_params,
                                  p_silent );
    };

    this.init( p_params );  
  };
