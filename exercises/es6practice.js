const name = 'John'  
let age = 101  
let pets = ["cat", "dog"]

let petObjects = []

for (let i = 0; i < pets.length; i++){  
  let pet = {type: pets[i]}
  if (pets[i] === "cat"){
    const name = "fluffy"
  } else {
    const name = "spot"
  }
  pet.name = name
  petObjects.push(pet)
}
