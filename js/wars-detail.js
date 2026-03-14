const fetchDetailCourse = async () => {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get("id");

    //console.log("Course ID:", courseId)
    
    const response = await fetch("./data/wars-detail.json");
    const data = await response.json();


    const course = data.find(c => c.id === courseId);

    let detailContainer = document.getElementById("wars-detail");
    if(course){
        

        detailContainer.innerHTML = `
            <h2 class="war-name">${course.title}</h2>

        <ul class="nav nav-pills justify-content-center mb-4">

            <li class="nav-item">
                <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#time">
                    Thời gian
                </button>
            </li>

            <li class="nav-item">
                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#process">
                    Quá trình
                </button>
            </li>

            <li class="nav-item">
                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#meaning">
                    Ý nghĩa
                </button>
            </li>

            <li class="nav-item">
                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#result">
                    Kết quả
                </button>
            </li>

        </ul>


        <div class="tab-content">

            <div class="tab-pane fade show active" id="time">
                <p>
                    ${course.time}
                </p>
            </div>

            <div class="tab-pane fade" id="process">
                <p>
                    ${course.phases}
                </p>
            </div>

            <div class="tab-pane fade" id="meaning">
                <p>
                    ${course.meaning}
                </p>
            </div>

            <div class="tab-pane fade" id="result">
                <p>
                    ${course.result}
                </p>
            </div>

        </div>
        `;
    }
}
fetchDetailCourse();