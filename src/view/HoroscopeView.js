export default class HoroscopeView {
  constructor() {
    this.input = document.getElementById('birthdate');
    this.button = document.getElementById('consultButton');
    this.messageBox = document.getElementById('horoscopeMessage');
  }

 bindDateInput(callback) {
  this.input.addEventListener('input', () => {
    const trimmed = this.input.value.trim();
    const isValid = /^\d{2}-\d{2}-\d{4}$/.test(trimmed);
    callback(isValid);
  });
}

  bindConsult(callback) {
    this.button.addEventListener('click', callback);
  }

  toggleConsultButton(enabled) {
    this.button.disabled = !enabled;
  }

  getDateInput() {
    return this.input.value;
  }

  displayHoroscope(message) {
    this.messageBox.textContent = message;
    this.messageBox.classList.remove('hidden');
    this.button.disabled = true;

    setTimeout(() => {
      this.messageBox.classList.add('hidden');
      this.messageBox.addEventListener('transitionend', () => {
        this.button.disabled = false;
        this.messageBox.textContent = '';
      }, { once: true });
    }, 15000);
  }
}
