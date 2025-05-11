// Dentro de HoroscopeModel.js

export default class HoroscopeModel {
  getZodiacSign(dateStr) {
    const [day, month] = dateStr.split('-').map(Number);
    if (!day || !month || day > 31 || month > 12) return 'Desconocido';
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Acuario';
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'Piscis';
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Tauro';
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Géminis';
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cáncer';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo';
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo';
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra';
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Escorpio';
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagitario';
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricornio';
    return 'Desconocido';
  }

  async fetchHoroscope(sign) {
    const emojis = {
      Aries: "♈", Tauro: "♉", Géminis: "♊", Cáncer: "♋", Leo: "♌", Virgo: "♍",
      Libra: "♎", Escorpio: "♏", Sagitario: "♐", Capricornio: "♑", Acuario: "♒", Piscis: "♓"
    };

    const messages = {
      Aries: "Toma la iniciativa hoy. No temas dar el primer paso.",
      Tauro: "La estabilidad te rodea. Disfruta los pequeños placeres.",
      Géminis: "Comunica tus ideas con claridad y verás buenos resultados.",
      Cáncer: "Escucha a tu intuición. Hoy es buen día para conectar con otros.",
      Leo: "Brilla con fuerza, pero no opaques a quienes te rodean.",
      Virgo: "Organiza tus ideas. El orden será tu mejor aliado.",
      Libra: "Busca el equilibrio, incluso en situaciones difíciles.",
      Escorpio: "Tu intensidad puede inspirar. Úsala con sabiduría.",
      Sagitario: "Explora nuevas ideas o lugares, tu mente lo agradecerá.",
      Capricornio: "Tu disciplina será recompensada. No te detengas.",
      Acuario: "Sé original. Tu visión puede cambiar realidades.",
      Piscis: "Conecta con tus emociones, pero no te dejes arrastrar por ellas."
    };

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          message: messages[sign] || "Confía en tu intuición.",
          emoji: emojis[sign] || "✨"
        });
      }, 1000);
    });
  }
}
