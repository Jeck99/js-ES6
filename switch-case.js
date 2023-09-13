let color = "yellow";
function checkColor() {
    switch (color) {
        case "purple":
            console.log(1);
            return;
        case "red":
            console.log(2);
            return;
        case "blue":
            console.log(3);
            return;
        case "yellow":
            console.log(4);
            return;
        default:
            console.log(0);
    }
}
checkColor()