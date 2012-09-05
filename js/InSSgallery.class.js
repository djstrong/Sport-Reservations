  /************************/
  /* InSSgallery.class.js */                   
  /************************/
  /* - glowna klasa galeri
   * - UWAGA: wymaga biblioteki InSSutiles.class.js 
   */   
  
  /* TODO:
  - imp. klasy pagowania do galerii, podglad zdjec w calosci, imp klasy html galerii, klasa do zoomu, klasa do generowani okienek, klasa do podgladu zdjec
  - cache
  - pre-load zdjec w calosci (do podgladu)
  - listing galerii + obsluga wielu galerii, zarzadzanie galeriami, aktywna galeria
  - archiwizacja galerii + zarzadzanie
  - dynamiczny HTML - przeniesc
  - help + opisane klawisze skrotow
  - stronicowanie - obsluga
  - modul galerii
  - dojsc do tego, dlaczego sie czasai zdjecia nie pokazuja ;/ - new Image najprawdopodobniej, jak sie zdjecia zaladuja w calosci - pobierac z nich info, albo z php
  */

  utiles.addJSsource( 'js/InSSgallery.user.cfg.js' ); 

  function InSSgallery( p_params ) {
  
    //parametry
    this.params = new Array();
    this.id = 'g01';                    /* id */
    this.path = '';                     /* path */
    this.sources = '';                  /* sources */
    this.photoFirstNo = '';             /* first_photo_no */
    this.photoFirstName = '';           /* first_photo_name */
    this.infoFromFilesNames = false;    /* info_from_file_names */
    this.multiLangService = false;      /* obsługa wielojęzyczności */

    //zmienne systemowe
    this.isInit = false;                /* czy galeria jest zainicjalizowana, przy wyjsciu z powrotem na False */                     
    this.pageNo = -1;                     
    this.pagesCount = -1;
    this.scrollEnable = true;
    this.photoNo = 1;
    this.photoNoAll = 1;
    this.photosCount = -1;
    this.photos = new Array();
    this.mode = 'NOTINIT';
    this.textVisible = false; 
    this.infoOn = true;
    this.galleryTop = -1;
    this.galleryLeft = -1;
    this.parent = '';                   /* identyfikator glownego kontenera galerii */

    this.struct = new Object();         /* struktura HTML */
    this.zoom = new Object();           /* obiekt zoom */
    this.sc = new Object();             /* help - skroty klawiszowe */

    //pomocnicze
    this.zoomExists = false;
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
    this.cursorPositionWidth = 0;
    this.cursorPositionHeight = 0;

    //stale
    this.constSeparator = '^'; 
    this.constPhotosOnPage = 5; 
    this.constWidth = 781; 
    this.constHeight = 661; //631
    this.constPhotoWidth = 777;
    this.constPhotoHeight = 509;
    this.constPhotoArrowsTop = 50;
    this.constZoomWidth = this.zoomWindowParamsSize;
    this.constZoomHeight = this.zoomWindowParamsSize;
    this.constZoomCorrectionWidth = 2;
    this.constZoomCorrectionHeight = 0;
    this.constZoomWindowParamsLengthMin = 1;
    this.constZoomWindowParamsLengthMax = 20;
    this.constZoomWindowParamsSizeMin = 150;
    this.constZoomWindowParamsSizeMax = 250;
    this.constZoomWindowParamsZoomMin = 2;
    this.constZoomWindowParamsZoomMax = 10;
    this.constPhotoMargin = 2;
    this.constPhotoMiniWidth = 150;
    this.constPhotoMiniHeight = 100;
    this.constPhotoMiniBorderOut = '2px solid black';
    this.constPhotoMiniBorderSetOut = '2px solid #555352';
    this.constPhotoMiniBorderOver = '2px solid silver';
    this.constTextPhotoHeight = 40;
    this.constGalleryModeNotInit  = 'NOTINIT';
    this.constGalleryModeDisabled = 'DISABLED';
    this.constGalleryModePhoto    = 'PHOTO';
    this.constGalleryModeGallery  = 'GALLERY';
    this.constGalleryModeZoom     = 'ZOOM';
    this.timeOut = 50;

    this.constViewInfoVariantZoom = 'zoom';
    this.constViewInfoVariantInfo = 'info';

    this.constAlertNoPhoto = 'Podana galeria nie zawiera żadnych zdjęć.';
    this.constAlertInitError = 'Błąd inicjalizacji galerii. Proszę o kontakt z administratorem';

    this.constContent = 'content';

    /*************/
    /* PARAMETRY */
    /*************/
    
    this.setId = function( p_value ){
      this.id = p_value;     
    };
    this.getId = function(){
      return this.id;     
    };
    this.setPath = function( p_value ){
      this.path = p_value;
    };
    this.getPath = function(){
      return this.path;                                                                       
    };
    this.setSources = function( p_value ){
      this.sources = p_value;     
    };
    this.getSources = function(){
      return this.sources;     
    };
    this.setPhotoFirstNo = function( p_value ){
      this.photoFirstNo = p_value;     
    };
    this.getPhotoFirstNo = function(){
      return this.photoFirstNo;     
    };
    this.setPhotoFirstName = function( p_value ){
      this.photoFirstName = p_value;     
    };
    this.getPhotoFirstName = function(){
      return this.photoFirstName;     
    };
    this.setInfoFromFilesNames = function( p_value ){
      this.infoFromFilesNames = p_value;     
    };
    this.getInfoFromFilesNames = function(){
      return this.infoFromFilesNames;     
    };
    this.setMultiLangService = function( p_value ){
      this.multiLangService = p_value;
    };
    this.getMultiLangService = function(){
      return this.multiLangService;
    };
    this.setParent = function( p_value ){
      this.parent = p_value;
    };
    this.getParent = function(){
      return this.parent;
    };

    /**********************/
    /* ZMIENNE POMOCNICZE */
    /**********************/
    
    this.setPhotosCount = function( p_value ){
      this.photosCount = p_value;
    };
    this.getPhotosCount = function(){
      return this.photosCount;
    };
    this.setPagesCount = function(){
      var tmp = parseInt( this.getPhotosCount() / this.constPhotosOnPage );
      if( tmp*this.constPhotosOnPage != this.getPhotosCount() )
        tmp++;
      this.pagesCount = tmp;
    };
    this.getPagesCount = function(){
      return this.pagesCount;
    };
    this.changeMode = function( p_value ){
      this.mode = p_value;     
    };
    this.getMode = function(){
      return this.mode;     
    };
    this.isDisabledMode = function(){
      return this.mode == this.constGalleryModeDisabled;     
    };
    this.isPhotoMode = function(){
      return this.mode == this.constGalleryModePhoto;     
    };
    this.isGalleryMode = function(){
      return this.mode == this.constGalleryModeGallery;     
    };
    this.isZoomMode = function(){
      return this.mode == this.constGalleryModeZoom;     
    };
    this.isNotInitMode = function(){
      return this.mode == this.constGalleryModeNotInit;     
    };
    this.setIsTextVisible = function( p_is_visible ){
      this.textVisible = p_is_visible; 
    };
    this.isTextVisible = function(){
      return this.textVisible; 
    };
    this.setPhotoPrev = function(){
      if( !this.setPhotoNoAllPrev() )
        return false;
      this.setPhotoNoAllLocation();
    };
    this.setPhotoNext = function(){
      if( !this.setPhotoNoAllNext() )
        return false;
      this.setPhotoNoAllLocation();
    };
    this.setPhotoNo = function( p_photo_no ){
      if( this.setPhoto( p_photo_no ) ){
        this.photoNo = p_photo_no;
        return true;
      }
      return false;
    };
    this.getPhotoNo = function(){
      return this.photoNo;
    };
    this.setPhotoNoAll = function( p_photo_all_no ){
      this.photoNoAll = p_photo_all_no;
    };
    this.getPhotoNoAll = function(){
      return this.photoNoAll;
    };
    this.getPhotoNoAllParams = function( p_page_no, p_photo_no){
      return ((p_page_no-1)*this.constPhotosOnPage) + p_photo_no;
    };

    /************************************/
    /* INICJALIZACJA PIERWSZEGO ZDJECIA */
    /************************************/

    this.initFirstPhoto = function(){
      if( this.photoFirstNo != '' )
        return this.setPhotoByNo( this.photoFirstNo, true );
      else if( this.photoFirstName != '' )
        return this.setPhotoByName( this.photoFirstName, true );
      else if( this.getPhotosCount() > 0 )
        return this.setPhotoByNo( 1, true );
      else
        return false;
      return true;
    };
    this.setPhotoOnPage = function( p_page_no, p_photo_no ){
      if( p_page_no != '' )
        if( !this.setPageNo( p_page_no ) )
          return false;
      if( !this.setPhotoNo( p_photo_no ) )
        return false;
      return true;
    };
    /* wyszukuje zdjecie po nazwie */
    this.setPhotoByName = function( p_photo_name, p_always_get_page_no ){
      var temp = new Array();
      temp = this.findPhotoByName( p_photo_name, p_always_get_page_no );
      if( temp.length == 0 )
        return false;
      return this.setPhotoOnPage( temp[0], temp[1] );
    };
    this.findPhotoByName = function( p_photo_name, p_always_get_page_no ){
      var temp = new Array();
      for(var page=0; page<this.getPagesCount(); page++ )
        for(var photo=0; photo<this.constPhotosOnPage; photo++ )
          if( this.photos[page][photo]['src'] == p_photo_name ){
            //jezeli nie jest potrzebna zmiana strony, po co ja odswiezac zakazdym razem
            if( p_always_get_page_no || (this.getPageNo() != (page+1)) )
              temp[0] = page+1;
            else
              temp[0] = '';
            temp[1] = photo+1;
            this.setPhotoNoAll( this.getPhotoNoAllParams( (page+1), (photo+1) ) );
            return temp;
          }
      return temp;
    };
    /* wyszukuje zdjecie po numerze porzadkowym */
    this.setPhotoByNo = function( p_photo_no, p_always_get_page_no ){
      var temp = new Array();
      temp = this.findPhotoByNo( p_photo_no, p_always_get_page_no );
      if( temp.length == 0 )
        return false;
      return this.setPhotoOnPage( temp[0], temp[1] );
    };
    this.findPhotoByNo = function( p_photo_no, p_always_get_page_no ){
      var temp = new Array();
      var pageNo = 1;
      if( p_photo_no <= this.getPhotosCount() ){
        //nr strony
        var tmp = parseInt( p_photo_no / this.constPhotosOnPage );
        if( tmp*this.constPhotosOnPage != p_photo_no )
          tmp++;
        //jezeli nie jest potrzebna zmiana strony, po co ja odswiezac zakazdym razem
        if( p_always_get_page_no || (this.getPageNo() != tmp) )
          temp[0] = tmp;
        else
          temp[0] = '';
        pageNo = tmp;
        //nr zdjecia na stronie
        tmp = p_photo_no - ( parseInt( p_photo_no / this.constPhotosOnPage )*this.constPhotosOnPage );
        if( parseInt( p_photo_no / this.constPhotosOnPage )*this.constPhotosOnPage == p_photo_no )
          tmp = this.constPhotosOnPage;
        temp[1] = tmp; 
        this.setPhotoNoAll( this.getPhotoNoAllParams( pageNo, temp[1] ) );
        return temp;
      }
      return temp;
    };

    /***********/
    /* ZDJECIE */
    /***********/

    /* ustawia zdjecie z podanym numerem na stronie  - strona wczesniej musi byc wybrana */
    this.setPhoto = function( p_photo_no ){
      if( this.isPhotoExists( this.getPageNo(), p_photo_no ) ){
        if( !this.setPhotoSrc( p_photo_no ) )
          return false;
        this.preparePhotoInfo( p_photo_no );
        this.checkPhotoMini( p_photo_no );
        this.setPhotoButtonsInfo( p_photo_no );
        return true;
      }
      else
        return false;
    };
    this.setPhotoSrc = function( p_photo_no ){
      $( this.id+'_photo' ).src = this.path + this.getPhotoSrc( this.getPageNo(), p_photo_no );
      return $( this.id+'_photo' ).src != '';
    }
    this.setPhotoButtonsInfo = function( p_photo_no ){
      var tmp_no = this.getPhotoNoAllParams( this.getPageNo(), p_photo_no );
      if( tmp_no == this.getPhotosCount() )
        var tmp = 1;
      else 
        var tmp = tmp_no + 1;             
      $( this.getId()+'_photo_next' ).title = 'next photo ('+tmp+'/'+this.getPhotosCount()+')';
      $( this.getId()+'_photo_next' ).alt = 'next photo ('+tmp+'/'+this.getPhotosCount()+')';
      if( tmp_no == 1 )
        var tmp = this.getPhotosCount();
      else 
        var tmp = tmp_no - 1;
      $( this.getId()+'_photo_prev' ).title = 'previous photo ('+tmp+'/'+this.getPhotosCount()+')';
      $( this.getId()+'_photo_prev' ).alt = 'previous photo ('+tmp+'/'+this.getPhotosCount()+')';
    };
    this.preparePhotoInfo = function( p_photo_no ){
      this.resizePhoto( this.getPageNo(), p_photo_no );
      this.preparePhotoTxt( this.getPageNo(), p_photo_no );
    };
    this.preparePhotoTxt = function( p_page_no, p_photo_no ){
      if( !this.infoOn )
        return false;
      var txt = this.getPhotoTxt( this.getPageNo(), p_photo_no )
      if( txt != '' ){
        $( this.getId()+'_photo_text' ).style.display = '';
        $( this.getId()+'_photo_text_2' ).style.display = '';
        $( this.getId()+'_photo_text_2' ).innerHTML = txt;
        this.setIsTextVisible( true );
      }
      else{
        $( this.getId()+'_photo_text' ).style.display = 'none';
        $( this.getId()+'_photo_text_2' ).style.display = 'none';
        this.setIsTextVisible( false );
      }
    };
    this.checkPhotoMini = function( p_photo_no ){
      $( this.getId()+'_photo_mini_'+this.getPhotoNo() ).style.border = this.constPhotoMiniBorderOut;
      $( this.getId()+'_photo_mini_'+p_photo_no ).style.border = this.constPhotoMiniBorderOver;
    }
    //ustawia biezaca strone oraz wybrane zdjecie na stronie /na podstawie numeru zdjecia galerii/
    this.setPhotoNoAllLocation = function(){
      var temp = new Array();
      temp = this.findPhotoByNo( this.getPhotoNoAll(), false );
      if( temp.length == 0 )
        return false; 
      if( temp[0] != '' )
        this.setPageNo( temp[0] );
      this.setPhotoNo( temp[1] );
    };
    this.setPhotoNoAllPrev = function(){
      if (this.getPhotosCount() < 2)
        return false;
      var tmp = this.getPhotoNoAll();
      if( tmp == 1 )
        tmp = this.getPhotosCount();
      else
        tmp--;
      this.setPhotoNoAll( tmp );
      return true;
    };
    this.setPhotoNoAllNext = function(){
      if (this.getPhotosCount() < 2)
        return false;
      var tmp = this.getPhotoNoAll();
      if( tmp == this.getPhotosCount() )
        tmp = 1;
      else
        tmp++;
      this.setPhotoNoAll( tmp );
      return true;
    };
    

    /**********/
    /* STRONY */
    /**********/

    this.setPage = function( p_page_no ){
      if( p_page_no > this.getPagesCount() )
        return false;
      this.resetPage();
      for( var i=1; i<=this.constPhotosOnPage; i++ )
        if( this.isPhotoExists( p_page_no, i ) )
          this.setPhotoMini( p_page_no, i );     
/*
      alert(  $( this.getId()+'_photo_mini_img_1' ).style.width + ' ' + 
              $( this.getId()+'_photo_mini_img_1' ).style.height + ' ' + 
              $( this.getId()+'_photo_mini_img_1' ).src );
*/
      this.setPagesButtonsInfo( p_page_no );
      return true;
    };
    this.setPagesButtonsInfo = function( p_page_no ){
      if( p_page_no == 1 )
        var tmp = this.getPagesCount();
      else 
        var tmp = this.getPageNo() - 1;
      $( this.getId()+'_photo_mini_prev' ).title = 'previous page ('+tmp+'/'+this.getPagesCount()+')';
      $( this.getId()+'_photo_mini_prev' ).alt = 'previous page ('+tmp+'/'+this.getPagesCount()+')';
      if( p_page_no == this.getPagesCount() )
        var tmp = 1;
      else 
        var tmp = p_page_no + 1;
      $( this.getId()+'_photo_mini_next' ).title = 'next page ('+tmp+'/'+this.getPagesCount()+')';
      $( this.getId()+'_photo_mini_next' ).alt = 'next page ('+tmp+'/'+this.getPagesCount()+')';
    };
    this.resetPage = function(){
      for( var i=1; i<=this.constPhotosOnPage; i++ ){
        $( this.getId()+'_photo_mini_'+i ).style.border = this.constPhotoMiniBorderOut;
        $( this.getId()+'_photo_mini_'+i ).style.display = 'none';
        $( this.getId()+'_photo_mini_'+i ).style.cursor = 'normal';
        $( this.getId()+'_photo_mini_'+i ).style.width = this.constPhotoMiniWidth;
        $( this.getId()+'_photo_mini_'+i ).style.height = this.constPhotoMiniHeight;
      }
    };
    this.setPhotoMiniOnPage = function( p_photo_no ){
      this.setPhotoNo( p_photo_no );
    }
    this.setPhotoMini = function( p_page_no, p_photo_no ){
      $( this.getId()+'_photo_mini_img_'+p_photo_no ).src = this.path + this.getPhotoSrc( p_page_no, p_photo_no );
      $( this.getId()+'_photo_mini_img_'+p_photo_no ).style.filter = 'Alpha(opacity=100)';
      $( this.getId()+'_photo_mini_img_'+p_photo_no ).style.opacity = '1';
      $( this.getId()+'_photo_mini_img_'+p_photo_no ).title = this.getPhotoNoAllParams( p_page_no, p_photo_no )+'/'+this.getPhotosCount();
      $( this.getId()+'_photo_mini_img_'+p_photo_no ).alt = this.getPhotoNoAllParams( p_page_no, p_photo_no )+'/'+this.getPhotosCount();
      this.resizePhotoMini( p_page_no, p_photo_no );
      $( this.getId()+'_photo_mini_'+p_photo_no ).style.display = '';
      $( this.getId()+'_photo_mini_'+p_photo_no ).style.cursor = 'pointer';
    };
    this.setPagePrev = function(){
      if( this.getPagesCount() < 2 )
        return false;                                           
      var tmp = this.getPageNo();
      if( tmp == 1 )
        tmp = this.getPagesCount();
      else
        tmp--;
      this.setPageNo( tmp );
      this.setPhotoNo( 1 );
    };
    this.setPageNext = function(){
      if( this.getPagesCount() < 2 )
        return false;
      var tmp = this.getPageNo();
      if( tmp == this.getPagesCount() )
        tmp = 1;
      else
        tmp++;
      this.setPageNo( tmp );
      this.setPhotoNo( 1 );
    };
    this.setPageNo = function( p_page_no ){
      if( this.setPage( p_page_no ) ){
        this.pageNo = p_page_no;
        return true;
      }
      return false;
    };
    this.getPageNo = function(){
      return this.pageNo;
    };
    
    
    /**********/
    /* SCROLL */
    /**********/

    this.createScroll = function(){
    
    };
    this.resetScroll = function(){
      for( var i=1; i<=this.getPagesCount(); i++ ){
        $( this.getId()+'_page_'+i ).style.backgroundColor  = '';
        $( this.getId()+'_page_'+i ).style.filter           = 'alpha(opacity=30)';
        $( this.getId()+'_page_'+i ).style.opacity          = '0.3'; 
      }
    };
    this.setScroll = function( p_page_no ){
      $( this.getId()+'_page_'+p_page_no ).style.backgroundColor  = 'silver';
      $( this.getId()+'_page_'+p_page_no ).style.filter           = 'alpha(opacity=100)';
      $( this.getId()+'_page_'+p_page_no ).style.opacity          = '1'; 
      this.setPage( p_page_no );
    };
    
    this.showPhoto = function(){
      this.changeMode( this.constGalleryModePhoto );
      //...
      
    };
    this.closePhoto = function(){
      this.changeMode( this.constGalleryModeGallery );
      //...
      
    };
    this.showGallery = function(){
      this.changeMode( this.constGalleryModePhoto );
      $( this.getId()+'_content' ).style.display = '';
      $( this.getId()+'_background' ).style.display = '';
    };
    this.closeGallery = function(){
      this.changeMode( this.constGalleryModeDisabled );
      $( this.getId()+'_content' ).style.display = 'none';
      $( this.getId()+'_background' ).style.display = 'none';
    };

    /**********************/
    /* FUNKCJE POMOCNICZE */
    /**********************/

    this.showCloseInfo = function(){
      if( this.infoOn )
        var disp = 'none';
      else
        var disp = '';
      this.infoOn = !this.infoOn;
      this.showCloseInfoOptions( disp, this.constViewInfoVariantInfo );
    };
    this.showCloseInfoOptions = function( p_display, p_variant ){
      $( this.getId()+'_photo_prev' ).style.display = p_display;
      $( this.getId()+'_photo_show' ).style.display = p_display;
      $( this.getId()+'_photo_next' ).style.display = p_display;
      $( this.getId()+'_photo_lang' ).style.display = p_display;
      $( this.getId()+'_photo_zoom' ).style.display = p_display;
      $( this.getId()+'_photo_index' ).style.display = p_display;
      $( this.getId()+'_photo_help' ).style.display = p_display;
      $( this.getId()+'_photo_close' ).style.display = p_display;
      if( ((p_display == '') && this.isTextVisible()) || (p_display == 'none') ){
        $( this.getId()+'_photo_text' ).style.display = p_display;
        $( this.getId()+'_photo_text_2' ).style.display = p_display;
      }
      if( p_variant == 'zoom' ){
        $( this.getId()+'_photo_mini' ).style.display = p_display;
        $( this.getId()+'_photo_mini_panel_scroll' ).style.display = p_display;
      }
    }
    this.resizePhotoMini = function( p_photo_no ){
      this.resizePhotoFun( this.getId()+'_photo_mini_img_'+p_photo_no, this.constPhotoMiniWidth, this.constPhotoMiniHeight, 'mini' );  
    };
    this.resizePhoto = function(){
      this.resizePhotoFun( this.getId()+'_photo', this.constPhotoWidth, this.constPhotoHeight, 'max' );  
    };
    this.resizePhotoFun = function( id, max_width, max_height, p_type ){
      var image_t = new Image();
      image_t.src = $( id ).src;
      var img_width = image_t.width;
      var img_height = image_t.height;

      if( image_t.height > max_height ){
        img_width = img_width * max_height / img_height;
        img_height = max_height;
      }
      
      if( img_width > max_width ){
        img_height = img_height * max_width / img_width;
        img_width = max_width;
      }
      $( id ).style.width = parseInt( img_width )+'px';
      $( id ).style.height = parseInt( img_height )+'px';

      if( p_type == 'max' ){
        this.zoom.setZoomPhotoWidthOrg( image_t.width );
        this.zoom.setZoomPhotoHeightOrg( image_t.height );
        this.zoom.setZoomPhotoWidth( img_width );
        this.zoom.setZoomPhotoHeight( img_height );
        this.zoom.setZoomTop( ( this.getGalleryTop() + this.constPhotoMargin + ((this.constPhotoHeight-img_height)/2) ) );
        this.zoom.setZoomBottom( ( img_height + this.zoom.getZoomTop() ) );
        this.zoom.setZoomLeft( ( ( this.zoom.getZoomBodyWidth() - img_width )/2 ) );
        this.zoom.setZoomRight( ( img_width + this.zoom.getZoomLeft() ) );
        this.zoom.setZoomScaleHeight( this.zoom.getZoomPhotoHeightOrg() / this.zoom.getZoomPhotoHeight() );
        this.zoom.setZoomScaleWidth( this.zoom.getZoomPhotoWidthOrg() / this.zoom.getZoomPhotoWidth() );
      }
    };
    this.getPhotoSrc = function( p_page_no, p_photo_no ){
      if( !this.isPhotoExists( p_page_no, p_photo_no ) )
        return '';
      return this.photos[(p_page_no-1)][(p_photo_no-1)]['src'];
    };
    this.getPhotoTxt = function( p_page_no, p_photo_no ){
      if( !this.isPhotoExists( p_page_no, p_photo_no ) )
        return '';
      var temp = this.photos[(p_page_no-1)][(p_photo_no-1)]['txt'];
      if( (temp == '') && this.infoFromFilesNames )
        temp = this.getPhotoTxtFromFileName( this.photos[(p_page_no-1)][(p_photo_no-1)]['src'] ); 
      return temp;
    };
    this.getPhotoTxtFromFileName = function( p_name ){
      return p_name.substring( 0, p_name.lastIndexOf('.') );
    };
    this.isPhotoExists = function( p_page_no, p_photo_no ){
      if( this.photos.length < p_page_no )
        return false;
      if( this.photos[(p_page_no-1)].length < p_photo_no )
        return false;
      if( (this.photos[(p_page_no-1)][(p_photo_no-1)]['src'] == '') || (this.photos[(p_page_no-1)][(p_photo_no-1)]['src'] == undefined) )
        return false;
       return true; 
    };

    /********/
    /* ZOOM */
    /********/

    this.openZoomWindow = function(){
      this.zoom.openZoomWindow();
      this.viewGalleryOptions( 'none' );
      this.changeMode( this.constGalleryModeZoom );
    };
    this.closeZoomWindow = function(){
      this.zoom.closeZoomWindow();
      this.viewGalleryOptions( '' );
      this.changeMode( this.constGalleryModePhoto );
    };
    this.viewGalleryOptions = function( p_display ){
      this.showCloseInfoOptions( p_display, this.constViewInfoVariantZoom );
    };
    
    /******************/
    /* POZYCJONOWANIE */
    /*****************/

    this.setPosition = function( p_id_background, p_id_content ){
      var w = this.getBodyWidth();
      var h = this.getBodyHeight();
      var margin_left = parseInt( (w - this.constWidth)/2 );
      var margin_top = parseInt( (h - this.constHeight)/2 ); 
      $( p_id_background ).style.margin = margin_top+'px 0 0 '+margin_left+'px';
      $( p_id_content ).style.margin = margin_top+'px 0 0 '+margin_left+'px';
      this.setGalleryTop( margin_top );
      this.setGalleryLeft( margin_left );
    };                             
    this.getBodyHeight = function(){
      return utiles.getBodySize( 'height' );
    };
    this.getBodyWidth = function(){
      return utiles.getBodySize( 'width' );
    };
    this.setGalleryTop = function( p_top ){
      this.galleryTop = p_top;
    };
    this.getGalleryTop = function(){
      return this.galleryTop;
    };
    this.setGalleryLeft = function( p_left ){
      this.galleryLeft = p_left;
    };
    this.getGalleryLeft = function(){
      return this.galleryLeft;
    };

    /*****************/
    /* INICJALIZACJA */
    /*****************/

    this.galleryCreate = function( p_params ){

      if( !this.setParams( p_params ) ){
        alert( this.constAlertInitError );
        return false;
      }
       
      if( this.isNotInitMode() ){
        $( this.getId()+'_background' ).style.width = this.constWidth+'px';
        $( this.getId()+'_background' ).style.height = this.constHeight+'px';
        $( this.getId()+'_background' ).style.display = 'none';
        $( this.getId()+'_content' ).style.width = this.constWidth+'px';
        $( this.getId()+'_content' ).style.height = this.constHeight+'px';
        $( this.getId()+'_content' ).style.display = 'none';
        $( this.getId()+'_photo_content' ).style.width = this.constPhotoWidth+'px';
        $( this.getId()+'_photo_content' ).style.height = this.constPhotoHeight+'px';
        $( this.getId()+'_photo' ).style.margin = this.constPhotoMargin+'px';
        $( this.getId()+'_photo_prev' ).style.top = this.constPhotoArrowsTop;
        $( this.getId()+'_photo_prev' ).style.height = (this.constPhotoHeight-(2*this.constPhotoArrowsTop))+'px';
        $( this.getId()+'_photo_prev' ).style.width = (this.constPhotoWidth/3)+'px';
        $( this.getId()+'_photo_next' ).style.top = this.constPhotoArrowsTop;
        $( this.getId()+'_photo_next' ).style.height = (this.constPhotoHeight-(2*this.constPhotoArrowsTop))+'px';
        $( this.getId()+'_photo_next' ).style.width = (this.constPhotoWidth/3)+'px';
        $( this.getId()+'_photo_show' ).style.height = this.constPhotoHeight+'px';
        $( this.getId()+'_photo_show' ).style.width = (this.constPhotoWidth/3)+'px';
        $( this.getId()+'_photo_text' ).style.width = this.constPhotoWidth+'px';
        $( this.getId()+'_photo_text' ).style.height = this.constTextPhotoHeight+'px';
        $( this.getId()+'_photo_text' ).style.top = (this.constPhotoHeight-this.constTextPhotoHeight+2)+'px';
        $( this.getId()+'_photo_text_2' ).style.width = this.constPhotoWidth+'px';
        $( this.getId()+'_photo_text_2' ).style.height = this.constTextPhotoHeight+'px';
        $( this.getId()+'_photo_text_2' ).style.top = (this.constPhotoHeight-this.constTextPhotoHeight+2)+'px';
        $( this.getId()+'_photo_mini_panel_scroll' ).style.width = (this.constPhotoWidth-4)+'px';
        $( this.getId()+'_photo_mini_prev' ).style.height = this.constPhotoMiniHeight+'px';
        $( this.getId()+'_photo_mini_prev' ).style.width = '19px';
        $( this.getId()+'_photo_mini_next' ).style.height = this.constPhotoMiniHeight+'px';
        $( this.getId()+'_photo_mini_next' ).style.width = '19px';
  
        this.createLangChanger();
        this.sc = new InSSshortCuts( scParams );
        this.zoom = new InSSzoom( classZoomParams );
        this.setPosition( this.getId()+'_background', this.getId()+'_content' );
        this.changeMode( this.constGalleryModeDisabled );
      }
    };
    this.createLangChanger = function(){
      if( this.getMultiLangService() ){

      }
    };
    this.galleryInit = function( p_params ){
    
      if( !this.setParams( p_params ) ){
        alert( this.constAlertInitError );
        return false;
      }
            
      this.loadPhotos();
      if( !this.initFirstPhoto() ){
        this.closeGallery();
        alert( this.constAlertNoPhoto );
      }
      this.showGallery();
    };
    this.setParams = function( p_params ){
      if( p_params == undefined )
        return false;
      if( p_params.length = 0 )
        return false;
      this.params = p_params;
      if( utiles.getParam( this.params, 'id' ) != '' )
        this.setId( utiles.getParam( this.params, 'id' ) );
      if( utiles.getParam( this.params, 'path' ) != '' )
        this.setPath( utiles.getParam( this.params, 'path' ) );
      if( utiles.getParam( this.params, 'sources' ) != '' )
        this.setSources( utiles.getParam( this.params, 'sources' ) );
      if( utiles.getParam( this.params, 'photoFirstNo' ) != '' )
        this.setPhotoFirstNo( utiles.getParam( this.params, 'photoFirstNo' ) );
      if( utiles.getParam( this.params, 'photoFirstName' ) != '' )
        this.setPhotoFirstName( utiles.getParam( this.params, 'photoFirstName' ) );
      if( utiles.getParam( this.params, 'infoFromFilesNames' ) != '' )
        this.setInfoFromFilesNames( utiles.getParam( this.params, 'infoFromFilesNames' ) );
      if( utiles.getParam( this.params, 'multiLangService' ) != '' )
        this.setMultiLangService( utiles.getParam( this.params, 'multiLangService' ) );
      this.setParent( this.getId()+'_'+this.constParent );
        
      return true;
    };
    //tworzy tablice informacji o zdjeciach tab[page_no][photo_no][src,txt]
    this.loadPhotos = function(){
      var tmp_all = this.sources.split( this.constSeparator );
      this.setPhotosCount( parseInt( (tmp_all.length + 1) / 2 ) );
      this.photos = new Array();

      if( this.getPhotosCount() == 0 )
        return true;

      this.setPagesCount();
      
      var i = 0;
      for(var page=0; page<this.getPagesCount(); page++ ){
        this.photos[page] = new Array();
        for(var photo=0; photo<this.constPhotosOnPage; photo++ ){
          this.photos[page][photo] = new Array();
          if( (page*this.constPhotosOnPage + photo) < this.getPhotosCount() ){
            this.photos[page][photo]['src'] = tmp_all[i];
            i++;
            this.photos[page][photo]['txt'] = tmp_all[i];
            i++;
          }
        }
      }
    };

    this.galleryCreate( p_params );                                               
  };
  
