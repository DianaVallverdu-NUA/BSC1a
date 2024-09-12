function random() {
    return Math.floor(Math.random() * 100);
    }
    
    let randomNumAnnouncer = function() {
    alert(`Today/’s random number is ${random()}! `);
    }
    
    randomNumAnnouncer();
    