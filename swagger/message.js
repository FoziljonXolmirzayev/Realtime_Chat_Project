/**
 * @swagger
 * tags:
 *   name: Messages
 *   description: Operations related to Message
 */

/**
 * @swagger
 * /messages/:
 *   get:
 *     summary: Get all Messages
 *     tags: [Messages]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                sendedBy:
 *                  type: Schema.Types.ObjectId
 *                  example: Id of sender
 *                message:
 *                  type: string
 *                  default: message of user
 *                sendedAt:
 *                  type: Date
 *                  example: sending time of message
 *                isRead:
 *                   type: Boolean
 *                   example: true or false
 *                chatId:
 *                   type: Schema.Types.ObjectId
 *                   example: Id of chat
 */

/**
 * @swagger
 * /messages/create:
 *   post:
 *     summary: Creating message
 *     tags: [Messages]
 *     responses:
 *       200:
 *         description: Created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                sendedBy:
 *                  type: Schema.Types.ObjectId
 *                  example: Id of sender
 *                message:
 *                  type: string
 *                  default: message of user
 *                sendedAt:
 *                  type: Date
 *                  example: sending time of message
 *                isRead:
 *                   type: Boolean
 *                   example: true or false
 *                chatId:
 *                   type: Schema.Types.ObjectId
 *                   example: Id of chat
 */

/**
 * @swagger
 * /messages/delete/:id:
 *   delete:
 *     summary: Deleting a message
 *     tags: [Messages]
 *     responses:
 *       200:
 *         description: Deleted successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                sendedBy:
 *                  type: Schema.Types.ObjectId
 *                  example: Id of sender
 *                message:
 *                  type: string
 *                  default: message of user
 *                sendedAt:
 *                  type: Date
 *                  example: sending time of message
 *                isRead:
 *                   type: Boolean
 *                   example: true or false
 *                chatId:
 *                   type: Schema.Types.ObjectId
 *                   example: Id of chat
 */

/**
 * @swagger
 * /messages/update/:id:
 *   put:
 *     summary: Updating a message
 *     tags: [Messages]
 *     responses:
 *       200:
 *         description: Updated successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                sendedBy:
 *                  type: Schema.Types.ObjectId
 *                  example: Id of sender
 *                message:
 *                  type: string
 *                  default: message of user
 *                sendedAt:
 *                  type: Date
 *                  example: sending time of message
 *                isRead:
 *                   type: Boolean
 *                   example: true or false
 *                chatId:
 *                   type: Schema.Types.ObjectId
 *                   example: Id of chat
 */
