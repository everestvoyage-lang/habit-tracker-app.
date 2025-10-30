let coins = localStorage.getItem("coins") || 0;
document.getElementById("coins").innerText = "Coins: " + coins;

const habits = ["habit1", "habit2", "habit3"];

habits.forEach(habitId => {
  const checkbox = document.getElementById(habitId);
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      coins = Number(coins) + 5;
      localStorage.setItem("coins", coins);
      document.getElementById("coins").innerText = "Coins: " + coins;
    }
  });
});
