import HoroscopeService from '../services/HoroscopeService.js';

export default class HoroscopeModel {
  getZodiacSign(dateStr) {
    // Parse DD-MM-YYYY
    const [day, month] = dateStr.split('-').map(Number);
    // Sign logic simplified
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
    // Add other signs here...
    return 'Piscis'; // default
  }

  async fetchHoroscope(sign) {
    return HoroscopeService.getDailyHoroscope(sign);
  }
}
