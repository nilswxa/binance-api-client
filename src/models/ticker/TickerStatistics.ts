/**
 * Represents a single 24-hr ticker statistics collection.
 */
export class TickerStatistics {

    public symbol: string;
    public priceChange: number;
    public priceChangePercentage: number;
    public weightedAveragePrice: number;
    public previousClosurePrice: number;
    public lastPrice: number;
    public bidPrice: number;
    public askPrice: number;
    public openingPrice: number;
    public highestPrice: number;
    public lowestPrice: number;
    public volume: number;
    public quoteVolume: number;
    public openingTime: Date;
    public closureTime: Date;
    public firstTradeId: number;
    public lastTradeId: number;
    public tradesCount: number;

    constructor( json: any, symbol?: string ) {

        this.symbol = json.symbol || symbol;
        this.priceChange = Number( json.priceChange );
        this.priceChangePercentage = Number( json.priceChangePercent );
        this.weightedAveragePrice = Number( json.weightedAvgPrice );
        this.previousClosurePrice = Number( json.prevClosePrice );
        this.lastPrice = Number ( json.lastPrice );
        this.bidPrice = Number( json.bidPrice );
        this.askPrice = Number( json.askPrice );
        this.openingPrice = Number( json.openPrice );
        this.highestPrice = Number( json.highPrice );
        this.lowestPrice = Number( json.lowPrice );
        this.volume = Number( json.volume );
        this.quoteVolume = Number ( json.quoteVolume );
        this.openingTime = new Date( json.openTime );
        this.closureTime = new Date( json.closeTime );
        this.firstTradeId = json.firstId;
        this.lastTradeId = json.lastId;
        this.tradesCount = json.count;

    }
}