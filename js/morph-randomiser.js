var morphTangles = new Array(
  6, 9, 16, 17, 18, 19);

function selectRandomMorph() {
  return morphTangles[Math.floor(Math.random() * morphTangles.length)];    
}

function updateMorph() {
  document.getElementsByClassName("morph-tangle-image")[0].src="img/MOD_morph_tangle_"+selectRandomMorph()+"_animated.svg";
}

updateMorph();
