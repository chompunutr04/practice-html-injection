//add class
function ca(classOrId, clList) {
    let el = document.querySelector(classOrId);
    return el.classList.add(clList);
  }
  
  //delete class
  function cd(classOrId, clList) {
    let el = document.querySelector(classOrId);
    return el.classList.remove(clList);
  }
  //query selector
function qs(classOrId) {
    return document.querySelector(classOrId);
  }