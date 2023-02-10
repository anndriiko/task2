function create (tag, properties, styles) {

    const body = document.querySelector('body');
    let g = document.createElement(tag);
    body.append(g);
        
    for (let propertie of properties ) {
        
        if ( propertie[0] === 'innerHTML' ) {
            g.innerHTML = propertie[1]; 
        }
        if (propertie[0] === 'type') {
            g.type = propertie[1]; 
        }
        if (propertie[0] === 'placeholder') {
            g.placeholder = propertie[1];
        }
    }
    for (let style of styles) {
        if (style[0] === 'fontSize'){
            g.style.fontSize = style[1];
        }
        if (style[0] === 'cvet'){
            g.style.color = style[1];
        }
    }    
}
create("input",[ ['innerHTML', 'Lorem ipsum'], ['type', 'text'], ['placeholder', 'dolor sit amet'] ],[ ['fontSize', '18px'], ['color', 'red'] ]);
