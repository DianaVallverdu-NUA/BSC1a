const compArts = [
    "Hannah:3D Asset Production",
    "Hannah-Louise:Creative Technology",
    "Linards:Games Development",
    "Tracey:Animation and Sound",
    "Matthew:Animation and Sound",
    "Will:Workshop Manager",
    "Tanje: Animation Support",
  ];
  const para = document.querySelector("p");
  const input = document.querySelector("input");
  const btn = document.querySelector("button");
  
  btn.addEventListener("click", function() {
    const searchName = input.value.toLowerCase();
    input.value = "";
    input.focus();
    para.textContent = "";

    // For... of Loop begins here
    for (const tech of compArts) {
      const splitName = tech.split(":");
      if (splitName[0].toLowerCase() === searchName && splitName[0].toLowerCase() === 'will') {
        para.textContent = `${splitName[0]} is the ${splitName[1]} for Computational Arts.`;
        break;
      }
      else if (splitName[0].toLowerCase() === searchName) {
        para.textContent = `${splitName[0]} is the ${splitName[1]} Technician.`;
        break;
      }
    }
    if (para.textContent === "") {
      para.textContent = "Technician not found.";
    }
    //For... of Loop ends here
  });
  