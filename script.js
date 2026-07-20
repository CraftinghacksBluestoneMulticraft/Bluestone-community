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

blurSite();