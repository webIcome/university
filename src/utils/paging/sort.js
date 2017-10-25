/**
 * Created by Levi on 2017/4/20.
 */
export default class Sort {

    constructor(direction, properties) {
        this._orders = [];
        for (let i = 0; i < properties.length; i++) {
            let property = properties[i];
            this._orders.push(new Order(direction, property));
        }
    }

    get orders() {
        return this._orders;
    }

    toArray() {
        let sort = [];
        this.orders.forEach((order) => {
            sort.push([order.property, order.direction]);
        });
        return sort;
    }
};

class Order {

    constructor(direction, property) {
        this._direction = direction;
        this._property = property;
    }

    get direction() {
        return this._direction;
    }

    get property() {
        return this._property;
    }
}