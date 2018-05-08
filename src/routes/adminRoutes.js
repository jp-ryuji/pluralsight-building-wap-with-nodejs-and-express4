const express = require('express');

const adminRouter = express.Router();

// NOTE: You can do this (and delete the last line).
// module.exports = function router(nav)
function router(_nav) {
  adminRouter.route('/').get((req, res) => {
    res.send('Inserting books');
  });

  return adminRouter;
}

module.exports = router;
