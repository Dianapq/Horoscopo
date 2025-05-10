export default class HoroscopeController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  handleDateInput(isValid) {
    this.view.toggleConsultButton(isValid);
  }

  async consultHoroscope(date) {
    const sign = this.model.getZodiacSign(date);
    const { message, emoji } = await this.model.fetchHoroscope(sign);
    this.view.displayHoroscope(`${message} ${emoji}`);
  }
}
