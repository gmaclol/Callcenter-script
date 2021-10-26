function waitForElementToDisplay (selector, callback) {
  const startTimeInMs = Date.now();
  (function loopSearch () {
    if (document.querySelector(selector) != null) {
      return callback
    } else {
      setTimeout(function () {
        if (10000 && Date.now() - startTimeInMs > 10000) {
          return
        }
        loopSearch()
      }, 250)
    }
  })()
}

function simulateMouseClick (targetNode) {
  function triggerMouseEvent (targetNode, eventType) {
    const clickEvent = document.createEvent('MouseEvents')
    clickEvent.initEvent(eventType, true, true)
    targetNode.dispatchEvent(clickEvent)
  }
  ['mouseover', 'mousedown', 'mouseup', 'click'].forEach(function (eventType) {
    triggerMouseEvent(targetNode, eventType)
  })
}

function wip () {
  if (document.querySelector('#MM_step_row_Esito > td.MM_step_summary_item') != null) {
    document.querySelector('#MM_Hang').click()
    setTimeout(function () {
      waitForElementToDisplay(('#MinAutoRecall_Button0_span'), simulateMouseClick(document.querySelector('#MinAutoRecall_Button0_span')))
    }, 4000)
  } else {
    document.querySelector('#MM_step_row_Esito > td.MM_step_summary_item').click()
    document.querySelector('#MM_Hang').click()
    setTimeout(function () {
      waitForElementToDisplay(('#MinAutoRecall_Button0_span'), simulateMouseClick(document.querySelector('#MinAutoRecall_Button0_span')))
    }, 4000)
  }
}

function cliente () {
  if (document.querySelector('#MM_step_row_Esito > td.MM_step_summary_item') != null) {
    document.querySelector('#MM_Hang').click()
    setTimeout(function () {
      waitForElementToDisplay(('#MinAutoRecall_Button2_span'), simulateMouseClick(document.querySelector('#MinAutoRecall_Button2_span')))
    }, 4000)
  } else {
    document.querySelector('#MM_step_row_Esito > td.MM_step_summary_item').click()
    document.querySelector('#MM_Hang').click()
    setTimeout(function () {
      waitForElementToDisplay(('#MinAutoRecall_Button2_span'), simulateMouseClick(document.querySelector('#MinAutoRecall_Button2_span')))
    }, 4000)
  }
}

function rifiuto () {
  if (document.querySelector('#MM_step_row_Esito > td.MM_step_summary_item') != null) {
    document.querySelector('#MM_Hang').click()
    setTimeout(function () {
      waitForElementToDisplay(('#MinAutoRecall_Button3_span'), simulateMouseClick(document.querySelector('#MinAutoRecall_Button3_span')))
    }, 4000)
  } else {
    document.querySelector('#MM_step_row_Esito > td.MM_step_summary_item').click()
    document.querySelector('#MM_Hang').click()
    setTimeout(function () {
      waitForElementToDisplay(('#MinAutoRecall_Button3_span'), simulateMouseClick(document.querySelector('#MinAutoRecall_Button3_span')))
    }, 4000)
  }
}

function cambiocliente () {
  if (document.querySelector('#MM_step_row_Esito > td.MM_step_summary_item') != null) {
    document.querySelector('#MM_Hang').click()
    waitForElementToDisplay(('#Esito_IDStato_t'), simulateMouseClick(document.querySelector('#Esito_IDStato_t_Img')))
    setTimeout(function () {
      waitForElementToDisplay(('#tbody_Esito_IDStato > tr:nth-child(20) > td:nth-child(2)'), simulateMouseClick(document.querySelector('#tbody_Esito_IDStato > tr:nth-child(20) > td:nth-child(2)')))
      waitForElementToDisplay(('#Esito_MotivoRifiuto_t'), simulateMouseClick(document.querySelector('#Esito_ConfermaEsito_span')))
    }, 4000)
  } else {
    document.querySelector('#MM_step_row_Esito > td.MM_step_summary_item').click()
    document.querySelector('#MM_Hang').click()
    waitForElementToDisplay(('#Esito_IDStato_t'), simulateMouseClick(document.querySelector('#Esito_IDStato_t_Img')))
    setTimeout(function () {
      waitForElementToDisplay(('#tbody_Esito_IDStato > tr:nth-child(20) > td:nth-child(2)'), simulateMouseClick(document.querySelector('#tbody_Esito_IDStato > tr:nth-child(20) > td:nth-child(2)')))
      waitForElementToDisplay(('#Esito_MotivoRifiuto_t'), simulateMouseClick(document.querySelector('#Esito_ConfermaEsito_span')))
    }, 4000)
  }
}

