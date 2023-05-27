import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img, idCat}) => {
  return (
    <div className="row justify-content-center">
      <div className="col-6">
              <div class="card border-success">
          <h5 class="card-header fs-4 text-center"><strong>{nombre}</strong></h5>
          <div class="card-body">
           <div className="row">
            <div className="col-6">
                <p class="card-title">Precio: <i class="bi bi-currency-dollar fs-4"></i> <span className='fs-5 text-bg-success pt-1 pb-1 px-3'><strong>{precio}</strong></span> MXN</p>
                <p>Categoría: <i class="bi bi-bookmark"></i> <span><strong>{idCat == 4 ? 'Estrategia': 'Aventura'}</strong></span></p>
                <p class="card-text">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
                
              </div>
              <div className="col-6 text-end">
                <img className="imgproducto" src= {img} alt={nombre} />
              </div>
           </div>
           <div className="row justify-content-center mt-3">
            <hr />
            <div className="col-4">
            <a href="#" class="btn btn-outline-success"><i class="bi bi-cart-plus fs-5"></i> Agregar al corrito</a>
            </div>
           </div>
            
          </div>
        </div>
      </div>
    </div>


  )
}

export default ItemDetail