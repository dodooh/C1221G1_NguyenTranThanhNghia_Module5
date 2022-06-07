document.querySelector('div.height-100').onclick = ({
                                                      target
                                                    }) => {
  if (!target.classList.contains('more')) return;
  document.querySelectorAll('.dropout.active').forEach(
    (d) => d !== target.parentElement && d.classList.remove('active')
  );
  target.parentElement.classList.toggle('active');
};
