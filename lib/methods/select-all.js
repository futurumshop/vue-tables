module.exports = function() {

    this.data.forEach((row, index) => {
        this.$set('data[' + index + ']._selected', this.selectedAllChecked);
    });
};