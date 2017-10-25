/**
 * Created by Levi on 2017/4/20.
 */
import Sort from './sort';
import assert from 'assert';

export default class Pageable {

    /**
     * @param page
     * @param size
     * @param direction
     * @param properties
     * @constructor
     */
    constructor(page, size, direction, properties) {
        assert(0 <= page, 'Page index must not be less than zero!');
        assert(0 <= size, 'Page size must not be less than or equal to zero!');
        this._page = page;
        this._size = size;
        this._sort = new Sort(direction, properties);
    }

    /**
     * Returns the number of items to be returned.
     *
     * @return the number of items of that page
     */
    get pageSize() {
        return this._size;
    }

    /**
     * Returns the page to be returned.
     *
     * @return the page to be returned.
     */
    get pageNumber() {
        return this._page;
    }

    /**
     * Returns the offset to be taken according to the underlying page and page size.
     *
     * @return the offset to be taken
     */
    get offset() {
        return this._page * this._size;
    }

    /**
     * Returns the sorting parameters.
     *
     * @return
     */
    get sort() {
        return this._sort;
    }
};