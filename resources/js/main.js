$(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  $('#yr').text(new Date().getFullYear());

  // Mobile menu
  var $menu = $('#menu'), $burger = $('.burger');
  $burger.on('click', function () {
    var open = $menu.toggleClass('open').hasClass('open');
    $burger.attr('aria-expanded', open).text(open ? '✕' : '☰');
  });
  $menu.find('a').on('click', function () { $menu.removeClass('open'); $burger.attr('aria-expanded', false).text('☰'); });

  // Active nav on scroll
  var $links = $menu.find('a'), $secs = $('main section');
  function spy() {
    var y = $(window).scrollTop() + $(window).height() * 0.35, id = 'home';
    $secs.each(function () { if (this.offsetTop <= y) id = this.id; });
    $links.removeClass('active').filter('[href="#' + id + '"]').addClass('active');
  }
  $(window).on('scroll resize', spy); spy();

  // Count-up helper
  function count($el, to, suffix) {
    if (reduce) return $el.text(to + suffix);
    $({ n: 0 }).animate({ n: to }, { duration: 1600, easing: 'swing', step: function (v) { $el.text(Math.round(v) + suffix); } });
  }

  // Reveal + skill/counter animations
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var $el = $(e.target); $el.addClass('in'); io.unobserve(e.target);
      if ($el.is('[data-skill]')) {
        var v = +$el.data('skill');
        $el.find('.bar').css('stroke-dashoffset', 264 * (1 - v / 100));
        count($el.find('.val'), v, '%');
      }
      $el.find('[data-count]').each(function () { count($(this), +$(this).data('count'), '+'); });
    });
  }, { threshold: 0.2 });
  $('.reveal').each(function (i) { $(this).css('transition-delay', (i % 4) * 70 + 'ms'); io.observe(this); });
});
