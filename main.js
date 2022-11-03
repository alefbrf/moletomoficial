document.getElementById('base').addEventListener('click', function (e) {
  if (window.innerWidth <= 768) {
    document.getElementById("h22").innerHTML = "Cores da Base";
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('deletebaselabel').style.display = "block";
  }
  else { document.getElementById("h22").innerHTML = "Cores da Base"; }
});

document.getElementById('gola2').addEventListener('click', function (e) {
  if (window.innerWidth <= 768) {
    document.getElementById("h22").innerHTML = "Cores da Barra";
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('deletebaselabel').style.display = "block";
  }
  else {
    document.getElementById("h22").innerHTML = "Cores da Barra";
  }
});
document.getElementById('gola1').addEventListener('click', function (e) {
  if (window.innerWidth <= 768) {
    document.getElementById("h22").innerHTML = "Cores do Punho";
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('deletebaselabel').style.display = "block";
  }
  else {
    document.getElementById("h22").innerHTML = "Cores do Punho";
  }
});
document.getElementById('vista').addEventListener('click', function (e) {
  if (window.innerWidth <= 768) {
    document.getElementById("h22").innerHTML = "Cores da Cordinha";
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('deletebaselabel').style.display = "block";
  }
  else {
    document.getElementById("h22").innerHTML = "Cores da Cordinha";
  }
});
document.getElementById('botoes').addEventListener('click', function (e) {
  if (window.innerWidth <= 768) {
    document.getElementById("h22").innerHTML = "Cores das Mangas";
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('deletebaselabel').style.display = "block";
  }
  else {
    document.getElementById("h22").innerHTML = "Cores das Mangas";
  }
});

document.getElementById('vista1').addEventListener('click', function (e) {
  if (window.innerWidth <= 768) {
    document.getElementById("h22").innerHTML = "Cores do Capuz";
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('deletebaselabel').style.display = "block";
  }
  else {
    document.getElementById("h22").innerHTML = "Cores do Capuz";
  }
});
document.getElementById('punho').addEventListener('click', function (e) {
  if (window.innerWidth <= 768) {
    document.getElementById("h22").innerHTML = "Cores do Bolso";
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('deletebaselabel').style.display = "block";
  }
  else {
    document.getElementById("h22").innerHTML = "Cores do Bolso";
  }
});


document.getElementById('cor1').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#fff");
    document.getElementById('CB').style.backgroundColor = "#fff";
  } if (document.getElementById('gola2').checked) {
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#fff");
    document.getElementById('gi').style.backgroundColor = "#fff";
  } if (document.getElementById('gola1').checked) {
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#fff");
    document.getElementById('ge').style.backgroundColor = "#fff";
  } if (document.getElementById('vista').checked) {
    document.querySelectorAll(".amarrilho").forEach(v => v.style.fill = "#fff");
    document.getElementById('VE').style.backgroundColor = "#fff";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga_raglan").forEach(v => v.style.fill = "#fff");
    document.getElementById('BT').style.backgroundColor = "#fff";
  } if (document.getElementById('vista1').checked) {
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = "#fff");
    document.getElementById('VD').style.backgroundColor = "#fff";
  } if (document.getElementById('punho').checked) {
    document.querySelectorAll(".bolso1").forEach(v => v.style.fill = "#fff");
    document.getElementById('PU').style.backgroundColor = "#fff";
  }
});

document.getElementById('cor2').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#474749");
    document.getElementById('CB').style.backgroundColor = "#474749";
  } if (document.getElementById('gola2').checked) {
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#474749");
    document.getElementById('gi').style.backgroundColor = "#474749";
  } if (document.getElementById('gola1').checked) {
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#474749");
    document.getElementById('ge').style.backgroundColor = "#474749";
  } if (document.getElementById('vista').checked) {
    document.querySelectorAll(".amarrilho").forEach(v => v.style.fill = "#474749");
    document.getElementById('VE').style.backgroundColor = "#fff";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga_raglan").forEach(v => v.style.fill = "#474749");
    document.getElementById('BT').style.backgroundColor = "#474749";
  } if (document.getElementById('vista1').checked) {
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = "#474749");
    document.getElementById('VD').style.backgroundColor = "#474749";
  } if (document.getElementById('punho').checked) {
    document.querySelectorAll(".bolso1").forEach(v => v.style.fill = "#474749");
    document.getElementById('PU').style.backgroundColor = "#474749";
  }
});

