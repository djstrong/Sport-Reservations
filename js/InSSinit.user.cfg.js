  /************************/
  /* InSSinit.user.cfg.js */                   
  /************************/
  /* - format JSON, konfiguracja 
   */   

  utiles.params[ 'InSSinit' ] = {

    /* glowny identyfikator serwisu, 
       uzywany powszechnie do tworzenia obiektow 
       oraz w identyfikatorach elementow HTML
       /wymagany,unikatowy/ */
      'id':                 'bkg',                                         

    /* tryb serwisowy, 
       uzywany powszechnie do odczytywania wszystkich bledow i komunikatow
       /niewymagany/ */
      'serviceMode':        true,                                         

    /* moduły/klasy używane na stronie
       /zaawansowane, wymagane/ */
      'modules': {  'InSSinit':           { 'enable': false,  'singleton': true,  'obj': 'init'           },  //wczesniej zainicjowane - zawsze
                    'InSSutiles':         { 'enable': false,  'singleton': true,  'obj': 'utiles'         },  //wczesniej zainicjowane - zawsze
                    'InSSconst':          { 'enable': false,  'singleton': true,  'obj': 'c'              },  //wczesniej zainicjowane - zawsze
                    'InSSexcept':         { 'enable': false,  'singleton': true,  'obj': 'except'         },  //wczesniej zainicjowane - zawsze
                    'InSScache':          { 'enable': false,  'singleton': true,  'obj': 'cache'          },
                    'InSSdesign':         { 'enable': false,  'singleton': true,  'obj': 'design'         },
                    'InSSgallery':        { 'enable': false,  'singleton': false, 'obj': 'gallery'        },
                    'InSSgalleryIndex':   { 'enable': false,  'singleton': false, 'obj': 'galleryIndex'   },
                    'InSSgalleryPreview': { 'enable': false,  'singleton': false, 'obj': 'galleryPreview' },
                    'InSSlang':           { 'enable': true,   'singleton': true,  'obj': 'lang'           },
                    'InSSpager':          { 'enable': true,   'singleton': false, 'obj': 'pager'          },
                    'InSSpopup':          { 'enable': false,  'singleton': false, 'obj': 'popup'          },
                    'InSSshortCuts':      { 'enable': false,  'singleton': true,  'obj': 'sc'             },
                    'InSSstructHTML':     { 'enable': false,  'singleton': false, 'obj': 'struct'         },
                    'InSSzoom':           { 'enable': false,  'singleton': false, 'obj': 'zoom'           } 
                 },          

    /* jezeli wlaczona jest wielojezycznosc
       initParams['modules']['lang'] = true
       wtedy nalezy podac tutaj liste jezykow
       /zaawansowane, wymagane/ */
      'langs': [ 'eng',
                 'pl',
                 'de',
                 'ru',
                 'es' ],          

    /* identyfikator rodzica głownego kontenera 
       /zaawansowane, wymagane/ */
      'divParentId':        'body'          

  };

