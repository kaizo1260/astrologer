export const zodiacSigns = [
  { number: 0, name: 'Bạch Dương', english: 'Aries', emoji: '♈' },
  { number: 1, name: 'Kim Ngưu', english: 'Taurus', emoji: '♉' },
  { number: 2, name: 'Song Tử', english: 'Gemini', emoji: '♊' },
  { number: 3, name: 'Cự Giải', english: 'Cancer', emoji: '♋' },
  { number: 4, name: 'Sư Tử', english: 'Leo', emoji: '♌' },
  { number: 5, name: 'Xử Nữ', english: 'Virgo', emoji: '♍' },
  { number: 6, name: 'Thiên Bình', english: 'Libra', emoji: '♎' },
  { number: 7, name: 'Bọ Cạp', english: 'Scorpio', emoji: '♏' },
  { number: 8, name: 'Nhân Mã', english: 'Sagittarius', emoji: '♐' },
  { number: 9, name: 'Ma Kết', english: 'Capricorn', emoji: '♑' },
  { number: 10, name: 'Bình Bát', english: 'Aquarius', emoji: '♒' },
  { number: 11, name: 'Song Cá', english: 'Pisces', emoji: '♓' },
];

export const planetEmojis: Record<string, string> = {
  Sun: '☀️',
  Moon: '🌙',
  Mercury: '☿️',
  Venus: '♀️',
  Mars: '♂️',
  Jupiter: '♃',
  Saturn: '♄',
  Uranus: '♅',
  Neptune: '♆',
  Pluto: '♇',
  'North Node': '☊',
  'South Node': '☋',
  Chiron: '♥',
};

export const monthNames = [
  'Tháng 1',
  'Tháng 2',
  'Tháng 3',
  'Tháng 4',
  'Tháng 5',
  'Tháng 6',
  'Tháng 7',
  'Tháng 8',
  'Tháng 9',
  'Tháng 10',
  'Tháng 11',
  'Tháng 12',
];

export function getZodiacEmoji(signName: string): string {
  const sign = zodiacSigns.find(
    (z) => z.english.toLowerCase() === signName.toLowerCase()
  );
  return sign?.emoji || '♈';
}

export function getPlanetEmoji(planetName: string): string {
  return planetEmojis[planetName] || '★';
}

export function formatDate(year: number, month: number, day: number): string {
  return `${day} ${monthNames[month - 1]} ${year}`;
}

export function formatTime(hour: number, minute: number): string {
  return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
}
