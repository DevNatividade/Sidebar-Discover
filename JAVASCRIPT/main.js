// adiciona elementos 'li' na lista ordenada
function addLinks(image, text) {
    return `
    <li>
        <img src="./Assets/${image}.svg" alt="logo ${image}">
        <a href="#">${text}</a>
    </li>  
    `
}
// chama a função addLinks para adicionar uma 'li'
document.querySelector('.sideLinks').innerHTML =
    addLinks('search', 'Buscar') +
    addLinks('grid', 'Dashboard') + 
    addLinks('pet', 'Pets') +
    addLinks('user', 'Clientes') +
    addLinks('vet', 'Vets') +
    addLinks('settings', 'Ajustes')