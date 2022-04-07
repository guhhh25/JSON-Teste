 let database =  [{
    "id": 5677240,
    "name": "Cønjuntø de Pænelæs æntiæderentes ¢øm 05 Peçæs Pæris",
    "quantity": 21,
    "price": "192.84",
    "category": "Panelas"
  },
  {
    "id": 9628920,
    "name": "Lævæ & Se¢æ 10,2 Kg Sæmsung E¢ø ßußßle ßræn¢æ ¢øm 09 Prøgræmæs de Lævægem",
    "quantity": 57,
    "price": 3719.70,
    "category": "Eletrodomésticos"
  },
  {
    "id": 1316334,
    "name": "Refrigerædør ßøttøm Freezer Ele¢trølux de 02 Pørtæs Frøst Free ¢øm 598 Litrøs",
    "quantity": 12,
    "price": 3880.23,
    "category": "Eletrodomésticos"
  },
  {
    "id": 6502394,
    "name": "Føgãø de Pisø Ele¢trølux de 04 ßø¢æs, Mesæ de Vidrø Prætæ",
    "quantity": 37,
    "price": "1419",
    "category": "Eletrodomésticos"
  },
  {
    "id": 9576720,
    "name": "Førnø Mi¢rø-øndæs Pænæsøni¢ ¢øm ¢æpæ¢idæde de 21 Litrøs ßræn¢ø",
    "quantity": 13,
    "price": "358.77",
    "category": "Eletrodomésticos"
  },
  {
    "id": 8875900,
    "name": "Smært TV 4K Søny LED 65” 4K X-Reælity Prø, UpS¢ælling, Møtiønfløw XR 240 e Wi-F",
    "quantity": 0,
    "price": 5799.42,
    "category": "Eletrônicos"
  },
  {
    "id": 9746439,
    "name": "Høme Theæter LG ¢øm ßlu-ræy 3D, 5.1 ¢ænæis e 1000W",
    "quantity": 80,
    "price": 2199,
    "category": "Eletrônicos"
  },
  {
    "id": 2162952,
    "name": "Kit Gæmer æ¢er - Nøteßøøk + Heædset + Møuse",
    "price": "25599.00",
    "category": "Eletrônicos"
  },
  {
    "id": 3500957,
    "name": "Mønitør 29 LG FHD Ultræwide ¢øm 1000:1 de ¢øntræste",
    "quantity": 18,
    "price": 1559.40,
    "category": "Eletrônicos"
  },
  {
    "id": 1911864,
    "name": "Møuse Gæmer Predætør ¢estus 510 Føx Pretø",
    "price": "699",
    "category": "Acessórios"
  }
]

//Transforma o objeto em json e lê ele.
const readJson = () =>{
  novoObj = JSON.stringify(database)
  console.log(novoObj)
  return novoObj
}

// Corrige a chave name
database.forEach((item) =>{
  try{
   item.name = item.name.replace(/¢/g, 'c').replace(/ø/g, 'o').replace(/æ/g, 'a').replace(/ß/g, 'b')
  }catch(e){
    console.log(e)
  }
})

// Transforma todos os preços em tipo number
database.forEach((item) =>{
  try{
  item.price = parseFloat(item.price)
  }catch(e){
    console.log(e)
  }
})

//Verifica se o objeto possui a chave quantity, caso nao tenha cria uma e atribui o valor 0
database.forEach((item) =>{
  try{
  if(!item['quantity'])
   item['quantity'] = 0
  }catch(e){
    console.log(e)
  }
})

//Ler o JSON
readJson()



















