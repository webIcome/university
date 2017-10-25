/**
 * Created by Levi on 2017/4/20.
 */
export default class PageImpl {

    constructor(content, pageable, total) {
        this._content = content;
        this._pageable = pageable;
        this._total = total;
    }

    get number() {
        return (!this._pageable) ? 0 : this._pageable.pageNumber;
    }

    get size() {
        return (!this._pageable) ? 0 : this._pageable.pageSize;
    }

    get totalPages() {
        return this.size == 0 ? 0 : Math.ceil(this._total / this.size);
    }

    get content() {
        return this._content;
    }

    get totalElements() {
        return this._total;
    }

    hasPreviousPage() {
        return this.number > 0;
    }

    isFirstPage() {
        return !this.hasPreviousPage();
    }

    hasNextPage() {
        return ((this.number + 1) * this.size) < this._total;
    }

    isLastPage() {
        return !this.hasNextPage();
    }

};