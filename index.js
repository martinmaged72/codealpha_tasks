let buttons = document.querySelectorAll(".button");
for (let button of buttons) {
    button.addEventListener("click", function () {
    let buttonInnerHtml = this.innerHTML;
    let currentValue = document.querySelector("#field").value;

    switch (buttonInnerHtml) {
        case "Ac":
        document.querySelector("#field").value = "";
        break;

        case "Del":
        document.querySelector("#field").value = currentValue.slice(0, -1);
        break;

        case "=":
        document.querySelector("#field").value = eval(currentValue);
        break;

        default:
        document.querySelector("#field").value = currentValue + buttonInnerHtml;
    }
    });
}
