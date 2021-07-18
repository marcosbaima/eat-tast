
<h4 align="center">
<img src="https://getlogovector.com/wp-content/uploads/2021/05/eattasty-logo-vector.png" width="250px"/><br>
 <b>Food delivery baseada no EatTasty</b>
</h4>
<p align="center">
   <a href="https://github.com/marcosbaima"><img alt="Made by Marcos Baima"></a>
   <a href="https://github.com/marcosbaima/eat-tasty/blob/develop/LICENSE"><img alt="License" src="https://img.shields.io/github/license/marcosbaima/eat-tasty?style=flat-square"></a>
   <a href="https://github.com/marcosbaima/eat-tast"><img alt="Stars" src="https://img.shields.io/github/stars/marcosbaima/eat-tasty?style=social">
</p></a> <br>

### Screenshots  📷

*Restaurant manager*
<p float="left">
 <img src="/screenshots/signup-page.png" align="middle" width="380px"/>
 <img src="/screenshots/menu-manager-page.png" align="middle" width="380px"/>
</p>

*Customer*

<p float="left">
 <img src="/screenshots/home-customer-page.png" align="middle" width="380px"/>
 <img src="/screenshots/restaurant-customer-page.png" align="middle" width="380px"/>
</p>




### :rocket: Tecnologias usadas
Este projeto está sendo desenvolvido com as seguintes tecnologias:
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Socket.io](https://socket.io/)
- [JWT](https://jwt.io/)
-  [Formik](https://github.com/jaredpalmer/formik)
- [Yup](https://github.com/jquense/yup)
- [React](https://github.com/facebook/react)
- [React Native](https://github.com/facebook/react-native)
- [Styled Components](https://styled-components.com/)

### :muscle: O Projeto 

A ideia principal é criar uma aplicação baseada nas principais funcionalidades das tech foods, o design/layout do projeto é baseado no UberEats. 

### 💡 Principais Funcionalidades 
<hr> 

- <b>Versão Web (Apenas para restaurantes)</b>
	- Cadastro de restaurantes
	- Cadastro de Items  no cardapio
	- Aceitar Pedidos em real time
	- Analytics com pagamentos, taxas etc
- <b>Versão (Apenas para clientes)</b>
	- Cadastro/Login
	- Visualizar todos restaurantes e cardapios
	- Realizar o pagamento de um pedido
	- Resposta do restaurante (real time)

### 🎯 Objetivo
O objetivo deste projeto, é aprender coisas que serão utilizadas em um ambiente real de trabalho. me desafiei a criar este projeto para enxergar o meu nivel de conhecimento e colocar como projeto no meu portfolio.


### 🔥 Como rodar esse projeto (How to run this project)
***To run API***

Create postgre docker container
```sh
$ docker run --name postgresql -e POSTGRESQL_USERNAME=postgres -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=postgres -p 5432:5432 bitnami/postgresql:latest
```
Install the packages run migrations and start API

```sh
$ yarn install
$ yarn sequelize db:migrate
$ yarn dev
```
Dont forgot to configure the ``.env`` environment you can found the example of the variables [Here](api/.env)


***To run Frontend***
```sh
$ yarn install
$ yarn start
```

### :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

<p align="center">Feito com ❤️ por <strong>Marcos Baima 👋</p>
