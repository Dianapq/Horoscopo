export default class HoroscopeService {
  static async getDailyHoroscope(sign) {
    // Mocked horoscope
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: `Hoy es un gran día para los ${sign}`, emoji: '✨' });
      }, 1000);
    });
  }
}
