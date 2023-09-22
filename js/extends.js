class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedBack() {
        console.log(`${this.name} thank you for your feedback`);
    }
}


class Instructor extends TeamMember {
    designation = 'web course instructor'
    team = 'web team'
    constructor(name, location) {
        super(name, location)
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`);
    }
}

class Developer extends TeamMember {

    designation = 'web course instructor'
    team = 'web team'

    constructor(name, location, tech) {
        super(name, location);
        this.tech = tech;
    }
    developerFeature(feature) {
        console.log(`please develop the ${feature}`);
    }
    please(version) {
        console.log(`please release the version ${version}`);
    }
}


class JobPlacement extends TeamMember{
    designation = 'job placement place market'
    team = 'web team'
    constructor(name, location, tech) {
        super(name,location);
        this.tech = tech;
    }
    developerResume(feature) {
        console.log(`please develop the ${feature}`);
    }
    prepare(version) {
        console.log(`please release the version ${version}`);
    }
}


const alia=new Developer('alia','dhaka','react');
console.log(alia);