document.getElementById('cor3').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#ffda25");
    document.getElementById('CB').style.backgroundColor = "#ffda25";
  } if (document.getElementById('gola2').checked) {
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#ffda25");
    document.getElementById('gi').style.backgroundColor = "#ffda25";
  } if (document.getElementById('gola1').checked) {
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#ffda25");
    document.getElementById('ge').style.backgroundColor = "#ffda25";
  } if (document.getElementById('vista').checked) {
    document.querySelectorAll(".amarrilho").forEach(v => v.style.fill = "#ffda25");
    document.getElementById('VE').style.backgroundColor = "#ffda25";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga_raglan").forEach(v => v.style.fill = "#ffda25");
    document.getElementById('BT').style.backgroundColor = "#ffda25";
  } if (document.getElementById('vista1').checked) {
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = "#ffda25");
    document.getElementById('VD').style.backgroundColor = "#ffda25";
  } if (document.getElementById('punho').checked) {
    document.querySelectorAll(".bolso1").forEach(v => v.style.fill = "#ffda25");
    document.getElementById('PU').style.backgroundColor = "#ffda25";
  }
});

document.getElementById('cor4').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#eca825");
    document.getElementById('CB').style.backgroundColor = "#eca825";
  } if (document.getElementById('gola2').checked) {
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#eca825");
    document.getElementById('gi').style.backgroundColor = "#eca825";
  } if (document.getElementById('gola1').checked) {
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#eca825");
    document.getElementById('ge').style.backgroundColor = "#eca825";
  } if (document.getElementById('vista').checked) {
    document.querySelectorAll(".amarrilho").forEach(v => v.style.fill = "#eca825");
    document.getElementById('VE').style.backgroundColor = "#eca825";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga_raglan").forEach(v => v.style.fill = "#eca825");
    document.getElementById('BT').style.backgroundColor = "#eca825";
  } if (document.getElementById('vista1').checked) {
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = "#eca825");
    document.getElementById('VD').style.backgroundColor = "#eca825";
  } if (document.getElementById('punho').checked) {
    document.querySelectorAll(".bolso1").forEach(v => v.style.fill = "#eca825");
    document.getElementById('PU').style.backgroundColor = "#eca825";
  }
});

document.getElementById('cor5').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#92b6d5");
    document.getElementById('CB').style.backgroundColor = "#92b6d5";
  } if (document.getElementById('gola2').checked) {
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#92b6d5");
    document.getElementById('gi').style.backgroundColor = "#92b6d5";
  } if (document.getElementById('gola1').checked) {
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#92b6d5");
    document.getElementById('ge').style.backgroundColor = "#92b6d5";
  } if (document.getElementById('vista').checked) {
    document.querySelectorAll(".amarrilho").forEach(v => v.style.fill = "#92b6d5");
    document.getElementById('VE').style.backgroundColor = "#92b6d5";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga_raglan").forEach(v => v.style.fill = "#92b6d5");
    document.getElementById('BT').style.backgroundColor = "#92b6d5";
  } if (document.getElementById('vista1').checked) {
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = "#92b6d5");
    document.getElementById('VD').style.backgroundColor = "#92b6d5";
  } if (document.getElementById('punho').checked) {
    document.querySelectorAll(".bolso1").forEach(v => v.style.fill = "#92b6d5");
    document.getElementById('PU').style.backgroundColor = "#92b6d5";
  }
});

