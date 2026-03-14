

// URL json
const DATA_URL = "./data/wars-detail.json";


// Lấy id từ url
function getWarId() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id")) || 0;
}


// Tạo HTML danh sách
function createList(arr) {
    if (!arr) return "";

    let html = "<ul class='war-list'>";
    arr.forEach(item => {
        html += `<li>${item}</li>`;
    });
    html += "</ul>";

    return html;
}


// Tạo HTML phases
function createPhases(phases) {

    if (!phases) return "";

    let html = "";

    phases.forEach(phase => {

        html += `
        <div class="phase">
            <h5>${phase.period} – ${phase.title}</h5>
            ${createList(phase.content)}
        </div>
        `;

    });

    return html;
}


// Render dữ liệu ra HTML
function renderWar(war) {

    document.querySelector(".war-name").innerText = war.title;

    // TIME
    document.querySelector("#time").innerHTML = `
        <p><strong>Thời gian:</strong> ${war.time}</p>
        <p><strong>Đối thủ:</strong> ${war.enemy}</p>
        <p><strong>Lãnh đạo:</strong> ${war.leader}</p>
        <p>${war.description}</p>
    `;


    // PROCESS
    document.querySelector("#process").innerHTML = `
        <h4>Bối cảnh</h4>
        ${createList(war.details.background)}

        <h4>Các giai đoạn</h4>
        ${createPhases(war.details.phases)}
    `;


    // MEANING
    document.querySelector("#meaning").innerHTML = `
        <h4>Ý nghĩa lịch sử</h4>
        ${createList(war.details.meaning)}
    `;


    // RESULT
    document.querySelector("#result").innerHTML = `
        <h4>Kết quả</h4>
        ${createList(war.details.result)}

        <h4>Tư liệu liên quan</h4>
        ${createList(war.details.documents)}
    `;
}


// Load JSON
async function loadWars() {

    try {

        const response = await fetch(DATA_URL);
        const data = await response.json();

        const id = getWarId();

        const war = data.wars[id];

        if (!war) {
            document.querySelector(".war-detail").innerHTML = "<h2>Không tìm thấy dữ liệu</h2>";
            return;
        }

        renderWar(war);

    } catch (error) {

        console.error("Lỗi tải dữ liệu:", error);

    }
}


// Run
loadWars();