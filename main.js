
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
  for (var i = skill.length -1; i >= 0; i--){
    reverse = skill[i].name.split("").reverse().join("");
    console.log(reverse);
    var element = document.createElement('div');
    var element2 = document.createElement('div');
    var element3 = document.createElement('div');
    var element4 = document.createElement('img');
    var element5 = document.createElement('div');
    var int = skill[i].level;
    var imgPath = skill[i].path;
    element2.setAttribute('id','myProgress');
    element.setAttribute('class', 'column');
    element3.setAttribute('id', 'myBar');
    element3.setAttribute('class', 'line');
    element3.style.maxWidth = parseInt(skill[i].level)+"%";
    element4.setAttribute('src', imgPath);
    element4.setAttribute('class', 'img-skill');
    element5.setAttribute('id', 'back-color');
    var grade = skill[i].level;
    if(grade >= 90){
      element3.innerHTML = skill[i].level+"%" + " " + "Excellent";
    }
    else if(grade >= 80){
      element3.innerHTML = skill[i].level+"%" + " " + "Very good";
    }
    else if(grade >= 70){
      element3.innerHTML = skill[i].level+"%" + " " + "Good";
    }
    else if(grade >= 60){
      element3.innerHTML = skill[i].level+"%" + " " + "Satisfactory";
    }
    else if(grade >= 50){
      element3.innerHTML = skill[i].level+"%" + " " + "Sufficient";
    }
    else if(grade >= 1){
      element3.innerHTML = skill[i].level+"%" + " " + "Insufficient";
    }

    element2.innerHTML = skill[i].name;
    document.getElementById('Skills').appendChild(element);
    element.append(element2);
    element2.append(element4);
    element5.append(element3);
    element2.append(element5);
  }
}

// function myReverse(arr) {
//   var array = document.getElementById('Skills');
//   var newArray = [];
//   for (i = array.length -1; i >= 0; i--){
//     newArray.push(arr[i])
//   }
//   return newArray;
//   console.log('sssss',newArray);
// }