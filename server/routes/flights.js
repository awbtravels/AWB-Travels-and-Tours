import express from 'express';
const router = express.Router();

router.get('/search', (req, res) => {
  res.json([{ airline: "British Airways", price: "$500" }, { airline: "Delta", price: "$480" }]);
});

export default router;