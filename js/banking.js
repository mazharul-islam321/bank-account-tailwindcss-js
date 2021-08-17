// deposit and withdraw  input function
function inputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmount = parseFloat(inputField.value);
    inputField.value = "";
    return inputAmount;
}

// deposit and withdraw show amount function
function showMoney(inputMoney, depoWithdrawId) {
    const depoWithdrawtext = document.getElementById(depoWithdrawId);
    const depoWithdrawAmount = parseFloat(depoWithdrawtext.innerText);

    // new amount
    depoWithdrawtext.innerText = depoWithdrawAmount + inputMoney;
}

// ultimate balance
function getCurrentBalance() {
    const balanceTotal = document.getElementById("balance-total");
    const newBalance = parseFloat(balanceTotal.innerText);
    return newBalance;
}
// deposit and withdraw balance function
function mainBalance(depoWithdrawBalance, isAdd) {
    const balanceTotal = document.getElementById("balance-total");
    const newBalance = parseFloat(balanceTotal.innerText);

    //Total Balance
    if (isAdd == true) {
        const currentBalance = newBalance + depoWithdrawBalance;
        balanceTotal.innerText = currentBalance;
    } else {
        const currentBalance = newBalance - depoWithdrawBalance;
        balanceTotal.innerText = currentBalance;
    }
}
// handle deposit button event
document
    .getElementById("deposit-submit")
    .addEventListener("click", function () {
        const newDepoamount = inputValue("deposit-input");
        if (newDepoamount > 0) {
            showMoney(newDepoamount, "deposit-total");

            mainBalance(newDepoamount, true);
        }
    });

// handle witdraw button event
document
    .getElementById("withdraw-submit")
    .addEventListener("click", function () {
        const withdrawInputAmount = inputValue("withdraw-input");
        const currentBalance = getCurrentBalance();
        if (withdrawInputAmount > 0 && currentBalance >= withdrawInputAmount) {
            showMoney(withdrawInputAmount, "withdraw-total");

            mainBalance(withdrawInputAmount, false);
        }
    });

// handle deposit button event
/* document
    .getElementById("deposit-submit")
    .addEventListener("click", function () {
        // get the amount deposit
        const depositInput = document.getElementById("deposit-input");
        const newDepoText = depositInput.value;
        const newDepoamount = parseFloat(newDepoText);

        // show deposit amount
        const depositTotal = document.getElementById("deposit-total");
        const prevAmount = parseFloat(depositTotal.innerText);

        // new amount
        const currentDepoAmount = prevAmount + newDepoamount;
        depositTotal.innerText = currentDepoAmount;

        // update total balance
        const balanceTotal = document.getElementById("balance-total");
        const newBalance = parseFloat(balanceTotal.innerText);

        //Total Balance
        const currentBalance = newBalance + newDepoamount;
        balanceTotal.innerText = currentBalance;

        // clear deposite input field
        depositInput.value = "";
    }); */
// handle witdraw button event
/* document
    .getElementById("withdraw-submit")
    .addEventListener("click", function () {
        // get withdraw amount
        const withdrawInput = document.getElementById("withdraw-input");
        const withdrawInputAmount = parseFloat(withdrawInput.value);

        //show withdraw amount
        const withdrawTotal = document.getElementById("withdraw-total");
        const withdrawTotalAmount = parseFloat(withdrawTotal.innerText);

        // new withdraw amount
        const currentWithdrawAmount = withdrawInputAmount + withdrawTotalAmount;
        withdrawTotal.innerText = currentWithdrawAmount;

        // update total balance
        const balanceTotal = document.getElementById("balance-total");
        const newBalance = parseFloat(balanceTotal.innerText);

        //Total Balance
        const currentBalance = newBalance - withdrawInputAmount;
        balanceTotal.innerText = currentBalance;


        // clear withdraw input field
        withdrawInput.value = "";
    }); */
