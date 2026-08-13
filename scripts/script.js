// Login button functionality;
document.getElementById("formFieldset").addEventListener('submit', (event) => {
    event.preventDefault();

    const mobile = 19222222222;
    const pin = 1234;

    const mobileNum = document.getElementById("mobileNumber").value;
    const mobileNumber = parseInt(mobileNum);

    const fourPin = document.getElementById("fourDigitPin").value;
    const fourDigitPin = parseInt(fourPin);

    if (mobileNum === '' || fourPin === '') {
        document.getElementById("errorText").textContent = "Please Fill The Credentials!";
    } else if (mobile === mobileNumber && pin === fourDigitPin) {
        window.location.href = "home.html";
    } else {
        document.getElementById("errorText").textContent = "Incorrect Mobile OR Pin!";
    }

    document.getElementById("formFieldset").reset();
});
