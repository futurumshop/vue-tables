module.exports = function() {



    this.data.forEach(function(row,index) {
        if (this.options.selectable) {
            this.$set('data[' + index + ']._selected', false);
        }

        this.customColumns.forEach(function(custom) {
            this.$set('data['+index+'].' + custom, this.options.templates[custom]);
        }.bind(this));

    }.bind(this));
};
