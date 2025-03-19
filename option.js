export const dataResult = JSON.parse(localStorage.getItem('result')) || [];
console.log(dataResult);

const province = document.getElementById('probinsya');
const courseSelect = document.getElementById('course');
const sectionSelect = document.getElementById('section');
const year = document.getElementsByName('year');
const cities = document.getElementById('city');
const gender = document.getElementsByName('gender');

const city = { 
    "pampanga": ["San Fernando", "Angeles", "Mabalacat"],
    "tarlac": ["Bamban", "Concepcion", "Capas"],
    "zambales": ["Olongapo", "Iba", "San Antonio"]
};

function provinceList() {
    console.log("Province selected:", province.value); // Debugging
    cities.innerHTML = '';
    const provinceselected = province.value;
    const selectedProvince = city[provinceselected] || [];
    console.log("Cities for selected province:", selectedProvince); // Debugging

    selectedProvince.forEach((cityName) => {
        const option = document.createElement('option');
        option.value = cityName;
        option.textContent = cityName;
        cities.appendChild(option);
    });
}

provinceList();

province.addEventListener('change', provinceList);

const courseSections = {
    "ACT": ["ACT 1A", "ACT 1B", "ACT 1F"],
    "ACT2": ["ACT 2A", "ACT 2B", "ACT 2F"],
    "BSOA": ["BSOA 1A", "BSOA 1B", "BSOA 1C"],
    "BSOA2": ["BSOA 2A", "BSOA 2B", "BSOA 2C"],
    "BSOA3": ["BSOA 3A", "BSOA 3B", "BSOA 3C"],
    "BSOA4": ["BSOA 4A", "BSOA 4B", "BSOA 4C"],
    "CT": ["CT 1A", "CT 1B", "CT 1C"],
    "CT2": ["CT 2A", "CT 2B", "CT 2C"],
    "HM": ["HM 1A", "HM 1B", "HM 1C"],
    "HM2": ["HM 2A", "HM 2B", "HM 2C"],
    "HM3": ["HM 3A", "HM 3B", "HM 3C"],
    "HM4": ["HM 4A", "HM 4B", "HM 4C"],
};

function changeCourse() {
    sectionSelect.innerHTML = '';
    const selected = courseSelect.value;
    const selectedCourse = courseSections[selected] || [];
    selectedCourse.forEach((select) => {
        const option = document.createElement('option');
        option.value = select;
        option.textContent = select;
        sectionSelect.appendChild(option);
    });
}

function getSelectedYear() {
    for (let i = 0; i < year.length; i++) {
        if (year[i].checked) {
            return year[i].value;
        }
    }
}

function getSelectedgender() {
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            return gender[i].value;
        }
    }
}

function updateCoursesBasedOnYear() {
    const selectedYear = getSelectedYear();
    let availableCourses = [];
    
    if (selectedYear === 'one') {
        availableCourses = ["ACT","BSOA", "HM","CT"];
    } else if (selectedYear === 'two') {
        availableCourses = ["ACT2", "CT2","BSOA2", "HM2"];
    } else if (selectedYear === 'three') {
        availableCourses = ["BSOA3", "HM3"];
    } else if (selectedYear === 'four') {
        availableCourses = ["BSOA4", "HM4"];
    }
    
    courseSelect.innerHTML = '';
    availableCourses.forEach((course) => {
        const option = document.createElement('option');
        option.value = course;
        if (course === "ACT" || course === "ACT2") {
            option.textContent = "Associate in Computer Technology";
        } else if (course === "BSOA" || course === "BSOA2" || course === "BSOA3" || course === "BSOA4") {
            option.textContent = "Bachelor of Science in Office Administration";
        } else if (course === "CT"  || course === "CT2") {
            option.textContent = "Computer Technology";
        } else if(course === "HM" || course === "HM2" || course === "HM3" || course === "HM4") {
            option.textContent = "Hospitality Management";
        }
        courseSelect.appendChild(option);
    });
    
    changeCourse();
}

for (let i = 0; i < year.length; i++) {
    year[i].addEventListener('change', updateCoursesBasedOnYear);
}

courseSelect.addEventListener('change', changeCourse);

updateCoursesBasedOnYear();

const save = document.querySelector('.save-js');

save.addEventListener('click', (event) => {
    event.preventDefault();
    const year = getSelectedYear();
    const gender = getSelectedgender();
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const middlename = document.getElementById('middlename').value;
    const bday = document.getElementById('bday').value;
    const pnumber = document.getElementById('number').value;
    const email = document.getElementById('email').value;
    const studentId = document.getElementById('studentId').value;
    const section = document.getElementById('section').value;
    const course = document.getElementById('course').value;
    const address = document.getElementById('address').value;
    const province = document.getElementById('probinsya').value;
    const city = document.getElementById('city').value;
    console.log(city);
    const zip = document.getElementById('zipcode').value;
    const newEntry = {
        firstname,
        lastname,
        middlename,
        bday,
        gender,
        pnumber,
        email,
        studentId,
        year,
        course,
        section,
        address,
        province,
        city,
        zip
    };
    console.log(newEntry);
    dataResult.push(newEntry);
    localStorage.setItem('result', JSON.stringify(dataResult));
    setTimeout(() => {
        window.location.href = 'result.html';
    }, 10000);
});