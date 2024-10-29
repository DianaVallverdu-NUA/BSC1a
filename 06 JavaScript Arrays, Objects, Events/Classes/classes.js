class Staff {
    name;
    constructor(name){
        this.name = name;
    }
    bio(){
        console.log(`Hi! I’m ${this.name}`);
    }
};

class Technician extends Staff {
	workshop;
	constructor(name, workshop) {
		super(name);
		this.workshop = workshop;
	}
	bio() {
		console.log(`Hi! I’m ${this.name}, and I run the ${this.workshop}.`);
	}
};

class Academic extends Staff {
    course;

    constructor(name, course) {
        super(name);
        this.course = course;
    }

    bio(){
        console.log(`Hi! I’m ${this.name}, and I teach the ${this.course} course.`);
    }
};