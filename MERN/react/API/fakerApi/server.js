const express = require("express");
const app = express();
const { faker } = require('@faker-js/faker');
const port = 8000;
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


const users =[];
const companies =[];
let userIdCounter =1 ;
let companyIdCounter=1;

const createUser = () => {
  const newUser = {
    password : faker.internet.password(),
    email : faker.internet.email(),
    phoneNumber : faker.phone.number(),
    firstName : faker.person.firstName(),
    lastName : faker.person.lastName(),
    _id : userIdCounter++ ,
  }
  return newUser;
}

const createAddress = () => {
  return {
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipCode: faker.location.zipCode(),
    country: faker.location.country(),
  };
};

const createCompany = () => {
  const newCompany = {
    _id : companyIdCounter++ ,
    name : faker.company.name() ,
    adress : createAddress(),
  }
  companies.push(newCompany);
  return newCompany;
}


app.get("/api/users/new", (req, res) => {
  const newUser = createUser();
  res.json({ user: newUser });
});


app.get("/api/companies/new", (req, res) => {
  const newCompany = createCompany();
  res.json({ company: newCompany });
});

app.get("/api/user/company", (req, res) => {
  const newUser = createUser();
  const newCompany = createCompany();
  res.json({ user: newUser, company: newCompany });
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );
