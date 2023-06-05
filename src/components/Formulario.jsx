import { Form, Button, Row, Col, Spinner } from "react-bootstrap"
import { useState, useEffect } from "react"
import Clima from "./Clima";
import NoClima from "./NoClima";



const Formulario = () => {

    const [pais, setPais] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [clima, setClima] = useState({})



    useEffect(() => {
        consultarAPI();
    }, [ciudad])

    
    
    const consultarAPI = async () => {
        //realizar una peticion GET
        // https://newsdata.io/api/1/news?apikey=pub_23856e424fbbf0b4a2c225387df6827274d4c&q=pizza
        try {
            // setMostrarSpinner(true)
            const apiKey = "8e1aad5fa380a4b1a2a2c0e1d4fdd8d2"; 
            const ciudadBuscada = ciudad; 
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadBuscada}&appid=${apiKey}`;
        
            const respuesta = await fetch(url);
            const dato = await respuesta.json()
            console.log(respuesta)
            console.log(dato)
            setClima(dato)
            console.log(ciudad)
            
            //ocultar el spinner, si queremos le podemos dar tiempo, o sino no..
            // setTimeout(() => {
            //     setMostrarSpinner(false)
            // }, 1000)
            
        } catch (error) {
            console.log(error)
        }
    }
    const mostrarComponente = !clima.name ? (
            <NoClima></NoClima>
        ) : (
            <Clima clima={clima}></Clima>
    )

    const handleSubmit = (e)=>{
        e.preventDefault()
        setCiudad(ciudad)
        setPais(pais)
        alert("dato cargado ciudad: " + ciudad + " pais: " + pais)
    }
    
    return (
        <Form onSubmit={handleSubmit} className="p-0">
            <div className="p-4">
                <Form.Group className="mb-3">
                    <Form.Label>País:</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el nombre de un país"
                     onChange={(e) => setPais(e.target.value)}
                     value={pais}/> 
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Ciudad:</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el nombre de una ciudad" 
                      onChange={(e) => setCiudad(e.target.value)}
                      value={ciudad}/> 
                </Form.Group>

                <Button variant="primary" type="submit">
                    Consultar clima
                </Button>
            </div>
            <hr></hr>
            {mostrarComponente}
        </Form>
    );
};

export default Formulario;