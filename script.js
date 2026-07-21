function blurSite() {
    const htmlElement = `
    <div id="cover" style="display:flex;position:fixed;top:0;left:0;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);background:rgba(255, 255, 255, 0.2);width:100%;height:100%;text-align:center;">
        <h1 style="font-size:60px;place-self: center;">Website is in progress!</h1>
    </div>
    `;
    document.querySelector("body").innerHTML += htmlElement;
    return true;
}

function unblurWebsite() {
    document.querySelector("div#cover").style.display = "none";
    console.log("Succesfully removed the cover!")
}

async function loadData() {
    const response = await fetch("data.json");
    const data = await response.json();
    return data;
}

async function laodPlayers() {
    const data = await loadData();
    const players = data.players;
    players.forEach((p) => {
        let row = `
        <tr>
            <td>${p.name}</td>
            <td>${p.rank}</td>
            <td>${p.builds}</td>
            <td>${p.country}</td>
        </tr>
    `;
        document.querySelector("table#player-list").innerHTML += row;
    });
    document.querySelectorAll("table#player-list>tbody>tr").forEach(row => {
        const secondCell = row.querySelector("td:nth-child(2)");

        if (secondCell) {
            if (secondCell.textContent.includes("HT1")) {
                secondCell.style.background = "gold";
                secondCell.style.fontWeight = "bold";
            }
        }
    });
}

function loadImages() {
    const galleryBox = document.querySelector("div#gallery-box");
    for (let i = 1; i < 19; i++) {
        let im = `gallery/im (${i}).jpeg`;
        let image = `<img src='${im}' alt='image-${i}'>`;
        galleryBox.innerHTML += image;
    }
}

function hideAllBox() {
    document.querySelectorAll("section.content-box").forEach((e) => {e.style.display = "none";});
}

function showBox(id) {
    hideAllBox();
    document.querySelector(`section#${id}`).style.display = "block";
}

function main() {
    document.querySelector("button#ranks-btn").addEventListener("click", () => { showBox("ranks"); });
    document.querySelector("button#gallery-btn").addEventListener("click", () => { showBox("gallery"); });
    loadImages();
    hideAllBox();
    laodPlayers();
    blurSite();
}

main();
