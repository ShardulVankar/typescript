var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var facebook = /** @class */ (function () {
    function facebook(university1, workPlace1, familyMembers1, phoneNo1, emailID1, city1, dob1) {
        this.university = [];
        this.workPlace = [];
        this.familyMembers = [];
        this.phoneNo = phoneNo1;
        this.emailID = emailID1;
        this.city = city1;
        this.dob = dob1;
    }
    return facebook;
}());
var fb = new facebook();
var personalInformation = /** @class */ (function (_super) {
    __extends(personalInformation, _super);
    function personalInformation(university1, workPlace1, familyMembers1, phoneNo1, emailID1, city1, dob1, gender1, religiousViews1, languages1) {
        var _this = _super.call(this, university1, workPlace1, familyMembers1, phoneNo1, emailID1, city1, dob1) || this;
        _this.getDetails = function () {
            return "EmailID: " + _this.emailID + "\naddress: " + _this.city + "\nDate Of Birth: " + _this.dob + "\nGender: " + _this.gender + "\nPolical Views: " + _this.religiousViews;
        };
        _this.getLanguage = function () {
            var language1 = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                language1[_i] = arguments[_i];
            }
            var lan = language1;
            _this.languages = _this.languages.concat(lan);
            return _this.languages;
        };
        _this.gender = gender1;
        _this.religiousViews = religiousViews1;
        _this.languages = [];
        return _this;
    }
    return personalInformation;
}(facebook));
var pi = new personalInformation(undefined, undefined, undefined, 1234567890, 'shardulvankar@gmail.com', 'pune', '13/06/1993', 'male', 'nothing');
console.log("Persional Details:\n");
console.log(pi.getDetails());
console.log("Languages: " + pi.getLanguage('Marathi', 'hindi', 'english'));
var workAndEducation = /** @class */ (function (_super) {
    __extends(workAndEducation, _super);
    function workAndEducation(university1, workPlace1, familyMembers1, phoneNo1, emailID1, city1, dob1, professionalSkills1, highSchool1) {
        var _this = _super.call(this, university1, workPlace1, familyMembers1, phoneNo1, emailID1, city1, dob1) || this;
        _this.workFunc = function () {
            var workPlace1 = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                workPlace1[_i] = arguments[_i];
            }
            var wp = workPlace1;
            _this.workPlace = _this.workPlace.concat(wp);
            return _this.workPlace;
        };
        _this.professionalSkillFunc = function () {
            var professionalSkills12 = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                professionalSkills12[_i] = arguments[_i];
            }
            var ps = professionalSkills12;
            _this.professionalSkills = _this.professionalSkills.concat(ps);
            return _this.professionalSkills;
        };
        _this.universityFunc = function () {
            var university1 = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                university1[_i] = arguments[_i];
            }
            var uni = university1;
            _this.university = _this.university.concat(uni);
            return _this.university;
        };
        _this.highSchoolFunc = function () {
            var highSchool1 = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                highSchool1[_i] = arguments[_i];
            }
            var hs = highSchool1;
            _this.highSchool = _this.highSchool.concat(hs);
            return _this.highSchool;
        };
        _this.professionalSkills = [];
        _this.highSchool = [];
        return _this;
    }
    return workAndEducation;
}(facebook));
var we = new workAndEducation();
console.log("\nWork and Education details:\n");
console.log("Work Place: " + we.workFunc('tata communications'));
console.log("Professional Skills: " + we.professionalSkillFunc('c', 'c++', 'java', '.net'));
console.log("University: " + we.universityFunc('pune university'));
console.log("High School: " + we.highSchoolFunc('sp college', 'modern college'));
var familyAndRelationshipDetails = /** @class */ (function (_super) {
    __extends(familyAndRelationshipDetails, _super);
    function familyAndRelationshipDetails(relationship1, university1, workPlace1, familyMembers1, phoneNo1, emailID1, city1, dob1) {
        var _this = _super.call(this) || this;
        _this.getRelationshipDetails = function () {
            return _this.relationship;
        };
        _this.getFamilyMembers = function () {
            var familyMembers1 = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                familyMembers1[_i] = arguments[_i];
            }
            var fm = familyMembers1;
            _this.familyMembers = _this.familyMembers.concat(fm);
            return _this.familyMembers;
        };
        _this.relationship = relationship1;
        return _this;
    }
    return familyAndRelationshipDetails;
}(facebook));
var frd = new familyAndRelationshipDetails('single');
console.log("Relationship Details:\n");
console.log("relationship: " + frd.getRelationshipDetails());
console.log("Family Details:\n");
console.log("Family members: " + frd.getFamilyMembers("mother:anupama", "father:vivek", "sister:manalee"));
var detailsAboutYou = /** @class */ (function (_super) {
    __extends(detailsAboutYou, _super);
    function detailsAboutYou(aboutYou1, favQuotes1, bloodGroup1, nickNames1, university1, workPlace1, familyMembers1, phoneNo1, emailID1, city1, dob1) {
        var _this = _super.call(this) || this;
        _this.getDetails = function () {
            return "About You: " + _this.aboutYou + "\nFavourite Quotes: " + _this.FavQuotes + "\nBlood Group: " + _this.bloodGroup;
        };
        _this.getNickNames = function () {
            var nickNames1 = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                nickNames1[_i] = arguments[_i];
            }
            var nickname = nickNames1;
            _this.nickNames = _this.nickNames.concat(nickname);
            return _this.nickNames;
        };
        _this.aboutYou = aboutYou1;
        _this.nickNames = [];
        _this.FavQuotes = favQuotes1;
        _this.bloodGroup = bloodGroup1;
        return _this;
    }
    return detailsAboutYou;
}(facebook));
var about = new detailsAboutYou('I am a software developer.I am a food lover person as well. Also like to travel from bike.', 'be good or go to hell.', 'o+');
console.log("Details About You:");
console.log(about.getDetails());
console.log("Nick Names: " + about.getNickNames('sharya', 'shardya', 'sha'));
