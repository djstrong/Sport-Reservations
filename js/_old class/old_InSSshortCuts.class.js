  /**************************/
  /* InSSshortCuts.class.js */                   
  /**************************/
  /* - klasa sluzaca do tworzenia okna podpowiedzi ze skrotami klawiszowymi
   * - UWAGA: wymaga biblioteki InSSutiles.class.js 
   */   

  //var sc = new InSSshortCuts( scParams );
  function InSSshortCuts( p_params ){

    //parametry
    this.params = new Array();
    this.id = '';                       // id 
    this.page = '';                     
    this.divId = '';
    this.divIdBg = '';
    this.divParentId = '';
    this.sourceJSONdivId = '';            // identyfikator obiektu DIV z danymi JSON
    this.sourceJSONobj = new Array();
    this.sourceCssJSONobj = new Array();
    this.imgSize = 64;

    //zmienne systemowe
    this.scGroupsListArray = new Array();  // lista dostepnych grup skrotow

    //stale
    this.constSCimgSrc = 'buttons/keys_png_t/';
    this.constSCimgPrefix = 'computer_key_';
    this.constSCimgExt = '.png';

    this.constSCid = 'id';
    this.constSCtxtLc = 'txt_lc';
    this.constSCkeys = 'keys';
    this.constSCkc = 'kc';

    
    this.constSCimgName   = 0;
    this.constSCimgAscii  = 1;
    this.constSCimg = {
    // numeric 
      'Num0': { 'num_row_0_T', '48' },
      'Num1': { 'num_row_1_T', '49' },
      'Num2': { 'num_row_2_T', '50' },
      'Num3': { 'num_row_3_T', '51' },
      'Num4': { 'num_row_4_T', '52' },
      'Num5': { 'num_row_5_T', '53' },
      'Num6': { 'num_row_6_T', '54' },
      'Num7': { 'num_row_7_T', '55' },      
      'Num8': { 'num_row_8_T', '56' },
      'Num9': { 'num_row_9_T', '57' },
    // letters 
      'A':  { 'A_T', '65,97' },
      'B':  { 'B_T', '66,98' },     
      'C':  { 'C_T', '67,99' },
      'D':  { 'D_T', '68,100' },
      'E':  { 'E_T', '69,101' },
      'F':  { 'F_T', '70,102' },
      'G':  { 'G_T', '71,103' },      
      'H':  { 'H_T', '72,104' },
      'I':  { 'I_T', '73,105' },
      'J':  { 'J_T', '74,106' },
      'K':  { 'K_T', '75,107' },
      'L':  { 'L_T', '76,108' },
      'M':  { 'M_T', '77,109' },
      'N':  { 'N_T', '78,110' },
      'O':  { 'O_T', '79,111' },
      'P':  { 'P_T', '80,112' },      
      'Q':  { 'Q_T', '81,113' },
      'R':  { 'R_T', '82,114' },
      'S':  { 'S_T', '83,115' },
      'T':  { 'T_T', '84,116' },
      'U':  { 'U_T', '85,117' },
      'V':  { 'V_T', '86,118' },
      
      'W':  { 'W_T', '87,119' },
      'X':  { 'X_T', '88,120' },
      'Y':  { 'Y_T', '89,121' },
      'Z':  { 'Z_T', '90,122' },
    // pad         
      'Pad0Ins':    { '0_Ins_T',   '' },
      'Pad1End':    { '1_End_T',   '' },
      'Pad2Down':   { '2_Down_T',  '' },
      'Pad3PgDn':   { '3_PgDn_T',  '' },
      'Pad4Left':   { '4_Left_T',  '' },      
      'Pad5':       { '5_T',       '' },
      'Pad6Right':  { '6_Right_T', '' },
      'Pad7Home':   { '7_Home_T',  '' },
      'Pad8Up':     { '8_Up_T',    '' },
      'Pad9PgUp':   { '9_PgUp_T',  '' },
    // arrow keys 
      'Up':     { 'Arrow_Up_T',    '38' },
      'Right':  { 'Arrow_Right_T', '39' },
      'Down':   { 'Arrow_Down_T',  '40' },
      'Left':   { 'Arrow_Left_T',  '37' },
    // function
      'F1':   { 'F1_T',  '111' },
      'F2':   { 'F2_T',  '112' },
      'F3':   { 'F3_T',  '113' },
      'F4':   { 'F4_T',  '114' },
      'F5':   { 'F5_T',  '115' },
      'F6':   { 'F6_T',  '116' },
      'F7':   { 'F7_T',  '117' },
      'F8':   { 'F8_T',  '118' },
      'F9':   { 'F9_T',  '119' },
      'F10':  { 'F10_T', '120' },
      'F11':  { 'F11_T', '121' },
      'F12':  { 'F12_T', '122' },
    // special 
      'Alt':                  { 'Alt_T',                    ''    },
      'Asterisk':             { 'Asterisk_T',               '42'  },
      'Backspace':            { 'Backspace_T',              '8'   },
      'BracketsLeft':         { 'Brackets_Left_T',          '91'  },
      'BracketsRight':        { 'Brackets_Right_T',         '93'  },
      'CapsLock':             { 'Caps_Lock_T',              ''    },
      'ColonSemicolon':       { 'Colon_Semicolon_T',        '59'  },
      'Comma':                { 'Comma_T',                  '44'  },
      'Ctrl':                 { 'Ctrl_T',                   ''    },
      'Del':                  { 'Del_T',                    ''    },
      'Delete':               { 'Delete_T',                 ''    },
      'Dot':                  { 'Dot_T',                    ''    },      
      'End':                  { 'End_T',                    '35'  },
      'EnterPad':             { 'Enter_Pad_T',              '13'  },
      'Enter':                { 'Enter_T',                  '13'  },
      'Esc':                  { 'Esc_T',                    '27'  },
      'ForwardSlash':         { 'Forward_Slash_T',          '47'  },                                                   
      'Home':                 { 'Home_T',                   '36'  },
      'Insert':               { 'Insert_T',                 '45'  },
      'Menu':                 { 'Menu_T',                   '93'  },
      'Minus':                { 'Minus_T',                  '45'  },
      'NumLock':              { 'Num_Lock_T',               ''    },
      'NumRowEquals':         { 'Num_Row_Equals_T',         '61'  },
      'NumRowMinus':          { 'Num_Row_Minus_T',          '45'  },
      'PageDown':             { 'Page_Down_T',              '34'  },
      'PageUp':               { 'Page_Up_T',                '33'  },
      'PauseBreak':           { 'Pause_Break_T',            '19'  },
      'PipeBackslash':        { 'Pipe_Backslash_T',         '92'  },
      'Plus':                 { 'Plus_T',                   '43'  },
      'PrintScreen':          { 'Print_Screen_T',           ''    },
      'QuestionForwardSlash': { 'Question_Forward_slash_T', '47'  },
      'QuotationMarks':       { 'Quotation_Marks_T',        ''    },
      'ScrollLock':           { 'Scroll_Lock_T',            ''    },
      'Shift':                { 'Shift_T',                  ''    },
      'SpaceBar':             { 'Space_Bar_T',              '32'  },
      'Tab':                  { 'Tab_T',                    '9'   },
      'Tylda':                { 'num_row_00_T',             ''    },
      'Windows':              { 'Windows_T',                ''    }
    };
    
    this.constKeysH = '^EnterPad^Plus^';  // tylko szerokosc, wysokosc sie dopasuje automatycznie
    this.constKeysW = '^Pad0Ins^Backspace^CapsLock^Enter^PipeBackslash^Shift^SpaceBar^Windows^'; // tylko wysokosc, szerokosc sie dopasuje automatycznie
            
    this.constDivId = '_gallery_help';
    this.constDivIdBg = '_gallery_help_bg';  

    this.setId = function( p_value ){
      this.id = p_value;
    };
    this.getId = function(){
      return this.id;
    };
    this.setPage = function( p_value ){
      this.page = p_value;
    };
    this.getPage = function(){
      return this.page;
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
    this.setSourceCssJSONobj = function( p_value ){
      this.sourceCssJSONobj = p_value;
    };
    this.setImgSize = function( p_value ){
      this.imgSize = p_value;
    };
    this.getImgSize = function(){
      return this.imgSize;
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
      if( utiles.getParam( this.params, 'id' ) != '' )
        this.setId( utiles.getParam( this.params, 'id' ) );
      if( utiles.getParam( this.params, 'page' ) != '' )
        this.setPage( utiles.getParam( this.params, 'page' ) );
      if( utiles.getParam( this.params, 'divParentId' ) != '' )
        this.setDivParentId( utiles.getParam( this.params, 'divParentId' ) );
      if( utiles.getParam( this.params, 'sourceJSONdivId' ) != '' )
        if( $( utiles.getParam( this.params, 'sourceJSONdivId' ) ) )
          eval( 'this.sourceJSONobj = {' + $( this.getSourceJSONdivId() ).innerHTML + '}' );
      if( utiles.getParam( this.params, 'sourceJSONobj' ) != '' )
        this.setSourceJSONobj( utiles.getParam( this.params, 'sourceJSONobj' ) );
      if( utiles.getParam( this.params, 'sourceCssJSONobj' ) != '' )
        this.setSourceCssJSONobj( utiles.getParam( this.params, 'sourceCssJSONobj' ) );
      if( utiles.getParam( this.params, 'imgSize' ) != '' )
        this.setImgSize( utiles.getParam( this.params, 'imgSize' ) );
      this.setDivId( this.getId() + this.constDivId );
      this.setDivIdBg( this.getId() + this.constDivIdBg );
      return true;
    };

    this.createHTML = function(){
      this.createHTMLcontent();
      this.createHTMLheaders();
      this.createHTMLbody();
      return true;
    };
    this.createHTMLcontent = function(){
      var e = document.createElement('div');
      e.id = this.getDivIdBg();
      e = utiles.setCSS( e, this.sourceCssJSONobj['contentBG'] );
      $( this.getDivParentId() ).appendChild( e );

      var e = document.createElement('div');
      e.id = this.getDivId();
      e = utiles.setCSS( e, this.sourceCssJSONobj['content'] );
      $( this.getDivParentId() ).appendChild( e );
    };
    this.createHTMLheaders = function(){
      var e = document.createElement('div');
      e.id = this.getId()+'_gallery_help_table';
      e = utiles.setCSS( e, this.sourceCssJSONobj['table'] );
      $( this.getDivId() ).appendChild( e );

      var e = document.createElement('div');
      e.id = this.getId()+'_gallery_help_table_row';
      e = utiles.setCSS( e, this.sourceCssJSONobj['row'] );
      $( this.getId()+'_gallery_help_table' ).appendChild( e );

      var i = 0;
      for( var key in this.srcJSONobj ){
        i++;
        this.scGroupsListArray[this.scGroupsListArray.length] = key;
        
        var e = document.createElement('div');
        e.id = this.srcJSONobj[key][this.constSCid];
        e = utiles.setCSS( e, this.sourceCssJSONobj['cell'] );
        e.innerHTML = this.createHTMLheadersTitle( i, this.sourceJSONobj[key][this.constSCtxtLc] ); 
        if( key == this.getPage() ){
          e.style.borderBottom = '3px solid #175F00';
          e.style.color = '#175F00';
        }
        $( this.getId()+'_gallery_help_table_row' ).appendChild( e );
      }
    };
    this.createHTMLheadersTitle = function( i, p_txt_lc ){
      return  p_title.substr( 0, p_char ) + 
              '<span style="text-decoration:underline">' + 
              p_title.substr( p_char, 1 ) + 
              '</span>' +  
              p_title.substr( p_char + 1 ); 
    }
    
    this.createHTMLbody = function(){
    
      for( var i=0; i<this.scGroupsListArray.length; i++ ){
        var group = this.scGroupsListArray[i];
        
        var e = document.createElement('div');
        e.id = this.getId()+'_'+group+'_help_table_sc';
        e = utiles.setCSS( e, this.sourceCssJSONobj['tableSC'] );
        e.style.display = 'none';
        $( this.getDivId() ).appendChild( e );

        for( var j=0; j<this.srcJSONobj[group][this.constSCkeys].length; j++ ){
          if( j%2==0 ){
            var e = document.createElement('div');
            e.id = this.getId()+'_'+group+'_help_table_row_'+j+'_sc';
            e = utiles.setCSS( e, this.sourceCssJSONobj['rowSC'] );
            $( this.getId()+'_'+group+'_help_table_sc' ).appendChild( e );
          }

          var e = document.createElement('div');
          e.id = this.srcJSONobj[group][this.constSCkeys][j][this.constSCid];
          e = utiles.setCSS( e, this.sourceCssJSONobj['cellSCkey'] );
          $( this.getId()+'_'+group+'_help_table_row_'+(j-(j%2))+'_sc' ).appendChild( e );

          this.createHTMLbodyImg( this.sourceJSONobj[group][this.constSCkeys][j][this.constSCid], 
                                  this.sourceJSONobj[group][this.constSCkeys][j][this.constSCkc] ); 
          
          var e = document.createElement('div');
          e.id = this.srcJSONobj[group][this.constSCkeys][j][this.constSCid]+'_info';
          e = utiles.setCSS( e, this.sourceCssJSONobj['cellSCinfo'] );
          e.innerHTML = this.srcJSONobj[group][this.constSCkeys][j][this.constSCtxtLc]; 
          $( this.getId()+'_'+group+'_help_table_row_'+(j-(j%2))+'_sc' ).appendChild( e );

        }                        
      }    
    };
    this.createHTMLbodyImg = function( p_id, p_code ){
      var e = document.createElement('img');
      e.id = p_id+'_img';
      e.src = this.constSCimgSrc +
              this.constSCimgPrefix +
              this.constSCimg[p_code][this.constSCimgName] +
              this.constSCimgExt;
      if( this.constKeysH.indexOf( '^'+p_code+'^' ) == -1 )
        e.style.height = this.getImgSize()+'px';
      if( this.constKeysW.indexOf( '^'+p_code+'^' ) == -1 )
        e.style.width = this.getImgSize()+'px';
      $( p_id ).appendChild( e );
    }; 

    //funkcje standardowe klasy
    this.exceptCreate = function( p_err_code, p_params ){
      return except.create( p_err_code, c.constErrLocInSSshortCuts, p_params );
    };
    
    this.init( p_params );  
  };
