document.addEventListener("DOMContentLoaded", () => {

    class BankAccount {
        constructor(accountHolderName, accountType) {
            this.accountHolderName = accountHolderName;
            this.accountType = accountType;
            this.balance = 0; // Initial balance is 0
        }

        deposit(amount) {
            if (amount <= 0) {
                throw new Error("Deposit amount must be greater than zero.");
            }
            this.balance += amount;
        }

        withdraw(amount) {
            if (amount <= 0) {
                throw new Error("Withdrawal amount must be greater than zero.");
            }
            if (amount > this.balance) {
                throw new Error("Insufficient funds");
            }
            this.balance -= amount;
        }

        checkBalance() {
            return this.balance;
        }
    }

    const account = new BankAccount("Your Name", "Savings");

    function showAlert(message, isError = false) {
        const alertClass = isError ? "alert-danger" : "alert-success";
        const alertDiv = document.createElement("div");
        alertDiv.textContent = message;
        alertDiv.classList.add("alert", alertClass);
        document.body.appendChild(alertDiv);
        setTimeout(() => {
            alertDiv.remove();
        }, 3000);
    }

    const performBankAction = (action) => {
        let message = ""; // Initialize an empty message
    
        switch (action) {
            case "deposit":
                try {
                    const depositAmount = parseFloat(prompt("Enter the deposit amount:"));
                    if (!isNaN(depositAmount)) {
                        account.deposit(depositAmount);
                        message = `Deposited ${depositAmount} successfully. New balance: ${account.checkBalance()}`;
                    } else {
                        throw new Error("Invalid input");
                    }
                } catch (error) {
                    message = `Error: ${error.message}`;
                }
                break;
            case "withdraw":
                try {
                    const withdrawAmount = parseFloat(prompt("Enter the withdrawal amount:"));
                    if (!isNaN(withdrawAmount)) {
                        account.withdraw(withdrawAmount);
                        message = `Withdrawn ${withdrawAmount} successfully. New balance: ${account.checkBalance()}`;
                    } else {
                        throw new Error("Invalid input");
                    }
                } catch (error) {
                    message = `Error: ${error.message}`;
                }
                break;
            case "checkBalance":
                message = `Current balance: ${account.checkBalance()}`;
                break;
            default:
                message = "Invalid action requested.";
        }    
        alert(message.toLowerCase()); // Display the message in lowercase with a popup alert
    };
   
    document.getElementById("depositButton").addEventListener("click", () => {
        performBankAction("deposit");
    });

    document.getElementById("withdrawButton").addEventListener("click", () => {
        performBankAction("withdraw");
    });

    document.getElementById("checkBalanceButton").addEventListener("click", () => {
        performBankAction("checkBalance");
    });
     
    function animateButtons() {
        const buttons = document.querySelectorAll('.button1, .button2, .button3');
        let delay = 0;
    
        buttons.forEach(button => {
            setTimeout(() => {
                button.classList.add('moveRight'); // Add the 'moveRight' class to initiate animation
            }, delay);
            delay += 1000; // Adjust the delay between buttons (1000ms = 1 second)
        });
    }

    // Call the animation function after a delay
    setTimeout(animateButtons, 5000); // Adjust the delay as needed (5000ms = 5 second)
});
