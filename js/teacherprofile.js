// Fields list
const fields = [
    "name", "empId", "profileEmail", "phone",
    "class1", "subject1", "class2", "subject2"
];

let editMode = false;

// Load saved data
window.onload = function(){
    fields.forEach(id=>{
        const el = document.getElementById(id);
        if(el){
            el.value = localStorage.getItem(id) || "";
        }
    });
};

// Edit / Save
function editProfile(){
    const button = document.querySelector(".primary");

    if(!editMode){
        fields.forEach(id=>{
            document.getElementById(id).disabled = false;
        });
        button.textContent = "Save Profile";
        editMode = true;
    }
    else{
        fields.forEach(id=>{
            const el = document.getElementById(id);
            localStorage.setItem(id, el.value);
            el.disabled = true;
        });

        alert("Profile updated successfully!");
        button.textContent = "Edit Profile";
        editMode = false;
    }
}

// Change Password
function changePassword(){
    let pass = prompt("Enter new password:");
    if(pass){
        alert("Password changed successfully!");
    }
}

// Logout
function logout(){
    alert("Logged out");
    window.location.href = "index.html";
}