function checkOrder (available, ordered) {
    if (available < ordered) {
        console.log("Your order is too large, we don't have enough goods");
        return;
    } else if (ordered === 0) {
        console.log("Your order is empty");
        return;
    } else if (available >= ordered) {
        console.log("Your order is accepted");
        return;
    };
};

checkOrder(29,4);