// Handle Profile Photo Upload
document.getElementById("photoUpload").addEventListener("change", function(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const img = document.getElementById("profilePhoto");
        img.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
});

// Handle ELab Image Upload
document.getElementById("elabUpload").addEventListener("change", function(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const img = document.getElementById("elabImage");
        img.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
});

// Handle Certificate Image Upload
document.getElementById("certificateUpload").addEventListener("change", function(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const img = document.getElementById("certificateImage");
        img.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
});

// Handle Coding Competition Image Upload
document.getElementById("codingUpload").addEventListener("change", function(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const img = document.getElementById("codingImage");
        img.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
});
