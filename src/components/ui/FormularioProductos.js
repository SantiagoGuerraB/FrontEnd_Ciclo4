import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ActualizarProducto from '../paginas/ActualizarProducto';


const FormularioProductos = ({producto}) => {

    const { id, brand, model, procesor, os, description, memory, hardDrive, price, quantity, photography } = producto;
    
    const [ productos, guardarProductos] = useState([]);

    fetch("http://129.159.68.115:8080/api/laptop/all")
    .then((res) => res.json())
    .then((data) => {
        //console.log(data);
        guardarProductos(data);
    });
   
const actualizarProducto = id =>{

    {productos.map( producto =>(
        <ActualizarProducto 
       key={producto.id}
        producto={producto}
       /> ))}
  
}


    const borrarProducto = id =>{

        Swal.fire({
            title: 'Quieres borrar el producto?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                try{
                    console.log(id);
                    fetch(`http://129.159.68.115:8080/api/laptop/${id}`,{
                        method: "DELETE",
                        headers: {
                            Accept: "aplication/json",
                            "Content-Type": "aplication/json",
                        },
                      }).then((data) =>{
                         // console.log(data);
                      });   
              Swal.fire(
                'Deleted!',
                'Se borro correctamente.',
                'success'
              );
            } catch (error) {
                console.log(error)
            }
            
        }
      })
}
       


    return( 
        <>
    
                

        <div className="w-full px-3 mb-4">
            <div className="p-5 shadow-md bg-white">
                <div className="lg:flex">
                    <div className="lg:w-5/12 xl:w-3/12">
                   
                      <img src={photography} alt=" imagen platillo " />
                            <div className="sm:flex sm:-mx-2 pl-2">
                                
                            </div>
                            </div>
                            <div className="lg:w-7/12 xl:w-9/12 pl-5">
                            <p className="font-bold text-2xl text-yellow-600 mb-4">{id} </p>

                            <p className="text-gray-600 mb-4">Marca: {''}
                            <span className="font-bold text-2xl text-yellow-600 mb-4"> {brand}</span>

                            <p className="text-gray-600 mb-4">modelo: {''}
                            <span className="font-bold text-2xl text-yellow-600 mb-4"> {model}</span>

                            <p className="text-gray-600 mb-4">Procesador: {''}
                            <span className="text-gray-700 font-bold"> {procesor}</span>

                            <p className="text-gray-600 mb-4">Sistema Operativo: {''}
                            <span className="text-gray-700 font-bold"> {os}</span>

                            <p className="text-gray-600 mb-4">Descripci??n: {''}
                            <span className="text-gray-700 font-bold"> {description}</span> 

                            <p className="text-gray-600 mb-4">Memoria: {''}
                            <span className="text-gray-700 font-bold"> {memory}</span> 

                            <p className="text-gray-600 mb-4">Disco Duro: {''}
                            <span className="text-gray-700 font-bold"> {hardDrive}</span> 

                            <p className="text-gray-600 mb-4">Precios: {''}
                            <span className="text-gray-700 font-bold">$ {price}</span> 
                            
                            <p className="text-gray-600 mb-4">Cantidad: {''}
                            <span className="text-gray-700 font-bold">{quantity}</span> 
                        </p>
                        </p>
                        </p>
                        </p>
                        </p>
                        </p>
                        </p>
                        </p>
                        </p>                        
                        <button
                            onClick={ () => borrarProducto(producto.id)}
                            type="submit"
                            className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                           > 
                           Borrar
                           
                           </button>
                          
                            <Link to={`/actualizar-producto/${producto.id}`} className="  bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                                Actualizar Producto
                            </Link>
                           
                          
                    </div>
                </div>
            </div>
        </div>
        
        </>
        
        
     );
}
 
export default FormularioProductos;