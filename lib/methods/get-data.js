module.exports = function() {

  var data =  {
    query:this.query,
    limit:this.limit,
    orderBy:this.orderBy.column,
    ascending: this.orderBy.ascending,
    page:this.page,
    byColumn:this.options.filterByColumn?1:0
  };

  data = merge(data, this.options.params, this.customQueries);

  this.loading = true;
  this.$dispatch('vue-tables.loading', data);

  return this.$http.get(this.url, {params:data});
};
