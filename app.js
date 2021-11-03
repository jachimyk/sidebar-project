const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

document.addEventListener("click", function () {
    console.log(sidebar.classList);
    // 1st take
    if (sidebar.classList.contains('show-sidebar')) {
        sidebar.classList.remove('show-sidebar')
    } else {
        sidebar.classList.add('show-sidebar');
    }

    // 2nd take
    // sidebar.classList.toggle('show-sidebar');
});

// closebtn
// closeBtn.addEventListener('click', function () {
//     sidebar.classList.remove('show-sidebar');
// });