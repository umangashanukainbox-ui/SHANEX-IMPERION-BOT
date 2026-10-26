const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const languageFile = path.join(dataDir, 'languages.json');
const languages = new Map();

function load() {
  try {
    fs.mkdirSync(dataDir, { recursive: true });
    if (fs.existsSync(languageFile)) {
      const saved = JSON.parse(fs.readFileSync(languageFile, 'utf8'));
      for (const [jid, lang] of Object.entries(saved)) {
        if (['si', 'ta', 'en'].includes(lang)) languages.set(jid, lang);
      }
    }
  } catch (error) {
    console.error('[store] Could not load language preferences:', error.message);
  }
}

function save() {
  try {
    fs.mkdirSync(dataDir, { recursive: true });
    fs.writeFileSync(languageFile, JSON.stringify(Object.fromEntries(languages), null, 2));
  } catch (error) {
    console.error('[store] Could not save language preferences:', error.message);
  }
}

function getLanguage(jid) {
  return languages.get(jid) || null;
}

function setLanguage(jid, lang) {
  if (!['si', 'ta', 'en'].includes(lang)) return false;
  languages.set(jid, lang);
  save();
  return true;
}

load();
module.exports = { getLanguage, setLanguage };
