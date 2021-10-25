function waitForElementToDisplay(selector, callback) {
  var startTimeInMs = Date.now();
  (function loopSearch() {
    if (document.querySelector(selector) != null) {
      return callback;
    }
    else {
      setTimeout(function () {
        if (10000 && Date.now() - startTimeInMs > 10000)
          return;
        loopSearch();
      }, 700);
    }
  })();
}

function simulateMouseClick(targetNode) {
    function triggerMouseEvent(targetNode, eventType) {
        var clickEvent = document.createEvent('MouseEvents');
        clickEvent.initEvent(eventType, true, true);
        targetNode.dispatchEvent(clickEvent);
    }
    ["mouseover", "mousedown", "mouseup", "click"].forEach(function(eventType) { 
        triggerMouseEvent(targetNode, eventType);
    });
}

function wip(){
document.querySelector("#MM_step_row_Esito > td.MM_step_summary_item").click();
document.querySelector("#MM_Hang").click();
waitForElementToDisplay(("#MinAutoRecall_Button0_span"), simulateMouseClick(document.querySelector("#MinAutoRecall_Button0_span")));
}


function cliente(){
document.querySelector("#MM_step_row_Esito > td.MM_step_summary_item").click();
document.querySelector("#MM_Hang").click();
waitForElementToDisplay(("#MinAutoRecall_Button2_span"), simulateMouseClick(document.querySelector("#MinAutoRecall_Button2_span")));
}

function rifiuto(){
document.querySelector("#MM_step_row_Esito > td.MM_step_summary_item").click();
document.querySelector("#MM_Hang").click();
waitForElementToDisplay(("#MinAutoRecall_Button3_span"), simulateMouseClick(document.querySelector("#MinAutoRecall_Button3_span")));
}

function cambiocliente(){
document.querySelector("#MM_step_row_Esito > td.MM_step_summary_item").click();
document.querySelector("#MM_Hang").click();
waitForElementToDisplay(("#Esito_IDStato_t"), simulateMouseClick(document.querySelector("#Esito_IDStato_t_Img")));
waitForElementToDisplay(("#tbody_Esito_IDStato > tr:nth-child(20) > td:nth-child(2)"), simulateMouseClick(document.querySelector("#tbody_Esito_IDStato > tr:nth-child(20) > td:nth-child(2)")));
waitForElementToDisplay(("#Esito_MotivoRifiuto_t"), simulateMouseClick(document.querySelector("#Esito_ConfermaEsito_span")));               
}

function noretefissa(){
document.querySelector("#MM_step_row_Esito > td.MM_step_summary_item").click();
document.querySelector("#MM_Hang").click();
waitForElementToDisplay(("#Esito_IDStato_t"), simulateMouseClick(document.querySelector("#Esito_IDStato_t_Img")));
waitForElementToDisplay(("#tbody_Esito_IDStato > tr:nth-child(16) > td:nth-child(2)"), simulateMouseClick(document.querySelector("#tbody_Esito_IDStato > tr:nth-child(16) > td:nth-child(2)")));
waitForElementToDisplay(("#Esito_MotivoRifiuto_t"), simulateMouseClick(document.querySelector("#Esito_ConfermaEsito_span")));
}

function koirreperibile(){
document.querySelector("#MM_step_row_Esito > td.MM_step_summary_item").click();
document.querySelector("#MM_Hang").click();
waitForElementToDisplay(("#Esito_IDStato_t"), simulateMouseClick(document.querySelector("#Esito_IDStato_t_Img")));
waitForElementToDisplay(("#tbody_Esito_IDStato > tr:nth-child(22) > td:nth-child(2)"), simulateMouseClick(document.querySelector("#tbody_Esito_IDStato > tr:nth-child(22) > td:nth-child(2)")));
waitForElementToDisplay(("#Esito_MotivoRifiuto_t"), simulateMouseClick(document.querySelector("#Esito_ConfermaEsito_span")));
}

document.onkeyup = function(e) {
  if (e.ctrlKey && e.which === 96) {
    wip();
  } else if (e.ctrlKey && e.which === 97) {
    cliente();
  } else if (e.ctrlKey && e.which === 98) {
    rifiuto();
} else if (e.ctrlKey && e.which === 99) {
    cambiocliente();
} else if (e.ctrlKey && e.which === 100) {
    noretefissa();
} else if (e.ctrlKey && e.which === 101) {
    koirreperibile();
  } 
};
