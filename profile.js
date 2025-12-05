// Sample student data (replace with real data, e.g., from a database or API)
const studentsData = {
    aragon: {
        image: "images/1.png",  
        fullName: "Althea Mae C. Aragon",  
        studentNumber: "2023-00088-TG-0",
        surname: "Aragon",
        givenName: "Althea Mae",
        middleName: "Cantor",
        age: "20",
        birthday: "April 30, 2005",
        sex: "Female",
        contact: "09817165342",
        email: "althea.mae.aragon@iskolarngbayan.pup.edu.ph",
        address: " 83 Sambakai Kalayaan Brgy. 201 Pasay City, 1300, Metro Manila, Philippines ",
        emergencyContact: "Analyn Aragon",  
        number: "09817263723",  
        studentId: "2023-00088-TG-0",
        program: "Bachelor of Science in Information Technology",
        year: "3rd Year",
        section: "1",
        skills: ["Programming", "Web Development", "Graphic Design"]
    },
    lim: {
        image: "images/2.png",
        fullName: "Grace Anne F. Lim",
        studentNumber: "2023-00112-TG-0",
        surname: "Lim",
        givenName: "Grace Anne",
        middleName: "Flor",
        age: "20",
        birthday: "March 21, 2005",
        sex: "Female",  
        contact: "09162903429",
        email: "limgraceannef@iskolarngbayan.pup.edu.ph",
        address: "10-A Tindalo St. North Signal Village, Taguig City",
        emergencyContact: "Corazon Flor",  
        number: "09484415071",  
        studentId: "2023-00112-TG-0",
        program: "Bachelor of Science in Information Technology",
        year: "3rd Year",
        section: "1",
        skills: ["Networking", "Data Analysis", "Python"]
    },
    lopez: {
        image: "images/3.png",  // Fixed: Removed extra ".jpg" (assuming it's a typo)
        fullName: "Hoshea Shania C. Lopez",
        studentNumber: "2023-00113-TG-0",
        surname: "Lopez",
        givenName: "Hoshea Shania",
        middleName: "Cumad",
        age: "21",
        birthday: "July 10, 2004",
        sex: "Female",  
        contact: "09776325176",
        email: "hosheashaniaclopez@iskolarngbayan.pup.edu.ph",
        address: "31 TLR Townhomes Barangay Moonwalk Parañaque City",
        emergencyContact: "Madelyn C. Lopez",  
        number: "09195803102",  
        studentId: "2023-00113-TG-0",
        program: "Bachelor of Science in Information Technology",
        year: "3rd Year",
        section: "1",
        skills: ["CAD Design", "Mathematics", "Problem Solving"]
    },
    romero: {
        image: "images/4.png",
        fullName: "Dianna Rain M. Romero",
        studentNumber: "2023-00126-TG-0",
        surname: "Romero",
        givenName: "Dianna Rain",
        middleName: "Margaja",
        age: "20",
        birthday: "October 31, 2005",
        sex: "Female",
        contact: "09127132407",
        email: "diannarainmromero@iskolarngbayan.pup.edu.ph",
        address: "134 Sampaguita Street Perpetual Village, Taguig City, Metro Manila",
        emergencyContact: "Rodulfo Caharop",  
        number: "09493315025",  
        studentId: "2023-00128-TG-0",
       program: "Bachelor of Science in Information Technology",
        year: "3rd Year",
        section: "1",
        skills: ["Leadership", "Public Speaking", "Marketing"]
    }
};

// Function to get URL parameter (e.g., ?student=aragon)
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to populate the profile with student data
function populateProfile(studentKey) {
    const student = studentsData[studentKey];
    if (!student) {
        console.warn(`Student not found for key: "${studentKey}". Defaulting to "aragon".`);
        populateProfile('aragon');  // Default fallback
        return;
    }

    // Populate image and basic info
    document.getElementById('studentImage').src = student.image;
    document.getElementById('fullName').textContent = student.fullName;
    document.getElementById('studentNumber').textContent = student.studentNumber;

    // Personal Information
    document.getElementById('surname').textContent = student.surname;
    document.getElementById('givenName').textContent = student.givenName;
    document.getElementById('middleName').textContent = student.middleName;
    document.getElementById('age').textContent = student.age;
    document.getElementById('birthday').textContent = student.birthday;
    document.getElementById('sex').textContent = student.sex;
    document.getElementById('contact').textContent = student.contact;
    document.getElementById('email').textContent = student.email;
    document.getElementById('address').textContent = student.address;
    document.getElementById('emergencyContact').textContent = student.emergencyContact;
    document.getElementById('number').textContent = student.number;  // Emergency contact phone number

    // Student Information
    document.getElementById('studentId').textContent = student.studentId;
    document.getElementById('program').textContent = student.program;
    document.getElementById('year').textContent = student.year;
    document.getElementById('section').textContent = student.section;

    // Skills
    const skillsList = document.getElementById('skillsList');
    skillsList.innerHTML = '';  // Clear existing list
    student.skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });
}

// On page load, get the student parameter and populate
document.addEventListener('DOMContentLoaded', () => {
    const studentParam = getUrlParameter('student');
    const studentKey = studentParam || 'aragon';  // Default to 'aragon' if no param
    populateProfile(studentKey);
});
