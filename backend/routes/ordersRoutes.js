const express = require("express");

const SabzLearnShopDB = require("./../db/SabzLearnShop");

const ordersRouter = express.Router();

// 1. Get all orders
ordersRouter.get("/", (req, res) => {
  const selectAllOrdersQuery = `
    SELECT
      Orders.id,
      Orders.date,
      Orders.hour,
      Orders.price,
      Orders.off,
      Orders.sale,
      Orders.popularity,
      Orders.count,
      Orders.sale_count,
      Orders.isActive,
      Users.firsname AS username,
      Products.title AS productTitle
    FROM Orders
    INNER JOIN Users
      ON Users.id = Orders.userID
    INNER JOIN Products
      ON Products.id = Orders.productID
  `;

  SabzLearnShopDB.query(selectAllOrdersQuery, (err, result) => {
    if (err) {
      console.error("GET ORDERS ERROR:", err);

      return res.status(500).json({
        error: err.message,
      });
    }

    res.json(result);
  });
});

// 2. Delete order
ordersRouter.delete("/:orderID", (req, res) => {
  const orderID = req.params.orderID;

  const deleteOrderQuery = `
    DELETE FROM Orders
    WHERE id = ?
  `;

  SabzLearnShopDB.query(deleteOrderQuery, [orderID], (err, result) => {
    if (err) {
      console.error("DELETE ORDER ERROR:", err);

      return res.status(500).json({
        error: err.message,
      });
    }

    res.json(result);
  });
});

// 3. Update order status
ordersRouter.put(
  "/active-order/:orderID/:isActive",
  (req, res) => {
    const orderID = req.params.orderID;
    const isActive = req.params.isActive;

    const activeOrderQuery = `
      UPDATE Orders
      SET isActive = ?
      WHERE id = ?
    `;

    SabzLearnShopDB.query(
      activeOrderQuery,
      [isActive, orderID],
      (err, result) => {
        if (err) {
          console.error("UPDATE ORDER STATUS ERROR:", err);

          return res.status(500).json({
            error: err.message,
          });
        }

        res.json(result);
      }
    );
  }
);

module.exports = ordersRouter;