document.getElementById('cor6').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#008c45");
    document.getElementById('CB').style.backgroundColor = "#008c45";
  } if (document.getElementById('gola2').checked) {
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#008c45");
    document.getElementById('gi').style.backgroundColor = "#008c45";
  } if (document.getElementById('gola1').checked) {
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#008c45");
    document.getElementById('ge').style.backgroundColor = "#008c45";
  } if (document.getElementById('vista').checked) {
    document.querySelectorAll(".amarrilho").forEach(v => v.style.fill = "#008c45");
    document.getElementById('VE').style.backgroundColor = "#008c45";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga_raglan").forEach(v => v.style.fill = "#008c45");
    document.getElementById('BT').style.backgroundColor = "#008c45";
  } if (document.getElementById('vista1').checked) {
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = "#008c45");
    document.getElementById('VD').style.backgroundColor = "#008c45";
  } if (document.getElementById('punho').checked) {
    document.querySelectorAll(".bolso1").forEach(v => v.style.fill = "#008c45");
    document.getElementById('PU').style.backgroundColor = "#008c45";
  }
});
document.getElementById('cor7').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#6f0014");
    document.getElementById('CB').style.backgroundColor = "#6f0014";
  } if (document.getElementById('gola2').checked) {
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#6f0014");
    document.getElementById('gi').style.backgroundColor = "#6f0014";
  } if (document.getElementById('gola1').checked) {
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#6f0014");
    document.getElementById('ge').style.backgroundColor = "#6f0014";
  } if (document.getElementById('vista').checked) {
    document.querySelectorAll(".amarrilho").forEach(v => v.style.fill = "#6f0014");
    document.getElementById('VE').style.backgroundColor = "#6f0014";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga_raglan").forEach(v => v.style.fill = "#6f0014");
    document.getElementById('BT').style.backgroundColor = "#6f0014";
  } if (document.getElementById('vista1').checked) {
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = "#6f0014");
    document.getElementById('VD').style.backgroundColor = "#6f0014";
  } if (document.getElementById('punho').checked) {
    document.querySelectorAll(".bolso1").forEach(v => v.style.fill = "#6f0014");
    document.getElementById('PU').style.backgroundColor = "#6f0014";
  }
});

document.getElementById('cor8').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#ed3551");
    document.getElementById('CB').style.backgroundColor = "#ed3551";
  } if (document.getElementById('gola2').checked) {
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#ed3551");
    document.getElementById('gi').style.backgroundColor = "#ed3551";
  } if (document.getElementById('gola1').checked) {
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#ed3551");
    document.getElementById('ge').style.backgroundColor = "#ed3551";
  } if (document.getElementById('vista').checked) {
    document.querySelectorAll(".amarrilho").forEach(v => v.style.fill = "#ed3551");
    document.getElementById('VE').style.backgroundColor = "#ed3551";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga_raglan").forEach(v => v.style.fill = "#ed3551");
    document.getElementById('BT').style.backgroundColor = "#ed3551";
  } if (document.getElementById('vista1').checked) {
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = "#ed3551");
    document.getElementById('VD').style.backgroundColor = "#ed3551";
  } if (document.getElementById('punho').checked) {
    document.querySelectorAll(".bolso1").forEach(v => v.style.fill = "#ed3551");
    document.getElementById('PU').style.backgroundColor = "#ed3551";
  }
});

document.getElementById('cor9').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#203f35");
    document.getElementById('CB').style.backgroundColor = "#203f35";
  } if (document.getElementById('gola2').checked) {
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#203f35");
    document.getElementById('gi').style.backgroundColor = "#203f35";
  } if (document.getElementById('gola1').checked) {
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#203f35");
    document.getElementById('ge').style.backgroundColor = "#203f35";
  } if (document.getElementById('vista').checked) {
    document.querySelectorAll(".amarrilho").forEach(v => v.style.fill = "#203f35");
    document.getElementById('VE').style.backgroundColor = "#203f35";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga_raglan").forEach(v => v.style.fill = "#203f35");
    document.getElementById('BT').style.backgroundColor = "#203f35";
  } if (document.getElementById('vista1').checked) {
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = "#203f35");
    document.getElementById('VD').style.backgroundColor = "#203f35";
  } if (document.getElementById('punho').checked) {
    document.querySelectorAll(".bolso1").forEach(v => v.style.fill = "#203f35");
    document.getElementById('PU').style.backgroundColor = "#203f35";
  }
});

document.getElementById('cor10').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#2b3042");
    document.getElementById('CB').style.backgroundColor = "#2b3042";
  } if (document.getElementById('gola2').checked) {
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#2b3042");
    document.getElementById('gi').style.backgroundColor = "#2b3042";
  } if (document.getElementById('gola1').checked) {
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#2b3042");
    document.getElementById('ge').style.backgroundColor = "#2b3042";
  } if (document.getElementById('vista').checked) {
    document.querySelectorAll(".amarrilho").forEach(v => v.style.fill = "#2b3042");
    document.getElementById('VE').style.backgroundColor = "#2b3042";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga_raglan").forEach(v => v.style.fill = "#2b3042");
    document.getElementById('BT').style.backgroundColor = "#2b3042";
  } if (document.getElementById('vista1').checked) {
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = "#2b3042");
    document.getElementById('VD').style.backgroundColor = "#2b3042";
  } if (document.getElementById('punho').checked) {
    document.querySelectorAll(".bolso1").forEach(v => v.style.fill = "#2b3042");
    document.getElementById('PU').style.backgroundColor = "#2b3042";
  }
});

