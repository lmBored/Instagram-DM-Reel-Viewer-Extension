document.addEventListener("click", (event) => {
    // Check if a shared reel is clicked
    if (event.target.closest(".shared-reel-class")) {
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

    function updateReel(src) {
        const video = document.querySelector("#custom-reel-viewer video");
        video.src = src;
        video.play();
    }
}
