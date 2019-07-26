
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function openObj(evt, objName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(objName).style.display = "block";
  evt.currentTarget.className += " active";
}

function onLoad() {
  var parent = document.getElementById('Skills');
  for (i = 0; i < skill.length; i++){
    var element = document.createElement('div');
    var element2 = document.createElement('div');
    var element3 = document.createElement('div');
    var int = skill[i].level;
    element2.setAttribute('id','myProgress');
    element.setAttribute('class', 'column');
    element3.setAttribute('id', 'myBar');
    element3.style.width = parseInt(skill[i].level)+"%";
    element3.innerHTML = skill[i].level+"%";
    element2.innerHTML = skill[i].name;
    document.getElementById('Skills').appendChild(element);
    element.append(element2);
    element2.append(element3);
  }
}