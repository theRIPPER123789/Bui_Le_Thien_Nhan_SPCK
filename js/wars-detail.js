const fetchDetailCourse = async () => {

    //1. Lấy id từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id');

    // console.log(courseId);
    // 2. Lấy data từ file JSON
    const response = await fetch('./data/wars-detail.json');
    const data = await response.json();

    // 3. Tìm course có id trùng với id lấy được từ URL
    const course = data.find(item => item.id == parseInt(courseId));

    // 4. Hiển thị thông tin chi tiết của course lên trang web
    let detailContainer = document.getElementById('war-detail');
    if (course) {
        let warHtml = course.wars.map(war => {
            return `<li>${war.title}</li>`;
        }).join("");
        detailContainer.innerHTML = `
            <h2 class="war-name">${war.title}</h2>

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
                <p><strong>Thời gian:</strong> ${war.time}</p>
                <p><strong>Đối thủ:</strong> ${war.enemy}</p>
                <p><strong>Lãnh đạo:</strong> ${war.leader}</p>
                <p>${war.description}</p>
            </div>

            <div class="tab-pane fade" id="process">
                <h4>Bối cảnh</h4>
                ${createList(war.details?.background)}

                <h4>Các giai đoạn</h4>
                ${createPhases(war.details?.phases)}
            </div>

            <div class="tab-pane fade" id="meaning">
                ${createList(war.details?.meaning)}
            </div>

            <div class="tab-pane fade" id="result">
                <h4>Kết quả</h4>
                ${createList(war.details?.result)}

                <h4>Tư liệu</h4>
                ${createList(war.details?.documents)}
            </div>

        </div>
        `;
        
    } else {
        detailContainer.innerHTML = '<p>Không tìm thấy thông tin về cuộc chiến này.</p>';
    }

}

fetchDetailCourse();