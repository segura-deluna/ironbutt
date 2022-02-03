document.addEventListener('DOMContentLoaded', () => {
  // * Dropdown ============================================
  // * =====================================================
  function openDropdown() {
    const dropdown = document.querySelectorAll('.dropdown');

    dropdown.onclick = function () {
      this.classList.toggle('active');
    };
  }
  openDropdown();
});
