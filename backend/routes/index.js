const express = require('express');
const router = express.Router();
const apiRouter = require('./api');



router.use('/api', apiRouter);

// serves the react build files when in production
if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  //serves the frontends's index.html at the root
  router.get('/', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    return res.sendFile(
      path.resolve(__dirname, '../../frontend', 'build', 'index.html')
    );
  });

  // serves static assets in frontend's build folder
  router.use(express.static(path.resolve("../frontend/build")));

  router.get(/^(?!\/?api).*/, (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    return res.sendFile(
      path.resolve(__dirname, '../../frontend', 'build', 'index.html')
    );
  });
}

// adds a XSRF-TOKEN cookie if in dev
if (process.env.NODE_ENV !== 'production') {
  router.get('/api/csrf/restore', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    return res.json({});
  });
}

router.get('/', asyncHandler(async function(_req, res) {
  const pokemon = await PokemonRepository.list();
  return res.json(pokemon);
}));

module.exports = router;
