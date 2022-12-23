head.addEventListener('click', function(e) {
    e.preventDefault();
})

submit.addEventListener('click', function(e) {
    links.setAttribute('class', 'qoshish')
    remove.setAttribute('class', 'delete')
})
remove.addEventListener('click', function(e){
    links.setAttribute('class', 'Deler')
}) 