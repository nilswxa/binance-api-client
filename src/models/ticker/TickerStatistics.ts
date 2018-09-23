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
    public openingTime: Date;
    public closureTime: Date;
    public firstTradeId: number;
    public lastTradeId: number;
    public tradesCount: number;

    constructor( json: any, symbol?: string ) {

        this.symbol = json.symbol || symbol;
        this.priceChange = json.priceChange;
        this.priceChangePercentage = json.priceChangePercent;
        this.weightedAveragePrice = json.weightedAvgPrice;
        this.previousClosurePrice = json.prevClosePrice;
        this.lastPrice = json.lastPrice;
        this.bidPrice = json.bidPrice;
        this.askPrice = json.askPrice;
        this.openingPrice = json.openPrice;
        this.highestPrice = json.highPrice;
        this.lowestPrice = json.lowPrice;
        this.volume = json.volume;
        this.openingTime = new Date( json.openTime );
        this.closureTime = new Date( json.closeTime );
        this.firstTradeId = json.firstId;
        this.lastTradeId = json.lastId;
        this.tradesCount = json.count;

    }
}