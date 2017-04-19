window.addEventListener('load', function () {
  var divGeneral = document.getElementById("divGeneral");
  divGeneral.classList.add("estilo-divGeneral");

  var div1= document.createElement("div");
  div1.classList.add("estilo-div1");

  var div2 = document.createElement("div");
  div2.classList.add("estilo-div2");

  div1.appendChild(div2);
  divGeneral.appendChild(div1);

  var div3 = document.createElement("div");
  div3.classList.add("estilo-div3");

  var div4 = document.createElement("div");
  div4.classList.add("estilo-div4");

  div2.appendChild(div3);
  div2.appendChild(div4);


});