function noretefissa () {
  if (document.querySelector('#MM_step_row_Esito > td.MM_step_summary_item') != null) {
    document.querySelector('#MM_Hang').click()
    waitForElementToDisplay(('#Esito_IDStato_t'), simulateMouseClick(document.querySelector('#Esito_IDStato_t_Img')))
    setTimeout(function () {
      waitForElementToDisplay(('#tbody_Esito_IDStato > tr:nth-child(16) > td:nth-child(2)'), simulateMouseClick(document.querySelector('#tbody_Esito_IDStato > tr:nth-child(16) > td:nth-child(2)')))
      waitForElementToDisplay(('#Esito_MotivoRifiuto_t'), simulateMouseClick(document.querySelector('#Esito_ConfermaEsito_span')))
    }, 4000)
  } else {
    document.querySelector('#MM_step_row_Esito > td.MM_step_summary_item').click()
    document.querySelector('#MM_Hang').click()
    waitForElementToDisplay(('#Esito_IDStato_t'), simulateMouseClick(document.querySelector('#Esito_IDStato_t_Img')))
    setTimeout(function () {
      waitForElementToDisplay(('#tbody_Esito_IDStato > tr:nth-child(16) > td:nth-child(2)'), simulateMouseClick(document.querySelector('#tbody_Esito_IDStato > tr:nth-child(16) > td:nth-child(2)')))
      waitForElementToDisplay(('#Esito_MotivoRifiuto_t'), simulateMouseClick(document.querySelector('#Esito_ConfermaEsito_span')))
    }, 4000)
  }
}

function koirreperibile () {
  if (document.querySelector('#MM_step_row_Esito > td.MM_step_summary_item') != null) {
    document.querySelector('#MM_Hang').click()
    waitForElementToDisplay(('#Esito_IDStato_t'), simulateMouseClick(document.querySelector('#Esito_IDStato_t_Img')))
    setTimeout(function () {
      waitForElementToDisplay(('#tbody_Esito_IDStato > tr:nth-child(22) > td:nth-child(2)'), simulateMouseClick(document.querySelector('#tbody_Esito_IDStato > tr:nth-child(22) > td:nth-child(2)')))
      waitForElementToDisplay(('#Esito_MotivoRifiuto_t'), simulateMouseClick(document.querySelector('#Esito_ConfermaEsito_span')))
    }, 4000)
  } else {
    document.querySelector('#MM_step_row_Esito > td.MM_step_summary_item').click()
    document.querySelector('#MM_Hang').click()
    waitForElementToDisplay(('#Esito_IDStato_t'), simulateMouseClick(document.querySelector('#Esito_IDStato_t_Img')))
    setTimeout(function () {
      waitForElementToDisplay(('#tbody_Esito_IDStato > tr:nth-child(22) > td:nth-child(2)'), simulateMouseClick(document.querySelector('#tbody_Esito_IDStato > tr:nth-child(22) > td:nth-child(2)')))
      waitForElementToDisplay(('#Esito_MotivoRifiuto_t'), simulateMouseClick(document.querySelector('#Esito_ConfermaEsito_span')))
    }, 4000)
  }
}

document.onkeyup = function (e) {
  switch (true) {
    case (e.ctrlKey && e.which === 96):
      wip()
      break
    case (e.ctrlKey && e.which === 97):
      cliente()
      break
    case (e.ctrlKey && e.which === 98):
      rifiuto()
      break
    case (e.ctrlKey && e.which === 99):
      cambiocliente()
      break
    case (e.ctrlKey && e.which === 100):
      noretefissa()
      break
    case (e.ctrlKey && e.which === 101):
      koirreperibile()
  }
}