document.getElementById('cor11').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#87888d");
    document.getElementById('CB').style.backgroundColor = "#87888d";
  } if (document.getElementById('gola2').checked) {
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#87888d");
    document.getElementById('gi').style.backgroundColor = "#87888d";
  } if (document.getElementById('gola1').checked) {
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#87888d");
    document.getElementById('ge').style.backgroundColor = "#87888d";
  } if (document.getElementById('vista').checked) {
    document.querySelectorAll(".amarrilho").forEach(v => v.style.fill = "#87888d");
    document.getElementById('VE').style.backgroundColor = "#87888d";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga_raglan").forEach(v => v.style.fill = "#87888d");
    document.getElementById('BT').style.backgroundColor = "#87888d";
  } if (document.getElementById('vista1').checked) {
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = "#87888d");
    document.getElementById('VD').style.backgroundColor = "#87888d";
  } if (document.getElementById('punho').checked) {
    document.querySelectorAll(".bolso1").forEach(v => v.style.fill = "#87888d");
    document.getElementById('PU').style.backgroundColor = "#87888d";
  }
});

document.getElementById('cor12').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#393c41");
    document.getElementById('CB').style.backgroundColor = "#393c41";
  } if (document.getElementById('gola2').checked) {
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#393c41");
    document.getElementById('gi').style.backgroundColor = "#393c41";
  } if (document.getElementById('gola1').checked) {
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#393c41");
    document.getElementById('ge').style.backgroundColor = "#393c41";
  } if (document.getElementById('vista').checked) {
    document.querySelectorAll(".amarrilho").forEach(v => v.style.fill = "#393c41");
    document.getElementById('VE').style.backgroundColor = "#393c41";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga_raglan").forEach(v => v.style.fill = "#393c41");
    document.getElementById('BT').style.backgroundColor = "#393c41";
  } if (document.getElementById('vista1').checked) {
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = "#393c41");
    document.getElementById('VD').style.backgroundColor = "#393c41";
  } if (document.getElementById('punho').checked) {
    document.querySelectorAll(".bolso1").forEach(v => v.style.fill = "#393c41");
    document.getElementById('PU').style.backgroundColor = "#393c41";
  }
});

document.getElementById('cor13').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#f0eee4");
    document.getElementById('CB').style.backgroundColor = "#f0eee4";
  } if (document.getElementById('gola2').checked) {
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#f0eee4");
    document.getElementById('gi').style.backgroundColor = "#f0eee4";
  } if (document.getElementById('gola1').checked) {
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#f0eee4");
    document.getElementById('ge').style.backgroundColor = "#f0eee4";
  } if (document.getElementById('vista').checked) {
    document.querySelectorAll(".amarrilho").forEach(v => v.style.fill = "#f0eee4");
    document.getElementById('VE').style.backgroundColor = "#f0eee4";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga_raglan").forEach(v => v.style.fill = "#f0eee4");
    document.getElementById('BT').style.backgroundColor = "#f0eee4";
  } if (document.getElementById('vista1').checked) {
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = "#f0eee4");
    document.getElementById('VD').style.backgroundColor = "#f0eee4";
  } if (document.getElementById('punho').checked) {
    document.querySelectorAll(".bolso1").forEach(v => v.style.fill = "#f0eee4");
    document.getElementById('PU').style.backgroundColor = "#f0eee4";
  }
});

