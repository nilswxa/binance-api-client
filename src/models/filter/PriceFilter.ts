import { SymbolFilter } from "./abstraction/SymbolFilter";

/**
 * Represents a single price filter.
 */
export class PriceFilter implements SymbolFilter {

    private _minimumPrice: number;
    private _maximumPrice: number;
    private _tickSize: number;

    constructor( json: any ) {

        this._minimumPrice = Number( json.minPrice );
        this._maximumPrice = Number( json.maxPrice );
        this._tickSize = Number( json.tickSize );

    }

    get minimumPrice(): number {
        return this._minimumPrice;
    }

    set minimumPrice( value: number ) {
        this._minimumPrice = value;
    }

    get maximumPrice(): number {
        return this._maximumPrice;
    }

    set maximumPrice( value: number ) {
        this._maximumPrice = value;
    }

    get tickSize(): number {
        return this._tickSize;
    }

    set tickSize( value: number ) {
        this._tickSize = value;
    }

}