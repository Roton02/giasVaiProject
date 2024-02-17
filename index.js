let sum = 1;
const card = document.getElementsByClassName("add-btn");

for (const cardBtn of card) {
  cardBtn.addEventListener("click", function () {
    setInnerText("cart-count", sum);
    sum++;

    const place = cardBtn.parentNode.childNodes[1].innerText;
    // console.log(place);
    const price = parseInt(
      cardBtn.parentNode.childNodes[3].innerText.split(" ")[1]
    );
    // console.log(typeof price);
    const setPlace = document.getElementById("selected-place-container");
    const li = document.createElement("li");
    const p1 = document.createElement("p");
    p1.innerText = place;
    const p2 = document.createElement("p");
    p2.innerText = price;
    
    const budget = document.getElementById('budget').innerText;
    const convertedBudget = parseInt(budget);
    if( convertedBudget -parseInt(price) < 0){
      alert('budget is Enough Please erne more..!')
      return
    }
    document.getElementById('budget').innerText = convertedBudget -parseInt(price)

    li.appendChild(p1);
    li.appendChild(p2);
    setPlace.appendChild(li);
    //total Cost section
    const totalCost = document.getElementById("total-cost");
    totalCost.innerText = parseInt(totalCost.innerText) + parseInt(price);
    // console.log(totalCost.innerText);
    grandTotalCost();
    //
  });
}

// grandTotalCost section
function grandTotalCost(catagory) {
  const totalCostValue = document.getElementById("total-cost").innerText;
  const covertedTotalCost = parseInt(totalCostValue);

  if (catagory == "bus") {
    setInnerText("grand-total", covertedTotalCost + 100);
  } else if (catagory == "Train") {
    setInnerText("grand-total", covertedTotalCost - 200);
  } else if (catagory == "flight") {
    setInnerText("grand-total", covertedTotalCost + 500);
  } else {
    setInnerText("grand-total", covertedTotalCost);
  }
}
