/**
 * Represents a single ticker update.
 */
export class TickerUpdate {

    readonly symbol: string;
    readonly open: number;
    readonly high: number;
    readonly low: number;
    readonly close: number;
    readonly bid: number;
    readonly ask: number;
    readonly volume: number;
    readonly quoteVolume: number;
    readonly priceChangePercentage: number;
    readonly timestamp: Date;

    constructor( json: any ) {
        this.symbol = json.s;
        this.open = Number( json.o );
        this.high = Number( json.h );
        this.low = Number( json.l );
        this.close = Number( json.c );
        this.bid = Number( json.b );
        this.ask = Number( json.a );
        this.volume = Number ( json.v );
        this.quoteVolume = Number ( json.q );
        this.priceChangePercentage = Number ( json.P );
        this.timestamp = new Date( json.E );
    }
}