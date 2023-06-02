import {Card} from "react-bootstrap"


const Clima = ({clima}) => {
    return (
        <Card border="primary" className="border m-3 p-3">
            <Card.Header>{clima.name}</Card.Header>
            <Card.Body>
                <Card.Text>
                    <p>  Humedad: {clima.main.humidity}%  </p>
                    <p> Temperatura: {clima.main.temp -  273.15}°</p>
                    <p> T. Max: {clima.main.temp_max -  273.15}°</p>
                    <p> T. Min: {clima.main.temp_min -  273.15}°</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Clima;