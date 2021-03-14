const express = require('express');
const { auth } = require('express-openid-connect');
const IVIVA_URL = 'http://localhost:5000';
const CLIENT_ID='c49c6d6fb7a6cc5557330f3774ea1b37628ea108cc878797';
const CLIENT_SECRET = '0763a4b1e74f9411e1d36e50aaed77754c3cb30026426309e495b379408577c31a3b3291684a850c1fdc5898b84ee638';
const app = express();
app.use(
    auth({
      issuerBaseURL: IVIVA_URL,
      baseURL: 'http://localhost:3000',
      clientID:CLIENT_ID,
      secret:CLIENT_SECRET,
      idpLogout: true,
    })
  );
const port = 3000;

app.get('/', (req, res) => {
    /* login the user into your system */
  res.send(`Hello,  ${req.oidc.user.name}`)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});