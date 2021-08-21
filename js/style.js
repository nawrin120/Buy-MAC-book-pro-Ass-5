// memory function 
function getMemoryCost(cost) {
    const extraMemoryCost = document.getElementById('extra-memory');
    extraMemoryCost.innerText = cost;
    costCalculation();
}
// storage function 
function getStorageCost(storageCost) {
    const extraStorageCost = document.getElementById('extra-storage');
    extraStorageCost.innerText = storageCost;
    costCalculation();
}
// delivery function 
function getDeliveryCost(deliveryCost) {
    const extraDeliveryCost = document.getElementById('extra-delivery');
    extraDeliveryCost.innerText = deliveryCost;
    costCalculation();
}
// total value calculation
function costCalculation() {

    // total price 
    const totalPriceField = document.getElementById('total-price');

    const bestPriceField = document.getElementById('best-price');
    const bestPrice = parseFloat(bestPriceField.innerText);

    const extraMemoryCost = document.getElementById('extra-memory');
    const memoryCost = parseFloat(extraMemoryCost.innerText);

    const extraStorageCost = document.getElementById('extra-storage');
    const storageCost = parseFloat(extraStorageCost.innerText);

    const extraDeliveryCost = document.getElementById('extra-delivery');
    const deliveryCost = parseFloat(extraDeliveryCost.innerText);

    const totalPrice = bestPrice + memoryCost + storageCost + deliveryCost;
    totalPriceField.innerText = totalPrice;
    // footer
    let footerTotal = document.getElementById('total-footer');
    footerTotal.innerText = totalPrice;
}
// memory 
document.getElementById('memory-eight').addEventListener('click', function () {
    getMemoryCost(0);
})
document.getElementById('memory-sixteen').addEventListener('click', function () {
    getMemoryCost(180);
})
// storage 
document.getElementById('256GB-storage').addEventListener('click', function () {
    getStorageCost(0);
})
document.getElementById('512GB-storage').addEventListener('click', function () {

    getStorageCost(100);
})
document.getElementById('1TB-storage').addEventListener('click', function () {
    getStorageCost(180);
})
//  delivery cost 
document.getElementById('free-delivery').addEventListener('click', function () {
    getDeliveryCost(0);
})
document.getElementById('charged-delivery').addEventListener('click', function () {
    getDeliveryCost(20);
})
// footer 
// percentage 
document.getElementById('apply-btn').addEventListener('click', function () {
    let footerTotalField = document.getElementById('total-footer');
    let footerTotal = parseFloat(footerTotalField.innerText);
    let discountAmount = (footerTotal * 20) / 100;
    let footerAmount = footerTotal - discountAmount;
    const discountInput = document.getElementById('input-discount');
    const discountInputField = discountInput.value;
    if (discountInputField == 'stevekaku') {
        footerTotalField.innerText = footerAmount;
        discountInput.setAttribute('disabled', true);
    }
    discountInput.value = '';
})