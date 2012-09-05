  /*********************/
  /* InSSzoom.class.js */                   
  /*********************/
  /* - klasa sluzaca do okna powiekszenia
   * - UWAGA: wymaga biblioteki InSSutiles.class.js 
   */   
  
  utiles.addJSsource( 'js/InSSzoom.dev.struct.js' ); 
  utiles.addJSsource( 'js/InSSzoom.user.cfg.js' ); 

  function InSSzoom( p_params ){

    //parametry
    this.params = new Array();
    this.id = '';                       /* id */
    this.parentId = '';
    this.parentImageId = '';
    this.sourceJSONobj = new Array();
    this.sourceCssJSONobj = new Array();

    //zmienne systemowe
    this.prefix = '';                   /* prefiks nadawanych wszystkim elementom HTML tworzonym w ramach danej klasy */

    this.struct = new Object();         /* struktura HTML */

    //identyfikatory glownych elementow
    this.contentId = '';
    this.contentBgId = '';
    this.imageId = '';
    this.infoLengthId = '';
    this.infoZoomId = '';
    this.infoSizeId = '';

    this.zoomWindowParamsLength = 10;
    this.zoomWindowParamsSize = 170;
    this.zoomWindowParamsZoom = 3;
    this.zoomPhotoWidthOrg = 0;
    this.zoomPhotoHeightOrg = 0;
    this.zoomPhotoWidthAfterZoom = 0; //przydatne przy wyznaczaniu marginow zdjecia w okienku zoom
    this.zoomPhotoHeightAfterZoom = 0;
    this.zoomPhotoWidth = 0;
    this.zoomPhotoHeight = 0;
    this.zoomTop = 0;
    this.zoomBottom = 0;
    this.zoomRight = 0;
    this.zoomLeft = 0;
    this.zoomBodyHeight = 0;
    this.zoomBodyWidth = 0;
    this.zoomScaleHeight = 0;
    this.zoomScaleWidth = 0;

    //stale
    this.constContentId = '_photo_zoom_window';
    this.constContentBgId = '';  
    this.constImageId = '_photo_zoom_window_img';
    this.constInfoLengthId = '_photo_zoom_window_info_table_cell_length_txt';
    this.constInfoZoomId = '_photo_zoom_window_info_table_cell_zoom_txt';
    this.constInfoSizeId = '_photo_zoom_window_info_table_cell_size_txt';


    this.constZoomWidth = this.zoomWindowParamsSize;
    this.constZoomHeight = this.zoomWindowParamsSize;
    this.constZoomCorrectionWidth = 2;
    this.constZoomCorrectionHeight = 0;
    this.constZoomWindowParamsLengthMin = 1;
    this.constZoomWindowParamsLengthMax = 20;
    this.constZoomWindowParamsLengthMove = 1;
    this.constZoomWindowParamsSizeMin = 150;
    this.constZoomWindowParamsSizeMax = 250;
    this.constZoomWindowParamsSizeMove = 10;
    this.constZoomWindowParamsZoomMin = 2;
    this.constZoomWindowParamsZoomMax = 10;
    this.constZoomWindowParamsZoomMove = 1;

    //////////////////////////////
    // prywatne funkcje obiektu //

    this.setId = function( p_value ){
      this.id = p_value;
    };
    this.getId = function(){
      return this.id;
    };
    this.setContentId = function( p_value ){
      this.contentId = p_value;
    };
    this.getContentId = function(){
      return this.contentId;
    };
    this.setContentBgId = function( p_value ){
      this.contentBgId = p_value;
    };
    this.getContentBgId = function(){
      return this.contentBgId;
    };
    this.setImageId = function( p_value ){
      this.imageId = p_value;
    };
    this.getImageId = function(){
      return this.imageId;
    };
    this.setInfoLengthId = function( p_value ){
      this.infoLengthId = p_value;
    };
    this.getInfoLengthId = function(){
      return this.infoLengthId;
    };
    this.setInfoZoomId = function( p_value ){
      this.infoZoomId = p_value;
    };
    this.getInfoZoomId = function(){
      return this.infoZoomId;
    };
    this.setInfoSizeId = function( p_value ){
      this.infoSizeId = p_value;
    };
    this.getInfoSizeId = function(){
      return this.infoSizeId;
    };
    this.setParentId = function( p_value ){
      this.parentId = p_value;
    };
    this.getParentId = function(){
      return this.parentId;
    };
    this.setParentImageId = function( p_value ){
      this.parentImageId = p_value;
    };
    this.getParentImageId = function(){
      return this.parentImageId;
    };
    this.setSourceJSONdivId = function( p_value ){
      this.sourceJSONdivId = p_value;
    };
    this.getSourceJSONdivId = function(){
      return this.sourceJSONdivId;
    };
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
    this.setPrefix = function( p_value ){
      this.prefix = p_value;
    };
    this.getPrefix = function(){
      return this.prefix;
    };
    this.setZoomScaleHeight = function( p_scale ){
      this.zoomScaleHeight = p_scale;
    };
    this.getZoomScaleHeight = function(){
      return this.zoomScaleHeight;
    };
    this.setZoomScaleWidth = function( p_scale ){
      this.zoomScaleWidth = p_scale; 
    };
    this.getZoomScaleWidth = function(){
      return this.zoomScaleWidth; 
    };
    this.setZoomWindowParamsLength = function( p_length ){
      if( ( p_length >= this.constZoomWindowParamsLengthMin ) && ( p_length <= this.constZoomWindowParamsLengthMax ) ){
        this.zoomWindowParamsLength = p_length;
        this.zoomWindowParamsLengthRefresh();
      }
    };
    this.setZoomWindowParamsLengthInc = function(){
      this.setZoomWindowParamsLength( ( this.getZoomWindowParamsLength() + this.constZoomWindowParamsLengthMove ) );      
    };
    this.setZoomWindowParamsLengthDec = function(){
      this.setZoomWindowParamsLength( ( this.getZoomWindowParamsLength() - this.constZoomWindowParamsLengthMove ) );      
    };
    this.getZoomWindowParamsLength = function(){
      return this.zoomWindowParamsLength;                               
    };
    this.zoomWindowParamsLengthRefresh = function(){
      $( this.getInfoLengthId() ).innerHTML = this.getZoomWindowParamsLength() + 'px'; 
    };
    this.setZoomWindowParamsSize = function( p_value ){
      if( ( p_value >= this.constZoomWindowParamsSizeMin ) && 
          ( p_value <= this.constZoomWindowParamsSizeMax ) && 
          ( this.getZoomWindowLeft() + p_value <= this.getZoomRight() ) &&  
          ( this.getZoomWindowTop() + p_value <= this.getZoomBottom() ) 
      ){
        this.zoomWindowParamsSize = p_value;
        this.zoomWindowParamsSizeRefresh();
      }
    };

    this.setZoomWindowParamsSizeInc = function(){
      this.setZoomWindowParamsSize( ( this.getZoomWindowParamsSize() + this.constZoomWindowParamsSizeMove ) );      
    };
    this.setZoomWindowParamsSizeDec = function(){
      this.setZoomWindowParamsSize( ( this.getZoomWindowParamsSize() - this.constZoomWindowParamsSizeMove ) );      
    };
    this.getZoomWindowParamsSize = function(){
      return this.zoomWindowParamsSize;
    };
    this.setZoomPhotoWidthOrg = function( p_zoom_photo_width_org ){
      this.zoomPhotoWidthOrg = p_zoom_photo_width_org;
    };
    this.getZoomPhotoWidthOrg = function(){
      return this.zoomPhotoWidthOrg;
    };
    this.setZoomPhotoHeightOrg = function( p_zoom_photo_height_org ){
      this.zoomPhotoHeightOrg = p_zoom_photo_height_org;
    };
    this.getZoomPhotoHeightOrg = function(){
      return this.zoomPhotoHeightOrg;
    };
    this.setZoomPhotoWidth = function( p_zoom_photo_width ){
      this.zoomPhotoWidth = p_zoom_photo_width;
    };
    this.getZoomPhotoWidth = function(){
      return this.zoomPhotoWidth;
    };
    this.setZoomPhotoHeight = function( p_zoom_photo_height ){
      this.zoomPhotoHeight = p_zoom_photo_height;
    };
    this.getZoomPhotoHeight = function(){
      return this.zoomPhotoHeight;
    };
    this.setZoomTop = function( p_zoom_top ){
      this.zoomTop = p_zoom_top;
    };
    this.getZoomTop = function(){
      return this.zoomTop;
    };
    this.setZoomBottom = function( p_zoom_bottom ){
      this.zoomBottom = p_zoom_bottom;
    };
    this.getZoomBottom = function(){
      return this.zoomBottom;
    };
    this.setZoomRight = function( p_zoom_right ){
      this.zoomRight = p_zoom_right;
    };
    this.getZoomRight = function(){
      return this.zoomRight;
    };
    this.setZoomLeft = function( p_zoom_left ){
      this.zoomLeft = p_zoom_left;
    };
    this.getZoomLeft = function(){
      return this.zoomLeft;
    };
    this.setZoomBodyWidth = function( p_zoom_body_width ){
      this.zoomBodyWidth = p_zoom_body_width;
    };
    this.getZoomBodyWidth = function(){
      return this.zoomBodyWidth;
    };
    this.setZoomBodyHeight = function( p_zoom_body_height ){
      this.zoomBodyHeight = p_zoom_body_height;
    };
    this.getZoomBodyHeight = function(){
      return this.zoomBodyHeight;
    };
    this.setZoomPhotoWidthAfterZoom = function( p_value ){
      this.zoomPhotoWidthAfterZoom = p_value;      
    };
    this.getZoomPhotoWidthAfterZoom = function(){
      return this.zoomPhotoWidthAfterZoom;      
    };
    this.setZoomPhotoHeightAfterZoom = function( p_value ){
      this.zoomPhotoHeightAfterZoom = p_value;      
    };
    this.getZoomPhotoHeightAfterZoom = function(){
      return this.zoomPhotoHeightAfterZoom;      
    };
    this.setZoomWindowParamsZoomInc = function(){
      this.setZoomWindowParamsZoom( ( this.getZoomWindowParamsZoom() + this.constZoomWindowParamsZoomMove ), false );      
    };
    this.setZoomWindowParamsZoomDec = function(){
      this.setZoomWindowParamsZoom( ( this.getZoomWindowParamsZoom() - this.constZoomWindowParamsZoomMove ), false );      
    };
    this.getZoomWindowParamsZoom = function(){
      return this.zoomWindowParamsZoom;
    };
    this.isZoomMode = function(){
      return $( this.getContentId() ).style.display != 'none';
    }

    ///////////////////////////////
    // publiczne funkcje obiektu //

    this.zoomWindowParamsSizeRefresh = function(){
      $( this.getInfoSizeId() ).innerHTML = this.getZoomWindowParamsSize() + 'px'; 
      $( this.getContentId() ).style.width = this.getZoomWindowParamsSize() + 'px';
      $( this.getContentId() ).style.height = this.getZoomWindowParamsSize() + 'px'; 
    };
    this.setZoomWindowParamsZoom = function( p_zoom, p_oryginal ){
      if( ( p_zoom >= this.constZoomWindowParamsZoomMin ) && ( p_zoom <= this.constZoomWindowParamsZoomMax ) ){
        this.zoomWindowParamsZoom = p_zoom;
        this.zoomWindowParamsZoomRefresh( p_oryginal );
      }
    };
    this.zoomWindowParamsZoomRefresh = function( p_oryginal ){
      $( this.getInfoZoomId() ).innerHTML = this.getZoomWindowParamsZoom() + 'x';
      if( !p_oryginal ){
        $( this.getImageId() ).style.width = this.getZoomWindowParamsZoom() * this.getZoomPhotoWidth(); 
        $( this.getImageId() ).style.height = this.getZoomWindowParamsZoom() * this.getZoomPhotoHeight(); 
        this.setZoomScaleHeight( this.getZoomWindowParamsZoom() );
        this.setZoomScaleWidth( this.getZoomWindowParamsZoom() );
        this.setZoomPhotoWidthAfterZoom( ( this.getZoomWindowParamsZoom() * this.getZoomPhotoWidth() ) ); 
        this.setZoomPhotoHeightAfterZoom( ( this.getZoomWindowParamsZoom() * this.getZoomPhotoHeight() ) ); 
      }
      else{
        this.setZoomPhotoWidthAfterZoom( this.getZoomPhotoWidthOrg() ); 
        this.setZoomPhotoHeightAfterZoom( this.getZoomPhotoHeightOrg() ); 
      }
      this.setZoomWindowImgMargin()
    };
    this.startPositionZoom = function(){
      this.setCursorPositionWidth( (this.getZoomLeft()+(this.getZoomRight()-this.getZoomLeft())/2) );
      this.setCursorPositionHeight( ((this.getZoomBottom()-this.getZoomTop())/2) );
      this.setPositionZoom();
    };
    this.refreshZoom = function( p_posX, p_posY ){                                                                                                        
      if( this.isZoomMode() ){
        this.setCursorPositionWidth( p_posX );
        this.setCursorPositionHeight( p_posY );
        this.setPositionZoom();
      }
    };
    this.setPositionZoom = function(){
      this.setPositionZoomLeft();            
      this.setPositionZoomTop();
      this.setZoomWindowImgMargin();
    };
    this.setPositionZoomLeft = function(){
      $( this.getContentId() ).style.left = this.getZoomWindowLeft();            
    };
    this.setPositionZoomTop = function(){
      $( this.getContentId() ).style.top = this.getZoomWindowTop();   
    };
/*
    this.getZoomWindowLeft = function(){
      var temp = this.getCursorPositionWidth();
      if( temp - this.constZoomWidth/2 > this.getZoomLeft() ){
        if( temp + this.constZoomWidth/2 < this.getZoomRight() )
          return temp - this.constZoomWidth/2 - this.constZoomCorrectionWidth; 
        else
          return this.getZoomRight() - this.constZoomWidth - this.constZoomCorrectionWidth; 
      }
      else{
        return this.getZoomLeft() - this.constZoomCorrectionWidth; 
      }
    };
    this.getZoomWindowTop = function(){
      var temp = this.getCursorPositionHeight();
      if( temp - this.constZoomHeight/2 > this.getZoomTop() ){
        if( temp + this.constZoomHeight/2 < this.getZoomBottom() )
          return temp - this.constZoomHeight/2 - this.constZoomCorrectionHeight; 
        else
          return this.getZoomBottom() - this.constZoomHeight - this.constZoomCorrectionHeight; 
      }
      else{
        return this.getZoomTop() - this.constZoomCorrectionHeight; 
      }
    };
*/
    this.getZoomWindowLeft = function(){
      var temp = this.getCursorPositionWidth();
      if( temp - this.zoomWindowParamsSize/2 > this.getZoomLeft() ){
        if( temp + this.zoomWindowParamsSize/2 < this.getZoomRight() )
          return temp - this.zoomWindowParamsSize/2 - this.constZoomCorrectionWidth; 
        else
          return this.getZoomRight() - this.zoomWindowParamsSize - this.constZoomCorrectionWidth; 
      }
      else{
        return this.getZoomLeft() - this.constZoomCorrectionWidth; 
      }
    };
    this.getZoomWindowTop = function(){
      var temp = this.getCursorPositionHeight();
      if( temp - this.zoomWindowParamsSize/2 > this.getZoomTop() ){
        if( temp + this.zoomWindowParamsSize/2 < this.getZoomBottom() )
          return temp - this.zoomWindowParamsSize/2 - this.constZoomCorrectionHeight; 
        else
          return this.getZoomBottom() - this.zoomWindowParamsSize - this.constZoomCorrectionHeight; 
      }
      else{
        return this.getZoomTop() - this.constZoomCorrectionHeight; 
      }
    };

    this.setZoomWindowImgMargin = function(){
      this.setZoomWindowImgMarginLeft();
      this.setZoomWindowImgMarginTop();
    };
    this.setZoomWindowImgMarginLeft = function(){
      if( ( ( this.getCursorPositionWidth() - this.getZoomLeft() ) * this.getZoomWindowParamsZoom() ) < 0 )
        var temp = 0;
      else if( ( this.getZoomPhotoWidthAfterZoom() - ( ( this.getCursorPositionWidth() - this.getZoomLeft() ) * this.getZoomWindowParamsZoom() ) ) < this.zoomWindowParamsSize )
        var temp = this.getZoomPhotoWidthAfterZoom() - this.zoomWindowParamsSize; 
      else
        var temp = ( this.getCursorPositionWidth() - this.getZoomLeft() ) * this.getZoomWindowParamsZoom();  
      $( this.getImageId() ).style.marginLeft = - temp +'px';
    };
    this.setZoomWindowImgMarginTop = function(){
      if( ( ( this.getCursorPositionHeight() - this.getZoomTop() ) * this.getZoomWindowParamsZoom() ) < 0 )
        var temp = 0;
      else if( ( this.getZoomPhotoHeightAfterZoom() - ( ( this.getCursorPositionHeight() - this.getZoomTop() ) * this.getZoomWindowParamsZoom() ) ) < this.zoomWindowParamsSize )
        var temp = this.getZoomPhotoHeightAfterZoom() - this.zoomWindowParamsSize; 
      else
        var temp = ( this.getCursorPositionHeight() - this.getZoomTop() ) * this.getZoomWindowParamsZoom();  
      $( this.getImageId() ).style.marginTop = - temp +'px';
    };
    this.setCursorPositionWidth = function( p_cursor_position_width ){
      this.cursorPositionWidth = p_cursor_position_width;
    };
    this.setCursorPositionWidthInc = function(){
      if( (this.getCursorPositionWidth() + this.getZoomWindowParamsLength()) > this.getZoomRight() ) 
        this.setCursorPositionWidth( this.getZoomRight() );
      else
        this.setCursorPositionWidth( (this.getCursorPositionWidth() + this.getZoomWindowParamsLength()) );
      this.setZoomWindowImgMarginLeft();
      this.setPositionZoomLeft();
    };
    this.setCursorPositionWidthDec = function(){
      if( (this.getCursorPositionWidth() - this.getZoomWindowParamsLength()) < this.getZoomLeft() ) 
        this.setCursorPositionWidth( this.getZoomLeft() );
      else
        this.setCursorPositionWidth( (this.getCursorPositionWidth() - this.getZoomWindowParamsLength()) );
      this.setZoomWindowImgMarginLeft();
      this.setPositionZoomLeft();
    };
    this.getCursorPositionWidth = function(){
      return this.cursorPositionWidth;
    };
    this.setCursorPositionHeight = function( p_cursor_position_height ){
      this.cursorPositionHeight = p_cursor_position_height;
    };
    this.setCursorPositionHeightInc = function(){
      if( (this.getCursorPositionHeight() + this.getZoomWindowParamsLength()) > this.getZoomBottom() )
        this.setCursorPositionHeight( this.getZoomBottom() );
      else
        this.setCursorPositionHeight( (this.getCursorPositionHeight() + this.getZoomWindowParamsLength()) );
      this.setZoomWindowImgMarginTop();
      this.setPositionZoomTop();
    };
    this.setCursorPositionHeightDec = function(){
      if( (this.getCursorPositionHeight() - this.getZoomWindowParamsLength()) < this.getZoomTop() )
        this.setCursorPositionHeight( this.getZoomTop() );
      else
        this.setCursorPositionHeight( (this.getCursorPositionHeight() - this.getZoomWindowParamsLength()) );
      this.setZoomWindowImgMarginTop();
      this.setPositionZoomTop();
    };
    this.getCursorPositionHeight = function(){
      return this.cursorPositionHeight;
    };
    this.openZoomWindow = function( p_id_src, p_display ){
      $( this.getImageId() ).src = $( this.getParentImageId() ).src;
      this.setZoomWindowParamsZoom( Math.round(this.getZoomScaleWidth()), true );
      this.startPositionZoom();
      $( this.getContentId() ).style.display = '';
    };
    this.closeZoomWindow = function(){
      $( this.getContentId() ).style.display = 'none';
    };

    ///////////////////////
    // inicjacja obiektu //

    this.createHTML = function(){
      
      /* konfiguracja obsługi klasy */    
      var params = {
  
      /* identyfikator obiektu klasy 
         /wymagany,unikatowy/ */
        'id':                 '',                                         
  
      /* identyfikator rodzica głownego kontenera 
         /zaawansowane, wymagane/ */
        'divParentId':        'body',          
  
      /* identyfikator zdjecia głownego kontenera 
         /zaawansowane, wymagane/ */
        'parentImageId':      this.getId()+'_photo',          
      
      /* kontener ze źrółdem danych w formacie JSON 
         /nie wymagane, o ile przekaże się obiekt JSON w sourceJSONobj */
        'sourceJSONdivId':    '',                     
  
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
    this.init = function( p_params ){

      if( !this.setParams( p_params ) ){
        if( c.constAlertInitError != '' )
          alert( c.constAlertInitError );
        return false;
      }

      this.createHTML();
      this.setZoomBodyHeight( utiles.getBodySize( 'height' ) );
      this.setZoomBodyWidth( utiles.getBodySize( 'width' ) );
    }
    this.setParams = function( p_params ){
      alert(p_params);
      if( p_params == undefined )
        return false;
      if( p_params.length = 0 )
        return false;
      this.params = p_params;
      if( utiles.getParam( this.params, 'id' ) != '' )
        this.setId( utiles.getParam( this.params, 'id' ) );
      if( utiles.getParam( this.params, 'prefix' ) != '' )
        this.setPrefix( utiles.getParam( this.params, 'prefix' ) );
      else
        this.setPrefix( this.getId() );
      if( utiles.getParam( this.params, 'parentId' ) != '' )
        this.setParentId( utiles.getParam( this.params, 'parentId' ) );
      if( utiles.getParam( this.params, 'parentImageId' ) != '' )
        this.setParentImageId( this.getId() + utiles.getParam( this.params, 'parentImageId' ) );
      if( utiles.getParam( this.params, 'sourceJSONdivId' ) != '' )
        if( $( utiles.getParam( this.params, 'sourceJSONdivId' ) ) )
          eval( 'this.sourceJSONobj = {' + $( this.getSourceJSONdivId() ).innerHTML + '}' );
      if( utiles.getParam( this.params, 'sourceJSONobj' ) != '' )
        this.setSourceJSONobj( utiles.getParam( this.params, 'sourceJSONobj' ) );
      if( utiles.getParam( this.params, 'sourceCssJSONobj' ) != '' )
        this.setSourceCssJSONobj( utiles.getParam( this.params, 'sourceCssJSONobj' ) );
      this.setContentId( this.getPrefix() + this.constContentId );
      this.setContentBgId( this.getPrefix() + this.constContentBgId );
      this.setImageId( this.getPrefix() + this.constImageId );
      this.setInfoLengthId( this.getPrefix() + this.constInfoLengthId );
      this.setInfoZoomId( this.getPrefix() + this.constInfoZoomId );
      this.setInfoSizeId( this.getPrefix() + this.constInfoSizeId );
      return true;
    };

    this.init( p_params );  
  };

