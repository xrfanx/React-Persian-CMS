const express = require("express");
const SabzLearnShopDB = require("./../db/SabzLearnShop");

const offsRouter = express.Router();

// routes

offsRouter.get('/', (req, res) => {
    let selectAllOffsQuery = `
        SELECT 
            Offs.id,
            Offs.code,
            Offs.date,
            Offs.isActive,
            Offs.percent,
            Admins.firstname AS adminName,
            Products.title AS productTitle
        FROM Offs 
        LEFT JOIN Admins ON Admins.id = Offs.adminID 
        LEFT JOIN Products ON Products.id = Offs.productID
    `;

    SabzLearnShopDB.query(selectAllOffsQuery, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: err.message
            });
        }

        res.status(200).json(result);
    });
});

offsRouter.post('/', (req, res) => {

    let { code, percent, date, isActive, adminID, productID } = req.body;

    let insertOffQuery = `
        INSERT INTO Offs 
        (code, date, isActive, percent, adminID, productID)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    SabzLearnShopDB.query(
        insertOffQuery,
        [code, date, isActive, percent, adminID, productID],
        (err, result) => {

            if (err) {
                console.log(err);

                return res.status(500).json({
                    message: err.message
                });
            }

            res.status(201).json(result);
        }
    );

});

offsRouter.delete('/:offID', (req, res) => {
    let offID = req.params.offID
    let deleteOffQuery = `DELETE FROM Offs WHERE id = ${offID}`

    SabzLearnShopDB.query(deleteOffQuery, (err, result) => {
        if (err) {
            res.send(null)
        } else {
            res.send(result)
        }
    })
})

offsRouter.put('/active-off/:offID/:isActive', (req, res) => {
    let offID = req.params.offID
    let isActive = req.params.isActive
    let activeOffQuery = `UPDATE Offs SET isActive=${isActive} WHERE id = ${offID}`

    SabzLearnShopDB.query(activeOffQuery, (err, result) => {
        if (err) {
            res.send(null)
        } else {
            res.send(result)
        }
    })
})

module.exports = offsRouter;
