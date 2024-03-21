function getShippingCost(country) {

    switch (country) {
        case "Australia" : `Shipping to ${country} will cost 170 credits`;
        break;
        case "China" : `Shipping to ${country} will cost  credits`;
        break;
        case "Chile" : `Shipping to ${country} will cost  credits`;
        break;
        case "Jamaica" : `Shipping to ${country} will cost  credits`;
        break; 
        
    }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"