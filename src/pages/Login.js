import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { Container, Row, Form, Col, Button, Navbar } from "react-bootstrap";
import ReactLoading from "react-loading";

import { axios_base_url, Authorization } from "../config.json";

import logoTrimmed from "../assets/logo_trimmed.png";

import "../assets/styles/Register.css";

export default (props) => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState(["", ""]);

    const [sendToDashboard, setSendToDashboard] = useState(false);
    const [disableSubmit, setDisableSubmit] = useState(false);

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleSenha = (event) => {
        setSenha(event.target.value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        setDisableSubmit(true);
        try {
            const response = await axios.post(
                axios_base_url + "/establishment/login",
                {
                    email,
                    password: senha,
                },
                {
                    headers: {
                        Authorization,
                    },
                }
            );
            if (response.status === 200 && response.data.status) {
                sessionStorage.setItem("login_token", response.data.token);
                sessionStorage.setItem("login_email", email);
                sessionStorage.setItem("login_id", response.data.id);
                setSendToDashboard(true);
            }
        } catch (err) {
            setDisableSubmit(false);
            console.log(err.code, err.status);
            alert("Email ou senha incorretos.");
        }
    };

    if (sendToDashboard === true) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
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
                        <h1>Login</h1>
                    </Col>
                </Row>
                <Form onSubmit={handleSubmit}>
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
                        value={senha}
                        onChange={handleSenha}
                    >
                        <Form.Label>Sua senha</Form.Label>
                        <Form.Control type="password" placeholder="Sua senha" />
                    </Form.Group>
                    <Button
                        variant="outline-primary"
                        type="submit"
                        disabled={disableSubmit}
                    >
                        Login
                    </Button>
                    {disableSubmit === true && (
                        <ReactLoading type="spinningBubbles" color="#A62B27" />
                    )}
                </Form>
            </Container>
        </>
    );
};
