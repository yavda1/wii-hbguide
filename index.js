/*
! Don't tamper with this file.
? Tampering with this file can break production if you don't know what you're doing.
? This file is what hosts the websites. Don't mess around with it!
*/

const express = require('express');
const app = express();

app.use(express.static('yeahboi'));

app.listen(5002, () => { // i exposed the port omg security vulnerability omg omg omg!!1
  console.log(`Server is up.`);
});
