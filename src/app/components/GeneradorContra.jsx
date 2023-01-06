import {useState} from 'react'

export const GeneradorContra = () => {
    const [sliderValor, setsliderValor] = useState(20)
    const [mayusculasCB, setmayusculasCB] = useState(true)
    const [minusculasCB, setminusculasCB] = useState(true)
    const [digitosCB, setdigitosCB] = useState(true)
    const [especialesCB, setespecialesCB] = useState(true)

    const actualizarSliderValor = (e) => {
        setsliderValor(e.target.value);
    }
    const actualizarCB = (e,estado,funcionSet) => {
        let checkbox = e.target.name;
        let contador = 0;
        (checkbox != "mayusculasCB" && !mayusculasCB ) && contador++;
        (checkbox != "minusculasCB" && !minusculasCB ) && contador++;
        (checkbox != "digitosCB" && !digitosCB ) && contador++;
        (checkbox != "especialesCB" && !especialesCB ) && contador++;
        if(!estado)
            funcionSet(!estado)
        if(contador != 3)
            funcionSet(!estado);
        // else {
        //     if(e.target.value){
        //         funcionSet(e.target.value);
        //     }
        // }
        
    }

    return (
        <>
            <div className="justify-content-center text-center d-flex mb-5">
                <form className="generador-contra-form w-75 ">
                    <div className="form-group">
                        <input type="text" name="email" className="inpt-texto" disabled value="dddd" />
                        <input type="submit" value="Copiar" className="inpt-submit" />
                    </div>
                </form>
            </div>
            <div className="card mt-5 justify-content-center">
                <div className="card-body">
                    <h3 className="card-title text-center">Filtros</h3>
                    <form className="d-flex checkbox-form">
                        <div className="w-50">
                            <div className="slidecontainer mx-5 d-flex row align-content-center justify-content-center">
                                <label className="col-12">Longitud de caracteres</label>
                                <div className="form-group pt-3 d-flex align-items-center">
                                    <input type="range" min="1" max="60" value={sliderValor} className="slider w-75 mx-2" id="myRange" onChange={actualizarSliderValor}/>
                                    <input type="number" value={sliderValor} min="1" max="60" className="form-control w-25" onChange={actualizarSliderValor}/>

                                </div>
                            </div>
                        </div>
                        <div className="w-50 row d-flex checkbox-group px-5 mx-5">
                            <div className="form-group col-12 d-flex align-content-center px-5 pb-3 ">
                                <input type="checkbox" checked={mayusculasCB} onChange={(e) => actualizarCB(e,mayusculasCB,setmayusculasCB)}></input>
                                <label className="px-3">Mayúsculas</label>
                            </div>
                            <div className="form-group col-12 d-flex align-content-center px-5 pb-3">
                                <input type="checkbox" checked={minusculasCB} onChange={(e) => actualizarCB(e,minusculasCB,setminusculasCB)}></input>
                                <label className="px-3">Minusculas</label>
                            </div>
                            <div className="form-group col-12 d-flex align-content-center px-5 pb-3">
                                <input type="checkbox" checked={digitosCB} onChange={(e) => actualizarCB(e,digitosCB,setdigitosCB)}></input>
                                <label className="px-3">Digitos</label>
                            </div>
                            <div className="form-group col-12 d-flex align-content-center px-5 ">
                                <input type="checkbox" name="especialesCB" checked={especialesCB} onChange={(e) => actualizarCB(e,especialesCB,setespecialesCB)}></input>
                                <label className="px-3">Caracteres especiales</label>
                            </div>

                        </div>

                    </form>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                </div>
            </div>
        </>
    )
}