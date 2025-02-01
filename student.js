const studentData = [
    // BCA 1st Year Student (Empty Data)
    { name: "", libraryId: "" },

    // BCA 2nd Year Students
    { name: "kashish", libraryId: "2621" },
    { name: "", libraryId: "" },

    // B.Com 1st Year Student (Empty Data)
    { name: "", libraryId: "" },

    // Guest Users
    { name: "mayank", libraryId: "069" },
    { name: "abhay", libraryId: "690" }
];

// Function for login

   
    function login() {
        var studentName = document.getElementById("Name").value.trim().toLowerCase(); // Convert to lowercase
        var libraryID = document.getElementById("libraryID").value.trim();
    
        if (studentName === "" || libraryID === "") {
            alert("Please enter your details.");
            return false;
        }

         // Check if student exists in data
    
        let isValid = studentData.some(student => student.name.toLowerCase() === studentName && student.libraryId === libraryID);
    
        if (!isValid) {
            alert("Invalid data! Try again.");
            return false;
        }
    
        // Hide login page & show dashboard
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("dashboardPage").style.display = "block";
    
        // Show student's name on dashboard (Capitalized)
        document.getElementById("studentDisplay").innerText = `Welcome ${(studentName.toUpperCase())}`
    
        return true;
    }
    
    

