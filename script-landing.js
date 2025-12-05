const params = new URLSearchParams(window.location.search);
const student = params.get("student");

const studentData = {
    aragon: {
        name: "Althea Mae C. Aragon",
        personal: "Althea's personal information goes here.",
        skills: "Althea's skills go here.",
        education: "Althea's education goes here.",
        achievements: "Althea's awards go here."
    },
    lim: {
        name: "Grace Anne F. Lim",
        personal: "Grace's personal information goes here.",
        skills: "Grace's skills go here.",
        education: "Grace's education goes here.",
        achievements: "Grace's awards go here."
    },
    lopez: {
        name: "Hoshea Shania C. Lopez",
        personal: "Hoshea's personal info goes here.",
        skills: "Hoshea's skills go here.",
        education: "Hoshea's education goes here.",
        achievements: "Hoshea's achievements go here."
    },
    romero: {
        name: "Dianna Rain M. Romero",
        personal: "Dianna's personal info goes here.",
        skills: "Dianna's skills go here.",
        education: "Dianna's education goes here.",
        achievements: "Dianna's achievements go here."
    }
};

if (studentData[student]) {
    document.querySelector("#personal p").textContent = studentData[student].personal;
    document.querySelector("#skills p").textContent = studentData[student].skills;
    document.querySelector("#education p").textContent = studentData[student].education;
    document.querySelector("#achievements p").textContent = studentData[student].achievements;
}
