export class ProductComponent extends HTMLElement{
    constructor(){

        super();
        this.attachShadow({mode:'open'});

        // Crear el link para importar el CSS
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'; 

    // Agregar la plantilla HTML del componente
    const template = document.createElement('template');
    template.innerHTML = /*html*/ `
    <style>
    a{
      color: rgb(255, 255, 255)!important;
      text-shadow: 2px 4px 4px rgb(99, 99, 99);
    }
  </style>
    <nav class="navbar bg-black p-4">
    <div class="col-3" ><a href="#" class="navbar-brand">Crear</a></div>
    <div class="col-3 "><a href="#" class="navbar-brand">Editar</a></div>
    <div class="col-3"><a href="#" class="navbar-brand">Eliminar</a></div>
    <div class="col-3"><a href="#" class="navbar-brand">Listar</a> 
    </nav>
    `;
     // Agregar el CSS y la plantilla al Shadow DOM
     this.shadowRoot.appendChild(style);
     this.shadowRoot.appendChild(template.content.cloneNode(true));
   };
}

customElements.define('products-component', ProductComponent);

