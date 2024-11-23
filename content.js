document.addEventListener("click", (event) => {
    // Check if a shared reel is clicked
    const reelElement = event.target.closest(".shared-reel-class");
    if (reelElement) {
        // Grab all shared reels from the DM conversation
        const reels = document.querySelectorAll(".shared-reel-class");
        
        // Create a custom viewer (or override the default viewer)
        customReelViewer(reels);
    }
});

function customReelViewer(reels) {
    let index = 0;

    // Create a simple overlay to navigate between reels
    const overlay = document.createElement("div");
    overlay.id = "custom-reel-viewer";
    overlay.innerHTML = `
        <div class="reel-container">
            <button id="prev-reel">Previous</button>
            <video src="${reels[index].src}" autoplay></video>
            <button id="next-reel">Next</button>
            <button id="close-viewer">Close</button>
            <button id="toggle-viewer">Turn On/Off</button>
        </div>
    `;
    document.body.appendChild(overlay);

    document.getElementById("next-reel").onclick = () => {
        index = (index + 1) % reels.length;
        updateReel(reels[index].src);
    };

    document.getElementById("prev-reel").onclick = () => {
        index = (index - 1 + reels.length) % reels.length;
        updateReel(reels[index].src);
    };

    document.getElementById("close-viewer").onclick = () => {
        document.body.removeChild(overlay);
    };

    document.getElementById("toggle-viewer").onclick = () => {
        toggleReelViewer();
    };

    function updateReel(src) {
        const video = document.querySelector("#custom-reel-viewer video");
        video.src = src;
        video.play();
    }
}

function toggleReelViewer() {
    const overlay = document.getElementById("custom-reel-viewer");
    if (overlay.style.display === "none") {
        overlay.style.display = "block";
    } else {
        overlay.style.display = "none";
    }
}
