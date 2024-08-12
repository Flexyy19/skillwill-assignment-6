const modalContainer = document.getElementById("modalContainer");
const openModalButton = document.getElementById("button");
const closeModalButton = document.getElementById("closeModalButton");
const colorButton = document.getElementById("colorButton");

function toggleModal() {
  modalContainer.classList.toggle("hidden");
}

function changeBackgroundColor() {
  const colorInput = document.getElementById("colorInput").value.toLowerCase();
  const validColors = ["red", "blue", "green", "black", "white"];
  if (validColors.includes(colorInput)) {
    document.body.style.backgroundColor = colorInput;
  } else {
    alert(
      "Invalid color! Please enter one of the following colors: red, blue, green, black, white."
    );
  }
}

openModalButton.addEventListener("click", toggleModal);
closeModalButton.addEventListener("click", toggleModal);
colorButton.addEventListener("click", changeBackgroundColor);

const calculateButton = document.getElementById("calculateButton");
const averageResult = document.getElementById("averageResult");

function calculateAverage() {
  const numberInput = document.getElementById("numberInput").value;
  const numbersArray = numberInput.split(",").map(Number);

  if (numbersArray.length === 0) {
    averageResult.textContent = "No numbers entered.";
    return;
  }

  const sum = numbersArray.reduce((total, num) => total + num, 0);
  const average = sum / numbersArray.length;

  averageResult.textContent = `Average: ${average.toFixed(2)}`;
}

calculateButton.addEventListener("click", calculateAverage);
