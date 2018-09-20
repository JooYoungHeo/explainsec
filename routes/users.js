const express = require('express');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: get user info
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: get all user info
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Success
 *       403:
 *         $ref: '#/components/res/Forbidden'
 *       404:
 *         $ref: '#/components/res/NotFound'
 *       500:
 *         $ref: '#/components/res/BadRequest'
 */
router.get('/', (req, res) => {
	res.json([{
		id: 1,
		name: "patch-work",
		hp: "3850000"
	}]);
});

module.exports = router;
