import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import AutoComplete from "./AutoComplete";

function Formulario(props) {
  const paises = [
    {
      name: "Brasil",
      id: "10"
    },
    {
      name: "Estado Unidos",
      id: "20"
    },
    {
      name: "Argentina",
      id: "30"
    },
    {
      name: "China",
      id: "40"
    },
    {
      name: "Japão",
      id: "50"
    },
    {
      name: "Chile",
      id: "60"
    }
  ];

  const [country, setcountry] = useState("");

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="validationNome">
        <Form.Label>Nome</Form.Label>
        <Form.Control required type="text" placeholder="Nome" defaultValue="" />
        <Form.Control.Feedback type="invalid">
          Campo obrigatório
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="validationSelect">
        <Form.Label>País</Form.Label>
        <AutoComplete
          data={paises}
          onSelect={(country) => setcountry(country)}
        />
        <Form.Control.Feedback type="invalid">
          Campo obrigatório
        </Form.Control.Feedback>
      </Form.Group>

      <Button type="submit">Enviar</Button>
    </Form>
  );
}

export default Formulario;
