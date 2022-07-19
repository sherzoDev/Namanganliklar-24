var articleModalCloseBtn = document.querySelector('.article-modal-show-btn')
var closeModal = document.querySelector('.close-modal')
var notification = document.querySelector(".notification")
var articleBtn = document.querySelector(".js-articel-btn")

articleBtn.addEventListener('click', () => {
    notification.classList.add("notificationOn")
})

closeModal.addEventListener('click', () => {
    notification.classList.remove("notificationOn")
})

articleModalCloseBtn.addEventListener('click', () => {
    notification.classList.remove("notificationOn")
    alert('You turned on notification')
})