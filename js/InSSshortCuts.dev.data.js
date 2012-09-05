  /*****************************/
  /* InSSshortCuts.dev.data.js */                   
  /*****************************/

  /* - format JSON, informacje o uzywanych skrotach klawiszowych
   * - przyklad:
   *    'info':{                            <- identyfikator grupy skrotow klawiszowych
   *      {'fun': 1,                        <- identyfikator funkcji wolajacej akcje pod danym klawiszem w danym kontekscie
   *       'lc':  '{lcScPrevPage}',         <- kod tlumaczenia nazwy grupy, skladnia {lc<IDENTYFIKATOR>}, gdzie <IDENTYFIKATOR> oznacza wlasciwy identyfikator
   *       'kc':  'Up'},                    <- key code - kod klawisza
   *      {'fun': 2,                        <- identyfikator funkcji wolajacej akcje pod danym klawiszem w danym kontekscie
   *       'lc':  '{lcScNextPage}',         <- kod tlumaczenia nazwy grupy
   *       'kc':  'Down',                   <- key code - kod klawisza
   *       'spec':'Alt'},                   <- special key code - kod klawisza specjalnego, z ktorym dziala dany skrot klawiszowy, np Alt+C, Ctrl+E
   */   

  utiles.json[ 'InSSshortCuts^keys' ] = {
    'info':[ 
      { 'fun':  1,  'kc': 'Up',         'lc': '{lcScInfoMenuNavigateUp}' },
      { 'fun':  2,  'kc': 'Down',       'lc': '{lcScInfoMenuNavigateDown}' },
      { 'fun':  3,  'kc': 'Left',       'lc': '{lcScInfoMenuNavigateLeft}' },
      { 'fun':  4,  'kc': 'Right',      'lc': '{lcScInfoMenuNavigateRight}' },
      { 'fun':  5,  'kc': 'Esc',        'lc': '{lcScInfoExit}' }
    ]
  };


  /* - format JSON, informacje o zdjeciach klawiszy
   * - przyklad:
   *    'Num0': {          <- identyfikator klawisza skrotu
   *      'num_row_0_T',   <- sufix nazwy pliku graficznego prezentujacego dany klawisz 
   *      '48',            <- kod ascii klawisza (jezeli pusty string - brak klawisza skrotu)
   *      '0'              <- symbol klawisza (wyswietlany w title/alt jako informacja o klawiszu skrotu 
   *    },                    (jezeli pusty string - brak klawisza skrotu)
   */   

  utiles.json[ 'InSSshortCuts^img' ] = {
  /* numeric */
    'Num0': [ 'num_row_0_T', '48', '0' ],
    'Num1': [ 'num_row_1_T', '49', '1' ],
    'Num2': [ 'num_row_2_T', '50', '2' ],
    'Num3': [ 'num_row_3_T', '51', '3' ],
    'Num4': [ 'num_row_4_T', '52', '4' ],
    'Num5': [ 'num_row_5_T', '53', '5' ],
    'Num6': [ 'num_row_6_T', '54', '6' ],
    'Num7': [ 'num_row_7_T', '55', '7' ],      
    'Num8': [ 'num_row_8_T', '56', '8' ],
    'Num9': [ 'num_row_9_T', '57', '9' ],
  /* letters */
    'A':  [ 'A_T', '65,97',  'A' ],
    'B':  [ 'B_T', '66,98',  'B' ],     
    'C':  [ 'C_T', '67,99',  'C' ],
    'D':  [ 'D_T', '68,100', 'D' ],
    'E':  [ 'E_T', '69,101', 'E' ],
    'F':  [ 'F_T', '70,102', 'F' ],
    'G':  [ 'G_T', '71,103', 'G' ],      
    'H':  [ 'H_T', '72,104', 'H' ],
    'I':  [ 'I_T', '73,105', 'I' ],
    'J':  [ 'J_T', '74,106', 'J' ],
    'K':  [ 'K_T', '75,107', 'K' ],
    'L':  [ 'L_T', '76,108', 'L' ],
    'M':  [ 'M_T', '77,109', 'M' ],
    'N':  [ 'N_T', '78,110', 'N' ],
    'O':  [ 'O_T', '79,111', 'O' ],
    'P':  [ 'P_T', '80,112', 'P' ],      
    'Q':  [ 'Q_T', '81,113', 'Q' ],
    'R':  [ 'R_T', '82,114', 'R' ],
    'S':  [ 'S_T', '83,115', 'S' ],
    'T':  [ 'T_T', '84,116', 'T' ],
    'U':  [ 'U_T', '85,117', 'U' ],
    'V':  [ 'V_T', '86,118', 'V' ],
    'W':  [ 'W_T', '87,119', 'W' ],
    'X':  [ 'X_T', '88,120', 'X' ],
    'Y':  [ 'Y_T', '89,121', 'Y' ],
    'Z':  [ 'Z_T', '90,122', 'Z' ],
  /* pad */         
    'Pad0Ins':    [ '0_Ins_T',   '', '' ],
    'Pad1End':    [ '1_End_T',   '', '' ],
    'Pad2Down':   [ '2_Down_T',  '', '' ],
    'Pad3PgDn':   [ '3_PgDn_T',  '', '' ],
    'Pad4Left':   [ '4_Left_T',  '', '' ],      
    'Pad5':       [ '5_T',       '', '' ],
    'Pad6Right':  [ '6_Right_T', '', '' ],
    'Pad7Home':   [ '7_Home_T',  '', '' ],
    'Pad8Up':     [ '8_Up_T',    '', '' ],
    'Pad9PgUp':   [ '9_PgUp_T',  '', '' ],
  /* arrow keys */
    'Up':     [ 'Arrow_Up_T',    '38', 'UP ARROW' ],
    'Right':  [ 'Arrow_Right_T', '39', 'RIGHT ARROW' ],
    'Down':   [ 'Arrow_Down_T',  '40', 'DOWN ARROW' ],
    'Left':   [ 'Arrow_Left_T',  '37', 'LEFT ARROW' ],
  /* function */
    'F1':   [ 'F1_T',  '111', 'F1' ],
    'F2':   [ 'F2_T',  '112', 'F2' ],
    'F3':   [ 'F3_T',  '113', 'F3' ],
    'F4':   [ 'F4_T',  '114', 'F4' ],
    'F5':   [ 'F5_T',  '115', 'F5' ],
    'F6':   [ 'F6_T',  '116', 'F6' ],
    'F7':   [ 'F7_T',  '117', 'F7' ],
    'F8':   [ 'F8_T',  '118', 'F8' ],
    'F9':   [ 'F9_T',  '119', 'F9' ],
    'F10':  [ 'F10_T', '120', 'F10' ],
    'F11':  [ 'F11_T', '121', 'F11' ],
    'F12':  [ 'F12_T', '122', 'F12' ],
  /* special */
    'Alt':                  [ 'Alt_T',                    '17', 'Alt'         ],
    'Asterisk':             [ 'Asterisk_T',               '42', '*'           ],
    'Backspace':            [ 'Backspace_T',              '8',  'BACKSPACE'   ],
    'BracketsLeft':         [ 'Brackets_Left_T',          '91', '['           ],
    'BracketsRight':        [ 'Brackets_Right_T',         '93', ']'           ],
    'CapsLock':             [ 'Caps_Lock_T',              '',   ''            ],
    'ColonSemicolon':       [ 'Colon_Semicolon_T',        '59', ';'           ],
    'Comma':                [ 'Comma_T',                  '44', ','           ],
    'Ctrl':                 [ 'Ctrl_T',                   '18', 'Ctrl'        ],
    'Del':                  [ 'Del_T',                    '',   ''            ],
    'Delete':               [ 'Delete_T',                 '',   ''            ],
    'Dot':                  [ 'Dot_T',                    '',   ''            ],      
    'End':                  [ 'End_T',                    '35', 'END'         ],
    'EnterPad':             [ 'Enter_Pad_T',              '13', 'ENTER'       ],
    'Enter':                [ 'Enter_T',                  '13', 'ENTER'       ],
    'Esc':                  [ 'Esc_T',                    '27', 'ESC'         ],
    'ForwardSlash':         [ 'Forward_Slash_T',          '47', '/'           ],                                                   
    'Home':                 [ 'Home_T',                   '36', 'HOME'        ],
    'Insert':               [ 'Insert_T',                 '45', 'INSERT'      ],
    'Menu':                 [ 'Menu_T',                   '93', 'MENU'        ],
    'Minus':                [ 'Minus_T',                  '45', '-'           ],
    'NumLock':              [ 'Num_Lock_T',               '',   ''            ],
    'NumRowEquals':         [ 'Num_Row_Equals_T',         '61', '='           ],
    'NumRowMinus':          [ 'Num_Row_Minus_T',          '45', '-'           ],
    'PageDown':             [ 'Page_Down_T',              '34', 'PAGE DOWN'   ],
    'PageUp':               [ 'Page_Up_T',                '33', 'PAGE UP'     ],
    'PauseBreak':           [ 'Pause_Break_T',            '19', 'BREAK'       ],
    'PipeBackslash':        [ 'Pipe_Backslash_T',         '92', '\\'          ],
    'Plus':                 [ 'Plus_T',                   '43', '+'           ],
    'PrintScreen':          [ 'Print_Screen_T',           '',   ''            ],
    'QuestionForwardSlash': [ 'Question_Forward_slash_T', '47', '/'           ],
    'QuotationMarks':       [ 'Quotation_Marks_T',        '',   ''            ],
    'ScrollLock':           [ 'Scroll_Lock_T',            '',   ''            ],
    'Shift':                [ 'Shift_T',                  '',   ''            ],
    'SpaceBar':             [ 'Space_Bar_T',              '32', 'SPACEBAR'    ],
    'Tab':                  [ 'Tab_T',                    '9',  'TAB'         ],
    'Tylda':                [ 'num_row_00_T',             '',   ''            ],
    'Windows':              [ 'Windows_T',                '',   ''            ]
  };
