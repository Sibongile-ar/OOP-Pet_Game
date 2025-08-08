// ____________________________________________
//        Object-Oriented Programming (OOP)
// ____________________________________________
class Pet {
  constructor(name, soundText, image,soundUrl) {
    this.name = name;
    this.soundText = soundText;
    this.image = image;
    this.soundUrl = new Audio(soundUrl) //audio
    this.playCount = 0;
  }

  speak() {
    alert(this.soundText);
    this.soundUrl.currentTime = 0; //ensures restart each click
    this.soundUrl.play();
  }

  play() {
    this.playCount++;
    this.soundUrl.load();
    this.speak();
    updateCounter(this.playCount);
    showFunActions(this.name);
  }
}

// Global variable to store the chosen pet
let currentPet = null;

// ____________________________________________
//        Function to choose a pet
// ____________________________________________
function choosePet(type) {
  if (type === "dog") {
    currentPet = new Pet("Dog","Woof! 🐶","https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg",'media/dog-barking-374107.mp3');
  } else if (type === "cat") {
    currentPet = new Pet("Cat","Meow! 🐱","https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",'media/meow-sound-effect-327531.mp3');
  } else if (type === "bird") {
    currentPet = new Pet("Bird","Chirp! 🦜","https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg",'media/birds-in-pet-shop-58663.mp3');
  } else if (type === "Fish") {
    currentPet = new Pet("Fish","Boops! 🐠","https://images.pexels.com/photos/9004431/pexels-photo-9004431.jpeg",'media/tiny-splash-83778.mp3');
  }
  if (currentPet) {
    document.getElementById("petImage").src = currentPet.image;
    document.getElementById("game").style.display = "block";
    updateCounter(0);
    showFunActions(currentPet.name);
  }
}

// ____________________________________________
//        Function to play with the pet
// ____________________________________________
function playWithPet() {
  if (currentPet) {
    currentPet.play();
  }
}

// ____________________________________________
//        Function to update the counter
// ____________________________________________
function updateCounter(count) {
  document.getElementById("counter").innerText = `Times played: ${count}`;
}

// ____________________________________________
//        Function + Loop: Fun pet actions
// ____________________________________________
function showFunActions(petName) {
  let actions = [];

  if (petName === "Dog") {
    actions = ["Bark", "Wag Tail", "Fetch Ball"];
  } else if (petName === "Cat") {
    actions = ["Meow", "Purr", "Chase Mouse"];
  } else if (petName === "Bird") {
    actions = ["Chirp", "Fly", "Sing Song"];
  } else if (petName === "Fish") {
    actions = ["Boops", "swim", "growls"];
  }

  const actionBox = document.getElementById("actions");
  actionBox.innerHTML = "<strong>Fun Actions:</strong><br>";

  for (let i = 0; i < actions.length; i++) {
    actionBox.innerHTML += "✅ " + actions[i] + "<br>";
  }
}

