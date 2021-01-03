import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import AutoComplete from "./AutoComplete";

function Formulario(props) {
  const paises = [
    {
      name: "Afghanistan",
      capital: "Kabul",
      region: "Asia",
      alpha2Code: "AF",
      flag: "https://restcountries.eu/data/afg.svg"
    },
    {
      name: "Åland Islands",
      capital: "Mariehamn",
      region: "Europe",
      alpha2Code: "AX",
      flag: "https://restcountries.eu/data/ala.svg"
    },
    {
      name: "Albania",
      capital: "Tirana",
      region: "Europe",
      alpha2Code: "AL",
      flag: "https://restcountries.eu/data/alb.svg"
    },
    {
      name: "Algeria",
      capital: "Algiers",
      region: "Africa",
      alpha2Code: "DZ",
      flag: "https://restcountries.eu/data/dza.svg"
    },
    {
      name: "American Samoa",
      capital: "Pago Pago",
      region: "Oceania",
      alpha2Code: "AS",
      flag: "https://restcountries.eu/data/asm.svg"
    },
    {
      name: "Andorra",
      capital: "Andorra la Vella",
      region: "Europe",
      alpha2Code: "AD",
      flag: "https://restcountries.eu/data/and.svg"
    },
    {
      name: "Angola",
      capital: "Luanda",
      region: "Africa",
      alpha2Code: "AO",
      flag: "https://restcountries.eu/data/ago.svg"
    },
    {
      name: "Anguilla",
      capital: "The Valley",
      region: "Americas",
      alpha2Code: "AI",
      flag: "https://restcountries.eu/data/aia.svg"
    },
    {
      name: "Antarctica",
      capital: "",
      region: "Polar",
      alpha2Code: "AQ",
      flag: "https://restcountries.eu/data/ata.svg"
    },
    {
      name: "Antigua and Barbuda",
      capital: "Saint John's",
      region: "Americas",
      alpha2Code: "AG",
      flag: "https://restcountries.eu/data/atg.svg"
    },
    {
      name: "Argentina",
      capital: "Buenos Aires",
      region: "Americas",
      alpha2Code: "AR",
      flag: "https://restcountries.eu/data/arg.svg"
    },
    {
      name: "Armenia",
      capital: "Yerevan",
      region: "Asia",
      alpha2Code: "AM",
      flag: "https://restcountries.eu/data/arm.svg"
    },
    {
      name: "Aruba",
      capital: "Oranjestad",
      region: "Americas",
      alpha2Code: "AW",
      flag: "https://restcountries.eu/data/abw.svg"
    },
    {
      name: "Australia",
      capital: "Canberra",
      region: "Oceania",
      alpha2Code: "AU",
      flag: "https://restcountries.eu/data/aus.svg"
    },
    {
      name: "Austria",
      capital: "Vienna",
      region: "Europe",
      alpha2Code: "AT",
      flag: "https://restcountries.eu/data/aut.svg"
    },
    {
      name: "Azerbaijan",
      capital: "Baku",
      region: "Asia",
      alpha2Code: "AZ",
      flag: "https://restcountries.eu/data/aze.svg"
    },
    {
      name: "Bahamas",
      capital: "Nassau",
      region: "Americas",
      alpha2Code: "BS",
      flag: "https://restcountries.eu/data/bhs.svg"
    },
    {
      name: "Bahrain",
      capital: "Manama",
      region: "Asia",
      alpha2Code: "BH",
      flag: "https://restcountries.eu/data/bhr.svg"
    },
    {
      name: "Bangladesh",
      capital: "Dhaka",
      region: "Asia",
      alpha2Code: "BD",
      flag: "https://restcountries.eu/data/bgd.svg"
    },
    {
      name: "Barbados",
      capital: "Bridgetown",
      region: "Americas",
      alpha2Code: "BB",
      flag: "https://restcountries.eu/data/brb.svg"
    },
    {
      name: "Belarus",
      capital: "Minsk",
      region: "Europe",
      alpha2Code: "BY",
      flag: "https://restcountries.eu/data/blr.svg"
    },
    {
      name: "Belgium",
      capital: "Brussels",
      region: "Europe",
      alpha2Code: "BE",
      flag: "https://restcountries.eu/data/bel.svg"
    },
    {
      name: "Belize",
      capital: "Belmopan",
      region: "Americas",
      alpha2Code: "BZ",
      flag: "https://restcountries.eu/data/blz.svg"
    },
    {
      name: "Benin",
      capital: "Porto-Novo",
      region: "Africa",
      alpha2Code: "BJ",
      flag: "https://restcountries.eu/data/ben.svg"
    },
    {
      name: "Bermuda",
      capital: "Hamilton",
      region: "Americas",
      alpha2Code: "BM",
      flag: "https://restcountries.eu/data/bmu.svg"
    },
    {
      name: "Bhutan",
      capital: "Thimphu",
      region: "Asia",
      alpha2Code: "BT",
      flag: "https://restcountries.eu/data/btn.svg"
    },
    {
      name: "Bolivia (Plurinational State of)",
      capital: "Sucre",
      region: "Americas",
      alpha2Code: "BO",
      flag: "https://restcountries.eu/data/bol.svg"
    },
    {
      name: "Bonaire, Sint Eustatius and Saba",
      capital: "Kralendijk",
      region: "Americas",
      alpha2Code: "BQ",
      flag: "https://restcountries.eu/data/bes.svg"
    },
    {
      name: "Bosnia and Herzegovina",
      capital: "Sarajevo",
      region: "Europe",
      alpha2Code: "BA",
      flag: "https://restcountries.eu/data/bih.svg"
    },
    {
      name: "Botswana",
      capital: "Gaborone",
      region: "Africa",
      alpha2Code: "BW",
      flag: "https://restcountries.eu/data/bwa.svg"
    },
    {
      name: "Bouvet Island",
      capital: "",
      region: "",
      alpha2Code: "BV",
      flag: "https://restcountries.eu/data/bvt.svg"
    },
    {
      name: "Brazil",
      capital: "Brasília",
      region: "Americas",
      alpha2Code: "BR",
      flag: "https://restcountries.eu/data/bra.svg"
    },
    {
      name: "British Indian Ocean Territory",
      capital: "Diego Garcia",
      region: "Africa",
      alpha2Code: "IO",
      flag: "https://restcountries.eu/data/iot.svg"
    },
    {
      name: "United States Minor Outlying Islands",
      capital: "",
      region: "Americas",
      alpha2Code: "UM",
      flag: "https://restcountries.eu/data/umi.svg"
    },
    {
      name: "Virgin Islands (British)",
      capital: "Road Town",
      region: "Americas",
      alpha2Code: "VG",
      flag: "https://restcountries.eu/data/vgb.svg"
    },
    {
      name: "Virgin Islands (U.S.)",
      capital: "Charlotte Amalie",
      region: "Americas",
      alpha2Code: "VI",
      flag: "https://restcountries.eu/data/vir.svg"
    },
    {
      name: "Brunei Darussalam",
      capital: "Bandar Seri Begawan",
      region: "Asia",
      alpha2Code: "BN",
      flag: "https://restcountries.eu/data/brn.svg"
    },
    {
      name: "Bulgaria",
      capital: "Sofia",
      region: "Europe",
      alpha2Code: "BG",
      flag: "https://restcountries.eu/data/bgr.svg"
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
    <Form noValidate onSubmit={handleSubmit}>
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
