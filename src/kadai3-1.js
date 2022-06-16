/**
 * 点
 */
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
/**
 * 正方形。
 */
var Square = /** @class */ (function () {
    /**
     * コンストラクタ。
     *
     * @param p1 左上の点
     * @param p2 右下の点
     */
    function Square(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
    }
    /**
     * @returns 1辺の長さ
     */
    Square.prototype.getSideLength = function () {
        // 対角線の長さ = p1とp2の距離
        var diagonal = Math.sqrt(Math.pow(this.p2.x - this.p1.x, 2) + Math.pow(this.p2.y - this.p1.y, 2));
        // 正方形なので、対角線の平方根を返す。
        return diagonal / Math.sqrt(2);
    };
    Square.prototype.findArea = function () {
        return this.getSideLength() * this.getSideLength();
    };
    return Square;
}());
var square = new Square(new Point(0, 4), new Point(4, 0));
console.log(square.findArea());
