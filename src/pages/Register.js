import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { Container, Row, Form, Col, Button, Navbar } from "react-bootstrap";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import ReactLoading from "react-loading";
import StringMask from "string-mask";

import { axios_base_url, Authorization } from "../config.json";

import logoTrimmed from "../assets/logo_trimmed.png";

import "../assets/styles/Register.css";

export default (props) => {
    const [cnpj, setCNPJ] = useState("");
    const [name, setName] = useState("");
    const [razao, setRazao] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState(["", ""]);

    const [sendToDashboard, setSendToDashboard] = useState(false);
    const [disableSubmit, setDisableSubmit] = useState(false);

    const [markerInitialPosition, setMarkerInitialPosition] = useState([0, 0]);
    const [position, setPosition] = useState([0, 0]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setMarkerInitialPosition([latitude, longitude]);
            if (!position[0] && !position[1]) {
                setPosition([latitude, longitude]);
                console.log(position);
            }
        });
    }, []);

    const mask = new StringMask("00.000.000/0000-00");

    const handleMapClick = (event) => {
        const { lat, lng } = event.latlng;
        setPosition([lat, lng]);
        console.log(position);
    };

    const handleCNPJ = (event) => {
        console.log(cnpj);
        const value = event.target.value.replace(/[^0-9]/gi, "");
        const masked = mask.apply(value);
        setCNPJ(masked);
    };
    const handleName = (event) => {
        setName(event.target.value);
    };
    const handleRazao = (event) => {
        setRazao(event.target.value);
    };
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleSenha0 = (event) => {
        setSenha([event.target.value, senha[1]]);
    };
    const handleSenha1 = (event) => {
        setSenha([senha[0], event.target.value]);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const parking = document.getElementById("parking").checked;
        setDisableSubmit(true);
        if (senha[0] !== senha[1]) {
            alert("As senhas não correspondem.");
            setDisableSubmit(false);
            return;
        }
        try {
            const response = await axios.post(
                axios_base_url + "/establishment",
                {
                    company_name: name,
                    cnpj: cnpj.replace(/[^0-9]/gi, ""),
                    latitude: parseFloat(position[0]),
                    longitude: parseFloat(position[1]),
                    email,
                    password: senha,
                    parking,
                },
                {
                    headers: {
                        Authorization,
                    },
                }
            );
            if (response.status === 200 && response.data.status) {
                alert("Parabéns! Sua empresa já está cadastrada.");
                setSendToDashboard(true);
            }
        } catch (err) {
            setDisableSubmit(false);
            alert(
                "Ocorreu um erro. Por favor, verifique todos os dados informados."
            );
        }
    };

    if (sendToDashboard === true) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                    <Link to="/">
                        <img
                            alt=""
                            src={logoTrimmed}
                            height="30"
                            className="d-inline-block align-top"
                        />{" "}
                        Você na Estrada
                    </Link>
                </Navbar.Brand>
            </Navbar>
            <Container fluid="sm" className="container">
                <Row>
                    <Col>
                        <h1>Cadastre-se</h1>
                    </Col>
                </Row>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Nome Fantasia</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nome Fantasia"
                            value={name}
                            onChange={handleName}
                        />
                    </Form.Group>
                    <Form.Group controlId="razao">
                        <Form.Label>Razão Social</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Razão Social"
                            value={razao}
                            onChange={handleRazao}
                        />
                    </Form.Group>
                    <Form.Group controlId="cnpj">
                        <Form.Label>CNPJ</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="00.000.000/0000-00"
                            value={cnpj}
                            onChange={handleCNPJ}
                        />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleEmail}
                        />
                    </Form.Group>
                    <Form.Group
                        controlId="senha"
                        value={senha[0]}
                        onChange={handleSenha0}
                    >
                        <Form.Label>Crie uma senha</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Crie uma senha"
                        />
                    </Form.Group>
                    <Form.Group
                        controlId="senha2"
                        value={senha[1]}
                        onChange={handleSenha1}
                    >
                        <Form.Label>Repita a senha</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Repita a senha"
                        />
                    </Form.Group>
                    <Form.Group controlId="parking">
                        <Form.Label>
                            Seu estabelecimento possui ponto de parada?
                            <input id="parking" type="checkbox" />
                        </Form.Label>
                    </Form.Group>
                    <div id="map-container">
                        <p>
                            Encontre seu estabelecimento no mapa e clique sobre
                            ele para marcar.
                        </p>
                        <Map
                            center={markerInitialPosition}
                            zoom={14}
                            onClick={handleMapClick}
                        >
                            <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily
                                    customizable.
                                </Popup>
                            </Marker>
                        </Map>
                        <br />
                        <div id="positionLabelContainer">
                            {position === [0, 0] ? (
                                <p>
                                    Selecione a localização exata do seu
                                    comércio no mapa.
                                </p>
                            ) : (
                                <>
                                    Posição selecionada: (
                                    <span className="positionLabel latitude">
                                        {Math.round(position[0] * 10000) /
                                            10000}
                                    </span>
                                    º,{" "}
                                    <span className="positionLabel longitude">
                                        {Math.round(position[1] * 10000) /
                                            10000}
                                    </span>
                                    º)
                                </>
                            )}
                        </div>
                    </div>
                    <Button
                        variant="outline-primary"
                        type="submit"
                        disabled={disableSubmit}
                    >
                        Cadastrar
                    </Button>
                    {disableSubmit === true && (
                        <ReactLoading type="spinningBubbles" color="#A62B27" />
                    )}
                </Form>
            </Container>
        </>
    );
};
