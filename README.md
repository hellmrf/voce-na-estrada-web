[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<br />
<p align="center">
  <a href="https://github.com/hellmrf/voce-na-estrada-web">
    <img src="public/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Você na Estrada</h3>

  <p align="center">
    Website do projeto Você na Estrada.
    <br />
    <strong>
    <a href="https://voce-na-estrada.netlify.app" target="_blank">Ver online »</a>
    </strong>
    <br />
    <a href="https://github.com/FabioLafayete/Voce_na_Estrada">Ver app</a>
    ·
    <a href="https://github.com/hellmrf/voce-na-estrada-server">Ver back-end</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Índice

* [Sobre o Projeto](#sobre-o-projeto)
  * [Tecnologias utilizadas](#tecnologias-utilizadas)
* [Uso](#Uso)
* [Contato](#contato)


<!-- ABOUT THE PROJECT -->
## Sobre o Projeto

Este site é parte de um projeto que surge do desafio do Hackathon CCR 2020, focado em propor melhorias para a qualidade de vida e saúde dos caminhoneiros. O projeto foi inteiramente desenvolvido pela equipe 26 entre os dias 12/06 - 14/06/2020.

### Tecnologias utilizadas

Este site foi desenvolvido em [React.JS](https://reactjs.org/) e se integra à [API REST](https://github.com/hellmrf/voce-na-estrada-server) (desenvolvida em Node.js) e ao [aplicativo mobile](https://github.com/FabioLafayete/Voce_na_Estrada) (desenvolvido em Flutter)

<!-- GETTING STARTED -->
## Getting Started

Para obter uma cópia local, siga os passos a seguir.

### Pré-requisitos

* Node.js (12.18.0)
* npm (6.14.5)

As versões acima são as versões de teste. É muito provável que funcione bem para versões superiores.

### Instalação
 
1. Clone o repositório
```sh
git clone https://github.com/hellmrf/voce-na-estrada-web.git
```
2. De dentro da pasta do projeto, instale os pacotes NPM:
```sh
npm i
```
3. Crie um arquivo `/src/config.json` conforme exemplo:
```json
{
    "axios_base_url": "https://voce-na-estrada.herokuapp.com",
    "Authorization": "" //token de autorização necessário pra todas as requisições à API.
}
```


<!-- CONTACT -->
## Contato

Héliton Martins - helitonmrf@gmail.com - [@hellmrf](https://intagram.com/hellmrf)

Project Link: [https://github.com/hellmrf/voce-na-estrada-web](https://github.com/hellmrf/voce-na-estrada-web)




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/hellmrf/voce-na-estrada-web.svg?style=flat-square
[contributors-url]: https://github.com/hellmrf/voce-na-estrada-web/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/hellmrf/voce-na-estrada-web.svg?style=flat-square
[forks-url]: https://github.com/hellmrf/voce-na-estrada-web/network/members
[stars-shield]: https://img.shields.io/github/stars/hellmrf/voce-na-estrada-web.svg?style=flat-square
[stars-url]: https://github.com/hellmrf/voce-na-estrada-web/stargazers
[issues-shield]: https://img.shields.io/github/issues/hellmrf/voce-na-estrada-web.svg?style=flat-square
[issues-url]: https://github.com/hellmrf/voce-na-estrada-web/issues
[license-shield]: https://img.shields.io/github/license/hellmrf/voce-na-estrada-web.svg?style=flat-square
[license-url]: https://github.com/hellmrf/voce-na-estrada-web/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/helitonmrf
[product-screenshot]: screenshot.png