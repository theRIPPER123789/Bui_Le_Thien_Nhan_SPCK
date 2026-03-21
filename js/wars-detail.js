const fetchDetailWar = async () => {

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const response = await fetch('./data/Khang-chien.json');
    const data = await response.json();

    const war = data.wars.find(item => item.id === id)

    const detailContainer = document.getElementById('war-detail');

    if (!war) {
        detailContainer.innerHTML = '<p>Không tìm thấy dữ liệu</p>';
        return;
    }

    detailContainer.innerHTML = `
        <h2 class="war-name">${war.title}</h2>

        <ul class="nav nav-pills justify-content-center mb-4">
            <li class="nav-item">
                <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#time">Thời gian</button>
            </li>
            <li class="nav-item">
                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#process">Quá trình</button>
            </li>
            <li class="nav-item">
                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#meaning">Ý nghĩa</button>
            </li>
            <li class="nav-item">
                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#result">Kết quả</button>
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
};

const createList = (data) => {
    if (!data) return "";

    let arr = Array.isArray(data)
        ? data
        : typeof data === "string"
            ? data.split(/,|\n/)
            : [];

    arr = arr.map(i => i.trim()).filter(i => i);

    return `<ul class="war-list">
        ${arr.map(i => `<li>${i}</li>`).join("")}
    </ul>`;
};

const createPhases = (phases) => {
    if (!phases) return "";

    return phases.map(p => `
        <div class="phase">
            <h5>${p.period} – ${p.title}</h5>
            ${createList(p.content)}
        </div>
    `).join("");
};

fetchDetailWar();