  /***********************/
  /* InSSexcept.class.js */                   
  /***********************/
  /* - klasa z obsluga bledow i komunikatow 
   */   
  
  utiles.addJSsource( 'js/InSSexcept.dev.data.js' ); 

  function InSSexcept(){

    this.init = function(){

    };

    this.createCatch = function( p_err_code, p_loc_code, p_err_obj, p_loc_error, p_params, p_silent ){
      //TODO: ewentualny zapis p_err_obj do bazy
      return this.createExcept( p_err_code, p_loc_code, p_loc_error, p_params, p_silent );
    };
    
    /* tworzy wyjatek 
    parametry:
    - p_err_code  - kod bledu - lokalizacja informacji o bledzie
    - p_loc_code  - lokalizacja - numer klasy 
    - p_loc_error - lokalizacja szczegolowa bledu w aplikacji sklada sie z 6 cyfr: XXYYZZ
                    XX - numer klasy
                    YY - numer funkcji klasowej
                    ZZ - numer bloku funkcji klasowej
    - p_params    - lista parametrow do wyswietlanego komunikatu 
    - p_silent    - tryb silent (true/false) powoduje nie wyswietlenie komunikatu bledu
    */
    this.createExcept = function( p_err_code, p_loc_code, p_loc_error, p_params, p_silent ){
      if( ( p_err_code != undefined ) || ( p_err_code != '' ) || ( exceptionsInfo[p_err_code] != undefined ) )
        return false;
      
      p_silent = utiles.getValue( p_silent, false );
      
      if( ( p_loc_code != undefined ) && ( p_loc_code != '' ) && ( exceptionsLocalizations[p_loc_code] != undefined ) ){
        var locCodeInfo = ' ('+exceptionsLocalizations[p_loc_code]+')';
        var locCode = p_loc_code;
      }
      else{ 
        var locCodeInfo = '';
        var locCode = '00';
      }
      var info = exceptionsInfo[p_err_code];
      if( ( typeof(p_params) == 'object' ) && ( p_params instanceof Array ) )
        for( var i=0; i<p_params.length; i++ )
          info.replace( eval('/{'+i+'}/gi'), p_params[i] ); 
      
      if( !p_silent )
        alert( 'INSS-'+p_err_code+locCode+': '+info+locCodeInfo+p_loc_error );
      return false;
    };

    
    this.getLocError = function( p_class_no, p_fun_no, p_block_no, p_prefix ){
      p_prefix = utiles.getValue( p_prefix, '\n' );
      return p_prefix+'[error#' + p_class_no + p_fun_no + p_block_no + ']';
    }; 
    
    this.init();
  };