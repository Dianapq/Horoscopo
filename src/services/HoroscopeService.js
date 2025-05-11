export default class HoroscopeService {
  static getDailyHoroscope(sign) {
    const emojis = {
      Aries: "♈",
      Tauro: "♉",
      Géminis: "♊",
      Cáncer: "♋",
      Leo: " ♌",
      Virgo: "♍",
      Libra: "♎",
      Escorpio: "♏",
      Sagitario: "♐",
      Capricornio: "♑",
      Acuario: "♒",
      Piscis: "♓"
    };

    const messages = {
      Aries: "Toma la iniciativa hoy. No temas dar el primer paso.",
      Tauro: "La estabilidad te rodea. Disfruta los pequeños placeres.",
      Géminis: "Comunica tus ideas con claridad y veras buenos resultados.",
      Cáncer: "Escucha a tu intuición. Hoy es buen dia para conectar con otros.",
      Leo: "Brilla con fuerza, pero no opaques a quienes te rodean.",
      Virgo: "Organiza tus ideas. El orden será tu mejor aliado.",
      Libra: "Busca el equilibrio, incluso en situaciones difíciles.",
      Escorpio: "Tu intensidad puede inspirar. Usala con sabiduria.",
      Sagitario: "Explora nuevas ideas o lugares, tu mente lo agradecera.",
      Capricornio: "Tu disciplina sera recompensada. No te detengas.",
      Acuario: "Sé original. Tu vision puede cambiar realidades.",
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