document.getElementById('cor14').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#f9cbce");
    document.getElementById('CB').style.backgroundColor = "#f9cbce";
  } if (document.getElementById('gola2').checked) {
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#f9cbce");
    document.getElementById('gi').style.backgroundColor = "#f9cbce";
  } if (document.getElementById('gola1').checked) {
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#f9cbce");
    document.getElementById('ge').style.backgroundColor = "#f9cbce";
  } if (document.getElementById('vista').checked) {
    document.querySelectorAll(".amarrilho").forEach(v => v.style.fill = "#f9cbce");
    document.getElementById('VE').style.backgroundColor = "#f9cbce";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga_raglan").forEach(v => v.style.fill = "#f9cbce");
    document.getElementById('BT').style.backgroundColor = "#f9cbce";
  } if (document.getElementById('vista1').checked) {
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = "#f9cbce");
    document.getElementById('VD').style.backgroundColor = "#f9cbce";
  } if (document.getElementById('punho').checked) {
    document.querySelectorAll(".bolso1").forEach(v => v.style.fill = "#f9cbce");
    document.getElementById('PU').style.backgroundColor = "#f9cbce";
  }
});

document.getElementById('cor15').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#1e4477");
    document.getElementById('CB').style.backgroundColor = "#1e4477";
  } if (document.getElementById('gola2').checked) {
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#1e4477");
    document.getElementById('gi').style.backgroundColor = "#1e4477";
  } if (document.getElementById('gola1').checked) {
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#1e4477");
    document.getElementById('ge').style.backgroundColor = "#1e4477";
  } if (document.getElementById('vista').checked) {
    document.querySelectorAll(".amarrilho").forEach(v => v.style.fill = "#1e4477");
    document.getElementById('VE').style.backgroundColor = "#1e4477";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga_raglan").forEach(v => v.style.fill = "#1e4477");
    document.getElementById('BT').style.backgroundColor = "#1e4477";
  } if (document.getElementById('vista1').checked) {
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = "#1e4477");
    document.getElementById('VD').style.backgroundColor = "#1e4477";
  } if (document.getElementById('punho').checked) {
    document.querySelectorAll(".bolso1").forEach(v => v.style.fill = "#1e4477");
    document.getElementById('PU').style.backgroundColor = "#1e4477";
  }
});

document.getElementById('cor16').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#cd0213");
    document.getElementById('CB').style.backgroundColor = "#cd0213";
  } if (document.getElementById('gola2').checked) {
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#cd0213");
    document.getElementById('gi').style.backgroundColor = "#cd0213";
  } if (document.getElementById('gola1').checked) {
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#cd0213");
    document.getElementById('ge').style.backgroundColor = "#cd0213";
  } if (document.getElementById('vista').checked) {
    document.querySelectorAll(".amarrilho").forEach(v => v.style.fill = "#cd0213");
    document.getElementById('VE').style.backgroundColor = "#cd0213";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga_raglan").forEach(v => v.style.fill = "#cd0213");
    document.getElementById('BT').style.backgroundColor = "#cd0213";
  } if (document.getElementById('vista1').checked) {
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = "#cd0213");
    document.getElementById('VD').style.backgroundColor = "#cd0213";
  } if (document.getElementById('punho').checked) {
    document.querySelectorAll(".bolso1").forEach(v => v.style.fill = "#cd0213");
    document.getElementById('PU').style.backgroundColor = "#cd0213";
  }
});

document.getElementById('cor17').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#0c0c0d");
    document.getElementById('CB').style.backgroundColor = "#0c0c0d";
  } if (document.getElementById('gola2').checked) {
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#0c0c0d");
    document.getElementById('gi').style.backgroundColor = "#0c0c0d";
  } if (document.getElementById('gola1').checked) {
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#0c0c0d");
    document.getElementById('ge').style.backgroundColor = "#0c0c0d";
  } if (document.getElementById('vista').checked) {
    document.querySelectorAll(".amarrilho").forEach(v => v.style.fill = "#0c0c0d");
    document.getElementById('VE').style.backgroundColor = "#0c0c0d";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga_raglan").forEach(v => v.style.fill = "#0c0c0d");
    document.getElementById('BT').style.backgroundColor = "#0c0c0d";
  } if (document.getElementById('vista1').checked) {
    document.querySelectorAll(".capuz").forEach(v => v.style.fill = "#0c0c0d");
    document.getElementById('VD').style.backgroundColor = "#0c0c0d";
  } if (document.getElementById('punho').checked) {
    document.querySelectorAll(".bolso1").forEach(v => v.style.fill = "#0c0c0d");
    document.getElementById('PU').style.backgroundColor = "#0c0c0d";
  }
});
//bolso on/off
const bolsoligadesliga = document.getElementById('switch-shadow');
bolsoligadesliga.addEventListener('click', function (e) {
  if (document.getElementById('switch-shadow').checked) {
    document.getElementById('bolsofrente').style.visibility = "visible";
    document.getElementById('friso').style.visibility = "visible";
    document.getElementById('peitilho2').style.visibility = "visible";
  } else {
    document.getElementById('bolsofrente').style.visibility = "hidden";
    document.getElementById('friso').style.visibility = "hidden";
    document.getElementById('peitilho2').style.visibility = "hidden";
  }
});


