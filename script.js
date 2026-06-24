function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

    return JSON.parse(atob(base64));
}

function handleCredentialResponse(response) {
    const userData = parseJwt(response.credential);

    document.getElementById("profile").style.display = "block";
    document.getElementById("name").textContent = userData.name;
    document.getElementById("email").textContent = userData.email;
    document.getElementById("picture").src = userData.picture;

    console.log("Google User:", userData);

    // Send token to backend if needed
    // fetch('/auth/google', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         credential: response.credential
    //     })
    // });
}
function logout() {
    google.accounts.id.disableAutoSelect();

    document.getElementById("profile").style.display = "none";

    document.getElementById("name").textContent = "";
    document.getElementById("email").textContent = "";
    document.getElementById("picture").src = "";

    document.querySelector(".g_id_signin").style.display = "block";
}
