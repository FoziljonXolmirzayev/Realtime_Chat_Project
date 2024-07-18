/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operations related to Users
 */

/**
 * @swagger
 * /user/:
 *   get:
 *     summary: Get all Users info
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                name:
 *                  type: string
 *                  example: Name of user
 *                password:
 *                  type: string
 *                  default: Password of user
 *
 */

/**
 * @swagger
 * /user/:id:
 *   get:
 *     summary: Get a User info
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                name:
 *                  type: string
 *                  example: Name of user
 *                password:
 *                  type: string
 *                  default: Password of user
 *
 */

/**
 * @swagger
 * /create:
 *   post:
 *     summary: Creating a User
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                name:
 *                  type: string
 *                  example: Name of user
 *                password:
 *                  type: string
 *                  default: Password of user
 *
 */

/**
 * @swagger
 * /delete/:id:
 *   delete:
 *     summary: Deleting a User
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                name:
 *                  type: string
 *                  example: Name of user
 *                password:
 *                  type: string
 *                  default: Password of user
 *
 */

/**
 * @swagger
 * /update/:id:
 *   put:
 *     summary: Updating a User
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                name:
 *                  type: string
 *                  example: Name of user
 *                password:
 *                  type: string
 *                  default: Password of user
 *
 */
