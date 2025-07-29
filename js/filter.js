/*$(window).load(function(){
    var $container = $('.projectContainer');
    $container.isotope({
       filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
*/
   /* $('.projectFilter a').click(function(){
        $('.projectFilter .current').removeClass('current');
        $(this).addClass('current');
        var selector = $(this).attr('filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });*/

    $('.projectFilter a').click(function (e) {
    const selector = $(this).attr('filter');

    // Nếu không có thuộc tính filter (tức là link thật như /contact), thì không can thiệp
    if (typeof selector === "undefined") {
        return; // cho phép chuyển trang
    }

    // Ngược lại là filter => xử lý như cũ
    $('.projectFilter .current').removeClass('current');
    $(this).addClass('current');

    $container.isotope({
        filter: selector,
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    e.preventDefault(); // chỉ chặn hành vi mặc định nếu là filter
});

});
  const text = "Hi,I'm Kien Tran, Welcome to my portfolio";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typewriter").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100); // chỉnh tốc độ tại đây (ms)
    }
  }

  window.onload = typeWriter;