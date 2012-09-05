  /*************************/
  /* InSSshortCuts.func.js */                   
  /*************************/
  /* - zestaw funkcji sluzacych do obslugi skrotow klawiszowych
   * UWAGA! Wymaga klasy InSSshortCuts
   */   
  
  //pobiera kod ascii
  function fSCgetAsciiCode( e ){
    if (!e) e=window.event;
    var code;
    if ((e.charCode) && (e.keyCode==0))
      code = e.charCode
    else                 
      code = e.keyCode;  
    return code;
  }

  //funkcja do wlaczania/wylaczania formularzy
  function fSCformEnabled( p_ascii ){
    if( sc.keyAscii == p_ascii ){
      sc.keyAscii = '';
      sc.formEnabled();
    }
  }

  changeSC( this );

  function fSChintChangeKey( e ){
    sc.hintChangeKey( e.id );
  }
  
  document.onkeydown = fSConKeyDown; 
  function fSConKeyDown( e ){
    sc.onKeyDown( fSCgetAsciiCode( e ) );
  }
  
  document.onkeypress = fSConKeyPress; 
  function fSConKeyPress( e ){
    sc.onKeyPress( fSCgetAsciiCode( e ) );
  }
  
  document.onkeyup = fSConKeyUp; 
  function fSConKeyUp( e ){
    sc.onKeyUp( fSCgetAsciiCode( e ) );
  }
