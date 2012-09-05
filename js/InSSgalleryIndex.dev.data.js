  /********************************/
  /* InSSgalleryIndex.dev.data.js */                   
  /********************************/
  /* - format JSON, informacje o strukturze galeri oraz ich zdjeciach
   * - sklada sie z trzech czesci: tree - struktura, 
   *                               folders - informacje o folderach, 
   *                               galleries - informacje o galeriach i ich zdjeciach
   * - przyklad:
   *
   *    'tree': {      <- w tym miejscu znajduje sie struktura drzewiasta galerii
   *      'root': [    <- rodzic, glowny zawsze nazywa sie root (slowo zastrzezone)
   *        'dom1',    <- foldery/galerie podrzedne
   *        'dom2',
   *
   *    'folders': {                         <- w tym miejscu znajduja sie informacje tylko o folderach
   *      'dom1': {                          <- identyfikator folderu
   *        'name':     'Villa le Stella',   <- nazwa folderu (moze byc na wzor katalogow galerii na dysku
   *        'date':     '2010-12-12',        <- data utworzenia folderu
   *        'galeries': 5 },                 <- ilosc galerii w folderze
   *      'dom2': { 
   *        'name':     'Villa Gdańsk',
   *        'date':     '2010-12-15',
   *        'galeries': 4 },
   *
   *    'galleries': {                                     <- w tym miejscu znajduja sie informacje tylko o galeriach i ich zdjeciach
   *      'pokoj1': {                                      <- identyfikator galeri
   *        'name':  'Apartament GROTTGERA',               <- nazwa galeri
   *        'date':  '2009-12-12',                         <- data utworzenia galeri
   *        'photos': [ { 'src' : '1.jpg',                 <- zdjecia w galeri (nazwa pliku, description - opis)
   *                      'desc': 'Szerokie...' },
   *                    { 'src' : '2.jpg',
   *                      'desc': 'Pokój gościnny...' }, 
   */   
  
  utiles.json[ 'InSSzoom^data' ] = {
    'tree': {
      'root': [
        'dom1',
        'dom2',
        'pokoj8',
        'pokoj9',
        'pokoj10',
        'pokoj11',
        'pokoj12',
        'pokoj13',
        'pokoj14',
        'pokoj15'
      ],
      'dom1': [
        'dom3',
        'pokoj1',
        'pokoj2',
        'pokoj3'
      ],
      'dom2': [
        'pokoj4',
        'pokoj5',
        'pokoj6',
        'pokoj7'
      ],
      'dom3': [
        'pokoj16',
        'pokoj17'
      ],
    },    
    'folders': {
      'dom1': { 
        'name':     'Villa le Stella',
        'date':     '2010-12-12',
        'galeries': 5 },
      'dom2': { 
        'name':     'Villa Gdańsk',
        'date':     '2010-12-15',
        'galeries': 4 },
      'dom3': { 
        'name':     'Villa Makoszow',
        'date':     '2010-12-19',
        'galeries': 2 },
    },
    'galleries': {
      'pokoj1': { 
        'name':  'Apartament GROTTGERA',
        'date':  '2009-12-12',
        'photos': [ { 'src' : '1.jpg',
                      'desc': 'Szerokie łożko w dobrze naświetlonej sypialni' },
                    { 'src' : '2.jpg',
                      'desc': 'Pokój gościnny' }, 
                    { 'src' : '3.jpg',
                      'desc': 'Przestrzenny salon' }, 
                    { 'src' : '4.jpg',
                      'desc': 'Praktyczna kuchnia z wielkim oknem nad zlewozmywakiem' }, 
                    { 'src' : '5.jpg',
                      'desc': 'Jasna łazienka z wanno-prysznicem' }, 
                    { 'src' : '6.jpg',
                      'desc': 'Piękne usytuowanie apartamentu nad wodą' } 
        ] 
      },
      'pokoj2': { 
        'name':  'Apartament SILESIA',
        'date':  '2009-12-12',
        'photos': [ { 'src' : '1.jpg',
                      'desc': '' },
                    { 'src' : '2.jpg',
                      'desc': '' }, 
                    { 'src' : '3.jpg',
                      'desc': '' }, 
                    { 'src' : '4.jpg',
                      'desc': '' }, 
                    { 'src' : '5.jpg',
                      'desc': '' }, 
                    { 'src' : '6.jpg',
                      'desc': '' } 
        ] 
      },
      'pokoj3': { 
        'name':  'Apartament Nad Biskupicą',
        'date':  '2009-12-12',
        'photos': [ { 'src' : '1.jpg',
                      'desc': '' },
                    { 'src' : '2.jpg',
                      'desc': '' }, 
                    { 'src' : '3.jpg',
                      'desc': '' }, 
                    { 'src' : '4.jpg',
                      'desc': '' }, 
                    { 'src' : '5.jpg',
                      'desc': '' }, 
                    { 'src' : '6.jpg',
                      'desc': '' } 
        ] 
      },
      'pokoj4': { 
        'name':  'Apartament JASZMIN',
        'date':  '2009-12-12',
        'photos': [ { 'src' : '1.jpg',
                      'desc': '' },
                    { 'src' : '2.jpg',
                      'desc': '' }, 
                    { 'src' : '3.jpg',
                      'desc': '' }, 
                    { 'src' : '4.jpg',
                      'desc': '' }, 
                    { 'src' : '5.jpg',
                      'desc': '' }, 
                    { 'src' : '6.jpg',
                      'desc': '' } 
        ] 
      },
      'pokoj5': { 
        'name':  'Apartament MAGNOLIA',
        'date':  '2009-12-12',
        'photos': [ { 'src' : '1.jpg',
                      'desc': '' },
                    { 'src' : '2.jpg',
                      'desc': '' }, 
                    { 'src' : '3.jpg',
                      'desc': '' }, 
                    { 'src' : '4.jpg',
                      'desc': '' }, 
                    { 'src' : '5.jpg',
                      'desc': '' }, 
                    { 'src' : '6.jpg',
                      'desc': '' } 
        ] 
      },
      'pokoj6': { 
        'name':  'Apartament MANHATAN',
        'date':  '2009-12-12',
        'photos': [ { 'src' : '1.jpg',
                      'desc': '' },
                    { 'src' : '2.jpg',
                      'desc': '' }, 
                    { 'src' : '3.jpg',
                      'desc': '' }, 
                    { 'src' : '4.jpg',
                      'desc': '' } 
        ] 
      },
      'pokoj7': { 
        'name':  'Apartament AKWARELA',
        'date':  '2009-12-12',
        'photos': [ { 'src' : '1.jpg',
                      'desc': '' },
                    { 'src' : '2.jpg',
                      'desc': '' }, 
                    { 'src' : '3.jpg',
                      'desc': '' }, 
                    { 'src' : '4.jpg',
                      'desc': '' }, 
                    { 'src' : '5.jpg',
                      'desc': '' }, 
                    { 'src' : '6.jpg',
                      'desc': '' } 
        ] 
      },
      'pokoj8': { 
        'name':  'Apartament AMOREK',
        'date':  '2009-12-12',
        'photos': [ { 'src' : '1.jpg',
                      'desc': '' },
                    { 'src' : '2.jpg',
                      'desc': '' }, 
                    { 'src' : '3.jpg',
                      'desc': '' }, 
                    { 'src' : '4.jpg',
                      'desc': '' }, 
                    { 'src' : '5.jpg',
                      'desc': '' } 
        ] 
      },
      'pokoj9': { 
        'name':  'Apartament POD KASZTANAMI',
        'date':  '2009-12-12',
        'photos': [ { 'src' : '1.jpg',
                      'desc': '' },
                    { 'src' : '2.jpg',
                      'desc': '' }, 
                    { 'src' : '3.jpg',
                      'desc': '' }, 
                    { 'src' : '4.jpg',
                      'desc': '' }, 
                    { 'src' : '5.jpg',
                      'desc': '' }, 
                    { 'src' : '6.jpg',
                      'desc': '' } 
        ] 
      },
      'pokoj10': { 
        'name':  'Apartament LISIA NORA',
        'date':  '2009-12-12',
        'photos': [ { 'src' : '1.jpg',
                      'desc': '' },
                    { 'src' : '2.jpg',
                      'desc': '' }, 
                    { 'src' : '3.jpg',
                      'desc': '' }, 
                    { 'src' : '4.jpg',
                      'desc': '' }, 
                    { 'src' : '5.jpg',
                      'desc': '' }, 
                    { 'src' : '6.jpg',
                      'desc': '' } 
        ] 
      },
      'pokoj11': { 
        'name':  'Apartament MIGDAŁOWY',
        'date':  '2009-12-12',
        'photos': [ { 'src' : '1.jpg',
                      'desc': '' },
                    { 'src' : '2.jpg',
                      'desc': '' }, 
                    { 'src' : '3.jpg',
                      'desc': '' }, 
                    { 'src' : '4.jpg',
                      'desc': '' }, 
                    { 'src' : '5.jpg',
                      'desc': '' } 
        ] 
      },
      'pokoj12': { 
        'name':  'Apartament WENUS',
        'date':  '2009-12-12',
        'photos': [ { 'src' : '1.jpg',
                      'desc': '' },
                    { 'src' : '2.jpg',
                      'desc': '' }, 
                    { 'src' : '3.jpg',
                      'desc': '' }, 
                    { 'src' : '4.jpg',
                      'desc': '' }, 
                    { 'src' : '5.jpg',
                      'desc': '' }, 
                    { 'src' : '6.jpg',
                      'desc': '' } 
        ] 
      },
      'pokoj13': { 
        'name':  'Apartament MARS',
        'date':  '2009-12-12',
        'photos': [ { 'src' : '1.jpg',
                      'desc': '' },
                    { 'src' : '2.jpg',
                      'desc': '' }, 
                    { 'src' : '3.jpg',
                      'desc': '' }, 
                    { 'src' : '4.jpg',
                      'desc': '' }, 
                    { 'src' : '5.jpg',
                      'desc': '' }, 
                    { 'src' : '6.jpg',
                      'desc': '' } 
        ] 
      },
      'pokoj14': { 
        'name':  'Apartament ORLIK',
        'date':  '2009-12-12',
        'photos': [ { 'src' : '1.jpg',
                      'desc': '' },
                    { 'src' : '2.jpg',
                      'desc': '' }, 
                    { 'src' : '3.jpg',
                      'desc': '' }, 
                    { 'src' : '4.jpg',
                      'desc': '' }, 
                    { 'src' : '5.jpg',
                      'desc': '' }, 
                    { 'src' : '6.jpg',
                      'desc': '' } 
        ] 
      },
      'pokoj15': { 
        'name':  'Apartament CHIANTI',
        'date':  '2009-12-12',
        'photos': [ { 'src' : '1.jpg',
                      'desc': '' },
                    { 'src' : '2.jpg',
                      'desc': '' }, 
                    { 'src' : '3.jpg',
                      'desc': '' }, 
                    { 'src' : '4.jpg',
                      'desc': '' } 
        ] 
      },
      'pokoj16': { 
        'name':  'Apartament RUMCAJS',
        'date':  '2009-12-12',
        'photos': [ { 'src' : '1.jpg',
                      'desc': '' },
                    { 'src' : '2.jpg',
                      'desc': '' }, 
                    { 'src' : '3.jpg',
                      'desc': '' }, 
                    { 'src' : '4.jpg',
                      'desc': '' } 
        ] 
      },
    }
  };
