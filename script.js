$(document).ready(function () {
  $('button').click(function () {
    const name = $('#nameid').val();
    console.log(name);

    if (name === "Salman Khan" || name === "salman khan" || name === "salman" || name === "SALMAN KHAN" || name === "Salman" ||
      name === "Salman Khan") {
      $('.imgchange').attr('src', `https://api.dicebear.com/9.x/avataaars/svg?seed=SALMAN`);
    } else {
      $('.imgchange').attr('src', `https://api.dicebear.com/9.x/avataaars/svg?seed=${name}`);
    }

    const b = $('.imgchange');
    console.log(b);
  });
});
