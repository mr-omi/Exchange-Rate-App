const curr1 = document.getElementById("currency1");
const curr2 = document.getElementById("currency2");
const amt1 = document.getElementById("amount1");
const amt2 = document.getElementById("amount2");

function calculate(){
    const c1 = curr1.value;
    const c2 = curr2.value;
    const a1 = amt1.value;
    fetch(
        `https://v6.exchangerate-api.com/v6/7a49e0c03f8ce84e04b6bf48/pair/${c1}/${c2}/${a1}`
    )
    .then((res) => res.json())
    .then((data) => {
      amt2.value = data.conversion_result
    });
}

curr1.addEventListener("change", calculate);
amt1.addEventListener("input", calculate);
curr2.addEventListener("change", calculate);
amt2.addEventListener("input", calculate);
