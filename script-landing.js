const params = new URLSearchParams(window.location.search);
const student = params.get("student");

const studentData = {
    john: {
        name: "Althea Mae C. Aragon",
        personal: "John's personal information goes here.",
        skills: "John's skills go here.",
        education: "John's education goes here.",
        achievements: "John's awards go here."
    },
    jane: {
        name: "Grace Anne F. Lim",
        personal: "Jane's personal information goes here.",
        skills: "Jane's skills go here.",
        education: "Jane's education goes here.",
        achievements: "Jane's awards go here."
    },
    alice: {
        name: "Hoshea Shania C. Lopez",
        personal: "Alice's personal info goes here.",
        skills: "Alice's skills go here.",
        education: "Alice's education goes here.",
        achievements: "Alice's achievements go here."
    },
    marco: {
        name: "Dianna Rain M. Romero",
        personal: "Marco's personal info goes here.",
        skills: "Marco's skills go here.",
        education: "Marco's education goes here.",
        achievements: "Marco's achievements go here."
    }
};

if (studentData[student]) {
    document.querySelector("#personal p").textContent = studentData[student].personal;
    document.querySelector("#skills p").textContent = studentData[student].skills;
    document.querySelector("#education p").textContent = studentData[student].education;
    document.querySelector("#achievements p").textContent = studentData[student].achievements;
}
