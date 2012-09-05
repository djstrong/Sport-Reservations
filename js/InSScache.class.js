  /**********************/
  /* InSScache.class.js */                   
  /**********************/
  /* - klasa sluzaca do przyspieszania pracy serwisu
   * - poprzez zapisywanie czesto pobieranych danych 
   *   i odtwarzanie ich z obiektu cachowania
   * - z wazniejszych funkcji publicznych:
   *      < this.add = function( p_id, p_string ) >
   *      - sluzy do dodawania danych do obiektu cachowania
   *      - parametry: p_id - identyfikator cachowanych danych (wymagany)
   *                   p_string - dane do zcachowania (wymagany)
   *      
   *      < this.get = function( p_id ) >
   *      - sluzy do pobierania danych z cache`a
   *      - parametry: p_id - identyfikator cachowanych danych (wymagany)
   *      
   *      < this.drop = function( p_id ) >
   *      - sluzy do usuwania danych z cache`a
   *      - parametry: p_id - identyfikator cachowanych danych (wymagany)
   *      
   *      < this.clear = function() >
   *      - sluzy do czyszczenia cache`a
   *
   * - UWAGA: wymaga biblioteki InSSutiles.class.js 
   */   
  
  utiles.addJSsource( 'js/InSScache.user.cfg.js' ); 

  function InSScache( p_params ){

    //parametry
    this.params = new Array();
    this.id = 'tempId';                 /* id */
    this.divParentId = '';

    //stale
    this.constSufix = '_cache';              
    this.lzwCode = 256;
                       
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
    this.createId = function( p_id ){
      return this.getId()+'_'+p_id;
    };

    this.init = function( p_params ){

      if( !this.setParams( p_params ) ){
        if( c.constAlertInitError != '' )
          alert( c.constAlertInitError );
        return false;
      }
      
      this.createHTML();
    }
    this.setParams = function( p_params ){
      if( p_params == undefined )
        return false;
      if( p_params.length = 0 )
        return false;
      this.params = p_params;
      if( utils.getParam( this.params, 'id' ) != '' )
        this.setId( utils.getParam( this.params, 'id' )+this.constSufix );
      if( utils.getParam( this.params, 'divParentId' ) != '' )
        this.setDivParentId( utils.getParam( this.params, 'divParentId' ) );
      return true;
    };

    this.createHTML = function(){
      var e = document.createElement('div');
      e.id = this.getId();
      e.style.display = 'none';
      $( this.getDivParentId() ).appendChild( e );
      return true;
    };
    this.encode = function( p_string ){
      var dict = {};
      var data = (s + "").split("");
      var out = [];
      var currChar;
      var phrase = data[0];
      var code = this.lzwCode;
      for ( var i=1; i<data.length; i++ ){
        currChar=data[i];
        if( dict[phrase + currChar] != null ){
          phrase += currChar;
        }
        else{
          out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
          dict[phrase + currChar] = code;
          code++;
          phrase=currChar;
          }
      }
      out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
      for( var i=0; i<out.length; i++ )
        out[i] = String.fromCharCode(out[i]);
      return out.join("");
    };
    this.decode = function( p_string ){
      var dict = {};
      var data = (s + "").split("");
      var currChar = data[0];
      var oldPhrase = currChar;
      var out = [currChar];
      var code = this.lzwCode;
      var phrase;
      for( var i=1; i<data.length; i++ ){
        var currCode = data[i].charCodeAt(0);
        if( currCode < this.lzwCode )
          phrase = data[i];
        else
          phrase = dict[currCode] ? dict[currCode] : (oldPhrase + currChar);
        out.push(phrase);
        currChar = phrase.charAt(0);
        dict[code] = oldPhrase + currChar;
        code++;
        oldPhrase = phrase;
      }
      return out.join("");
    };
    this.exists = function( p_id ){
      return ( $( this.createId( p_id ) ) ) ? true : false;
    };

    //publiczne
    this.add = function( p_id, p_string ){
      if( !this.exists( p_id ) )
        return false;
      var e = document.createElement('div');
      e.id = this.createId( p_id );
      e.style.display = 'none';
      e.innerHTML = this.encode( p_string );
      $( this.getDivParentId() ).appendChild( e );
      return true;
    };
    this.get = function( p_id ){
      if( !this.exists( p_id ) )
        return '';
      return this.decode( $( this.createId( p_id ) ).innerHTML );
    };
    this.drop = function( p_id ){
      $( this.getDivParentId() ).removeChild( $( this.createId( p_id ) ) );
    };
    this.clear = function(){
      $( this.getDivParentId() ).innerHTML = '';
    };


    this.init( p_params );  
  };