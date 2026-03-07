const fetchData = async () => {
    const response = await fetch("./data/Khang-chien.json");
    const data = await response.json();
    return data.wars;
}

const displayCourses = async (courses) => {

    const coursesContainer = document.getElementById("warsContainer");
    coursesContainer.innerHTML = "";

    let htmls = "";
    htmls = courses.map(course => {
        return `
            <div class="war-card">

                <img class="war-img" src="${course.image}" alt="${course.title}">

                <div class="war-content">

                    <h3 class="war-title">${course.title}</h3>

                    <p class="war-desc">${course.description}</p>

                    <a class="btn-detail" href="./wars-detail.html">Xem chi tiết</a>

                </div>

            </div>
        `
    }).join("");

    coursesContainer.innerHTML = htmls;
};

fetchData().then(displayCourses);