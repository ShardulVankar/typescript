class facebook{
   protected university:string[];
   protected workPlace:string[];
   protected familyMembers:string[];
   protected phoneNo:number;
   protected emailID:string;
   protected city:string;
   protected dob:string;


    constructor(university1?:string[],workPlace1?:string[],familyMembers1?:string[],phoneNo1?:number,emailID1?:string,city1?:string,dob1?:string){
        this.university = [];
        this.workPlace = [];
        this.familyMembers = [];
        this.phoneNo = phoneNo1;
        this.emailID = emailID1;
        this.city = city1;
        this.dob = dob1;
    }

   
}
let fb = new facebook();


class personalInformation extends facebook{
   
    gender:string;
    religiousViews:string;
    languages:string[];

    constructor(university1?:string[],workPlace1?:string[],familyMembers1?:string[],phoneNo1?:number,emailID1?:string,city1?:string,dob1?:string,
        gender1?:string,religiousViews1?:string,languages1?:string[]){
        super(university1,workPlace1,familyMembers1,phoneNo1,emailID1,city1,dob1);
       
        this.gender = gender1;
        this.religiousViews = religiousViews1;
        this.languages = [];
    }

    getDetails = () =>{
       
        return "EmailID: " + this.emailID + "\naddress: " + this.city + "\nDate Of Birth: " + this.dob + "\nGender: " + this.gender + "\nPolical Views: " + this.religiousViews
    }

    getLanguage = (...language1:string[])=>{
        let lan = language1;
        this.languages = this.languages.concat(lan);
        return this.languages;
    }
}

let pi = new personalInformation(undefined,undefined,undefined,1234567890,'shardulvankar@gmail.com','pune','13/06/1993','male','nothing');
console.log("Persional Details:\n");
console.log(pi.getDetails());
console.log("Languages: " + pi.getLanguage('Marathi','hindi','english'));

class workAndEducation extends facebook{
    professionalSkills:string[];
    highSchool:string[];

    constructor(university1?:string[],workPlace1?:string[],familyMembers1?:string[],phoneNo1?:number,emailID1?:string,city1?:string,dob1?:string,
        professionalSkills1?:string[],highSchool1?:string){
        super(university1,workPlace1,familyMembers1,phoneNo1,emailID1,city1,dob1);
       this.professionalSkills = [];
       this.highSchool = [];
    }
   
    workFunc = (...workPlace1:string[])=>{
        let wp = workPlace1;
        this.workPlace = this.workPlace.concat(wp);
        return this.workPlace;
    }

    professionalSkillFunc = (...professionalSkills12:string[])=>{
        let ps = professionalSkills12;
        this.professionalSkills = this.professionalSkills.concat(ps);
        return this.professionalSkills;
    }

    universityFunc = (...university1:string[])=>{
        let uni = university1;
        this.university = this.university.concat(uni);
        return this.university;
    }

    highSchoolFunc = (...highSchool1:string[])=>{
        let hs = highSchool1;
        this.highSchool = this.highSchool.concat(hs);
        return this.highSchool;
    }
}

let we = new workAndEducation();
console.log("\nWork and Education details:\n");
console.log("Work Place: " + we.workFunc('tata communications'));
console.log("Professional Skills: " + we.professionalSkillFunc('c','c++','java','.net'));
console.log("University: " + we.universityFunc('pune university'));
console.log("High School: " + we.highSchoolFunc('sp college','modern college'));

class familyAndRelationshipDetails extends facebook{
    relationship:string;
    constructor(relationship1:string,university1?:string[],workPlace1?:string[],familyMembers1?:string,phoneNo1?:number,emailID1?:string,city1?:string,dob1?:string){
        super();
        this.relationship = relationship1;
    }

    getRelationshipDetails = ()=>{
        return this.relationship;
    }
    getFamilyMembers = (...familyMembers1:string[])=>{
        let fm = familyMembers1;
        this.familyMembers = this.familyMembers.concat(fm);
        return this.familyMembers;
    }
}

let frd = new familyAndRelationshipDetails('single');
console.log("Relationship Details:\n");
console.log("relationship: " + frd.getRelationshipDetails());
console.log("Family Details:\n");
console.log("Family members: " + frd.getFamilyMembers("mother:anupama","father:vivek","sister:manalee"));

class detailsAboutYou extends facebook{
    aboutYou:string;
    nickNames:string[];
    FavQuotes:string;
    bloodGroup:string;

    constructor(aboutYou1:string,favQuotes1:string,bloodGroup1:string,nickNames1?:string[],university1?:string[],workPlace1?:string[],familyMembers1?:string,phoneNo1?:number,emailID1?:string,city1?:string,dob1?:string){
        super();
        this.aboutYou = aboutYou1;
        this.nickNames = [];
        this.FavQuotes = favQuotes1;
        this.bloodGroup = bloodGroup1;
    }

    getDetails = ()=>{
        return "About You: " + this.aboutYou + "\nFavourite Quotes: " + this.FavQuotes + "\nBlood Group: "  + this.bloodGroup
    }

    getNickNames = (...nickNames1:string[])=>{
        let nickname = nickNames1;
        this.nickNames = this.nickNames.concat(nickname);
        return this.nickNames;
    }
}

let about = new detailsAboutYou('I am a software developer.I am a food lover person as well. Also like to travel from bike.','be good or go to hell.','o+');
console.log("Details About You:");
console.log(about.getDetails());
console.log("Nick Names: " + about.getNickNames('sharya','shardya','sha'));