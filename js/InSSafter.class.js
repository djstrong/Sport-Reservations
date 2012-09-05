  /**********************/
  /* InSSafter.class.js */                   
  /**********************/
  /* - klasa z zestawem funkcji do roznych zastosowan ale ladowana na samym koncu,
  /*   najczesciej funkcje uzywajace wczesniej zaladowanych klas
   */   
  function $( id ){
    return document.getElementById( id );
  }

  try{
    var after = new InSSafter();
  }
  catch(e){
    alert( 'Error #99: System initiate error!\nPlease contact with administrator.' );
  };

  function InSSafter(){
    
    this.createHTML = function( p_params ){
      return new InSSstructHMTL( p_params );
    };
  };

