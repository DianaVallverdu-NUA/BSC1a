for (let i=1; i<=100; i++){
    switch(0){
      case (i % 15):
        console.log("fizzbuzz");
        break;
      case (i % 3):
        console.log("fizz");
        break;
      case (i % 5):
        console.log("buzz");
        break;
      default:
        console.log(i);
    }
  };