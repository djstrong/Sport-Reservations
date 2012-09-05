/*
TODO:
1. obsluga klawiszy skrotow z Ctrl i Alt
2. funkcja zbiorcza dla klawiszy skrotow
3. obsluga klawiszy skrotow - przekazywanie do powyzszej funkcji
4. klasa z menu - minimum narazie - najlepiej tylko w formatce info
5. obsluga formularzy - przechodzenie TAB, wlaczanie/wylaczanie formularza - moze w klasie shortcuts?
6. info o polach formularza
7. jak najszybsze napisanie do konca template'a
8. oprogramowanie wszystkich funkcjonalnosci
9. dokonczenie panelu
10. dokonczenie galerii                                                                    
*/



  /**************************/
  /* InSSshortCuts.class.js */                   
  /**************************/
  /* - klasa sluzaca do tworzenia okna podpowiedzi ze skrotami klawiszowymi
   * - UWAGA: wymaga biblioteki InSSutiles.class.js 
   */   
  
  utiles.addJSsource( 'js/InSSshortCuts.dev.data.js' ); 
  utiles.addJSsource( 'js/InSSshortCuts.dev.struct.js' ); 
  utiles.addJSsource( 'js/InSSshortCuts.user.cfg.js' ); 

  function InSSshortCuts( p_params ){

    //parametry
    this.params = new Object();             /* parametry */
    this.id = '';                           /* id */
    this.sourceJSONobj = new Object();      /* obiekt JSON ze struktura HTML */
    this.sourceCssJSONobj = new Object();   /* obiekt JSON ze stylami CSS */
    this.sourceContextKeys = new Object();  /* obiekt JSON z klawiszami skrotu */
    this.sourceImgJSONobj = new Object();   /* obiekt JSON z obrazkami klawiszy */
    this.imgSize = 60;

    //zmienne systemowe                     
    this.show = false;                      /* klawisz skrotu zarezerwowany do wyswietlania podpowiedzi klawiszy skrotu w danym kontekscie */
    this.showKeyCode = 'S';                 
    this.showKeyAscii = '83,115';
    this.form = false;                      /* klawisz skrotu zarezerwowany do formularzy klawiszy skrotu w danym kontekscie */
    this.formKeyCode = 'F';
    this.formKeyAscii = '70,102';
    this.alt = false;                       /* obsluga skrotow klawiszowych z wcisnietym altem */
    this.altKeyCode = 'Alt';
    this.altKeyAscii = '18';
    this.ctrl = false;                      /* obsluga skrotow klawiszowych z wcisnietym ctrlem */
    this.ctrlKeyCode = 'Ctrl';
    this.ctrlKeyAscii = '17';
    this.specialKeyTime = 500;              /* czas wyczekiwania na klawisz skrotu po nacisnieciu klawisza specjalnego (Alt,Ctrl), w ms */
    this.keyAscii = '';
    this.context = '';
    this.contextImgNo = 1;                  /* identyfikator zaznaczonego zdjecia (domyslnie zawsze pierwszy) */
    this.contextKeysCount = 0;              /* ile klawiszy w kontekscie /raczej nie potrzebne, bo nie ma przechodzenia lewo/prawo / */
    this.contextKeys = new Array();         /* obiekt z klawiszami skrotu biezacego kontekstu - kod ascii -> nr klawisza */
    this.struct = new Object();             /* struktura HTML */
    this.imgCopy = 0;                       /* ile klawiszy skrotu */

    //stale
    this.constSCimgSrc    = 'buttons/keys_png_t/';     /* sciezka do grafik przyciskow */
    this.constSCimgPrefix = 'computer_key_';           /* prefiks nazw grafik */
    this.constSCimgExt    = '.png';                    /* rozszerzenie plikow grafik */
    this.constSCimgIdBody = '_sc_hint_key_';           /* style CSS klawisza nie zaznaczonego */
    this.constSCimgIdBodySelected = '_sc_hint_key_';   /* style CSS klawisza zaznaczonego */
    this.constSCimgTxtIdBody = '_sc_hint_txt'          /* sufix identyfikatora kontenera z opisem klawisza skrotu */
    this.constSCchkIdBody = '_sc_hint_autohiding_chk'  /* sufix identyfikatora opcji `autoukrywanie` */ 
    this.constSCfun   = 'fun';                         /* nr funkcji klawisza skrotu w danym kontekscie */
    this.constSCtxtLc = 'lc';                          /* kod tlumaczenia danego funkcjonalnosci danego klawisza w danym kontekscie */
    this.constSCkc    = 'kc';                          /* kod ascii */
    this.constSCspec  = 'spec';                        /* kod ascii klawisza specjalnego np. Alt, Ctrl */
    this.constSCimgName     = 0;                       /* stale grafik: sufix nazwy pliku */
    this.constSCimgAscii    = 1;                       /* stale grafik: kod ascii */
    this.constSCimgTitleSC  = 2;                       /* stale grafik: klawisz skrotu uzywany jako podpowiedz w title np. [ESC] */
    this.constKeysH = '^EnterPad^Plus^';  /* tylko szerokosc, wysokosc sie dopasuje automatycznie */
    this.constKeysW = '^Pad0Ins^Backspace^CapsLock^Enter^PipeBackslash^Shift^SpaceBar^Windows^'; /* tylko wysokosc, szerokosc sie dopasuje automatycznie */
    this.constDivId = '_sc_hint_info';                 /* glowny kontener chmurki */ 
    this.constDivIdBg = '_sc_hint_bg';                 /* kontener tla chmurki */

    this.setId = function( p_value ){
      this.id = p_value;
    };
    this.getId = function(){
      return this.id;
    };
    this.getAsciiByKeyCode = function( p_kc ){
      if( !utiles.exists( this.sourceImgJSONobj[p_kc] ) )
        return '';
      return this.sourceImgJSONobj[p_kc][this.constSCimgAscii]; 
    };
    this.getImgId = function( p_img_no ){
      return this.getId()+this.constSCimgIdBody+p_img_no;
    };
    this.getImgNo = function( p_img_id ){
      return p_img_id.substr( ( this.getId()+this.constSCimgIdBody ).length );
    };
    this.setContextImgNo = function( p_value ){
      this.contextImgNo = p_value;
    };
    this.setContextImgNo = function( p_value ){
      this.contextImgNo = p_value;
    };
    this.setImgCopy = function( p_value ){
      this.imgCopy = p_value;
    };
    this.getImgCopy = function(){
      return this.imgCopy;
    };
    this.setContext = function( p_value ){
      this.context = p_value;
    };
    this.setContextKeysCount = function( p_value ){
      this.contextKeysCount = p_value;
    };
    this.getContextKeysCount = function(){
      return this.contextKeysCount;
    };
    this.getTxtId = function(){
      return this.getId()+this.constSCimgTxtIdBody;
    };
    this.setSourceJSONobj = function( p_value ){
      this.sourceJSONobj = p_value;
    };
    this.setSourceCssJSONobj = function( p_value ){
      this.sourceCssJSONobj = p_value;
    };
    this.setSourceContextKeys = function( p_value ){
      this.sourceContextKeys = p_value;
    };
    this.setSourceImgJSONobj = function( p_value ){
      this.sourceImgJSONobj = p_value;
    };
    this.setImgSize = function( p_value ){
      this.imgSize = p_value;
    };
    this.getImgSize = function(){
      return this.imgSize;
    };

    this.init = function( p_params ){

      if( !this.checkObjectList( [ c.constErrLocNoInSSutiles, 
                                   c.constErrLocNoInSSstructHTML ], 
                                   c.constErrLocNoInSSshortCuts ) )
        return false;
      
      if( !this.setParams( p_params ) ){
        if( c.constAlertInitError != '' )
          alert( c.constAlertInitError );
        return false;
      }
      
      this.createHTML();
      this.setImgCopy( this.sourceJSONobj[this.constSCimgIdBody][this.struct.constCopy] );
    }
    this.setParams = function( p_params ){
      if( p_params == undefined )
        return false;
      if( p_params.length = 0 )
        return false;
      this.params = p_params;
      if( utiles.getParam( this.params, 'id' ) != '' )
        this.setId( utiles.getParam( this.params, 'id' ) );
      if( utiles.getParam( this.params, 'sourceJSONobj' ) != '' )
        this.setSourceJSONobj( utiles.getParam( this.params, 'sourceJSONobj' ) );
      if( utiles.getParam( this.params, 'sourceCssJSONobj' ) != '' )
        this.setSourceCssJSONobj( utiles.getParam( this.params, 'sourceCssJSONobj' ) );
      if( utiles.getParam( this.params, 'sourceContextKeys' ) != '' )
        this.setSourceContextKeys( utiles.getParam( this.params, 'sourceContextKeys' ) );
      if( utiles.getParam( this.params, 'sourceImgJSONobj' ) != '' )
        this.setSourceImgJSONobj( utiles.getParam( this.params, 'sourceImgJSONobj' ) );
      if( utiles.getParam( this.params, 'imgSize' ) != '' )
        this.setImgSize( utiles.getParam( this.params, 'imgSize' ) );
      return true;
    };

    this.createHTML = function(){

      /* konfiguracja obsługi klasy */    
      var params = {
  
      /* identyfikator obiektu klasy 
         /wymagany,unikatowy/ */
        'id':                 this.getId(),                                         
  
      /* identyfikator rodzica głownego kontenera 
         /zaawansowane, wymagane/ */
        'divParentId':        'body',          
  
      /* obiekt JSON z danymi 
         /nie wymagane, o ile przekaże się obiekt JSON w sourceJSONdivId */
        'sourceJSONobj':      this.getSourceJSONobj(),             
  
      /* obiekt JSON ze stylami skrotow klawiszowych
         /nie wymagane/ */
        'sourceCssJSONobj':   this.getSourceCssJSONobj()             
      
      };

      this.struct = new InSSstructHMTL( params );
      return true;
    };

    //obsluga zdarzen
    this.checkShowKeyCode = function( p_ascii ){
      return ( ',' + this.showKeyAscii + ',' ).indexOf( ',' + p_ascii + ',' ) != -1; 
    };
    this.checkFormKeyCode = function( p_ascii ){
      return ( ',' + this.formKeyAscii + ',' ).indexOf( ',' + p_ascii + ',' ) != -1; 
    };
    this.checkContextKeyCode = function( p_ascii ){
      return exists( this.contextKeys[p_ascii] );
    };
    function altKeyDisable(){
      this.alt = false;
    };
    function ctrlKeyDisable(){
      this.ctrl = false;
    };

  function testAlt(){
    alt_enable = false;
  }
  function testkeydown( e ){
    var kp = getKeyCode( e );
    if( kp == '18' ){
      alt_enable = true;
      setTimeout( 'testAlt()', alt_enable_time );
      return false;
    }
    
    if( alt_enable && ( ( ',' + test_keycode + ',' ).indexOf( ',' + kp + ',' ) != -1 ) ){
      alt_enable = false;
      test( 1 );
    }
  }
  function test( p_ascii ){
    if( $( 'test_keypress' ).style.backgroundColor == 'green' )
      $( 'test_keypress' ).style.backgroundColor = 'red';
    else
      $( 'test_keypress' ).style.backgroundColor = 'green';
  }

    
    this.onKeyDown = function( p_ascii ){
      
      //obsluga wyswietlania chmurki z klawiszami skrotow [S]
      //tylko jezeli wlaczone jest autoukrywanie
      if( this.checkShowKeyCode( p_ascii ) ){
        if( $( this.getId()+this.constSCchkIdBody ).value == 'checked' )
          this.openShortCutsHint();
        return true;
      }
      
      //klawisz wlaczania/wylaczania edycji formularzy [F]
      if( this.checkFormKeyCode( p_ascii ) ){
        if( this.checkContextKeyCode( p_ascii ) ){
          this.keyAscii = p_ascii;
          setTimeout( 'fSCformEnabled('+ p_ascii + ')', this.formPressTime );
        }
        return true;
      }

    };
    this.onKeyPress = function( p_ascii ){
    
      //obsluga wyswietlania chmurki z klawiszami skrotow [S]
      //tylko jezeli wylaczone jest autoukrywanie
      if( this.checkShowKeyCode( p_ascii ) ){
        if( $( this.getId()+this.constSCchkIdBody ).value != 'checked' )
          this.shortCutsHint();
        return true;
      }
      
      
    };
    this.onKeyUp = function( p_ascii ){
      if( this.keyAscii == '' )
        return false;
      this.keyAscii = '';
    
      //obsluga wyswietlania chmurki z klawiszami skrotow [S]
      //tylko jezeli wlaczone jest autoukrywanie
      if( this.checkShowKeyCode( p_ascii ) )
        if( $( this.getId()+this.constSCchkIdBody ).value == 'checked' ){
          this.closeShortCutsHint();
          return true;
        }
      
      return true;
    };

    //obsluga formularzy
    this.formEnabled = function(){
    
    };
    
    //otworz/zamknij chmurke
    this.openShortCutsHint = function(){
      $( this.getId()+this.constDivId ).style.display = ''; 
      $( this.getId()+this.constDivIdBg ).style.display = ''; 
    };
    this.closeShortCutsHint = function(){
      $( this.getId()+this.constDivId ).style.display = 'none'; 
      $( this.getId()+this.constDivIdBg ).style.display = 'none'; 
    };
    this.shortCutsHint = function(){
      if( $( this.getId()+this.constDivId ).style.display == 'none' )
        this.openShortCutsHint();
      else 
        this.closeShortCutsHint();
    };

    //obsluga kontekstow
    this.clearContextKeys = function(){
      for( var i=1; i<=this.getImgCopy; i++ ){
        if( $( this.getImgId( i ) ) ){
          e = $( this.getImgId( i ) );
          e = utiles.setCSS( e, this.sourceCssJSONobj[this.constSCimgIdBody] );
          e.onmouseover = 'this.changeKey( this.id );';
          e.style.display = 'none';
        }
      }
    };
    this.changeContext = function( p_context ){
      if( !exists( this.sourceContextKeys[p_context] ) )
        return false;
      this.setContext( p_context );  
      this.changeContextKeys();
      if( this.getContextKeysCount() > 0 )
        this.changeKey( 0 );
    };
    this.changeContextKeys = function(){
      this.clearContextKeys();
      this.setContextKeysCount( this.sourceContextKeys[this.getContext()].length );
      this.contextKeys = new Object();
      var keyKc   = '';
      var keyAscii= '';
      for( var i=0; i<this.getContextKeysCount(); i++ ){
        keyKc     = this.sourceContextKeys[this.getContext()][i][this.constSCkc];
        keyAscii  = this.getAsciiByKeyCode( keyKc );
        if( keyAscii != '' ){
          if( keyAscii.indexOf( ',' ) == -1 ) 
            this.contextKeys[keyAscii] = i;
          else{
            this.contextKeys[(keyAscii.substr( 0, keyAscii.indexOf(',') ))] = i;
            this.contextKeys[(keyAscii.substr( keyAscii.indexOf(',') + 1 ))] = i;
          }
        }
        this.createKey( i, keyKc )
      }
    };
    this.getKeyTitle = function( p_img_no, p_only_txt ){
      if( p_only_txt == undefined )
        p_only_txt = false;
      var keyLc = this.sourceContextKeys[this.getContext()][p_img_no][this.constSCtxtLc]; //lang code
      var keyKc = this.sourceContextKeys[this.getContext()][p_img_no][this.constSCkc];    //key code
      if( exists( this.sourceContextKeys[this.getContext()][p_img_no][this.constSCspec] ) )
        var keyKcSpec = this.sourceContextKeys[this.getContext()][p_img_no][this.constSCspec]; //special key code
      else
        var keyKcSpec = '';
      var keyTxt = lang.getTrans( keyLc );
      if( !p_only_txt ){
        var keySC = this.sourceImgJSONobj[keyKc][this.constSCimgTitleSC];                 //shortcut code
        if( keyKcSpec != '' )
          var keySCspec = this.sourceImgJSONobj[keyKcSpec][this.constSCimgTitleSC];       //special shortcut code
        else
          var keySCspec = '';
        if( keySC != '' )
          if( keySCspec != '' )
            keyTxt = keyTxt + ' ['+ keySCspec + '+' + keySC +']';
          else
            keyTxt = keyTxt + ' ['+ keySC +']';
      }
      return keyTxt;
    };
    this.createKey = function( p_img_no, p_kc ){
      e = $( this.getImgId( p_img_no ) );
      e.src = this.constSCimgSrc +
              this.constSCimgPrefix +
              this.sourceImgJSONobj[p_kc][this.constSCimgName] +
              this.constSCimgExt;
      e.title = this.getKeyTitle( p_img_no );
      e.alt = e.title;
      e.style.display = '';
    };

    this.changeKey = function( p_id ){
      if( !$( p_id ) )
        return false;
      if( !utiles.exists( this.contextKeysById[this.getImgNo( p_id )] ) )
        return false;
      if( ( this.getContextImgNo() > 0 ) && !$( this.getImgId( this.getContextImgNo() ) ) )
        return false;
      //odznaczenie wczesniej zaznaczonego klawisza (jezeli byl zaznaczony)
      if( this.getContextImgNo() > 0 ){
        e = $( this.getImgId( this.getContextImgNo() ) );
        e = utiles.setCSS( e, this.sourceCssJSONobj[this.constSCimgIdBody] );
      }
      //ustawienie numeru zaznaczonego biezacego klawisza
      this.setContextImgNo( this.getImgNo( p_id ) );
      //zaznaczenie biezacego klawisza i wczytanie opisu
      e = $( this.getImgId( this.getContextImgNo() ) );
      e = utiles.setCSS( e, this.sourceCssJSONobj[this.constSCimgIdBodySelected] );
      e.title = this.getKeyTitle( p_id );
      e.alt = e.title;    
      $( this.getTxtId ).innerHTML = this.getKeyTitle( p_id, true );
    };
    
    //funkcje standardowe klasy
    this.exceptCreate = function( p_err_code, p_params ){
      return except.create( p_err_code, c.constErrLocInSSshortCuts, p_params );
    };
    
    this.init( p_params );  
  };