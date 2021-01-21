//  https://github.com/rahulmohonto/Basic-Javascript-Assignment




// 1st Problem kilometer To Meter conversion

function kilometerToMeter(kilometer) {
    if (kilometer > 0) {
        const meter = kilometer * 1000;
        return meter;
    }
    else return "Oh Dear, distance can't be negative";
}



//  2nd Problem, Total budget calculation for buying Electronics budget


function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop) {
    const watchPrice = 50;
    const phonePrice = 100;
    const laptopPrice = 500;

    if (numberOfWatch < 0 || numberOfPhone < 0 || numberOfLaptop < 0) {
        return "Don't forget to checkout other products, if don't want to buy anything.";
    }
    const watchCost = numberOfWatch * 50;
    const phoneCost = numberOfPhone * 100;
    const laptopCost = numberOfLaptop * 500;
    const totalCost = watchCost + phoneCost + laptopCost;
    return totalCost;

}


// 3rd problem , Hotel Cost calculation

function hotelCost(days) {
    if (days <= 10 && days > 0) {
        costOfFirst10Days = days * 100;
        return costOfFirst10Days;
    }
    else if (days > 10 && days <= 20 && days > 0) {
        costOfSecond10Days = (days - 10) * 80;
        costOfFirst10Days = 1000;
        return costOfFirst10Days + costOfSecond10Days;
    }
    else if (days > 20 && days > 0) {
        costOfStayingMoreThan20Days = (days - 20) * 50;
        costOfFirst10Days = 1000;
        costOfSecond10Days = 800;
        return costOfStayingMoreThan20Days + costOfSecond10Days + costOfFirst10Days;
    }
    else return "You'r dreaming, wake up";
}


// 4th Problem , Return largest name from An Array 


function megaFriend(names) {
    let friendsName = ['a'];
    for (i = 0; i < names.length; i++) {
        let namesArrayElement = names[i];
        if (namesArrayElement.length > friendsName.length) {
            friendsName = namesArrayElement;

        }
    }
    return friendsName;
}

