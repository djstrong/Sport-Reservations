  /***************************/
  /* InSSstructHTML.class.js */                   
  /***************************/
  /* - klasa sluzaca do tworzenia struktury (fragmentu) strony
   * - UWAGA: wymaga biblioteki InSSutiles.class.js 
   */   
  
  utiles.addJSsource( 'js/InSSstructHTML.dev.struct.js' ); 
  utiles.addJSsource( 'js/InSSstructHTML.user.cfg.js' ); 

  function InSSstructHMTL( p_params ){
    
    //parametry
    this.params = new Array();
    this.sourceJSONobj = new Array();
    this.sourceJSONobjSpecial = new Array();
    this.sourceCssJSONobj = new Array();
    this.divParentId = 'body';
    this.autoGenHTML = true;  /* autogeneracja HTML wlaczona/wylaczona (TRUE/FALSE)
                                 jezeli wartosc parametru jest ustawiona na TRUE, wtedy na podstawie danych w JSONie
                                 system proboje sam wygenerowac kod HTML wlacznie ze stylami CSS wg okreslonego wzorca
                                 przy bardziej zaawansowanych strukturach, gdzie sama struktura HTML jest uzalezniona
                                 od innych parametrow, zmiennych i nie jest stala jest mozliwosc recznego stworzenia
                                 struktury HTML+CSS /zaawansowane, wymagane, domyslnie: true/ */
    this.visibleRowNo = true; //czy widoczny ma byc numer wiersza i z nim zwiazane smieci: constSpecialIdRow i constSpecialIdCol
    
    this.constEvants =          '__evants__';
    this.constSort =            'sort';
    this.constSortDiv =         'div';
    this.constSortSpan =        'span';
    this.constSortImg =         'img';
    this.constCopy =            'copy';
    this.constParent =          'parent';
    this.constSpecial =         'special';
    this.constSpecialRows =     'rows';
    this.constSpecialCols =     'cols';
    this.constSpecialIdRow =    '_r';
    this.constSpecialIdCol =    'c';
    this.constSpecialRowCSS =   'row_css';
    this.constSpecialCSS =      'css';
    this.constSpecialModel =    'model';
    this.constIgnore =          c.constListSeparator+this.constSort+
                                c.constListSeparator+this.constParent+
                                c.constListSeparator+this.constSpecialCSS+
                                c.constListSeparator;

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
    this.setSourceJSONobjSpecial = function( p_value ){
      this.sourceJSONobjSpecial = p_value;
    };
    this.getSourceJSONobjSpecial = function(){
      return this.sourceJSONobjSpecial;
    };
    this.setVisibleRowNo = function( p_value ){
      this.visibleRowNo = p_value;
    };
    this.getVisibleRowNo = function(){
      return this.visibleRowNo;
    };
    this.setAutoGenHTML = function( p_value ){
      this.autoGenHTML = p_value;
    };
    this.getAutoGenHTML = function(){
      return this.autoGenHTML;
    };
    this.setDivParentId = function( p_value ){
      this.divParentId = p_value;
    };
    this.getDivParentId = function(){
      return this.divParentId;
    };

    this.init = function( p_params ){

      if( !this.setParams( p_params ) ){
        if( c.constAlertInitError != '' )
          alert( c.constAlertInitError );
        return false;
      }
      
      if( this.getAutoGenHTML() )
        this.createHTML();
    };
    this.setParams = function( p_params ){
      if( p_params == undefined )
        return false;
      if( p_params.length = 0 )
        return false;
      this.params = p_params;
      if( utiles.getParam( this.params, 'sourceJSONobj' ) != '' )
        this.setSourceJSONobj( utiles.getParam( this.params, 'sourceJSONobj' ) );
      if( utiles.getParam( this.params, 'sourceJSONobjSpecial' ) != '' )
        this.setSourceJSONobjSpecial( utiles.getParam( this.params, 'sourceJSONobjSpecial' ) );
      if( utiles.getParam( this.params, 'sourceCssJSONobj' ) != '' )
        this.setSourceCssJSONobj( utiles.getParam( this.params, 'sourceCssJSONobj' ) );
      if( utiles.getParam( this.params, 'visibleRowNo' ) != '' )
        this.setVisibleRowNo( utiles.getParam( this.params, 'visibleRowNo' ) );
      if( utiles.getParam( this.params, 'autoGenHTML' ) != '' )
        this.setAutoGenHTML( utiles.getParam( this.params, 'autoGenHTML' ) );
      if( utiles.getParam( this.params, 'divParentId' ) != '' )
        this.setDivParentId( utiles.getParam( this.params, 'divParentId' ) );
      return true;
    };

    this.createHTML = function(){
      
      for( var _id in this.sourceJSONobj ){
  
        if( _id == this.constEvants )
          this.createHTMLevants( _id );
        else if( !this.createHTMLelement( _id ) )
          return false;
      }
    }
    this.createHTMLevants = function( p_id ){
      var _t_el = this.sourceJSONobj[p_id];
      //elementy HTML
      for( var _id_el in _t_el ){
        var _t_el_ev = _t_el[_id_el];
        //zdarzenia
        for( var _id_el_ev in _t_el_ev ){
          //obsluga wielu kopii
          var copy = 1;
          if( utiles.exists( this.sourceJSONobj[_id_el][this.constCopy] ) )
            copy = this.sourceJSONobj[_id_el][this.constCopy];
          for( var i=1; i<=copy; i++ ){
            var sufix = ( copy==1 ) ? '' : i;
            if( $( this.getId()+_id_el+sufix ) ){
              var e = $( this.getId()+_id_el+sufix );
              e[_id_el_ev] = eval(_t_el_ev[_id_el_ev]);
            }
          }
        }
      }
    };
    this.createHTMLelement = function( p_id ){
      var _id = p_id;
      var _parent = this.sourceJSONobj[p_id][this.constParent]; 
      if( _parent == '' )
        _parent = this.getDivParentId();

      if( $( _id ) || 
          !$( _parent ) ||
          !utiles.exists( this.sourceJSONobj[p_id][this.constSort] ) )
        return false;

      //obsluga wielu kopii
      var copy = 1;
      if( utiles.exists( this.sourceJSONobj[p_id][this.constCopy] ) )
        copy = this.sourceJSONobj[p_id][this.constCopy];
      
      for( var i=1; i<=copy; i++ ){
        var sufix = ( copy==1 ) ? '' : i;

        var e = document.createElement( this.sourceJSONobj[p_id][this.constSort] );
        e.id = _id+sufix;
        e = utiles.setCSS( e, this.sourceCssJSONobj[p_id] );
        e = utiles.setHTMLproperty( e, this.sourceJSONobj[p_id], this.constIgnore );
        $( _parent ).appendChild( e );
          
        if( ( copy==1 ) && ( utiles.exists( this.sourceJSONobj[p_id][this.constSpecial] ) ) )
          this.createHTMLelementSpecial( _id, this.sourceJSONobj[p_id][this.constSpecial] );
      }
      
      return true;
    }; 
    this.createHTMLelementSpecial = function( p_id, p_special_id ){
      if( !utiles.exists( this.sourceJSONobjSpecial[p_special_id] ) )
        return false;
      
      _spec = this.sourceJSONobjSpecial[p_special_id];
      var i = 0;
      for( var row=1; row<=_spec[this.constSpecialRows]; row++ ){
        var e = document.createElement( this.constSortDiv );
        e.id = p_id+this.constSpecialIdRow+row;
        e = utiles.setCSS( e, _spec[this.constSpecialRowCSS] );
        $( p_id ).appendChild( e );
        
        var id0 = e.id;
        for( var col=1; col<=_spec[this.constSpecialCols]; col++ ){
          i++;
          var e = document.createElement( this.constSortDiv );
          e.id = this.getElementId( p_id+this.constSpecialIdRow+row+this.constSpecialIdCol+col,
                                    p_id+i );
          e = utiles.setCSS( e, _spec[this.constSpecialCellCSS] );
          $( id0 ).appendChild( e );
          
          var id1 = e.id;
          for( _el in _spec[this.constSpecialModel] ){
            var e = document.createElement( _spec[this.constSpecialModel][_el][this.constSort] );
            e.id = this.getElementId( p_id+this.constSpecialIdRow+row+this.constSpecialIdCol+col+_el,
                                      p_id+i+_el );
            e = utiles.setCSS( e, _spec[this.constSpecialCellCSS] );
            e = utiles.setHTMLproperty( e, _spec[this.constSpecialModel][_el], this.constIgnore );
            $( id1+_spec[this.constSpecialModel][_el][this.constParent] ).appendChild( e );
          }
        }
      }
    };
    this.getElementId = function( p_value_visibleRowNo_FALSE, p_value_visibleRowNo_TRUE ){
      return this.getVisibleRowNo() ? p_value_visibleRowNo_TRUE : p_value_visibleRowNo_FALSE;
    };
    this.getVisibleRowNo = function( p_value_visibleRowNo_FALSE, p_value_visibleRowNo_TRUE ){
      return this.getVisibleRowNo() ? p_value_visibleRowNo_TRUE : p_value_visibleRowNo_FALSE;
    };
    this.existsCSS = function( p_css ){
      return utiles.exists( this.sourceCssJSONobj[p_css] );
    };

    this.init( p_params );  
  }

