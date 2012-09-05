  /********************************/
  /* InSSstructHTML.dev.struct.js */                   
  /********************************/
  /* - format JSON, struktura HTML, style CSS 
   */   
  
  utiles.json[ 'InSSstructHTML^data' ] = new Object();
  utiles.json[ 'InSSstructHTML^special' ] = new Object();
  utiles.json[ 'InSSstructHTML^css' ] = new Object();

  
/* kalendarz */
/*
  utiles.json[ 'calendar' ] = {
    'html': {
      '': {
    '_gallery_index_bg': {
      'sort':       'div',
      'parent':     ''
    },
       booCal
      }
    },
    'css': {
    
    },
    'special': {
    
    }
  };
  
    div.table_ok {                            
      margin:7px 0 0 7px;
      clear:both;
    }                                                               
    div.cell_ok_header {
     margin:2px 2px 3px 3px;
     float:left;
     width:47px;
     height:20px;
     text-align:center;
     color:navy;
     opacity:0.1;
    }
    div.cell_ok_ {
     margin:2px 2px 3px 3px;
     float:left;
     opacity: 0.2;
     border: 1px solid silver;
     width:45px;
     height:43px;
     background:white;
     box-shadow: 1px 1px 3px silver;
     -moz-box-shadow: 1px 1px 3px silver;
     -webkit-box-shadow: 1px 1px 3px silver;
     border-radius: 5px;
     -moz-border-radius: 5px;
     -webkit-border-radius: 5px;
    }
    div.cell_ok {
     margin:2px 2px 3px 3px;
     float:left;
     background:white;
     opacity: 0.5;
     border: 1px solid #099;
     width:45px;
     height:43px;
     box-shadow: 1px 1px 3px #099;
     -moz-box-shadow: 1px 1px 3px #099;
     -webkit-box-shadow: 1px 1px 3px #099;
     border-radius: 5px;
     -moz-border-radius: 5px;
     -webkit-border-radius: 5px;
    }

  
              <div class="header">
              <div class="txt">Wybrany termin</div>
              <div class="func">
                <span style="font-weight:bold;color:white">2011-12-12</span>, dni <span style="font-weight:bold;color:white;">12</span>/12 
                <img src="buttons/celownik.png" onclick="changeCalendarTest();" style="cursor:pointer;margin-left:5px;" align=right />
              </div>
            </div>                                                               
            <div class="break"></div>
            <div class="body" style="height:420px;background:white;">
            
            <div id="g01_calendar_month_year" style="-moz-border-radius: 0px 0px 45px 45px;font-size:18px;padding:5px 0;height:20px;width:380px;color:white;text-align:center;margin-top:0px;clear:both;background:navy;">
              <span style="">&laquo;</span> 
              <span id="g01_calendar_month_year_y"
                    style="cursor:pointer;"
                    onclick="calendarSluTableOpenClose();"
                    onmouseover="this.style.color='yellow';"
                    onmouseout="this.style.color='white';">Październik</span> 
              <span id="g01_calendar_month_year_m"
                    style="cursor:pointer;"
                    onclick="calendarSluTableOpenClose();"
                    onmouseover="this.style.color='yellow';"
                    onmouseout="this.style.color='white';">2011</span> <span>&raquo;</span>
              <div  id="g01_calendar_month_year_slu"
                    style="display:none;z-index:5;opacity:0.9;position:relative;top:5px;width:94%;height:230px;background:white;
                           -moz-box-shadow: 0px 0px 25px silver;border:1px solid silver;
                           -moz-border-radius: 15px 15px 15px 15px;padding:3%">
                <div class="slu_booking_object_details_header">
                  Słownik miesięcy
                </div>
                <div class="slu_booking_object_details_exit">
                  <img src="buttons/_testowe/large/dialog-ok.png" style="opacity:0.5;margin-right:4px;cursor:pointer;"
                        onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.5';"/>
                  <img src="buttons/_testowe/large/dialog-close.png" style="opacity:0.5;cursor:pointer;"
                        onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.5';"/>
                </div>
                <div class="calendar_slu_table;">
                  <div class="calendar_slu_row">
                    <div  id="year1" 
                          onmouseover="calendarSluTableChange(this,true);" 
                          onmouseout="calendarSluTableChange(this,false);" 
                          onclick="calendarSluTableClick(this,'year');" 
                          class="calendar_slu_cell_choose">2011</div>
                    <div  id="year2" 
                          onmouseover="calendarSluTableChange(this,true);" 
                          onmouseout="calendarSluTableChange(this,false);" 
                          onclick="calendarSluTableClick(this,'year');" 
                          class="calendar_slu_cell">2012</div>
                    <div  id="year3" 
                          onmouseover="calendarSluTableChange(this,true);" 
                          onmouseout="calendarSluTableChange(this,false);" 
                          onclick="calendarSluTableClick(this,'year');" 
                          class="calendar_slu_cell">2013</div>
                  </div>
                  <div class="calendar_slu_row">
                    <div  id="month1" 
                          onmouseover="calendarSluTableChange(this,true);" 
                          onmouseout="calendarSluTableChange(this,false);" 
                          onclick="calendarSluTableClick(this,'month');" 
                          class="calendar_slu_cell_choose">Styczeń</div>
                    <div  id="month2" 
                          onmouseover="calendarSluTableChange(this,true);" 
                          onmouseout="calendarSluTableChange(this,false);" 
                          onclick="calendarSluTableClick(this,'month');" 
                          class="calendar_slu_cell">Luty</div>
                    <div  id="month3" 
                          onmouseover="calendarSluTableChange(this,true);" 
                          onmouseout="calendarSluTableChange(this,false);" 
                          onclick="calendarSluTableClick(this,'month');" 
                          class="calendar_slu_cell">Marzec</div>
                  </div>
                  <div class="calendar_slu_row">
                    <div  id="month4" 
                          onmouseover="calendarSluTableChange(this,true);" 
                          onmouseout="calendarSluTableChange(this,false);" 
                          onclick="calendarSluTableClick(this,'month');" 
                          class="calendar_slu_cell">Kwiecień</div>
                    <div  id="month5" 
                          onmouseover="calendarSluTableChange(this,true);" 
                          onmouseout="calendarSluTableChange(this,false);" 
                          onclick="calendarSluTableClick(this,'month');" 
                          class="calendar_slu_cell">Maj</div>
                    <div  id="month6" 
                          onmouseover="calendarSluTableChange(this,true);" 
                          onmouseout="calendarSluTableChange(this,false);" 
                          onclick="calendarSluTableClick(this,'month');" 
                          class="calendar_slu_cell">Czerwiec</div>
                  </div>
                  <div class="calendar_slu_row">
                    <div  id="month7" 
                          onmouseover="calendarSluTableChange(this,true);" 
                          onmouseout="calendarSluTableChange(this,false);" 
                          onclick="calendarSluTableClick(this,'month');" 
                          class="calendar_slu_cell">Lipiec</div>
                    <div  id="month8" 
                          onmouseover="calendarSluTableChange(this,true);" 
                          onmouseout="calendarSluTableChange(this,false);" 
                          onclick="calendarSluTableClick(this,'month');" 
                          class="calendar_slu_cell">Sierpień</div>
                    <div  id="month9" 
                          onmouseover="calendarSluTableChange(this,true);" 
                          onmouseout="calendarSluTableChange(this,false);" 
                          onclick="calendarSluTableClick(this,'month');" 
                          class="calendar_slu_cell">Wrzesień</div>
                  </div>
                  <div class="calendar_slu_row">
                    <div  id="month10" 
                          onmouseover="calendarSluTableChange(this,true);" 
                          onmouseout="calendarSluTableChange(this,false);" 
                          onclick="calendarSluTableClick(this,'month');" 
                          class="calendar_slu_cell">Październik</div>
                    <div  id="month11" 
                          onmouseover="calendarSluTableChange(this,true);" 
                          onmouseout="calendarSluTableChange(this,false);" 
                          onclick="calendarSluTableClick(this,'month');" 
                          class="calendar_slu_cell">Listopad</div>
                    <div  id="month12" 
                          onmouseover="calendarSluTableChange(this,true);" 
                          onmouseout="calendarSluTableChange(this,false);" 
                          onclick="calendarSluTableClick(this,'month');" 
                          class="calendar_slu_cell">Grudzień</div>
                  </div>
                </div>
              </div>
            </div>                                                                                         

            <div id="calendar_ok" class="table_ok">
                <div class="cell_ok_header">Pn</div>
                <div class="cell_ok_header">Wt</div>
                <div class="cell_ok_header">Śr</div>
                <div class="cell_ok_header">Czw</div>
                <div class="cell_ok_header">Pi</div>
                <div class="cell_ok_header">So</div>
                <div class="cell_ok_header" style="opacity:1;color:red;">N</div>
                <div class="cell_ok_" id="calgrid_0">25</div>
                <div class="cell_ok_" id="calgrid_1">26</div>
                <div class="cell_ok_" id="calgrid_2">27</div>
                <div class="cell_ok_" id="calgrid_3">28</div>
                <div class="cell_ok_" id="calgrid_4">29</div>
                <div class="cell_ok_" id="calgrid_5">30</div>
                <div class="cell_ok_" id="calgrid_6">31</div>
                <div class="cell_ok" id="calgrid_7">&nbsp;1</div>
                <div class="cell_ok" id="calgrid_8">&nbsp;2</div>
                <div class="cell_ok" id="calgrid_9">&nbsp;3</div>
                <div class="cell_ok" id="calgrid_10">&nbsp;4</div>
                <div class="cell_ok" id="calgrid_11">&nbsp;5</div>
                <div class="cell_ok" id="calgrid_12">&nbsp;6</div>
                <div class="cell_ok" id="calgrid_13">&nbsp;7</div>
                <div class="cell_ok" id="calgrid_14">&nbsp;8</div>
                <div class="cell_ok" id="calgrid_15">&nbsp;9</div>
                <div class="cell_ok" id="calgrid_16">10</div>
                <div class="cell_ok" id="calgrid_17" style="-moz-box-shadow: 1px 1px 3px red;background:#FCD4D6;border:1px solid red;">11</div>
                <div class="cell_ok" id="calgrid_18">12</div>
                <div class="cell_ok" id="calgrid_19">13</div>
                <div class="cell_ok" id="calgrid_20">14</div>
                <div class="cell_ok" id="calgrid_21">15</div>
                <div class="cell_ok" id="calgrid_22">16</div>
                <div class="cell_ok" id="calgrid_23">17</div>
                <div class="cell_ok" id="calgrid_24">18</div>
                <div class="cell_ok" id="calgrid_25">19</div>
                <div class="cell_ok" id="calgrid_26">20</div>
                <div class="cell_ok" id="calgrid_27">21</div>
                <div class="cell_ok" id="calgrid_28">22</div>
                <div class="cell_ok" id="calgrid_29">23</div>
                <div class="cell_ok" id="calgrid_30">24</div>
                <div class="cell_ok" id="calgrid_31">25</div>
                <div class="cell_ok" id="calgrid_32">26</div>
                <div class="cell_ok" id="calgrid_33">27</div>
                <div class="cell_ok" id="calgrid_34">28</div>      
                <div class="cell_ok" id="calgrid_35">29</div>
                <div class="cell_ok" id="calgrid_36" style="-moz-box-shadow: 1px 1px 3px green;background:#C2FCDC;border:1px solid green;">30</div>
                <div class="cell_ok_" id="calgrid_37" style="-moz-box-shadow: 1px 1px 3px green;background:#C2FCDC;border:1px solid green;">&nbsp;1</div>
                <div class="cell_ok_" id="calgrid_38">&nbsp;2</div>
                <div class="cell_ok_" id="calgrid_39">&nbsp;3</div>
                <div class="cell_ok_" id="calgrid_40">&nbsp;4</div>
                <div class="cell_ok_" id="calgrid_41">&nbsp;5</div>
                <div class="cell_ok_" id="calgrid_42">&nbsp;6</div>
                <div class="cell_ok_" id="calgrid_43">&nbsp;7</div>
                <div class="cell_ok_" id="calgrid_44">&nbsp;8</div>
                <div class="cell_ok_" id="calgrid_45">&nbsp;9</div>
                <div class="cell_ok_" id="calgrid_46">10</div>
                <div class="cell_ok_" id="calgrid_47">11</div>
                <div class="cell_ok_" id="calgrid_48">12</div>
            </div>
            <div style="margin-top:-380px;width:20px;height:370px;color:white;font-size:32px;-moz-border-radius:20px 0 0 20px;float:right;background:#EFEFFF;opacity:0.8;-moz-box-shadow: -5px 0px 15px #EFEFFF;text-shadow:0px 0px 2px navy;">
              <br /><br /><br /><br />&raquo;
            </div>
            
            <div style="margin-top:-380px;width:20px;height:370px;color:white;font-size:32px;-moz-border-radius:0 20px 20px 0;float:left;background:#EFEFFF;opacity:0.8;-moz-box-shadow: 5px 0px 15px #EFEFFF;text-shadow:0px 0px 2px navy;">
              <br /><br /><br /><br />&laquo;
            </div>

            </div>
          </div>
*/