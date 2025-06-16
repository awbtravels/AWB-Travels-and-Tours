import express from 'express';
const router = express.Router();

router.get('/search', (req, res) => {
  res.json([{ name: "Hilton London", price: "$120/night" }, { name: "Ibis Hotel", price: "$80/night" }]);
});

export default router;