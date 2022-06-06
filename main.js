let notas = {
  br : [199, 1939, 66988, 353464, 331851, 670072, 537652, 279558, 249840, 183373],
  ro : [4, 24, 872, 3954, 3747, 6598, 4427, 1883, 1522, 885],
  ac : [2, 18, 689, 3249, 3022, 5581, 3574, 1418, 762],
  am : [6, 27, 936, 6478, 6488, 18133, 10362, 3402, 2299, 1094],
  rr : [1, 8, 231, 1104, 1067, 1861, 1185, 490, 398, 258],
  pa : [15, 132, 4603, 23169, 23068, 43600, 30048, 13763, 11508, 8633],
  ap : [1, 12, 555, 3278, 3098, 6249, 3885, 1452, 1047, 697],
  to : [5, 36, 888, 4302, 3957, 7009, 4584, 2130, 1873, 1292],
  ma : [12, 112, 3580, 18068, 17850, 32322, 21364, 9466, 7783, 5865],
  pi : [9, 87, 2193, 10025, 9366, 16651, 12307, 6188, 5963, 5330],
  ce : [43, 264, 4688, 21538, 19765, 36745, 33213, 17833, 16033, 12455],
  rn : [4, 50, 1681, 8745, 8042, 16864, 13685, 7122, 6254, 4991],
  pb : [10, 64, 2395, 12504, 10878, 21476, 17493, 8919, 7942, 6278],
  pe : [15, 140, 4348, 21031, 20678, 38075, 30171, 15647, 14066, 10074],
  al : [7, 47, 1463, 7627, 13848, 10579, 4960, 4417, 3370],
  se : [4, 30, 1132, 5706, 5333, 10064, 8528, 4683, 4613, 4053],
  ba : [19, 253, 7162, 30812, 28891, 54256, 41139, 20527, 17520, 12235],
  mg : [9, 119, 5699, 31838, 28678, 57925, 52516, 30357, 31906, 27907],
  es : [3, 40, 1267, 6338, 5363, 11117, 9957, 5177, 4920, 4229],
  rj : [6, 69, 3550, 19952, 19887, 42765, 37150, 20793, 19395, 15894],
  sp : [7, 124, 7111, 46007, 43465, 98474, 88140, 50528, 43147, 25196],
  pr : [3, 40, 2239, 14284, 13412, 29902, 24186, 12212, 9637, 5425],
  sc : [2, 10, 1025, 7219, 5926, 13559, 12024, 6314, 5569, 3296],
  rs : [3, 42, 2305, 15735, 13015, 30558, 24051, 12317, 10775, 7804],
  ms : [0, 25, 1028, 5213, 4955, 9068, 6253, 3081, 2707, 1702],
  mt : [3, 36, 1409, 6355, 6100, 10695, 7779, 3649, 3235, 2348],
  go : [5, 90, 2711, 12195, 12392, 22737, 17344, 9496, 9356, 7733],
  df : [1, 40, 1228, 6738, 6134, 13940, 11708, 5751, 4937, 3558],
}

let medias = {
  br : 590.40,
  ro : 548.63,
  ac : 544.75,
  am : 553.57,
  rr : 546.63,
  pa : 567.69,
  ap : 547.23,
  to : 556.43,
  ma : 559.47,
  pi : 581.24,
  ce : 595.21,
  rn : 593.78,
  pb : 587.27,
  pe : 584.33,
  al : 578.22,
  se : 603.05,
  ba : 573.66,
  mg : 619.60,
  es : 602.51,
  rj : 612.98,
  sp : 605.64,
  pr : 585.79,
  sc : 597.10,
  rs : 592.83,
  ms : 566.47,
  mt : 567.09,
  go : 593.79,
  df : 593.81,
}

let seletor = document.querySelector('select')
let entrada = document.querySelector('input.nota')
let saida = document.querySelector('output')
let mostrarMedia = document.querySelector('output.mostraMedia')
let barras = document.querySelectorAll('.barras > div')

entrada.addEventListener('input', validar)
seletor.addEventListener('change', validar)

function validar(){
  let nota = entrada.value

  nota = parseInt(nota)
  if(nota > 0){
    calcular(nota)
  }

  else if(nota <= 1000){
    calcular(nota)
  }

  else{
    limpar()
  }
}

function calcular(nota){
  let local = seletor.value.toLowerCase()
  let media = medias [local]

  mostrarMedia.style.fontWeight = 'bolder'
  mostrarMedia.textContent = ' ' + media
  console.log(mostrarMedia)

  if(nota >= media){
    saida.textContent = 'MAIOR'
    saida.style.fontWeight = 'bold'
    saida.style.color = 'blue'
    
  }
  else if(nota < media){
    saida.textContent = 'MENOR'
    saida.style.fontWeight = 'bold'
    saida.style.color = 'yellow'
  }

  let estudantes = notas [local]
  let indice = 0
  let divisor = 3000
  if (local != 'br'){
    divisor = 400
  }

  for (let estudante of estudantes){
    let altura = estudante / divisor
    if(altura < 1){
      altura = 4
    }

    barras[indice].style.height = altura + 'px'    
    barras[indice].textContent = estudantes
    
    indice++ 
  } 
}

function limpar(){
  saida.textContent = '…'
  saida.style.color = 'black'
  mostrarMedia.textContent = '___'
}