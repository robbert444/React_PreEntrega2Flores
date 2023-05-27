import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img, idCat}) => {
  return (
    <div className='cardProducto'>
        <img className='imgProducto' src={img} alt={nombre} />
        <h4 className='text-center'>{nombre} </h4>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><i class="bi bi-currency-dollar fs-4"></i> <span className='fs-5 text-bg-success p-1'>{precio}</span> MXN</li>
          <li class="list-group-item"><i class="bi bi-bookmark"></i> <span>{idCat == 4 ? 'Estrategia': 'Aventura'}</span></li>
        </ul>
        <Link to={`/item/${id}`} className='btn btn-outline-secondary mt-2 mb-3'> Más Información</Link>
    </div>
  )
}

export default Item