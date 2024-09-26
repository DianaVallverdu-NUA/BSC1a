function logKey(event) {
    alert(`You pressed "${event.key}".`);
}

addEventListener("keydown", logKey);
