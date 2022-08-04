import {makeAutoObservable} from "mobx";

export default class HeroStore {
    constructor() {
        this._hero = []
        this._selectedHero = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 5
        makeAutoObservable(this)
    }

    setHero(hero) {
        this._hero = hero
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    setLimit(limit) {
        this._limit = limit
    }

    setSelectedHero(hero) {
        this._selectedHero = hero
    }

    get hero() {
        return this._hero
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }

}
