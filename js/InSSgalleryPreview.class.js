  /*******************************/
  /* InSSgalleryPreview.class.js */                   
  /*******************************/
  /* - klasa sluzaca do przyspieszania pracy serwisu
   * - poprzez zapisywanie czesto pobieranych danych 
   *   i odtwarzanie ich z obiektu cachowania
   * - z wazniejszych funkcji publicznych:
   *      
   *      < this.addImage = function( p_gallery, p_page, p_photo ) >
   *      - sluzy do dodawania zdjecia do obiektu podgladu
   *      - parametry: p_gallery - identyfikator galerii
   *                   p_page - nr strony w galerii
   *                   p_photo - identyfikator zdjecia   
   *      
   *      < this.showImage = function( p_gallery, p_page, p_photo ) >
   *      - sluzy do wyswietlania zdjecia
   *      - parametry: p_gallery - identyfikator galerii
   *                   p_page - nr strony w galerii
   *                   p_photo - identyfikator zdjecia   
   *      
   *      < this.closeImage = function( p_gallery, p_page, p_photo ) >
   *      - sluzy do zamykania zdjecia
   *      - parametry: p_gallery - identyfikator galerii
   *                   p_page - nr strony w galerii
   *                   p_photo - identyfikator zdjecia   
   *      
   *      < this.reset = function() >
   *      - sluzy do czyszczenia contenera ze zdjeciami galerii
   *
   * - UWAGA: wymaga biblioteki InSSutiles.class.js 
   */   
  
  utiles.addJSsource( 'js/InSSgalleryPreview.dev.struct.js' ); 
  utiles.addJSsource( 'js/InSSgalleryPreview.user.cfg.js' ); 

  function InSSgalleryPreview( p_params ){
    
    //parametry
    this.params = new Array();
    this.id = 'tempId';                 /* id */
    this.divId = '';
    this.imgId = '';
    this.divParentId = '';
    this.sourceCssJSONobj = new Array();
    
    //zmienne systemowe
    this.img = '';                      /* identyfikator uzywanego aktualnie zdjecia */
    this.screenHeight = 0;
    this.screenWidth = 0;
    
    //stale
    this.constDivId = '_content_preview';
    this.constImgId = '_img_view';

    //podstawowe funkcje do pobierania i zapisu danych
    this.setId = function( p_value ){
      this.id = p_value;
    };
    this.getId = function(){
      return this.id;
    };
    this.setImg = function( p_gallery, p_page, p_photo ){
      this.img = this.getId()+'_'+p_gallery+'_'+p_page+'_'+p_photo;
    };
    this.clearImg = function(){
      this.img = '';
    };
    this.getImg = function(){
      return this.img;
    };
    this.setDivId = function( p_value ){
      this.divId = p_value;
    };
    this.getDivId = function(){
      return this.divId;
    };        
    this.setImgId = function( p_value ){
      this.imgId = p_value;
    };
    this.getImgId = function(){
      return this.imgId;
    };        
    this.setDivParentId = function( p_value ){
      this.divParentId = p_value;
    };
    this.getDivParentId = function(){
      return this.divParentId;
    };
    this.setSourceCssJSONobj = function( p_value ){
      this.sourceCssJSONobj = p_value;
    };
    this.getSourceCssJSONobj = function(){
      return this.sourceCssJSONobj;
    };
    this.setScreenHeight = function( p_value ){
      this.screenHeight = p_value;
    };
    this.getScreenHeight = function(){
      return this.screenHeight;
    };
    this.setScreenWidth = function( p_value ){
      this.screenWidth = p_value;
    };
    this.getScreenWidth = function(){
      return this.screenWidth;
    };

    //inicjacja klasy
    this.createHMTL = function(){
      var e = document.createElement('div');
      e.id = this.getDivId();
      e = utiles.setCSS( e, this.sourceCssJSONobj['content'] );
      $( this.getDivParentId() ).appendChild( e );
      
      var e = document.createElement('img');
      e.id = this.getImgId();
      e = utiles.setCSS( e, this.sourceCssJSONobj['contentImg'] );
      $( this.getDivParentId() ).appendChild( e );
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
      if( utiles.getParam( this.params, 'divParentId' ) != '' )
        this.setDivParentId( utiles.getParam( this.params, 'divParentId' ) );
      if( utiles.getParam( this.params, 'sourceCssJSONobj' ) != '' )
        this.setSourceCssJSONobj( utiles.getParam( this.params, 'sourceCssJSONobj' ) );
      this.setDivId( this.getId() + this.constDivId );
      this.setImgId( this.getId() + this.constImgId );
      this.setScreenHeight( utiles.getBodySize( 'height' ) );
      this.setScreenWidth( utiles.getBodySize( 'width' ) );
      return true;
    };
    //wazne
    this.initImage = function( p_gallery, p_page, p_photo ){
      this.setImg( p_gallery, p_page, p_photo );
    };
    this.freeImage = function(){
      this.clearImg();
    };
    this.existsImage = function(){
      if( $( this.getImg() ) )
        return true;
      else
        return false;
    };
    this.add = function(){
      if( !this.existsImage() ){     
        var e = document.createElement('img');
        e.id = this.getImg();
        e = utiles.setCSS( e, this.sourceCssJSONobj['contentImg'] );
        $( this.getDivId() ).appendChild( e );
        e.onclick = function(){ this.style.display='none'; };
      }
    };
    this.drop = function(){
      if( this.existsImage() )
        $( this.getDivId() ).removeChild( $( this.getImg() ) );
    };
    this.getSource = function(){
      if( this.existsImage() )
        $( this.getImg() ).src;
    };
    this.getWidth = function(){
      if( this.existsImage() )
        $( this.getImg() ).width;
    };
    this.getHeight = function(){
      if( this.existsImage() )
        $( this.getImg() ).height;
    };
    this.view = function(){
      if( this.existsImage() ){
        $( this.getImgId() ).src = this.getSource();
        if( this.getWidth() > this.getScreenWidth() )
          $( this.getImgId() ).style.left = 0;
        else
          $( this.getImgId() ).style.left = parseInt( ( this.getScreenWidth() - this.getWidth() ) / 2 );
        if( this.getHeight() > this.getScreenHeight() )
          $( this.getImgId() ).style.top = 0;
        else
          $( this.getImgId() ).style.top = parseInt( ( this.getScreenHeight() - this.getHeight() ) / 2 );
        $( this.getImgId() ).style.display='';
      }
    };
    this.close = function(){
      if( this.existsImage() )
        $( this.getImgId() ).style.display='none';
    };

    //public klasy
    this.addImage = function( p_gallery, p_page, p_photo ){
      this.setImg( p_gallery, p_page, p_photo );
      this.add();
      this.freeImage();
    };
    this.showImage = function( p_gallery, p_page, p_photo ){
      this.setImg( p_gallery, p_page, p_photo );
      this.view();
      this.freeImage();
    };
    this.closeImage = function( p_gallery, p_page, p_photo ){
      this.setImg( p_gallery, p_page, p_photo );
      this.close();
      this.freeImage();
    };
    this.reset = function(){
      $( this.getDivId() ).innerHTML = '';
    };
    
    init();
  }  
