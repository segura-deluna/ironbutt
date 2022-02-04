document.addEventListener('DOMContentLoaded', () => {
  // * Accordions =======================================================
  // * =================================================================

  function accordions() {
    const accordions = document.querySelectorAll('.item-title');
    const contents = document.querySelectorAll('.item-content');

    accordions.forEach((itemAcc) => {
      itemAcc.addEventListener('click', (event) => {
        event.preventDefault();

        const context = itemAcc.nextElementSibling;

        if (context.style.maxHeight) {
          context.style.maxHeight = null;
          itemAcc.classList.remove('open');
        } else {
          context.style.maxHeight = context.scrollHeight + 'px';
          itemAcc.classList.add('open');
        }

        contents.forEach((itemCon) => {
          if (itemCon !== context) {
            itemCon.style.maxHeight = null;
          }
        });

        accordions.forEach((item) => {
          if (item !== itemAcc) {
            item.classList.remove('open');
          }
        });
      });
    });
  }
  accordions();
});
