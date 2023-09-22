<!DOCTYPE html>
<html lang="en">
<body>
    <div style="font-family: Arial, sans-serif; background-color: #f0f0f0; margin: 0; padding: 0;">
        <div style="max-width: 800px; margin: 0 auto; padding: 20px; background-color: #fff; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); border-radius: 10px;">
            <h1 style="color: #1fa0ff; text-align: center;">Financial Management</h1>
            <p style="font-size: 18px; text-align: center;">This platform provides a user friendly interface for you to effortlessly handle your personal banking. You have the flexibility to carry out multiple tasks, like depositing funds, making withdrawals and checking your account balance.</p>
            <h2 style="color: #1fa0ff;">How to Use the Website</h2>
            <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 10px;"><strong style="color: #1fa0ff;">Access the Website:</strong> Open the provided HTML file, <code>index.html</code>, in a web browser.</li>
                <li style="margin-bottom: 10px;"><strong style="color: #1fa0ff;">Homepage:</strong> You'll see a webpage titled "Financial Management" with a background image and a heading that says "Welcome to Your Personal Banking Account."</li>
                <li style="margin-bottom: 10px;"><strong style="color: #1fa0ff;">Buttons:</strong> There are three buttons:</li>
                <ul style="list-style: none; padding: 0;">
                    <li style="margin-bottom: 10px;"><strong style="color: #1fa0ff;">Deposit:</strong> Click this button to deposit money into your account. You will be prompted to enter the deposit amount. If the input is valid (a positive number), the deposit will be made, and a success message will appear. If there's an error (e.g., negative input or invalid characters), an error message will be displayed.</li>
                    <li style="margin-bottom: 10px;"><strong style="color: #1fa0ff;">Withdraw:</strong> Click this button to withdraw money from your account. You'll be prompted to enter the withdrawal amount. Similar to the deposit, it will validate the input and either perform the withdrawal or show an error message.</li>
                    <li style="margin-bottom: 10px;"><strong style="color: #1fa0ff;">Check Balance:</strong> Click this button to check your current account balance. It will display your balance.</li>
                </ul>
            </ul>
            <h2 style="color: #1fa0ff;">Walkthrough of Code</h2>
            <p>The JavaScript code of this website incorporates the use of classes, switch statements, and try-catch-finally statements:</p>
            <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 10px;"><strong style="color: #1fa0ff;">Classes:</strong> The <code>BankAccount</code> class is used to represent a bank account. It has methods for depositing, withdrawing, and checking the balance.</li>
                <li style="margin-bottom: 10px;"><strong style="color: #1fa0ff;">Switch Statements:</strong> A switch statement is used to determine the action based on the button clicked by the user ("Deposit," "Withdraw," or "Check Balance").</li>
                <li style="margin-bottom: 10px;"><strong style="color: #1fa0ff;">Try-Catch-Finally Statements:</strong> Try-catch blocks handle exceptions when the user enters invalid input or attempts to withdraw more than the account balance. Error messages are displayed in a formatted style.</li>
            </ul>
            <!-- Link to your website -->
            <p style="text-align: center; margin-top: 20px;">
    The application can be accessed by navigating to the following link:
                <br>
   <a href="https://sunny-finances.web.app" style="color: #1fa0ff; text-decoration: none;">Financial Management</a>
</p>
     </div>
    </div>
</body>
</html>
