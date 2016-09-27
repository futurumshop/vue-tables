module.exports = function () {

    var selectedRows = [];
    this.data.forEach(function (row, index) {
        if (row._selected) {
            selectedRows.push(row);
        }
    });
    return selectedRows;
};