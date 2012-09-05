 /****************/
  /* InSSconst.js */                   
  /****************/
  /* - stale systemowe
   */   

  function InSSconst(){

    this.init = function(){

    };

    this.constSplitSeparator = ',';     /* separator listy zamienianej na tablice */
    this.constListSeparator = '^';      /* separator listy nie zamienianej na tablice */

    this.constImgSrc = 'buttons/';
    this.constImgFolder = 'folder.png';
    this.constImgBack = 'back.png';
    this.constImgSpacer = 'spacer.gif';
    this.constImgPricePerRoom = 'rooms_price_per_room.png';
    this.constImgPricePerPerson = 'rooms_price_per_person.png';

    this.constAlertInitError = 'Error: initiate class error, please sent this to administrator';      /* jezeli nie ma komunikatu, wtedy bez alertu */
    
    //jezyki
    this.constLangDE  = 'pl';
    this.constLangENG = 'eng';
    this.constLangES  = 'es';
    this.constLangPL  = 'pl';
    this.constLangRU  = 'ru';

    //obiekty klas
    this.constClassObjInSScache           = 'cache';
    this.constClassObjInSSconst           = 'c';
    this.constClassObjInSSdesign          = 'design';
    this.constClassObjInSSexcept          = 'except';
    this.constClassObjInSSgallery         = 'gallery';
    this.constClassObjInSSgalleryIndex    = 'galleryIndex';
    this.constClassObjInSSgalleryPreview  = 'galleryPreview';
    this.constClassObjInSSlang            = 'lang';
    this.constClassObjInSSpager           = 'pager';
    this.constClassObjInSSpopup           = 'popup';
    this.constClassObjInSSshortCuts       = 'sc';
    this.constClassObjInSSstructHTML      = 'struct';
    this.constClassObjInSSutiles          = 'utiles';
    this.constClassObjInSSzoom            = 'zoom';

    //nazwy klas
    this.constClassInSScache           = 'InSScache';
    this.constClassInSSconst           = 'InSSconst';
    this.constClassInSSdesign          = 'InSSdesign';
    this.constClassInSSexcept          = 'InSSexcept';
    this.constClassInSSgallery         = 'InSSgallery';
    this.constClassInSSgalleryIndex    = 'InSSgalleryIndex';
    this.constClassInSSgalleryPreview  = 'InSSgalleryPreview';
    this.constClassInSSlang            = 'InSSlang';
    this.constClassInSSpager           = 'InSSpager';
    this.constClassInSSpopup           = 'InSSpopup';
    this.constClassInSSshortCuts       = 'InSSshortCuts';
    this.constClassInSSstructHTML      = 'InSSstructHTML';
    this.constClassInSSutiles          = 'InSSutiles';
    this.constClassInSSzoom            = 'InSSzoom';
    this.constClassInSSinit            = 'InSSinit';

    //właściwości HTML/DOM
    this.constHTMLpropertyAlt             = 'alt';
    this.constHTMLpropertyTitle           = 'title';
    this.constHTMLpropertyInnerHTML       = 'innerHTML';
    this.constHTMLpropertyStyle           = 'style';
    this.constHTMLpropertyClass           = 'class';
    this.constHTMLpropertySrc             = 'src';
    this.constHTMLpropertyName            = 'name';
    this.constHTMLpropertyId              = 'id';
    
    //kody bledow
    this.constErrIdNotExists                  = '00001';
    this.constErrIdExists                     = '00002';

    this.constErrJSONobjNotExists             = '00021';
    this.constErrJSONinvalidObj               = '00022';

    this.constErrNameNo                       = '00031';

    this.constErrClassNoExists                = '00041';
    this.constErrObjectNoExists               = '00042';
    this.constErrClassDisabled                = '00043';
    this.constErrObjectTypeOf                 = '00044';
    this.constErrObjectInstanceOf             = '00045';
    this.constErrObjectInitCreate             = '00046';
    this.constErrObjectCreateNew              = '00047';
    this.constErrObjectGetExists              = '00048';
    
    //lokalizacje bledow
    this.constErrLocNoInSScache           = '01';
    this.constErrLocNoInSSconst           = '02';
    this.constErrLocNoInSSdesign          = '03';
    this.constErrLocNoInSSdesignName            = '01';
    this.constErrLocNoInSSdesignNameValid             = '01';
    this.constErrLocNoInSSdesignIcons           = '02';
    this.constErrLocNoInSSdesignIconsValid            = '01';
    this.constErrLocNoInSSdesignDesign          = '03';
    this.constErrLocNoInSSdesignDesignValid           = '01';
    this.constErrLocNoInSSdesignSchema          = '04';
    this.constErrLocNoInSSdesignSchemaValid           = '01';
    this.constErrLocNoInSSdesignJSON            = '05';
    this.constErrLocNoInSSdesignJSONvalid             = '01';
    this.constErrLocNoInSSdesignParent          = '06';
    this.constErrLocNoInSSdesignParentValid           = '01';
    this.constErrLocNoInSSdesignId              = '07';
    this.constErrLocNoInSSdesignIdValid               = '01';
    this.constErrLocNoInSSdesignIcon            = '08';
    this.constErrLocNoInSSdesignIconValid             = '01';
    this.constErrLocNoInSSexcept          = '04';
    this.constErrLocNoInSSgallery         = '05';
    this.constErrLocNoInSSgalleryIndex    = '06';
    this.constErrLocNoInSSgalleryPreview  = '07';
    this.constErrLocNoInSSlang            = '08';
    this.constErrLocNoInSSpager           = '09';
    this.constErrLocNoInSSpopup           = '10';
    this.constErrLocNoInSSshortCuts       = '11';
    this.constErrLocNoInSSstructHTML      = '12';
    this.constErrLocNoInSSutiles          = '13';
    this.constErrLocNoInSSzoom            = '14';
    this.constErrLocNoInSSinit            = '15';
    this.constErrLocNoInSSinitInit              = '01';
    this.constErrLocNoInSSinitInitInSSconst           = '01';
    this.constErrLocNoInSSinitInitInSSexcept          = '02';
    this.constErrLocNoInSSinitInitParams              = '03';
    this.constErrLocNoInSSinitCheckObject       = '02';
    this.constErrLocNoInSSinitCheckObjectCexists      = '01';
    this.constErrLocNoInSSinitCheckObjectOexists      = '02';
    this.constErrLocNoInSSinitCheckObjectCdisabled    = '03';
    this.constErrLocNoInSSinitCheckObjectOtypeof      = '04';
    this.constErrLocNoInSSinitCheckObjectOinstanceof  = '05';
    this.constErrLocNoInSSinitInitModules       = '03';
    this.constErrLocNoInSSinitInitModulesCreateObject = '01';
    this.constErrLocNoInSSinitGetObject         = '04';
    this.constErrLocNoInSSinitGetObjectCreateNew      = '01';
    this.constErrLocNoInSSinitGetObjectGetExists      = '02';


    //lokalizacje bledow
    this.constErrLocInSScache           = this.constClassInSScache;
    this.constErrLocInSSconst           = this.constClassInSSconst;
    this.constErrLocInSSdesign          = this.constClassInSSdesign;
    this.constErrLocInSSexcept          = this.constClassInSSexcept;
    this.constErrLocInSSgallery         = this.constClassInSSgallery;
    this.constErrLocInSSgalleryIndex    = this.constClassInSSgalleryIndex;
    this.constErrLocInSSgalleryPreview  = this.constClassInSSgalleryPreview;
    this.constErrLocInSSlang            = this.constClassInSSlang;
    this.constErrLocInSSpager           = this.constClassInSSpager;
    this.constErrLocInSSpopup           = this.constClassInSSpopup;
    this.constErrLocInSSshortCuts       = this.constClassInSSshortCuts;
    this.constErrLocInSSstructHTML      = this.constClassInSSstructHTML;
    this.constErrLocInSSutiles          = this.constClassInSSutiles;
    this.constErrLocInSSzoom            = this.constClassInSSzoom;
    this.constErrLocInSSinit            = this.constClassInSSinit;

    //stale
    this.constNullDate = -1;
    this.constNullNumber = -1;
    
    this.constIdPrefix = 'calgrid_';                              //dzien kalendarza
    this.constIdDayPrefix = 'calgrid_day_';                       //numer dnia kalendarza
    this.constIdImgPrefix = 'calgrid_img_';                       //obrazek dnia kalendarza
    this.constIdHeaderFirstDay = 'booCalHeadSpecDate';            //naglowek kalendarza: data od
    this.constIdHeaderDaysChoose = 'booCalHeadSpecDays';          //naglowek kalendarza: ilosc dni
    this.constIdHeaderDaysAvailable = 'booCalHeadSpecDaysEnable'; //naglowek kalendarza: ilosc dostepnych dni
    this.constIdHeaderYear = 'g01_calendar_month_year_y';         //naglowek kalendarza: rok
    this.constIdHeaderMonth = 'g01_calendar_month_year_m';        //naglowek kalendarza: miesiac

    this.constIdRoomPrefix = 'booking_rooms_cell_';               //pokoj na liscie pokoi
    this.constIdRoomSufixImages = '_img';
    this.constIdRoomSufixImagesGallery = '_img_gallery';
    this.constIdRoomSufixImagesEquipment = '_img_equipment';
    this.constIdRoomSufixImagesInformation = '_img_information';
    this.constIdRoomSufixImagesPrice = '_img_price';
    this.constIdRoomSufixImagesSchedule = '_img_schedule';
    this.constIdRoomSufixImagesOk = '_img_ok';
    this.constIdRoomSufixImagesCancel = '_img_cancel';
    this.constIdRoomSufixInfo = '_info';
    this.constIdRoomSufixInfoPrice = '_info_price';
    this.constIdRoomSufixInfoSpacer1 = '_info_spacer1';
    this.constIdRoomSufixInfoCurrency = '_info_currency';
    this.constIdRoomSufixInfoSpacer2 = '_info_spacer2';
    this.constIdRoomSufixInfoPricePromotion = '_info_price_promotion';
    this.constIdRoomSufixInfoSpacer3 = '_info_spacer3';
    this.constIdRoomSufixInfoCurrencyPromotion = '_info_currency_promotion';
    this.constIdRoomSufixInfoSpacer4 = '_info_spacer4';
    this.constIdRoomSufixInfoImgPerRoom = '_info_img_per_room';
    this.constIdRoomSufixInfoMore = '_info_more';
    this.constIdRoomSufixInfoMoreImgPersons = '_info_more_img_persons';
    this.constIdRoomSufixInfoMoreSpacer5 = '_info_more_spacer5';
    this.constIdRoomSufixInfoMorePersons = '_info_more_persons';
    this.constIdRoomSufixState = '_state';
    
    this.constClassRoomInfoPrice = 'booking_rooms_info_price';
    this.constClassRoomInfoPricePromotion = 'booking_rooms_info_price_promotion';
    this.constClassRoomInfoPriceOld = 'booking_rooms_info_price_old';
    this.constClassRoomInfoCurrency = 'booking_rooms_info_currency';
    this.constClassRoomInfoCurrencyPromotion = 'booking_rooms_info_currency_promotion';
    this.constClassRoomInfoCurrencyOld = 'booking_rooms_info_currency_old';
    this.constClassRoomInfoImgEnable = 'booking_rooms_enable';
    this.constClassRoomInfoImgChoosen = 'booking_rooms_choosen';

    this.constHeaderFirstDayEmpty = '-';
    this.constHeaderDaysChooseEmpty = '-';
    this.constHeaderDaysAvailableEmpty = '-';

    this.constFreeWeekLines = 1;  //liczba tygodni widocznych z poprzedniego miesiaca
    this.constDays = 49;//56;     //dni w kalendarzu (krotnosc 7 dni w tygodniu)
    this.constRooms = 6;          //pokoi na liscie miniaturek pokoi - z uwzglednieniem stronicowania
    this.constValidMinYear = 0;   //minimalny rok
    this.constValidMaxYear = 1;   //maksymalny rok
    
    this.constCalendarDayStateFree      = 0;  //wolny
    this.constCalendarDayStateOccupied  = 1;  //zajety

    this.constRoomTypePricePerPerson    = 0;  //cena za osobę
    this.constRoomTypePricePerRoom      = 1;  //cena za pokój/obiekt

    this.constDayStateModeReset         = 0; //reset widoku kalendarza
    this.constDayStateModeFree          = 1; //wolny
    this.constDayStateModeFreePale      = 2; //wolny szary
    this.constDayStateModeSelected      = 3; //wybrany
    this.constDayStateModeSelectedPale  = 4; //wybrany szary
    this.constDayStateModeOccupied      = 5; //zajety
    this.constDayStateModeOccupiedPale  = 6; //zajety szary
    
    this.constTermStateNotSelected      = 0; //nie wybrany
    this.constTermStateInProgress       = 1; //w trakcie wybierania
    this.constTermStateSelected         = 2; //wybrany
    
    this.constRoomStateEnable           = 0; //dostepny
    this.constRoomStateChoosen          = 1; //wybrany
    this.constRoomStateOccupied         = 2; //zajęty
    this.constRoomStateDiffNumOfPeople  = 3; //z inną liczbą osób
    this.constRoomStateNoChooseComfort  = 4; //bez wymaganego wyposażenia

    this.constTermSelectedOperSelectToDelete      = 0; //oznacz wybrany termin do usuniecia
    this.constTermSelectedOperUnselectFromDelete  = 1; //odznacz usuniecie wybranego terminu (przywroc podswietlenie wybranego terminu)

    this.constArrayAdd    = 0;
    this.constArrayRemove = 1;
    this.constArrayClear  = 2;

    this.init();
  }
  
  
  
  
  