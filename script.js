let totalBuy = 0;
let totalSell = 0;

function addTransaction() {

    let item = document.getElementById("item").value;
    let amount = parseFloat(document.getElementById("amount").value);
    let transactionType = document.getElementById("transactionType").value;



    if (!item || isNaN(amount)) {
        alert("please Enter The Amount");
        return;
    }



    const log = document.getElementById("transactionLog");
    const transaction = document.createElement("div");
    transaction.classList.add("transaction");




    if (transactionType === "buy") {
        transaction.classList.add("expense");
        transaction.innerHTML = `${item}:  -${amount}`;
        totalBuy += amount;
    } else if (transactionType === "sell") {
        transaction.classList.add("income");
        transaction.innerHTML = `${item}:  +${amount}`;
        totalSell += amount;
    }



    log.appendChild(transaction);



    document.getElementById("item").value = "";
    document.getElementById("amount").value = "";
}



function showTotal() {
    const totalSummary = document.getElementById("totalSummary")
    totalSummary.innerHTML = `
    Total Buy : -${totalBuy}<br>
    Total Sell : +${totalSell}
    `;
}



