
const RestaurantTable = require('../models/restaurant_tables.model');

exports.findAll = async function (req, res) {
    try {
        let response = await RestaurantTable.findAll();
        return res.status(200).json({ message: "Array<Items> returned successfully!", response, status: 200 })
    } catch (e) {
        return res.status(401).json({ status: 401, message: 'Failed to return list of items', error: { code: "operation_failed", message: e } });
    }

};


exports.create = async function (req, res) {
    const new_restaurant_table = new RestaurantTable(req.body);
    try {
        let response = await RestaurantTable.create(new_restaurant_table);
        return res.status(200).json({ message: "Item was created!", response, status: 200 })
    } catch (e) {
        return res.status(401).json({ status: 401, message: 'Failed to create item', error: { code: "operation_failed", message: e } });
    }

};


exports.findById = async function (req, res) {
    try {
        let response = await RestaurantTable.findById(req.params.id);
        return res.status(200).json({ message: "Item was fetched!", response, status: 200 })
    } catch (e) {
        return res.status(401).json({ status: 401, message: 'Failed to fetch item', error: { code: "operation_failed", message: e } });
    }
};
exports.getRestaurantTables = async function (req, res) {
    try {
        let response = await RestaurantTable.getRestaurantTables(req.params.id);
        return res.status(200).json({ message: "Items fetched!", response, status: 200 })
    } catch (e) {
        return res.status(401).json({ status: 401, message: 'Failed to fetch items', error: { code: "operation_failed", message: e } });
    }
};


exports.update = async function (req, res) {
    try {

        let response = await RestaurantTable.update(req.params.id, new RestaurantTable(req.body));
        return res.status(200).json({ message: "Item was updated!", response, status: 200 })
    } catch (e) {
        return res.status(401).json({ status: 401, message: 'Failed to update item', error: { code: "operation_failed", message: e } });
    }
};


exports.delete = async function (req, res) {
    try {
        let response = await RestaurantTable.findById(req.params.id);
        return res.status(200).json({ message: "Item was deleted!", response, status: 200 })
    } catch (e) {
        return res.status(401).json({ status: 401, message: 'Failed to delete item', error: { code: "operation_failed", message: e } });
    }
};