function Grid(size) {
    // size 大小 规格
    this.size = size;
    this.cells = this.empty();
}
Grid.prototype = {
    // 返回一个空的矩阵（网格），二维数组
    empty: function() {
        let cells = [];
        for(let i = 0; i < this.size; i++) {
            cells[i] = [];
            for(let j = 0; j < this.size; j++) {
                cells[i].push(null);
            }
         }
         return cells;
    },
    // 找出当前所有的空位置
    availableCells() {
        // 空位置
        var cells = [];
        for(let i = 0; i < this.size; i++){
            for(let j = 0; j < this.size; j++){
                if(!this.cells[i][j]){
                    cells.push({
                        x: i,
                        y: j
                    })
                }
            }
        }
        return cells;
    },
    cellAvailable() {
        // 0 || > 0
        // 强转为 true || false
        return !!this.availableCells().length;
    },
    // 从一堆空位置里面随机挑选一个
    randomAvailableCell() {
        const cells = this.availableCells();
        return cells[Math.floor(Math.random() * cells.length)]
    },
    insertTile(tile) {
        this.cells[tile.x][tile.y] = tile;
    }
}
// commonJS
module.exports = Grid;

// ecm
// export default