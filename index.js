const names = [
  { name: "Ar-Rahman", meaning: "The Beneficent" },
  { name: "Ar-Rahim", meaning: "The Merciful" },
  { name: "Al-Malik", meaning: "The King and Owner of Dominion" },
  { name: "Al-Quddus", meaning: "The Absolutely Pure" },
  { name: "As-Salam", meaning: "The Source of Peace, Safety, and Perfection" },
  { name: "Al-Mu’min", meaning: "The One Who gives Emaan and Security" },
  { name: "Al-Muhaymin", meaning: "The Guardian, The Witness, The Overseer" },
  { name: "Al-Aziz", meaning: "The Almighty" },
  { name: "Al-Jabbar", meaning: "The Compeller, the Restorer" },
  { name: "Al-Mutakabbir", meaning: "The Supreme, the Majestic" },
  { name: "Al-Khaliq", meaning: "The Creator, the Maker" },
  { name: "Al-Bari", meaning: "The Evolver" },
  { name: "Al-Musawwir", meaning: "The Fashioner" },
  { name: "Al-Ghaffar", meaning: "The Constant Forgiver" },
  { name: "Al-Qahhar", meaning: "The All-Subduer" },
  { name: "Al-Wahhab", meaning: "The Supreme Bestower" },
  { name: "Ar-Razzaq", meaning: "The Provider" },
  { name: "Al-Fattah", meaning: "The Supreme Opener" },
  { name: "Al-Alim", meaning: "The All-Knowing" },
  { name: "Al-Qabid", meaning: "The Withholder" },
  { name: "Al-Basit", meaning: "The Extender" },
  { name: "Al-Khafid", meaning: "The Reducer" },
  { name: "Ar-Rafi", meaning: "The Exalter" },
  { name: "Al-Mu’izz", meaning: "The Honourer" },
  { name: "Al-Mudhill", meaning: "The Dishonourer" },
  { name: "As-Sami", meaning: "The All-Hearing" },
  { name: "Al-Basir", meaning: "The All-Seeing" },
  { name: "Al-Hakam", meaning: "The Impartial Judge" },
  { name: "Al-Adl", meaning: "The Utterly Just" },
  { name: "Al-Latif", meaning: "The Most Subtle, the Most Gentle" },
  { name: "Al-Khabir", meaning: "The All-Aware" },
  { name: "Al-Halim", meaning: "The Most Forbearing" },
  { name: "Al-Azim", meaning: "The Magnificent, the Infinite" },
  { name: "Al-Ghaffur", meaning: "The Great Forgiver" },
  { name: "Ash-Shakur", meaning: "The Most Appreciative" },
  { name: "Al-Aliyy", meaning: "The Most High, the Exalted" },
  { name: "Al-Kabir", meaning: "The Most Great" },
  { name: "Al-Hafiz", meaning: "The Preserver" },
  { name: "Al-Muqit", meaning: "The Sustainer" },
  { name: "Al-Hasib", meaning: "The Reckoner" },
  { name: "Al-Jalil", meaning: "The Majestic" },
  { name: "Al-Karim", meaning: "The Most Generous" },
  { name: "Ar-Raqib", meaning: "The Watchful" },
  { name: "Al-Mujib", meaning: "The Responsive One" },
  { name: "Al-Wasi", meaning: "The All-Encompassing, the Boundless" },
  { name: "Al-Hakim", meaning: "The All-Wise" },
  { name: "Al-Wadud", meaning: "The Most Loving" },
  { name: "Al-Majid", meaning: "The Glorious, the Most Honorable" },
  { name: "Al-Ba’ith", meaning: "The Infuser of New Life" },
  { name: "Ash-Shahid", meaning: "The All-and-Ever Witnessing" },
  { name: "Al-Haqq", meaning: "The Absolute Truth" },
  { name: "Al-Wakil", meaning: "The Trustee, the Disposer of Affairs" },
  { name: "Al-Qawiyy", meaning: "The All-Strong" },
  { name: "Al-Matin", meaning: "The Firm One" },
  { name: "Al-Waliyy", meaning: "The Sole Provider" },
  { name: "Al-Hamid", meaning: "The Praiseworthy" },
  { name: "Al-Muhsi", meaning: "The All-Enumerating, the Counter" },
  { name: "Al-Mubdi", meaning: "The Originator, the Initiator" },
  { name: "Al-Mu’id", meaning: "The Restorer, the Reinstater" },
  { name: "Al-Muhyi", meaning: "The Giver of Life" },
  { name: "Al-Mumit", meaning: "The Creator of Death" },
  { name: "Al-Hayy", meaning: "The Ever-Living" },
  { name: "Al-Qayyum", meaning: "The Sustainer, the Self-Subsisting" },
  { name: "Al-Wajid", meaning: "The Perceiver" },
  { name: "Al-Wahid", meaning: "The Only One" },
  { name: "Al-Ahad", meaning: "The Indivisible, the Absolute" },
  { name: "As-Samad", meaning: "The Self-Sufficient, the Impregnable" },
  { name: "Al-Qadir", meaning: "The Omnipotent" },
  { name: "Al-Muqtadir", meaning: "The Creator of All Power" },
  { name: "Al-Muqaddim", meaning: "The Expediter" },
  { name: "Al-Mu’akhkhir", meaning: "The Delayer" },
  { name: "Al-Awwal", meaning: "The First" },
  { name: "Al-Akhir", meaning: "The Last" },
  { name: "Az-Zahir", meaning: "The Manifest" },
  { name: "Al-Batin", meaning: "The Hidden One, Knower of the Hidden" },
  { name: "Al-Wali", meaning: "The Sole Governor" },
  { name: "Al-Muta’ali", meaning: "The Self Exalted" },
  { name: "Al-Barr", meaning: "The Source of All Goodness" },
  { name: "At-Tawwab", meaning: "The Ever-Accepter of Repentance" },
  { name: "Al-Muntaqim", meaning: "The Avenger" },
  { name: "Al-‘Afuww", meaning: "The Supreme Pardoner" },
  { name: "Ar-Ra’uf", meaning: "The Most Kind" },
  { name: "Malik-al-Mulk", meaning: "Master and King of the Kingdom" },
  { name: "Dhul-Jalaali Wal-Ikram", meaning: "Lord of Glory and Honour" },
  { name: "Al-Muqsit", meaning: "The Just One" },
  { name: "Al-Jami", meaning: "The Gatherer, the Uniter" },
  { name: "Al-Ghaniyy", meaning: "The Self-Sufficient, the Wealthy" },
  { name: "Al-Mughni", meaning: "The Enricher" },
  { name: "Al-Mani", meaning: "The Withholder" },
  { name: "Ad-Darr", meaning: "The Distresser" },
  { name: "An-Nafi", meaning: "The Propitious, the Benefactor" },
  { name: "An-Nur", meaning: "The Light, the Illuminator" },
  { name: "Al-Hadi", meaning: "The Guide" },
  { name: "Al-Badi", meaning: "The Incomparable Originator" },
  { name: "Al-Baqi", meaning: "The Everlasting" },
  { name: "Al-Warith", meaning: "The Inheritor, the Heir" },
  { name: "Ar-Rashid", meaning: "The Guide, Infallible Teacher" },
  { name: "As-Sabur", meaning: "The Most Patient" }
];

let index = 0;
const arabicDisplay = document.getElementById('arabicName');
const englishDisplay = document.getElementById('englishName');

// Load initial name
function displayName() {
  const name = names[index];
  arabicDisplay.textContent = name.arabic;
  englishDisplay.textContent = name.english;
}
displayName();

// Navigation
document.getElementById('prevBtn').addEventListener('click', () => {
  index = (index - 1 + names.length) % names.length;
  displayName();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  index = (index + 1) % names.length;
  displayName();
});

// Play full audio track
const audio = new Audio('Allah-names.mp3'); // Ensure it's in your project folder
document.getElementById('playAudio').addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});