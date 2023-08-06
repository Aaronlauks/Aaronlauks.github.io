function openTab(evt, section) {

  //get every content and make them unactive
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].className = tabcontent[i].className.replace(" active", "");
  }

  //get every button and make them unactive
  tablinks = document.getElementsByClassName("button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  //activate button and content that is called
  document.getElementById(section).className += " active";
  evt.currentTarget.className += " active";
}