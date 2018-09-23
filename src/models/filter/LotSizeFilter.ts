import { SymbolFilter } from "./abstraction/SymbolFilter";

/**
 * Represents a single lot size filter.
 */
export class LotSizeFilter implements SymbolFilter {

    private _minimumQuantity: number;
    private _maximumQuantity: number;
    private _stepSize: number;

    constructor( json: any ) {

        this._minimumQuantity = Number( json.minQty );
        this._maximumQuantity = Number ( json.maxQty );
        this._stepSize = Number ( json.stepSize );

    }

    get minimumQuantity(): number {
        return this._minimumQuantity;
    }

    set minimumQuantity( value: number ) {
        this._minimumQuantity = value;
    }

    get maximumQuantity(): number {
        return this._maximumQuantity;
    }

    set maximumQuantity( value: number ) {
        this._maximumQuantity = value;
    }

    get stepSize(): number {
        return this._stepSize;
    }

    set stepSize( value: number ) {
        this._stepSize = value;
    }

}