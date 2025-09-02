//your JS code here. If required.
function delay(ms, value) {
  return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

document.getElementById("btn").addEventListener("click", () => {
  const inputVal = Number(document.getElementById("ip").value);
  const outputDiv = document.getElementById("output");

  // Clear old results
  outputDiv.textContent = "";

  // Start chaining
  delay(2000, inputVal) // Step 1: Initial number after 2s
    .then(num => {
      outputDiv.textContent = `Result: ${num}`;
      return delay(2000, num * 2); // Step 2: Multiply by 2
    })
    .then(num => {
      outputDiv.textContent = `Result: ${num}`;
      return delay(1000, num - 3); // Step 3: Subtract 3
    })
    .then(num => {
      outputDiv.textContent = `Result: ${num}`;
      return delay(1000, num / 2); // Step 4: Divide by 2
    })
    .then(num => {
      outputDiv.textContent = `Result: ${num}`;
      return delay(1000, num + 10); // Step 5: Add 10
    })
    .then(num => {
      outputDiv.textContent = `Final Result: ${num}`;
    })
    .catch(err => {
      console.error("Error:", err);
    });
});