// download
$(document).ready(function () {
  $("#download").click(function () {
    domtoimage.toBlob(document.getElementById('social_masculino')).then(function (blob) {
      window.saveAs(blob, "Polo.png");

    })
  })
});

//upload
var deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";

var imga = document.createElement('img');
imga.src = deleteIcon;

var canvas = new fabric.Canvas('list');
let uploader = document.getElementById("uploader");
uploader.addEventListener('change', function (e) {
  var reader = new FileReader();
  reader.onload = function (e) {
    var image = new Image();
    image.src = e.target.result;
    image.onload = function () {
      var img = new fabric.Image(image);
      img.set({
        left: 100,
        top: 60
      });
      img.scaleToWidth(200);
      canvas.add(img).setActiveObject(img).renderAll();
    }
  }
  reader.readAsDataURL(e.target.files[0]);
  setTimeout(() => {
    document.getElementById("uploader").value = "";
  }, 1)
});
fabric.Object.prototype.controls.deleteControl = new fabric.Control({
  x: 0.5,
  y: -0.5,
  offsetY: 16,
  cursorStyle: 'pointer',
  mouseUpHandler: deleteObject,
  render: renderIcon,
  cornerSize: 24
});


function deleteObject(eventData, transform) {
  var target = transform.target;
  var canvas = target.canvas;
  canvas.remove(target);
  canvas.requestRenderAll();
};

function renderIcon(ctx, left, top, styleOverride, fabricObject) {
  var size = this.cornerSize;
  ctx.save();
  ctx.translate(left, top);
  ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
  ctx.drawImage(imga, -size / 2, -size / 2, size, size);
  ctx.restore();
};


///////////Responsivo
///////Celular
const lado = document.getElementById('switch-shadow2');
lado.addEventListener('click', function (e) {
  if (document.getElementById('switch-shadow2').checked) {
    document.getElementById('frente').style.visibility = "hidden";
    document.getElementById('costas').style.visibility = "visible";
  } else {
    document.getElementById('frente').style.visibility = "visible";
    document.getElementById('costas').style.visibility = "hidden";
  }
});


function sizeOfThings() {
  if (window.innerWidth > 768) {
    document.getElementById('costas').style.visibility = "visible";
    document.getElementById('frente').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "block";
    document.getElementById('cores').style.visibility = "visible";
  } else {
    document.getElementById('costas').style.visibility = "hidden";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";

  }
};
window.addEventListener('resize', function () {
  sizeOfThings();
});


document.getElementById('botaocor').addEventListener('click', function (e) {
  console.log('teste')
});

document.getElementById('btnacabalabel').addEventListener('click', function (e) {
  document.getElementById('acabamentos').style.display = "block";
  document.getElementById('deletelabel').style.display = "block";
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
})

document.getElementById('deleteb').addEventListener('click', function (e) {
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('deletebase').addEventListener('click', function (e) {
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocor').addEventListener('click', function (e) {
  document.getElementById('cores').style.visibility = "visible";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "block";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorbotoes').addEventListener('click', function (e) {
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "visible";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "block";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorgola').addEventListener('click', function (e) {
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "visible";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "block";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorvista').addEventListener('click', function (e) {
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "visible";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "block";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorcarcela').addEventListener('click', function (e) {
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "visible";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "block";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});
document.getElementById('botaocorpunho').addEventListener('click', function (e) {
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "visible";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorpeitilho1').addEventListener('click', function (e) {
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "visible";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});
document.getElementById('botaocorpeitilho2').addEventListener('click', function (e) {
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "visible";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});
document.getElementById('botaocorfriso').addEventListener('click', function (e) {
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "visible";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

