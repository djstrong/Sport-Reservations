  /**********************/
  /* InSSpager.class.js */                   
  /**********************/
  /* - klasa sluzaca do tworzenia pagera oraz struktury strony (listy/elementow folderu)
   * - z wazniejszych funkcji publicznych:
   *      
   *      < this.createPagerHTML = function() >
   *      - tworzy pager
   *      
   *      < this.clearPageHTML = function() >
   *      - tworzy pager
   *      
   *      < this.nextPage = function() >
   *      - nastepna strona
   *      
   *      < this.prevPage = function() >
   *      - poprzednia strona
   *      
   *      < this.changePage = function( p_page ) >
   *      - ustawienie wybranej strony
   *      - parametry: p_page - nr strony w galerii
   *      
   *      < this.validPageExists = function( p_page ) >
   *      - czy strona istnieje
   *      - parametry: p_page - nr strony w galerii
   *      
   *      < this.moveUp = function() >
   *      - przesuniecie w gore
   *      
   *      < this.moveDown = function() >
   *      - przesuniecie na dol
   *      
   *      < this.moveLeft = function() >
   *      - przesuniecie w lewo
   *      
   *      < this.moveRight = function() >
   *      - przesuniecie w prawo
   *
   * - UWAGA: wymaga biblioteki InSSutiles.class.js 
   */   
  
  utiles.addJSsource( 'js/InSSpager.dev.struct.js' ); 
  utiles.addJSsource( 'js/InSSpager.user.cfg.js' ); 

  function InSSpager( p_params ){

    //parametry
    this.params = new Array();            /* lista parametrow */
    this.group = '';                      /* grupa /wymagany,unikatowy/ */
    this.divParentId = 'body';            /* identyfikator rodzica głownego kontenera /zaawansowane, wymagane/ */
    this.divElementPrefixId = 'element_'; /* prefix identyfikatora elementu /wymagany,unikatowy/ */          
    this.imgEnable = true;                /* czy numery stron w formie obrazkow, jezeli false: wtedy numeryczne */
    this.imgSrc = '';                     /* folder z grafika /nie wymagane/ */
    this.imgPage = '';                    /* grafika strony /wymagane, jesli nie podano klasy stylow/ */
    this.imgPageSelected = '';            /* grafika wybranej strony /wymagane, jesli nie podano klasy stylow wybranej strony/ */
    this.classCssPage = '';               /* klasa stylow strony /wymagane, jesli nie podano grafiki strony/ */
    this.classCssPageSelected = '';       /* klasa stylow wybranej strony /wymagane, jesli nie podano grafiki wybranej strony/ */
    this.classCssPagePrev = '';           /* klasa stylow przycisku: poprzednia strona /wymagane, jesli nie podano grafiki strony/ */
    this.classCssPageNext = '';           /* klasa stylow przycisku: nastepna strona /wymagane, jesli nie podano grafiki strony/ */
    this.classCssElement = '';            /* klasa stylow elementu /wymagane/ */                     
    this.classCssElementSelected = '';    /* klasa stylow zaznaczonego elementu /wymagane/ */                 
    this.sourceJSONdivId = '';            /* kontener ze źrółdem danych w formacie JSON /nie wymagane, o ile przekaże się obiekt JSON w sourceJSONobj/ */
    this.sourceJSONobj = new Array();     /* obiekt JSON z danymi /nie wymagane, o ile przekaże się obiekt JSON w sourceJSONdivId/ */             
    this.sourceCssJSONobj = new Array();  /* obiekt JSON ze stylami skrotow klawiszowych /nie wymagane/ */            
    this.objectParent = '';               /* nazwa obiektu używającego klasę */                     
    this.objectPager = '';                /* nazwa obiektu pagera */                     
    this.paging = 'none';                 /* stronicowanie /nie wymagane; domyślnie none; wartości:
                                            - none - brak stronicowania
                                            - horizontal - stronicowanie poziome ( lewo -> poprzednia strona; prawo -> nastepna strona )
                                            - vertical - stronicowanie pionowe ( gora -> poprzednia strona; dol -> nastepna strona )
                                            - both - stronicowanie poziome oraz pionowe ( lewo, gora -> poprzednia strona; prawo, dol -> nastepna strona ) / */
    this.kink = false;                    /* zapętlenie /nie wymagane; domyślnie false/ */
    this.rows = 5;                        /* ilość wierszy /wymagane/ */
    this.cols = 1;                        /* ilość kolumn /wymagane/ */
    this.page = 1;                        /* wybrana strona */
    this.element = 1;                     /* numer zaznaczonego elementu na stronie [1..this.countPerPage] */
    this.count = 1;                       /* liczba elementów */

    //zmienne systemowe
    this.idPrefix = '';                   /* prefiks nadawanych wszystkim elementom HTML tworoznym w ramach danej klasy */
    this.countPerPage = 1;                /* liczba elementów na strone */
    this.col = 1;                         /* kolumna zaznaczonego elementu [1..this.cols] */
    this.row = 1;                         /* wiersz zaznaczonego elementu [1..this.rows] */
    this.elementNo = 1;                   /* numer zaznaczonego elementu listy */
    this.pageElementsCount = 1;           /* ile elementow jest widocznych na wybranej stronie */
    this.pagesCount = 1;                  /* ilość stron */
    this.init = false;                    /* podczas inicjacji pewne zdarzenia sa wylaczone */
    this.pageNamePrefix = '';             /* prefiks nazwy strony numerowanej kolejno */
    this.elementsList = new Array();      /* lista wszystkich elementow */
    this.pageElementsList = new Array();  /* lista elementow wybranej strony */
        
    //stale
    this.constPagingNone        = 'none';
    this.constPageNameBody      = '_page_';
    this.constPagingHorizontal  = 'horizontal';
    this.constPagingVertical    = 'vertical';
    this.constPagingBoth        = 'both';
    this.constSiteUp            = 'up';
    this.constSiteDown          = 'down';
    this.constSiteLeft          = 'left';
    this.constSiteRight         = 'right';
                   
    this.setInitState = function( p_value ){
      this.init = p_value;
    };
    this.isInit = function(){
      return this.init;
    };
    this.setGroup = function( p_value ){
      this.group = p_value;
    };
    this.getGroup = function(){
      return this.group;
    };
    this.setDivParentId = function( p_value ){
      this.divParentId = p_value;
    };
    this.getDivParentId = function(){
      return this.divParentId;
    };
    this.setDivElementPrefixId = function( p_value ){
      this.divElementPrefixId = p_value;
    };
    this.getDivElementPrefixId = function(){
      return this.divElementPrefixId;
    };
    this.setImgSrc = function( p_value ){
      this.imgSrc = p_value;
    };
    this.getImgSrc = function(){
      return this.imgSrc;
    };
    this.setImgPage = function( p_value ){
      this.imgPage = p_value;
    };
    this.getImgPage = function(){
      return this.imgPage;
    };
    this.setImgPageSelected = function( p_value ){
      this.imgPageSelected = p_value;
    };
    this.getImgPageSelected = function(){
      return this.imgPageSelected;
    };
    this.setClassCssPage = function( p_value ){
      this.classCssPage = p_value;
    };
    this.getClassCssPage = function(){
      return this.classCssPage;
    };
    this.setClassCssPageSelected = function( p_value ){
      this.classCssPageSelected = p_value;
    };
    this.getClassCssPageSelected = function(){
      return this.classCssPageSelected;
    };
    this.setClassCssPagePrev = function( p_value ){
      this.classCssPagePrev = p_value;
    };
    this.getClassCssPagePrev = function(){
      return this.classCssPagePrev;
    };
    this.setClassCssPageNext = function( p_value ){
      this.classCssPageNext = p_value;
    };
    this.getClassCssPageNext = function(){
      return this.classCssPageNext;
    };
    this.setClassCssElement = function( p_value ){
      this.classCssElement = p_value;
    };
    this.getClassCssElement = function(){
      return this.classCssElement;
    };
    this.setClassCssElementSelected = function( p_value ){
      this.classCssElementSelected = p_value;
    };
    this.getClassCssElementSelected = function(){
      return this.classCssElementSelected;
    };
    this.setPaging = function( p_value ){
      this.paging = p_value;
    };
    this.getPaging = function(){
      return this.paging;
    };
    this.setKink = function( p_value ){
      this.kink = p_value;
    };
    this.getKink = function(){
      return this.kink;
    };
    this.setRows = function( p_value ){
      this.rows = p_value;
      if( !this.isInit() )
        this.refreshInfo();
    };
    this.getRows = function(){
      return this.rows;
    };
    this.setCols = function( p_value ){
      this.cols = p_value;
      if( !this.isInit() )
        this.refreshInfo();
    };
    this.getCols = function(){
      return this.cols;
    };
    this.setSourceJSONobj = function( p_obj ){
      this.sourceJSONobj = p_obj;
    };
    this.getSourceJSONobj = function(){
      return this.sourceJSONobj;
    };
    this.setSourceCssJSONobj = function( p_obj ){
      this.sourceCssJSONobj = p_obj;
    };
    this.getSourceCssJSONobj = function(){
      return this.sourceCssJSONobj;
    };
    this.setIdPrefix = function( p_value ){
      this.idPrefix = p_value;
    };
    this.getIdPrefix = function(){
      return this.idPrefix;
    };
    this.setPageNamePrefix = function( p_value ){
      this.pageNamePrefix = p_value;
    };
    this.getPageNamePrefix = function( p_value ){
      return this.pageNamePrefix;
    };
    this.setElementsList = function( p_value ){
      this.elementsList = p_value;
    };

    this.getElementsList = function(){
      return this.elementsList;
    };
    this.setPageElementsList = function(){
      var from = ( ( this.getPage()-1 ) * this.getCountPerPage() );
      var to = ( ( this.getPage()-1 ) * this.getCountPerPage() ) + this.getCountPerPage(); 
      this.pageElementsList = this.getElementsList().slice( from, to );
    };
    this.getPageElementsList = function(){
      return this.pageElementsList;
    };
    this.setPage = function( p_value ){
      this.page = p_value;
      if( this.getPage() < this.getPagesCount() )
        this.setPageElementsCount( this.getCountPerPage() );
      else
        this.setPageElementsCount( ( this.getCount() - ( (this.getPagesCount() - 1) * this.getCountPerPage() ) ) );
      this.setPageElementsList();
      this.setPageElementsInfo();
    };
    this.setPageElementsInfo = function(){
      //ukrycie wszystkich elementow (zabezpieczenie na wypadek ostatniej nie pelnej strony)
      for(var i=1; i<=this.getCountPerPage(); i++ )
        if( $( this.getDivElementPrefixId()+i ) )
          $( this.getDivElementPrefixId()+i ).style.display = 'none';
      //wyswietlenie info kazdego z pokoi osobno (wlacznie z wyswietleniem na stronie)
      for(var i=0; i<this.getPageElementsList().length; i++ )
        eval(this.getObjectParent()).setElementInfo( this.getPageElementsList()[i], (i+1) );
    };
    this.getPage = function(){
      return this.page;
    };
    this.setElement = function( p_value ){
      this.element = p_value;
    };
    this.getElement = function( p_value ){
      return this.element;
    };
    this.getNextPage = function(){
      var page = this.getPage();
      page++;
      if( !this.validPageExists( page ) )
        page = 1;
      return page;
    };
    this.getPrevPage = function(){
      var page = this.getPage();
      page--;
      if( !this.validPageExists( page ) )
        page = this.pagesCount();
      return page;
    };
    this.setElement = function( p_value ){
      this.element = p_value;
    };
    this.getElement = function(){
      return this.element;
    };
    this.setObjectParent = function( p_value ){
      this.objectParent = p_value;
    };
    this.getObjectParent = function(){
      return this.objectParent;
    };
    this.setObjectPager = function( p_value ){
      this.objectPager = p_value;
    };
    this.getObjectPager = function(){
      return this.objectPager;
    };
    this.setCount = function( p_value ){
      this.count = p_value;
    };
    this.getCount = function(){
      return this.count;
    };
    this.setCountPerPage = function( p_value ){
      this.countPerPage = p_value;
    };
    this.getCountPerPage = function(){
      return this.countPerPage;
    };
    this.setCol = function( p_value ){
      this.setElement( this.getElementNoFromColRow( p_value, this.getRow() ) );
      this.col = p_value;
    };
    this.getCol = function(){
      return this.col;
    };
    this.setRow = function( p_value ){
      this.setElement( this.getElementNoFromColRow( this.getCol(), p_value ) );
      this.row = p_value;
    };
    this.getRow = function(){
      return this.row;
    };
    this.setPageElementsCount = function( p_value ){
      this.pageElementsCount = p_value;
    };
    this.getPageElementsCount = function(){
      return this.pageElementsCount;
    };
    this.setPagesCount = function( p_value ){
      this.pagesCount = p_value;
    };
    this.getPagesCount = function(){
      return this.pagesCount;
    };

    this.setParams = function( p_params ){
      if( p_params == undefined )
        return false;
      if( p_params.length = 0 )
        return false;
      this.params = p_params;
      if( utiles.getParam( this.params, 'group' ) != '' )
        this.setGroup( utiles.getParam( this.params, 'group' ) );
      this.setIdPrefix( this.getGroup()+'_' );
      this.setPageNamePrefix( this.getGroup() );
      if( utiles.getParam( this.params, 'divParentId' ) != '' )
        this.setDivParentId( utiles.getParam( this.params, 'divParentId' ) );
      if( utiles.getParam( this.params, 'divElementPrefixId' ) != '' )
        this.setDivElementPrefixId( utiles.getParam( this.params, 'divElementPrefixId' ) );
      if( utiles.getParam( this.params, 'imgSrc' ) != '' )
        this.setImgSrc( utiles.getParam( this.params, 'imgSrc' ) );
      if( utiles.getParam( this.params, 'imgPage' ) != '' )
        this.setImgPage( utiles.getParam( this.params, 'imgPage' ) );
      if( utiles.getParam( this.params, 'imgPageSelected' ) != '' )
        this.setImgPageSelected( utiles.getParam( this.params, 'imgPageSelected' ) );
      if( utiles.getParam( this.params, 'classCssPage' ) != '' )
        this.setClassCssPage( utiles.getParam( this.params, 'classCssPage' ) );
      if( utiles.getParam( this.params, 'classCssPageSelected' ) != '' )
        this.setClassCssPageSelected( utiles.getParam( this.params, 'classCssPageSelected' ) );
      if( utiles.getParam( this.params, 'classCssPagePrev' ) != '' )
        this.setClassCssPagePrev( utiles.getParam( this.params, 'classCssPagePrev' ) );
      if( utiles.getParam( this.params, 'classCssPageNext' ) != '' )
        this.setClassCssPageNext( utiles.getParam( this.params, 'classCssPageNext' ) );
      if( utiles.getParam( this.params, 'classCssPageNext' ) != '' )
        this.setClassCssPageNext( utiles.getParam( this.params, 'classCssPageNext' ) );
      if( utiles.getParam( this.params, 'classCssElement' ) != '' )
        this.setClassCssElement( utiles.getParam( this.params, 'classCssElement' ) );
      if( utiles.getParam( this.params, 'classCssElementSelected' ) != '' )
        this.setClassCssElementSelected( utiles.getParam( this.params, 'classCssElementSelected' ) );
      if( utiles.getParam( this.params, 'paging' ) != '' )
        this.setPaging( utiles.getParam( this.params, 'paging' ) );
      if( utiles.getParam( this.params, 'kink' ) != '' )
        this.setKink( utiles.getParam( this.params, 'kink' ) );
      if( utiles.getParam( this.params, 'rows' ) != '' )
        this.setRows( utiles.getParam( this.params, 'rows' ) );
      if( utiles.getParam( this.params, 'cols' ) != '' )
        this.setCols( utiles.getParam( this.params, 'cols' ) );
      if( utiles.getParam( this.params, 'page' ) != '' )
        this.setPage( utiles.getParam( this.params, 'page' ) );
      if( utiles.getParam( this.params, 'element' ) != '' )
        this.setElement( utiles.getParam( this.params, 'element' ) );
      if( utiles.getParam( this.params, 'objectParent' ) != '' )
        this.setObjectParent( utiles.getParam( this.params, 'objectParent' ) );
      if( utiles.getParam( this.params, 'objectPager' ) != '' )
        this.setObjectPager( utiles.getParam( this.params, 'objectPager' ) );
      if( utiles.getParam( this.params, 'count' ) != '' )
        this.setCount( utiles.getParam( this.params, 'count' ) );
      if( utiles.getParam( this.params, 'sourceJSONdivId' ) != '' )
        if( $( utiles.getParam( this.params, 'sourceJSONdivId' ) ) )
          eval( 'this.sourceJSONobj = {' + $( this.getSourceJSONdivId() ).innerHTML + '}' );
      if( utiles.getParam( this.params, 'sourceJSONobj' ) != '' )
        this.setSourceJSONobj( utiles.getParam( this.params, 'sourceJSONobj' ) );
      if( utiles.getParam( this.params, 'sourceCssJSONobj' ) != '' )
        this.setSourceCssJSONobj( utiles.getParam( this.params, 'sourceCssJSONobj' ) );
      //walidacja
      if( ( this.getImgPage() == this.getClassCssPage() ) && ( this.getClassCssPage() == '' ) ){
        alert('Nie okreslono grafiki ani klasy stylow css strony stronicowania.');
        return false;
      } 
      if( ( this.getImgPageSelected() == this.getClassCssPageSelected() ) && ( this.getImgPageSelected() == '' ) ){
        alert('Nie okreslono grafiki ani klasy stylow css wybranej strony stronicowania.');
        return false;
      }
      this.imgEnable = ( this.getImgPage() != '' ); 
      this.refreshInfo();
      return true;
    };

    this.init = function( p_params ){

      this.setInitState( true );
      
      if( !this.setParams( p_params ) ){
        if( c.constAlertInitError != '' )
          alert( c.constAlertInitError );
        return false;
      }

      this.setInitState( false );
    };
    this.move = function( p_site ){
      var page;
      var col;
      var row;
      var element;
      
      //najpierw obsluga nieskomplikowana - czyli w ramach jednej strony
      if( ( p_site == this.constSiteUp ) && ( this.getRow() > 1 ) ){
        this.setRow( ( this.getRow() - 1 ) );
        return true;
      }
      if( ( p_site == this.constSiteDown ) && ( this.getRow() < this.getRows() ) ){
        this.setRow( ( this.getRow() + 1 ) );
        return true;
      }
      if( ( p_site == this.constSiteLeft ) && ( this.getCol() > 1 ) ){
        this.setCol( ( this.getCol() - 1 ) );
        return true;
      }
      if( ( p_site == this.constSiteRight ) && ( this.getCol() < this.getCols() ) ){
        this.setCol( ( this.getCol() + 1 ) );
        return true;
      }
      
      /* zalozenia ogolne przechodzenia miedzy stronami:
       1. przechodzenie na inna strone naturalne, jezeli przechodzi sie na drugim wierszu w lewo,
          wtedy na kolejnej stronie pojawia sie w drugim wierszu z prawej strony
       2. jezeli w tej samej kolumnie/wierszu na kolejnej stronie nie ma pozycji,
          wtedy ustawia sie na najblizszym elemencie w danym wierszu/kolumnie
       3. zasady ograniczenia przechodzenia miedzy stronami pionowe/poziome/oba/brak:
       3.1. pionowe - brak przechodzenia miedzy stronami klikajac w lewo czy w prawo - w lewo idzie sie po kolei do gory, w prawo na dol
       3.2. poziome - podobnie tylko odwronie
       3.3. oba - we wszystkie strony
       3.4. brak - poruszamy sie w ramach jednej strony: lewo-prawo - wierszami, gora-dol - przechodzenie w ramach jednej kolumny miedzy wierszami
       4. zapetlenie wylaczone - nie ma przechodzenia koniec-poczatek - reszta bez zmian
      */
        
      //pierwszy i ostatni element - kolejno w lewo, gore oraz w prawo, dol
      //- nic nie robimy w przypadku wylaczonego zapletlenia
      //- przechodzimy kolejno na koniec i na poczatek w przypadku wlaczonej obslugi zapetlenia
      if( ( ( ( this.getElement() == 1 ) && ( ( p_site == this.constSiteLeft ) || ( p_site == this.constSiteUp ) ) ) || 
            ( ( this.getElement() == this.getCount() ) && ( ( p_site == this.constSiteRight ) || ( p_site == this.constSiteDown ) ) ) ) &&
          ( this.getKink() == false ) )
        return false;
      
      //przechodzenie w ramach jednej strony na brzegowych elementach - wiersz nizej lub nizej lub kolumne dalej blizej
      //w zaleznosci od stronicowania poziomego lub pionowego lub braku stronicowania
      if( ( this.getPaging() == this.constPagingNone ) || ( this.getPaging() == this.constPagingHorizontal ) ){
        if( ( this.getCol() > 1 ) && ( this.getCol() < this.getCols() ) ){
          if( ( this.getRow() == 1 ) && ( p_site == this.constSiteUp ) ){
            this.setCol( ( this.getCol() - 1 ) );
            this.setRow( this.getRows() );
            return true;
          }
          if( ( this.getRow() == this.getRows() ) && ( p_site == this.constSiteDown ) ){
            this.setCol( ( this.getCol() + 1 ) );
            this.setRow( 1 );
          }
        }
      } 
      if( ( this.getPaging() == this.constPagingNone ) || ( this.getPaging() == this.constPagingVertical ) ){
        if( ( this.getRow() > 1 ) && ( this.getRow() < this.getRows() ) ){
          if( ( this.getCol() == 1 ) && ( p_site == this.constSiteLeft ) ){
            this.setCol( ( this.getCols() ) );
            this.setRow( this.getRows() - 1 );
            return true;
          }
          if( ( this.getCol() == this.getCols() ) && ( p_site == this.constSiteRight ) ){
            this.setCol( 1 );
            this.setRow( ( this.getRows() + 1 ) );
          }
        }
      } 

      //zmiana strony przy przechodzeniu na brzegowych elementach
      if( ( this.getPaging() == this.constPagingBoth ) || ( this.getPaging() == this.constPagingHorizontal ) ){
        if( ( this.getCol() == 1 ) && ( p_site == this.constSiteLeft) ){
          this.setBestElementOnDifferentPage( this.getPrevPage(), this.getCols(), this.getRow() );
          return true;
        }
        if( ( this.getCol() == this.getCols() ) && ( p_site == this.constSiteRight ) ){
          this.setBestElementOnDifferentPage( this.getNextPage(), 1, this.getRow() );
          return true;
        }
      }
      if( ( this.getPaging() == this.constPagingBoth ) || ( this.getPaging() == this.constPagingVertical ) ){
        if( ( this.getRow() == 1 ) && ( p_site == this.constSiteUp ) ){
          this.setBestElementOnDifferentPage( this.getPrevPage(), this.getCol(), this.getRows() );
          return true;
        }
        if( ( this.getRow() == this.getRows() ) && ( p_site == this.constSiteDown ) ){
          this.setBestElementOnDifferentPage( this.getNextPage(), this.getCol(), 1 );
          return true;
        }
      }
    };
    this.changeElement = function( p_no ){
      this.setCol( this.getColFromElementNo( p_no ) );
      this.setRow( this.getRowFromElementNo( p_no ) );
    };
    this.validElementExists = function( p_page, p_col, p_row ){
      var count = this.getPageElementsCount() * ( p_page - 1 ) + this.getElementNoFromColRow( p_col, p_row ); 
      return ( this.getCount() >= count );
    };
    this.validElementNoExists = function( p_element ){
      if( ( p_element > this.getPageElementsCount() ) || ( p_element < 1 )  )
        return false;
      return true;
    };
    this.validPageExists = function( p_page ){
      if( ( p_page > this.getPagesCount() ) || ( p_page < 1 )  )
        return false;
      return true;
    };
    this.getLastElementOnLastPage = function(){
      return this.getCount - ( this.getPageElementsCount() * ( this.getPagesCount() - 1 ) ); 
    };
    this.setBestElementOnDifferentPage = function( p_page, p_col, p_row ){
      if( ( p_page != this.getPagesCount() ) || 
          ( this.getLastElementOnLastPage() == this.getPageElementsCount ) ||
          ( this.validElementExists( p_page, p_col, p_row ) ) ){
        this.setPage( p_page );
        this.setCol( p_col );
        this.setRow( p_row );
        return true;
      }
      this.setCol( this.getColFromElementNo( this.getLastElementOnLastPage() ) );
      this.setRow( this.getRowFromElementNo( this.getLastElementOnLastPage() ) );
      return true;
    };
    this.getElementNoFromColRow = function( p_col, p_row ){
      return ( ( p_row - 1 ) * this.getCols() ) + p_col;
    }
    this.getRowFromElementNo = function( p_element ){
      return Math.ceil( p_element );
    }
    this.getColFromElementNo = function( p_element ){
      return p_element - ( Math.ceil( p_element ) * this.getCols() );
    }
    this.refreshInfo = function(){
      this.setCountPerPage( ( this.getCols() * this.getRows() ) );
      if( !this.validElementExists( this.getPage(), this.getCol(), this.getRow() ) ){
        this.setCol( 1 );
        this.setRow( 1 );
      }
      this.setPagesCount( Math.ceil( this.getCount() / ( this.getCols() * this.getRows() ) ) );
    };

    //public
    this.createPagerHTML = function(){
      this.clearPageHTML();
      if( !this.imgEnable ){                       
        var e = document.createElement('div');
        e.id = this.getPageNamePrefix()+'prev';
        e.className = this.getClassCssPagePrev();
        e.innerHTML = '&laquo';
        $( this.divParentId ).appendChild( e );
        $( e.id ).onclick = function(){ eval(this.getObjectPager()).prevPage(); };
      }
      for( var i=1; i<=this.getPagesCount(); i++ ){
        if( this.imgEnable ){
          var e = document.createElement('img');
          e.id = this.getPageNamePrefix()+i;
          e = utiles.setCSS( e, this.cssJSONobj['index_img'] );
          e.src = this.getImgSrc()+this.getImgPage();
          $( this.divParentId ).appendChild( e );
          $( e.id ).onclick = function(){ eval(this.getObjectPager()).changePage( i ); };
        }
        else{
          var e = document.createElement('div');
          e.id = this.getPageNamePrefix()+i;
          e.className = this.getClassCssPage();
          e.innerHTML = i;
          $( this.divParentId ).appendChild( e );
          $( e.id ).onclick = function(){ eval(this.getObjectPager()).changePage( i ); };
        }
      }
      if( !this.imgEnable ){
        var e = document.createElement('div');
        e.id = this.getPageNamePrefix()+'next';
        e.className = this.getClassCssPageNext();
        e.innerHTML = '&raquo';
        $( this.divParentId ).appendChild( e );
        $( e.id ).onclick = function(){ eval(this.getObjectPager()).nextPage(); };
      }
      this.changePage( this.getPage() );
    };
    this.clearPageHTML = function(){
      $( this.getDivParentId() ).innerHTML = '';    
    }; 
    this.nextPage = function(){
      var page = this.getPage();
      page++;
      if( !this.validPageExists( page ) )
        page = 1;
      return this.changePage( page );
    };
    this.prevPage = function(){
      var page = this.getPage();
      page--;
      if( !this.validPageExists( page ) )
        page = this.getPagesCount();
      return this.changePage( page );
    };
    this.changePage = function( p_page ){
      if( !this.validPageExists( p_page ) )
        return false;
      this.changePageState( this.getPage() );
      this.changePageState( p_page, 'select' );
      this.setPage( p_page );
      return true;
    };
    this.changeElement = function( p_element ){
      if( !this.validElementNoExists( p_element ) )
        return false;
      this.changeElementState( this.getElement() );
      this.changeElementState( p_element, 'select' );
      this.setElement( p_element );
      return true;
    };
    this.changePageState = function( p_page, p_state ){
      if( $( this.getPageNamePrefix()+p_page ) ){
        if( p_state == 'select' ){
          if( this.getImgPageSelected() != '' )
            $( this.getPageNamePrefix()+p_page ).src = this.getImgSrc()+this.getImgPageSelected();
          else
            $( this.getPageNamePrefix()+p_page ).className = this.getClassCssPageSelected();
        }
        else{
          if( this.getImgPage() != '' )
            $( this.getPageNamePrefix()+p_page ).src = this.getImgSrc()+this.getImgPage();
          else
            $( this.getPageNamePrefix()+p_page ).className = this.getClassCssPage();
        }
      }
    };
    this.changeElementState = function( p_element, p_state ){
      if( $( this.getDivElementPrefixId()+p_element ) )
        if( p_state == 'select' )
          $( this.getDivElementPrefixId()+p_element ).className = this.getClassCssElementSelected();
        else
          $( this.getDivElementPrefixId()+p_element ).className = this.getClassCssElement();
    };
    this.moveUp = function(){
      this.move( this.constSiteUp );
    };
    this.moveDown = function(){
      this.move( this.constSiteDown );
    };
    this.moveLeft = function(){
      this.move( this.constSiteLeft );
    };
    this.moveRight = function(){
      this.move( this.constSiteRight );
    };


    this.init( p_params );  
  };
