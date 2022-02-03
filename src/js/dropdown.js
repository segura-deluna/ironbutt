document.addEventListener('DOMContentLoaded', () => {
  // * Dropdown ============================================
  // * =====================================================
  function openDropdown() {
    const dropdown = document.querySelectorAll('.dropdown');

    for (item of dropdown) {
      item.addEventListener('click', function () {
        if (this.classList.contains('active')) {
          this.classList.remove('active');
        } else {
          for (el of dropdown) {
            el.classList.remove('active');
          }
          this.classList.add('active');
          console.log(this);
        }
      });
    }
  }
  openDropdown();
});
