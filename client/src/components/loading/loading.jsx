import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

function Loading (props) {

    const[show, setShow] = useState(props.show);

    useEffect(() =>{
        function show(){
            if(props.show !== show){
                setShow(props.show)
            }
        };
        show();
    });

    return(
        <>
        <div>
        {show ? (
            Swal.fire({
                title:'Cargando...',
                didOpen: () => {
                    Swal.showLoading();
                }
            }) 
        ) : null }
        </div>
        </>
    );
};

export default Loading;