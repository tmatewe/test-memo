let buttons = document.getElementsByClassName("btn");
console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", myClick);
}
function myClick(e) {
  if (e.target.value === "Answers") {
    x4.value = Number(x1.value) + Number(x2.value) + Number(x3.value);
    x7.value = Number(x4.value) + Number(x5.value) - Number(x6.value);
    x10.value = Number(x7.value) + Number(x8.value) - Number(x9.value);
    if (x12.value === "") {
      x12.value = Number(x121.value) + Number(x122.value);
    }
    if (x13.value === "") {
      x13.value = Number(x131.value) + Number(x132.value);
    }
    if (x16.value === "") {
      x16.value = Number(x161.value) + Number(x162.value);
    }
    if (x17.value === "") {
      x17.value = Number(x171.value) + Number(x172.value);
    }
    x18.value = Number(x10.value);
    x15.value = Number(x18.value) + Number(x17.value) - Number(x16.value);
    x14.value =
      Number(x15.value) -
      Number(x11.value) -
      Number(x12.value) -
      Number(x13.value);
    x21.value = Number(x18.value) + Number(x19.value) - Number(x20.value);
    x24.value = Number(x21.value) + Number(x22.value) - Number(x23.value);
  } else if (e.target.value === "GDP") {
    if (nominal1.value === "") {
      nominal1.value = (
        (Number(real1.value) * Number(priceIndex1.value)) /
        100
      ).toFixed(0);
    } else if (real1.value === "") {
      real1.value = (
        (Number(nominal1.value) * 100) /
        Number(priceIndex1.value)
      ).toFixed(0);
    } else {
      priceIndex1.value = (
        (Number(nominal1.value) / Number(real1.value)) *
        100
      ).toFixed(0);
    }
    if (real2.value === "") {
      real2.value = nominal2.value;
    } else {
      nominal2.value = real2.value;
    }

    priceIndex2.value = 100;

    inflationRate2.value = (
      ((Number(100) - Number(priceIndex1.value)) / Number(priceIndex1.value)) *
      100
    ).toFixed(1);

    growthRate2.value = (
      ((Number(real2.value) - Number(real1.value)) / Number(real1.value)) *
      100
    ).toFixed(1);

    priceIndex3.value = Number(100) + Number(inflationRate3.value);

    if (real3.value === "") {
      real3.value = (
        (Number(nominal3.value) * Number(100)) /
        priceIndex3.value
      ).toFixed(0);
    } else {
      nominal3.value = (
        (Number(real3.value) * priceIndex3.value) /
        100
      ).toFixed(0);
    }

    growthRate3.value = (
      ((Number(real3.value) - Number(real2.value)) / Number(real2.value)) *
      100
    ).toFixed(1);
  } else if (e.target.value === "Click") {
    nominal2010.value =
      Number(qtyPre1.value) * Number(pricePre1.value) +
      Number(qtyPre2.value) * Number(pricePre2.value) +
      Number(qtyPre3.value) * Number(pricePre3.value);

    nominal2020.value =
      Number(qtyCur1.value) * Number(priceCur1.value) +
      Number(qtyCur2.value) * Number(priceCur2.value) +
      Number(qtyCur3.value) * Number(priceCur3.value);

    real2010.value =
      Number(qtyPre1.value) * Number(pricePre1.value) +
      Number(qtyPre2.value) * Number(pricePre2.value) +
      Number(qtyPre3.value) * Number(pricePre3.value);

    real2020.value =
      Number(qtyCur1.value) * Number(pricePre1.value) +
      Number(qtyCur2.value) * Number(pricePre2.value) +
      Number(qtyCur3.value) * Number(pricePre3.value);
  } else if (e.target.value === "Get") {
    unemploymentRate1.value = (
      (Number(unemployed1.value) / Number(labourForce1.value)) *
      100
    ).toFixed(1);
    unemploymentRate2.value = (
      (Number(unemployed2.value) / Number(labourForce2.value)) *
      100
    ).toFixed(1);
    unemploymentRate3.value = (
      (Number(unemployed3.value) / Number(labourForce3.value)) *
      100
    ).toFixed(1);
    absorptionRate1.value = (
      (Number(employed1.value) / Number(population1.value)) *
      100
    ).toFixed(1);
    absorptionRate2.value = (
      (Number(employed2.value) / Number(population2.value)) *
      100
    ).toFixed(1);
    absorptionRate3.value = (
      (Number(employed3.value) / Number(population3.value)) *
      100
    ).toFixed(1);
    participationRate1.value = (
      (Number(labourForce1.value) / Number(population1.value)) *
      100
    ).toFixed(1);
    participationRate2.value = (
      (Number(labourForce2.value) / Number(population2.value)) *
      100
    ).toFixed(1);
    participationRate3.value = (
      (Number(labourForce3.value) / Number(population3.value)) *
      100
    ).toFixed(1);
  } else if (e.target.value === "Percentage") {
    percentageAnswer.value = (
      ((Number(currentAmount.value) - Number(previousAmount.value)) /
        Number(previousAmount.value)) *
      100
    ).toFixed(2);
  } else if (e.target.value === "Info") {
    country1.value = firstCountry.value;
    country2.value = secondCountry.value;
    countryOne.value = firstCountry.value;
    countryTwo.value = secondCountry.value;
    production1.innerHTML = `${firstProduct.value} production`;
    production2.innerHTML = `${secondProduct.value} production`;
    result1.value = `1 ${firstProduct.value}=${
      Number(product2.value) / Number(product1.value)
    } ${secondProduct.value}`;
    result2.value = `1 ${firstProduct.value}=${
      Number(productTwo.value) / Number(productOne.value)
    } ${secondProduct.value}`;
    resultOne.value = `1 ${secondProduct.value}=${
      Number(product1.value) / Number(product2.value)
    } ${firstProduct.value}`;
    resultTwo.value = `1 ${secondProduct.value}=${
      Number(productOne.value) / Number(productTwo.value)
    } ${firstProduct.value}`;

    if (
      Number(product2.value) / Number(product1.value) <
        Number(productTwo.value) / Number(productOne.value) &&
      Number(productOne.value) < Number(product1.value)
    ) {
      console.log("option 1");

      moreInfo.innerHTML = `${firstCountry.value} has both an absolute advantage and a comparative advantage in the product of ${firstProduct.value}`;
    } else if (
      Number(product2.value) / Number(product1.value) <
        Number(productTwo.value) / Number(productOne.value) &&
      Number(productOne.value) > Number(product1.value)
    ) {
      console.log("option 2");
      moreInfo.innerHTML = `${secondCountry.value} has an absolute advantage in the production of ${firstProduct.value} but ${firstCountry.value} has a comparative advantage in the product of ${firstProduct.value}`;
    } else if (
      Number(product2.value) / Number(product1.value) >
        Number(productTwo.value) / Number(productOne.value) &&
      Number(productOne.value) > Number(product1.value)
    ) {
      moreInfo.innerHTML = `${secondCountry.value} has both an absolute advantage and a comparative advantage in the product of ${firstProduct.value}`;
    } else if (
      Number(product2.value) / Number(product1.value) >
        Number(productTwo.value) / Number(productOne.value) &&
      Number(productOne.value) < Number(product1.value)
    ) {
      moreInfo.innerHTML = `${firstCountry.value} has an absolute advantage in the production of ${firstProduct.value} but ${secondCountry.value} has a comparative advantage in the product of ${firstProduct.value}`;
    } else {
      alert("Tawaz you ddnt add this option");
    }
  } else if (e.target.value === "Complete") {
    koo.value = farmer.value;
    t1.value = t2.value;
    shoprite.value =
      Number(t1.value) - Number(koo.value) - Number(farmer.value);
    profit.value = Number(t2.value) - Number(rent.value) - Number(wages.value);
  }
}
