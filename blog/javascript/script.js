$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
      var file = '../blog/templates/' + $(this).data('include') + '.html'
      $(this).load(file)
    })
  })
  