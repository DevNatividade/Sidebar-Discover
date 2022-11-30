const sidebar = document.querySelector('.sidebar');
const containerTop = document.querySelector('.container-top'); 
const logo = document.querySelector('.logo')
const list = document.querySelector('li'); 
const appearParagraph = document.querySelectorAll('.sidebar-menu-icons-name')

const appearInput = document.querySelector('input'); 
const containerBottom = document.querySelector('.container-bottom'); 
const containerBottomPerson = document.querySelector('.container-bottom-person'); 

console.log(appearParagraph)

function appearSidebar() {
    sidebar.setAttribute('id', 'opened-sidebar');
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
}