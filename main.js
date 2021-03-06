const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]


// const createStudentComponent = (name, subject, info, score) => {
//     return `
//         <div class="student">
//             <h1 class="name">${name}</h1>
//             <section class="subject">${subject}</section>
//             <aside class="info">${info}</aside>
//             <aside>${score}</aside>
//         </div>
//     `
// }


const createStudentComponent = (objectArray) => {
    
    return `
        <div class="student">
            <h1 class="name">${objectArray.name}</h1>
            <section class="subject">${objectArray.subject}</section>
            <aside class="info">${objectArray.info}</aside>
            <aside>${objectArray.score}</aside>
        </div>
    `
}

const studentContainer = document.querySelector("#container")


for (let i = 0; i < students.length; i++) {
    studentContainer.innerHTML += createStudentComponent(students[i])
    }


    // for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     const header = document.querySelectorAll('.name')
//     const section = document.querySelectorAll('.subject')
//     const aside = document.querySelectorAll('.info')
//     if (student.score >= 60) {
//         header[i].classList.add('passing', 'xx-large');
//         section[i].classList.add('bordered', 'dashed', 'section--padded');
//         aside[i].classList.add('pushRight');
//     } else {
//         header[i].classList.add('failing');
//     }
// }