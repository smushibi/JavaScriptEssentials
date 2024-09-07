let length;
let width;

function calculateTotal() {
    $item1 = parseFloat(document.getElementById('item1').value);
    $item2 = parseFloat(document.getElementById('item2').value);
    $item3 = parseFloat(document.getElementById('item3').value);
    let $totalAmount = $item1 + $item2 + $item3
    document.getElementById('result').innerText = `The Total Amount is: ${$totalAmount}`;
}

