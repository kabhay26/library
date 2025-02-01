
function logout() {
    document.getElementById("loginPage").style.display = "flex";
    document.getElementById("dashboardPage").style.display = "none";
}

function showBooks(filter) {
    var bookList = document.getElementById("bookList");
    var books = [
        { title: "Alice In Wonderland", author: "Lewis Carroll", img: "alice.jpg" },
        { title: "Beginning PHP & MySQL", author: "W. Jason Gilmore", img: "php.jpg" },
        { title: "Gone with the Wind", author: "Margaret Mitchell", img: "gone.jpg" },
        { title: "Artificial Intelligence", author: "Stuart Russell", img: "ai.jpg" }
    ];

    bookList.innerHTML = "";

    books.forEach(book => {
        let bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.innerHTML = `
            <img src="${book.img}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
        `;
        bookList.appendChild(bookDiv);
    });
}

function searchBooks() {
    var query = document.getElementById("searchBox").value.toLowerCase();
    var books = document.querySelectorAll(".book h3");

    books.forEach(book => {
        if (book.innerText.toLowerCase().includes(query)) {
            book.parentElement.style.display = "block";
        } else {
            book.parentElement.style.display = "none";
        }
    });
}
