import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProductos, getProductosPorCategoria } from '../../async'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const {idCategoria} = useParams();

  useEffect(() => {
    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

    funcionProductos(idCategoria)
      .then(res => setProductos(res))
      .catch(error => console.log(error))
  }, [idCategoria])

  return (
    <>
      <h2 className="text-center"> Solo los mejores juegos de estrategia </h2>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer