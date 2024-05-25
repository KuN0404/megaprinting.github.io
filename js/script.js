// shadow navbar

window.addEventListener('scroll', function () {
  var header = document.getElementById('header');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add('shadow-lg');
  } else {
    header.classList.remove('shadow-lg');
  }
});

// sweetconfirm
const contactForm = document.getElementById('contact-form');
const btn = document.getElementById('btn');

btn.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default form submission

  Swal.fire({
    title: 'Apakah Data Sudah Benar?',
    text: 'Pastikan kembali pesanan anda!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: 'rgb(49 46 129)',
    cancelButtonColor: 'rgb(190 24 93)',
    confirmButtonText: 'Kirim!',
  }).then((result) => {
    if (result.isConfirmed) {
      const url = contactForm.action;
      const formData = new FormData(contactForm);

      fetch(url, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      })
        .then(() => {
          window.location.href = 'terimakasih.html';
        })
        .catch((e) => alert('Error Occurred'));
    } else {
      Swal.fire({
        title: 'Cancel!',
        text: 'Pesanan dibatalkan.',
        icon: 'success',
      });
    }
  });
});

// navbar responsive
function Menu(e) {
  let list = document.querySelector('ul');

  e.name === 'menu' ? ((e.name = 'close'), list.classList.add('top-[80px]'), list.classList.add('opacity-100')) : ((e.name = 'menu'), list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'));
}
