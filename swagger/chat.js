/**
 * @swagger
 * tags:
 *   name: Chats
 *   description: Operations related to Chats
 */

/**
 * @swagger
 * /chat/:
 *   get:
 *     summary: Get all Chats info
 *     tags: [Chats]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                receiver:
 *                  type: Schema.Types.ObjectId
 *                  example: Id of receiver
 *                createdAt:
 *                  type: Date
 *                  default: Creating time of chat
 *                background:
 *                  type: String
 *                  example: Background image
 *                isDeleted:
 *                  type: Boolean
 *                  default: Status of deleting
 *                sender:
 *                  type: Schema.Types.ObjectId
 *                  default: Id of sender
 */

/**
 * @swagger
 * /chat/:id:
 *   get:
 *     summary: Get a chat info
 *     tags: [Chats]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                receiver:
 *                  type: Schema.Types.ObjectId
 *                  example: Id of receiver
 *                createdAt:
 *                  type: Date
 *                  default: Creating time of chat
 *                background:
 *                  type: String
 *                  example: Background image
 *                isDeleted:
 *                  type: Boolean
 *                  default: Status of deleting
 *                sender:
 *                  type: Schema.Types.ObjectId
 *                  default: Id of sender
 */

/**
 * @swagger
 * /chat/create:
 *   post:
 *     summary: Creating chat
 *     tags: [Chats]
 *     responses:
 *       200:
 *         description: Created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                receiver:
 *                  type: Schema.Types.ObjectId
 *                  example: Id of receiver
 *                createdAt:
 *                  type: Date
 *                  default: Creating time of chat
 *                background:
 *                  type: String
 *                  example: Background image
 *                isDeleted:
 *                  type: Boolean
 *                  default: Status of deleting
 *                sender:
 *                  type: Schema.Types.ObjectId
 *                  default: Id of sender
 */

/**
 * @swagger
 * /chat/delete:
 *   delete:
 *     summary: Deleting chat
 *     tags: [Chats]
 *     responses:
 *       200:
 *         description: Deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                receiver:
 *                  type: Schema.Types.ObjectId
 *                  example: Id of receiver
 *                createdAt:
 *                  type: Date
 *                  default: Creating time of chat
 *                background:
 *                  type: String
 *                  example: Background image
 *                isDeleted:
 *                  type: Boolean
 *                  default: Status of deleting
 *                sender:
 *                  type: Schema.Types.ObjectId
 *                  default: Id of sender
 */

/**
 * @swagger
 * /chat/update/:id:
 *   put:
 *     summary: Updating chat
 *     tags: [Chats]
 *     responses:
 *       200:
 *         description: Updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                receiver:
 *                  type: Schema.Types.ObjectId
 *                  example: Id of receiver
 *                createdAt:
 *                  type: Date
 *                  default: Creating time of chat
 *                background:
 *                  type: String
 *                  example: Background image
 *                isDeleted:
 *                  type: Boolean
 *                  default: Status of deleting
 *                sender:
 *                  type: Schema.Types.ObjectId
 *                  default: Id of sender
 */
