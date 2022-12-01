
let containerTop = document.querySelector('.container-top'); 
let logo = document.querySelector('.logo')
let list = document.querySelector('li'); 
let appearParagraph = document.querySelectorAll('.sidebar-menu-icons-name')
let appearInput = document.querySelector('input'); 
let containerBottom = document.querySelector('.container-bottom'); 
let containerBottomPerson = document.querySelector('.container-bottom-person'); 

let sidebar = document.querySelector('.sidebar');
    sidebar = true;

function appearSidebar() {
    sidebar = !sidebar

    if (sidebar) {
        document.querySelector('.sidebar').style.width = "250px";
        document.querySelector('main').style.left = "250px"
        
        containerTop.setAttribute('id', 'container-top-center')
        logo.setAttribute('id','logo')
        list.setAttribute('id','list')
        appearInput.setAttribute('id','list-text-appear')
        // quando tiver uma lista usar o forEach 
        appearParagraph.forEach(e => {
            e.setAttribute('id', 'list-text-appear')
        })
        containerBottom.setAttribute('id','container-bottom-center')
        containerBottomPerson.setAttribute('id','container-bottom-person-appear')
    } else {
        document.querySelector('.sidebar').style.width = "70px";
        document.querySelector('main').style.left = "70px"


        containerTop.removeAttribute('id', 'container-top-center')
        logo.removeAttribute('id','logo')
        list.removeAttribute('id','list')
        appearInput.removeAttribute('id','list-text-appear')
        // quando tiver uma lista usar o forEach 
        appearParagraph.forEach(e => {
            e.removeAttribute('id', 'list-text-appear')
        })
        containerBottom.removeAttribute('id','container-bottom-center')
        containerBottomPerson.removeAttribute('id','container-bottom-person-appear')
    }
}