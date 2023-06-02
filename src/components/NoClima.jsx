import {Card} from "react-bootstrap"


const NoClima = () => {
    return (
        <Card border="danger" className="border m-3 p-3">
            <Card.Body>
                <Card.Title>No se encontro la ciudad</Card.Title>
                <Card.Text>
                 Por favor ingrese un nombre de ciudad válido
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default NoClima;