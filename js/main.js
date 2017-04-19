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

  var div5 = document.createElement("div");
  div5.classList.add("estilo-div5");

  var div6 = document.createElement("div");
  div6.classList.add("estilo-div6");

  var div7 = document.createElement("div");
  div7.classList.add("estilo-div7");

  var div8 = document.createElement("div");
  div8.classList.add("estilo-div8");

  div2.appendChild(div3);
  div2.appendChild(div4);
  div2.appendChild(div5);
  div2.appendChild(div6);
  div4.appendChild(div7);
  div2.appendChild(div8);


});
