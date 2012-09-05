  /*********************/
  /* InSSlang.class.js */                   
  /*********************/
  /* - klasa obslugi wielu jezykow na stronie 
   * - z wazniejszych funkcji publicznych:
   *      < this.getTrans = function( p_code, p_lang ) >
   *      - sluzy do pobierania konkretnego tlumaczenia
   *      - parametry: p_code - kod tlumaczenia (wymagany)
   *                   p_lang - kod jezyka tlumaczenia (jezeli nie podany -> domyslny jezyk)
   *      
   *      < this.changeLang = function( p_lang ) >
   *      - sluzy do ustawiania podanego jezyka na stronie
   *      - parametry: p_lang - kod jezyka ltumaczenia (wymagany)
   */   
  
  utiles.addJSsource( 'js/InSSlang.dev.destiny.js' ); 
  utiles.addJSsource( 'js/InSSlang.user.trans-de.js' ); 
  utiles.addJSsource( 'js/InSSlang.user.trans-eng.js' ); 
  utiles.addJSsource( 'js/InSSlang.user.trans-es.js' ); 
  utiles.addJSsource( 'js/InSSlang.user.trans-pl.js' ); 
  utiles.addJSsource( 'js/InSSlang.user.trans-ru.js' ); 
  utiles.addJSsource( 'js/InSSlang.user.cfg.js' ); 

  function InSSlang( p_params ){

    //parametry
    this.params = new Array();
    this.id = '';                       /* id */
    this.lang = 'eng';
    this.langsList = 'eng';
    this.divId = '';
    this.divParentId = '';
    this.divListId = '';
    this.srcJSONdivId = '';             /* identyfikator obiektu DIV z danymi JSON */
    this.useDefaultLang = false;        /* w przypadku nie znalezienia tlumaczenia w wybranym jezyku, uzyj tlumaczenia w domyslnym jezyku */

    //zmienne systemowe
    this.langsListArray = new Array();  /* lista dostepnych wersji jezykowych */
    this.srcJSON = new Array();         /* obiekt JSON z danymi */

    //stale
    this.constLangIMGsrc = 'buttons/flags/';
    this.constLangIMGstd = new Array();
    this.constLangIMGdim = new Array();
    this.constLangIMGstdSufix = '.gif';
    this.constLangIMGdimSufix = '-dim.gif';
    
    this.constDefaultLang = 'eng';      /* domyslny jezyk */
    this.constDestiny = 'destiny';      /* przeznaczenie tlumaczen */
    this.constTranslations = 'translations';    /* tlumaczenia */
    this.constImgIdIn = '_lang_';       /* czesc wspolna identyfikatora zdjecia flagi */
    this.constLangPrefix = 'lc';        /* prefix identyfikatora tlumaczenia */
                   
    this.constFormatPrefix     = '^';   /* prefix formatu w kodzie tlumaczenia */
    this.constFormatUpperCasse = 'A';   /* duze litery */
    this.constFormatLowerCasse = 'a';   /* male litery */
    this.constFormatFirstUpper = 'Aa';  /* pierwsza duza litera w tlumaczeniu */
    this.constFormatWordFirstUpper = 'AA';/* pierwsza duza litera kazdego wyrazu w tlumaczeniu */

    this.setLang = function( p_lang ){
      this.lang = p_lang;
    };
    this.getLang = function(){
      return this.lang;
    };
    this.setId = function( p_id ){
      this.id = p_id;
    };
    this.getId = function(){
      return this.id;
    };
    this.setLangsList = function( p_value ){
      this.langsList = p_value;
    };
    this.getLangsList = function(){
      return this.langsList;
    };
    this.setDivId = function( p_value ){
      this.divId = p_value;
    };
    this.getDivId = function(){
      return this.divId;
    };
    this.setDivParentId = function( p_value ){
      this.divParentId = p_value;
    };
    this.getDivParentId = function(){
      return this.divParentId;
    };
    this.setDivListId = function( p_value ){
      this.divListId = p_value;
    };
    this.getDivListId = function(){
      return this.divListId;
    };
    this.setUseDefaultLang = function( p_bool ){
      this.useDefaultLang = p_bool;
    };
    this.getUseDefaultLang = function(){
      return this.useDefaultLang;
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
        this.setId( utiles.getParam( this.params, 'id' ) );
      if( utiles.getParam( this.params, 'lang' ) != '' )
        this.setLang( utiles.getParam( this.params, 'lang' ) );
      if( utiles.getParam( this.params, 'langsList' ) != '' )
        this.setLangsList( utiles.getParam( this.params, 'langsList' ) );
      if( utiles.getParam( this.getId() + this.params, 'divId' ) != '' )
        this.setDivId( utiles.getParam( this.params, 'divId' ) );
      if( utiles.getParam( this.getId() + this.params, 'divParentId' ) != '' )
        this.setDivParentId( utiles.getParam( this.params, 'divParentId' ) );
      if( utiles.getParam( this.getId() + this.params, 'divListId' ) != '' )
        this.setDivListId( utiles.getParam( this.params, 'divListId' ) );
      if( (utiles.getParam( this.params, 'srcJSON' ) != '') )
        this.srcJSON = utiles.getParam( this.params, 'srcJSON' );
      if( (this.getParam( this.params, 'srcJSONdivId' ) != '') ){
        this.srcJSONdivId = utiles.getParam( this.params, 'srcJSONdivId' );
        this.loadSrc();
      }
      if( utiles.getParam( this.params, 'useDefaultLang' ) != '' )
        this.setUseDefaultLang( utiles.getParam( this.params, 'useDefaultLang' ) );

      return true;
    };
    this.getParam = function( p_id ){
      if( (this.params[p_id] != undefined) && (this.params[p_id] != '') )
        return this.params[p_id];
      else
        return ''; 
    };
    //funkcja przepisujaca tlumaczenia na sobie zrozumialy format
    this.createLangJSONobj = function( p_trans ){
      return p_trans;
    };
    this.createHTML = function(){
      var e = document.createElement('div');
      e.id = this.divId;
      e.style.width = '30px';
      e.style.height = '20px';
    	e.style.background = "url('"+this.constLangIMGsrc+lang+this.constLangIMGdimSufix+"') no-repeat center";
    	e.style.cursor = 'pointer';
      e.style.filter = 'alpha(opacity=40)';                                 
      e.style.opacity = '0.4';
      e.style.zIndex = '2';
      e.style.right = '140';            
      e.style.top = '13';
      e.style.position = 'absolute';
      e.title = 'change language';
      e.alt = 'change language';
      e.onmouseover = function(){ InSSgalleryPhotoLangOnMouseOver( document.getElementById( e.id ) ); };
      e.onmouseout = function(){ InSSgalleryPhotoLangOnMouseOut( document.getElementById( e.id ) ); };
      if( document.getElementById( this.divParentId ) )
        document.getElementById( this.divParentId ).appendChild( e );

      var e = document.createElement('div');
      e.id = this.divListId;
    	e.style.cursor = 'pointer';
      e.style.left = '0';            
      e.style.top = '0';
      e.style.zIndex = '1';
      e.style.position = 'relative';
      e.onmouseout = function(){ lang.listOnMouseOut; };
      if( document.getElementById( this.divId ) )
        document.getElementById( this.divId ).appendChild( e );

      this.langsListArray = this.langsList.split( c.constSplitSeparator );
      for( var i=0; i<this.langsListArray.length; i++ ){
        var lang = this.langsListArray[i];
        var e = document.createElement('img');
        e.id = this.getId() + this.constImgIdIn + lang;
        e.src = this.constLangIMGsrc + lang + this.constLangIMGdimSufix;
        e.style.cursor = 'pointer';
        e.style.margin = '1px';
        e.style.border = '1px solid white';
        e.style.filter = 'alpha(opacity=40)';
        e.style.opacity = '0.4';
        e.style.zIndex = '1000';
        e.onclick = function(){ InSSgalleryPhotoLangOnClick( lang ); };
        e.onmouseover = function(){ InSSgalleryPhotoLangOnMouseOver( document.getElementById( e.id ) ); };
        e.onmouseout = function(){ InSSgalleryPhotoLangOnMouseOut( document.getElementById( e.id ) ); };
        if( document.getElementById( this.divListId ) )
          document.getElementById( this.divListId ).appendChild( e );
      }
      return true;
    };
    
    this.loadSrc = function(){
      if( ( this.srcJSON == '' ) && ( this.srcJSONdivId != '' ) && document.getElementById( this.srcJSONdivId ) ){
        eval( 'this.srcJSON = {' + document.getElementById( this.srcJSONdivId ).innerHTML + '}' );
        this.srcJSONdivId = '';
      }
    };
    this.checkLangCode = function( p_value ){
      return ( p_value.indexOf( '{' ) == 0 ) &&
             ( p_value.lastIndexOf( '}' ) == ( p_value.length - 1 ) ) &&
             ( p_value.substr( 1, 2 ) == this.constLangPrefix ) &&
             ( p_value.substr( 1, p_value.length - 2 ).indexOf( '{' ) == -1 ) &&
             ( p_value.substr( 1, p_value.length - 2 ).indexOf( '}' ) == -1 );
    };

                  
    this.getTrans = function( p_code, p_lang ){

      //jezeli nie poprawny format kodu, traktuj jako zwykly tekst
      //dla systemow, ktore nie uzywaja wersji jezykowych
      if( !this.checkLangCode( p_code ) )
        return p_code;
      
      var t_array = p_code.split( this.constFormatPrefix ); /* ^ */
      p_code = t_array[0];
      
      var _format_type = ''; 
      if( t_array.length == 2 )
        switch( t_array[1] ){
          case this.constFormatUpperCasse:
            _format_type = this.constFormatUpperCasse;
            break;
          case this.constFormatLowerCasse:
            _format_type = this.constFormatLowerCasse;
            break;
          case this.constFormatFirstUpper:
            _format_type = this.constFormatFirstUpper;
            break;
          case this.constFormatWordFirstUpper:
            _format_type = this.constFormatWordFirstUpper;
            break;
        };
      
      var bUseDefaultLang = false;
      
      //weryfikacja parametrow
      if( p_lang == undefined )
        p_lang = this.getLang();

      if( !utiles.exists( this.srcJSON[this.constTranslations][p_lang] ) )
        return p_code;
      
      if( !utiles.exists( this.srcJSON[this.constTranslations][p_lang][p_code] ) )
        return p_code;

      //sprawdzenie czy kod tlumaczenia istnieje
      if( this.srcJSON[this.constTranslations][p_lang][p_code] == undefined ){
        if( this.getUseDefaultLang() ){
          p_lang = this.constDefaultLang;
          bUseDefaultLang = true;
        }
        else
          return p_code;
      }

      //sprawdzenie czy tlumaczenie z wybranego jezyka (z parametru lub domyslnego) istnieje dla wybranego kodu tlumaczenia
      if( this.srcJSON[this.constTranslations][p_lang][p_code] == '' ){
        if( !bUseDefaultLang ){
          p_lang = this.constDefaultLang;
          bUseDefaultLang = true;
        }
        else
          return p_code;
      }

      //juz nie ma innych opcji - woz albo przewoz
      return this.setFormat( this.srcJSON[this.constTranslations][p_lang][p_code], _format_type );
    };
    this.setFormat = function( p_txt, p_format ){
      if( p_format == '' )
        return p_txt;
      switch( p_format ){
        case this.constFormatUpperCasse:
          return p_txt.toUpperCase();
        case this.constFormatLowerCasse:
          return p_txt.toLowerCase();
        case this.constFormatFirstUpper:
          return p_txt.substr( 0, 1 ).toUpperCase() + p_txt.substr( 1 ).toLowerCase(); 
        case this.constFormatWordFirstUpper:
          var _temp_a = p_txt.split( ' ' );
          var _new_txt = '';
          for( var i=0; i<_temp_a.length; i++ ) 
            _new_txt += _temp_a[ i ].substr( 0, 1 ).toUpperCase() + _temp_a[ i ].substr( 1 ).toLowerCase() + ' ';
          return _new_txt.substr( 0, _new_txt.length-1 ); 
        default:
          return p_txt;
      }
    };
    this.changeLang = function( p_lang ){
      if( (p_lang == undefined) && this.getUseDefaultLang() )
        p_lang = this.constDefaultLang;
      
      var data = this.srcJSON;
      for( var code in data ){
        for( var i=0; i<data[this.constDestiny][code].length; i++ ){
          if( document.getElementById( data[this.constDestiny][code][i]['id'] ) ){
            var obj = document.getElementById( data[this.constDestiny][code][i]['id'] );
            var property_list = data[this.constDestiny][code][i]['property'].split( c.constSplitSeparator );
            for( var j=0; j<property_list.length; j++ ){
              var property = property_list[j];
              obj[property] = data[this.constTranslations][p_lang][code]; 
            }
          }
        }                                     
      }
      
      this.setLang( p_lang );
      return true;
    };
    this.imgOnMouseOver = function( e ){
      e.style.filter = 'alpha(opacity=100)';
      e.style.opacity = '1';
    };
    this.chooseOnMouseOver = function( e ){
      if( document.getElementById( e.id+'_list' ) )
        document.getElementById( e.id+'_list' ).style.display = '';
    };
    this.listOnMouseOut = function( e ){
      e.style.display = 'none';
    };

    this.init( p_params );
  };

