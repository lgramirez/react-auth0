const express = require('express');
require('dotenv').config();
const jwt = require('express-jwt');  //validate JWT and set req.user
const jwksRsa = require('jwks-rsa');  //Retrieve RSA keys from a JSON Web Key set (JWKS) endpoint
const checkScope = require('express-jwt-authz'); //validate JWT scopes

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${
      process.env.REACT_APP_AUTH0_DOMAIN
    }/.well-known/jwks.json`
  }),

  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  issuer: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/`,

  algorithms: ["RS256"]
});

const app = express();

app.get('/public', function(req, res) {
  res.json({
    message: "Hello from a public API!"
  });
});

app.get('/private', checkJwt, function(req, res) {
  res.json({
    message: "Hello from a private API!"
  });
});

function checkRole(role) {
  return function (req, res, next) {
    const assignedRoles = req.user["http://localhost:3000/roles"];
    if (Array.isArray(assignedRoles) && assignedRoles.includes(role)) {
      return next();
    } else {
      return res.status(401).send("Insufficent role");
    }
  }
}

app.get('/course', checkJwt, checkScope(["read:courses"]), function(req, res) {
  res.json({
    courses: [
      { id: 1,  title: "Building Apps with React and Redux" },
      { id: 2, title: "Creating Reusable React Components" }
    ]
  });
});

app.get('/admin', checkJwt, checkRole('admin'), function(req, res) {
  res.json({
    message: "Hello from an admin API!"
  });
});

app.listen(3001);
console.log('API server listening on: ' + process.env.REACT_APP_AUTH0_AUDIENCE);