let inStock = true;

function afternoonTea() {
	let teaOptions = ["Assam", "Ceylon", "Earl Grey", "Green"];
    teaOptions.push("Lapsang Souchong");
    inStock ? alert(`Our teas are in stock! Our options are: ${teaOptions.join("; ")}`):
    alert('Unfortunately, our teas are out of stock at the moment. Please check back later!')
}

afternoonTea();

teaOptions.push("English Breakfast");
