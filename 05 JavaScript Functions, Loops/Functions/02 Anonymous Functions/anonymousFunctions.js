const logKey = function (event) {
    alert(`You pressed "${event.key}".`);
}

addEventListener("keydown", logKey);
