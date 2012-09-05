  /***********************/
  /* InSSutiles.class.js */                   
  /***********************/
  /* - klasa z zestawem funkcji do roznych zastosowan 
   */   
  function $( id ){
    return document.getElementById( id );
  }

  try{
    var utiles = new InSSutiles();
  }
  catch(e){
    alert( 'Error #00: System initiate error!\nPlease contact with administrator.' );
  };
  try{
    utiles.addJSsource('js/InSSinit.class.js');
    utiles.addJSsource('js/InSScache.class.js');
    utiles.addJSsource('js/InSSconst.class.js');
    utiles.addJSsource('js/InSSdesign.class.js');
    utiles.addJSsource('js/InSSexcept.class.js');
    utiles.addJSsource('js/InSSgallery.class.js');
    utiles.addJSsource('js/InSSgalleryIndex.class.js');
    utiles.addJSsource('js/InSSgalleryPreview.class.js');
    utiles.addJSsource('js/InSSlang.class.js');
    utiles.addJSsource('js/InSSpager.class.js');
    utiles.addJSsource('js/InSSpopup.class.js');
    utiles.addJSsource('js/InSSshortCuts.class.js');
    utiles.addJSsource('js/InSSstructHTML.class.js');
    utiles.addJSsource('js/InSSzoom.class.js');
    utiles.addJSsource('js/InSSutiles.dev.data.js');
  }
  catch(e){
    alert( 'Error #00: System initiate error!\nPlease contact with administrator.' );
  };


  function InSSutiles(){
    
    this.extraStyles = 'style';
    this.extraCheckLangProperty = 'check_lang_property';
    this.params = new Array();
    this.json = new Object();
    
    
    /* rozne */                 
    
    // pobiera wartosc, jezeli nie jest undefined, w przeciwnym wypadku domyslna
    this.getValue = function ( p_value, p_default ){
    	return ( p_value != undefined ) ? p_value : p_default;
    }

    // pobiera wartosc, jezeli nie jest undefined i nie jest pusta wartosc, w przeciwnym wypadku domyslna
    this.nvl = function ( p_value, p_default ){
    	return ( ( p_value != undefined ) && ( p_value != '' ) ) ? p_value : p_default;
    }

    // dodaje nowy plik JS
    this.addJSsource = function ( p_file ){
    	var js = document.createElement( 'script' );
    	js.setAttribute( 'type', 'text/javascript');
    	js.setAttribute( 'src', p_file );
    	document.getElementsByTagName( 'head' )[0].appendChild( js );
    }

    //p_size_type: 'width', 'height'
    this.getBodySize = function( p_size_type ){
      var size = 0;
      if( typeof( window.innerWidth ) == 'number' ){
        //Non-IE
        if( p_size_type == 'width' )
          size = window.innerWidth;
        else
          size = window.innerHeight;
      } 
      else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ){
        //IE 6+ in 'standards compliant mode'
        if( p_size_type == 'width' )
          size = document.documentElement.clientWidth;
        else
          size = document.documentElement.clientHeight;
      } 
      else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ){
        //IE 4 compatible
        if( p_size_type == 'width' )
          size = document.body.clientWidth;
        else
          size = document.body.clientHeight;
      }
      return size;
    };
    //pobiera wartosc parametru
    this.getParam = function( p_params, p_id ){
      if( (p_params[p_id] != undefined) && (p_params[p_id] != '') )
        return p_params[p_id];
      else
        return ''; 
    };
    //wyswietla komunikat i zwraca false
    this.alert = function( p_value ){
      return alert(p_value)!=undefined;
    };


    /* konwersje */
    
    this.strToIntDef = function( p_value, p_def_int ){
      if( this.isInteger( p_value ) ) 
        return parseInt( p_value );
      if( !this.exists( p_def_int ) )
        p_def_int = 0;
      return parseInt( p_def_int );
    };
    this.strToFloatDef = function( p_value, p_def_int ){
      if( parseFloat( p_value ) == p_value )  
        return parseFloat( p_value );
      if( !this.exists( p_def_int ) )
        p_def_int = 0;
      return parseFloat( p_def_int );
    };
    this.dateToStr = function( p_value ){
      if( !(p_value instanceof Date) )
        return '';
      return p_value.getFullYear()+'-'+
            (p_value.getMonth()<9?'0':'')+(p_value.getMonth()+1)+'-'+
            (p_value.getDate()<10?'0':'')+p_value.getDate();
    };
    this.intToStr = function( p_value, p_leading_zero ){
      var str = '';
      for(var i=0; i<(p_leading_zero-(''+p_value).length); i++)
        str = str + '0';
      return str+''+p_value;
    };
    this.intToStrMask = function( p_value, p_mask ){
      return ''+p_mask.substr(0,(''+p_mask).length-(''+p_value).length)+p_value;
    };
    this.intToStrLeadingChar = function( p_value, p_char, p_count ){
      var str = '';
      if( !this.exists(p_count) )
        p_count = 1;
      for(var i=0; i<(p_count-(''+p_value).length); i++)
        str = str + '' + p_char;
      return str+''+p_value;
    };
    

    /* walidacje */

    //czy istnieje
    this.exists = function( p_element ){
      return p_element != undefined;
    };
    //czy IE
    this.isIE = function(){
      return document.all?true:false;
    };
    //czy tablica
    this.isArray = function( obj ){
      return ( ( typeof( obj ) == 'object' ) && 
               ( obj.constructor.toString().indexOf('Array') != -1 ) );
    };
    //czy object JSON
    this.isJSON = function( obj ){
      return typeof( obj ) == 'object' && ( obj instanceof Object );
    };
    //sprawdza czy liczba calkowita
    this.isInteger = function( v ){
      return /^-?\d+$/.test( v );
    };
    //sprawdza czy dozwolony znak ascii
    this.isEnableAsciiKey = function( event, ascii_enable ){
      var keyCode = event.keyCode;
      return this.checkKeyAscii( keyCode, ascii_enable );
    };
    //sprawdza kod ascii i porownuje ze wzorcem [1,2,3,:43,23:,4:32]
    this.checkKeyAscii = function( key, ascii ){
      var c = key;
      if( ascii=='' ) return c;
      var v = ascii.split(',');
      for( var i in v ){
        if( v[i].indexOf(':')==-1 ){
          if( c==v[i] ) return c;
        }
        else{
          var mid = v[i].split(':');
          if( mid[0]!='' && mid[1]!='' ){
            if( c>=mid[0] && c<=mid[1] ) return c;
          }
          else if( mid[0]=='' ){
            if( c<=mid[1] ) return c;
          }
          else if( mid[1]=='' ){
            if( c>=mid[0] ) return c;
          }
        }
      }
      return false;
    };
    //waliduje date zlozona z parametrow
    this.isDateP = function( y, m, d ){
      if( m.length == 1 ) m = '0'+m;
      if( d.length == 1 ) d = '0'+d;
      return this.isDate(y+'-'+m+'-'+d);
    };
    //waliduje date RRRR-MM-DD
    this.isDate = function( v ){
      if( v.length != 10 ) return false;
      if( v.search(/^\d{4}(-\d{2}){2}$/) == -1 ) return false;
      y = v.substr(0,4);
      if( y < 1900 ) return false;
      m = parseInt( v.substr(5,1)==0 ? v.substr(6,1) : v.substr(5,2) );
      if( m > 12 || m < 1 ) return false;
      d = parseInt( v.substr(8,1)==0 ? v.substr(9,1) : v.substr(8,2) );
      if( d<1 || ((m==4 || m==6 || m==9 || m==11) && (d>30)) 
      || (m==2 && y%4==0 && d>29 ) 
      || (m==2 && y%4!=0 && d>28 ) 
      || ((m==1 || m==3 || m==5 || m==7 || m==8 || m==10 || m==12) && (d > 31)) ) return false;
      return true;
    };
    //waliduje rok RRRR (od 1900)
    this.isYear = function( v ){
      return (v.toString().length==4) && (v.toString().search(/^\d{4}$/)!=-1) && (v>=1900);
    };
    //waliduje godzine HH:MM:SS lub HH:MM
    this.isTime = function( v ){
      if( (v.length != 5) && (v.length != 8) ) return false;
      if( v.length != 5 )
        if( v.search(/^\d{2}:\d{2}$/) == -1 ) return false;
      else{ 
        if( v.search(/^\d{2}(:\d{2}){2}$/) == -1 ) return false;
        var ss = parseInt( v.substr(6,2) );
        if( ss > 59 ) return false;
      }
      var hh = parseInt( v.substr(0,2) );
      if( hh > 23 ) return false;
      var mm = parseInt( v.substr(3,2) );
      if( mm > 59 ) return false;
      return true;
    };


    /* HTML */

    //ustawia style elementu    
    this.setCSS = function( e, json ){
      if( !this.exists( json ) )
        return e;
      for( var css in json ){
        e.style[css] = json[css];
        if( exists( utilesExtra[this.extraStyles][css] ) ){
          e.style['Moz'+css] = json[css];
          e.style['Webkit'+css] = json[css];
        }
      }
      return e;                         
    };
    this.createHTML = function( p_params  ){
      return new InSSstructHMTL( p_params );
    };
    //ustawia style elementu, parametry: 
    //e - element, 
    //json - lista property, 
    //ignore- znaczniki, ktore nalezy pominac np ^znacznik1^znacznik2^    
    this.setHTMLproperty = function( e, json, ignore ){
      if( !this.exists( json ) )
        return e;
      for( var id in json )
        if( ignore.indexOf( c.constListSeparator+id+c.constListSeparator ) == -1 )
          if( this.exists( utilesExtra[this.extraCheckLangProperty][id] ) )
            e[id] = lang.getTrans( json[id] );
          else
            e[id] = json[id];
      return e;
    };
    //ustawia style elementu    
    this.setEvents = function( e, json ){
      if( !this.exists( json ) )
        return e;
      for( var event in json )
        e[event] = function() { eval(json[event]) };
      return e;                         
    };
    //tworzy element    
    this.createChild = function( p_id, p_id_parent, p_className, p_innerHTML, p_extra, p_type, p_css ){
      if( !this.exists(p_type) || ( p_type == '' ) )
        p_type = 'div';
      var e = document.createElement( p_type );
      e.id = p_id;
      if( this.exists(p_className) && ( p_className != '' ) )
        e.className = p_className;
      if( this.exists(p_innerHTML) && ( p_innerHTML != '' ) )
        e.innerHTML = p_innerHTML;
      if( this.isArray( p_extra ) ){
        for( var property in p_extra )
          e[property] = p_extra[property];
      }
      if( this.exists(p_css) && ( p_css != '' ) && this.exists( this.cssJSONobj[p_css] ) )
        e = this.setCSS( e, this.cssJSONobj[p_css] );
      if( $( p_id_parent ) )
        $( p_id_parent ).appendChild( e );
      else
        return this.alert('createChild: e-010,'+p_id+','+p_id_parent);
      return true;
    };
    //usuwa element
    this.removeChild = function( p_id, p_id_parent ){
      if( $( p_id ) && $( p_id_parent ) ) 
        $( p_id_parent ).removeChild( $( p_id ) );
      return true;
    };

    
    /* cookies (20 x 4KB na domene) */

    this.createCookie = function( name, value, days ){   
    	if (days) {
    		var date = new Date();
    		date.setTime(date.getTime()+(days*24*60*60*1000));
    		var expires = "; expires="+date.toGMTString();
    	}
    	else var expires = "";
    	document.cookie = name+"="+value+expires+"; path=/";
    };
    this.readCookie = function( name ){   
    	var nameEQ = name + "=";
    	var ca = document.cookie.split(';');
    	for(var i=0;i < ca.length;i++) {
    		var c = ca[i];
    		while (c.charAt(0)==' ') c = c.substring(1,c.length);
    		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    	}
    	return null;
    };
    this.eraseCookie = function( name ){   
    	createCookie(name,"",-1);
    };

    // LZW-compress a string
    this.compressLZWencode = function( s ){
        var dict = {};
        var data = (s + "").split("");
        var out = [];
        var currChar;
        var phrase = data[0];
        var code = 256;
        for (var i=1; i<data.length; i++) {
            currChar=data[i];
            if (dict[phrase + currChar] != null) {
                phrase += currChar;
            }
            else {
                out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
                dict[phrase + currChar] = code;
                code++;
                phrase=currChar;
            }
        }
        out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
        for (var i=0; i<out.length; i++) {
            out[i] = String.fromCharCode(out[i]);
        }
        return out.join("");
    };
    // Decompress an LZW-encoded string
    this.compressLZWdecode = function( s ){
        var dict = {};
        var data = (s + "").split("");
        var currChar = data[0];
        var oldPhrase = currChar;
        var out = [currChar];
        var code = 256;
        var phrase;
        for (var i=1; i<data.length; i++) {
            var currCode = data[i].charCodeAt(0);
            if (currCode < 256) {
                phrase = data[i];
            }
            else {
               phrase = dict[currCode] ? dict[currCode] : (oldPhrase + currChar);
            }
            out.push(phrase);
            currChar = phrase.charAt(0);
            dict[code] = oldPhrase + currChar;
            code++;
            oldPhrase = phrase;
        }
        return out.join("");
    };
  };

