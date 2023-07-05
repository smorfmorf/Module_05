function calculator(totalAmount, itemCount, promoCode) {
    if (itemCount > 10) {
        totalAmount -= totalAmount * 0.03;
    }

    if (totalAmount > 30000) {
        const eAmount = totalAmount - 30000;
        totalAmount -= eAmount * 0.15;
    }

    if (promoCode === "METHED") {
        totalAmount -= totalAmount * 0.1;
    } else if (promoCode === "G3H2Z1" && totalAmount > 2000) {
        totalAmount -= 500;
    }

    totalAmount = totalAmount.toFixed(2);

    return totalAmount;
}
