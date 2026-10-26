const messages = {
  en: {
    choose: `⚡ *WELCOME TO {bot}* ⚡\n\nChoose your language to continue:\n\n1️⃣ Sinhala — සිංහල\n2️⃣ Tamil — தமிழ்\n3️⃣ English\n\nReply with *1*, *2*, or *3*.\nYou can change this later with *.language*.`,
    languageSet: '✅ Language set to *English*.\nSend *.menu* to see the command list.',
    languagePrompt: 'Please choose a language first: reply *1* for Sinhala, *2* for Tamil, or *3* for English.',
    invalidLanguage: 'Please reply with *1*, *2*, or *3* to select your language.',
    menuTitle: '⚡ {bot} — COMMAND MENU',
    menuIntro: 'Commands are typed in English. Replies follow your selected language.',
    menuGeneral: 'GENERAL',
    menuTools: 'TOOLS',
    menuInfo: 'INFO',
    menuLines: '• .menu — Show this menu\n• .alive — Check bot status\n• .ping — Check response speed\n• .language — Change reply language\n• .time — Current date and time\n• .quote — Get a motivational quote\n• .calc 12+5 — Calculate a basic expression\n• .system — Show runtime information\n• .owner — Bot owner information\n• .github — Project repository details\n• .groupinfo — Current group details',
    alive: '✅ *{bot} IS ONLINE*\n\n⏱️ Uptime: {uptime}\n🧠 Memory: {memory} MB\n🌐 Platform: {platform}\n🧩 Version: {version}',
    ping: '🏓 Pong!\n⚡ Response time: {ms} ms',
    languageChanged: '🌐 Language changed to *English*.',
    time: '🕒 Current date and time: {time}',
    quote: '✨ {quote}',
    calcUsage: 'Usage: *.calc 12+5* (basic arithmetic only).',
    calcInvalid: 'I could not calculate that. Try a simple expression such as *.calc (12+5)*.',
    system: '🖥️ *SYSTEM INFO*\n\nOS: {platform}\nArchitecture: {arch}\nNode.js: {node}\nUptime: {uptime}\nMemory used: {memory} MB',
    owner: '👑 *BOT OWNER*\n\nName: {owner}\nBot: {bot}\nPrefix: {prefix}',
    github: '📦 *PROJECT*\n\n{bot}\nVersion: {version}\nAdd your repository URL to the README after creating your GitHub repository.',
    groupOnly: 'This command can only be used inside a WhatsApp group.',
    groupinfo: '👥 *GROUP INFO*\n\nName: {name}\nParticipants: {count}\nGroup ID: {id}',
    unknown: 'I do not recognize that command. Send *.menu* to see available commands.',
    error: 'Sorry, something went wrong while processing that command.',
    connect: '✅ *{bot} connected successfully!*\n\nThe bot is online and ready. Send *.menu* to see commands.',
    noQuote: 'Small progress every day adds up to big results.'
  },
  si: {
    choose: `⚡ *{bot} වෙත සාදරයෙන් පිළිගනිමු!* ⚡\n\nඉදිරියට යාමට භාෂාව තෝරන්න:\n\n1️⃣ සිංහල\n2️⃣ දෙමළ — தமிழ்\n3️⃣ English\n\n*1*, *2*, හෝ *3* ලෙස පිළිතුරු දෙන්න.\nපසුව *.language* මඟින් භාෂාව වෙනස් කළ හැකියි.`,
    languageSet: '✅ භාෂාව *සිංහල* ලෙස සකස් කළා.\nCommands බලන්න *.menu* යවන්න.',
    languagePrompt: 'මුලින්ම භාෂාව තෝරන්න: සිංහල සඳහා *1*, දෙමළ සඳහා *2*, ඉංග්‍රීසි සඳහා *3* යවන්න.',
    invalidLanguage: 'භාෂාව තෝරන්න *1*, *2*, හෝ *3* ලෙස පිළිතුරු දෙන්න.',
    menuTitle: '⚡ {bot} — COMMAND MENU',
    menuIntro: 'Commands ඉංග්‍රීසි භාෂාවෙන් පමණයි. පිළිතුරු ඔබ තෝරාගත් භාෂාවෙන් ලැබේ.',
    menuGeneral: 'සාමාන්‍ය',
    menuTools: 'මෙවලම්',
    menuInfo: 'විස්තර',
    menuLines: '• .menu — විධාන මෙනුව\n• .alive — Bot තත්ත්වය\n• .ping — ප්‍රතිචාර වේගය\n• .language — භාෂාව වෙනස් කිරීම\n• .time — දිනය සහ වේලාව\n• .quote — දිරිගන්වන අදහසක්\n• .calc 12+5 — ගණනය කිරීම\n• .system — පද්ධති තොරතුරු\n• .owner — Bot හිමිකරු\n• .github — Project තොරතුරු\n• .groupinfo — සමූහ තොරතුරු',
    alive: '✅ *{bot} ක්‍රියාත්මකයි*\n\n⏱️ ක්‍රියාකාරී කාලය: {uptime}\n🧠 මතක භාවිතය: {memory} MB\n🌐 පද්ධතිය: {platform}\n🧩 සංස්කරණය: {version}',
    ping: '🏓 Pong!\n⚡ ප්‍රතිචාර කාලය: {ms} ms',
    languageChanged: '🌐 භාෂාව *සිංහල* ලෙස වෙනස් කළා.',
    time: '🕒 වත්මන් දිනය සහ වේලාව: {time}',
    quote: '✨ {quote}',
    calcUsage: 'භාවිතය: *.calc 12+5* (සරල ගණිත ප්‍රකාශන පමණයි).',
    calcInvalid: 'එය ගණනය කළ නොහැකියි. *.calc (12+5)* වැනි සරල ප්‍රකාශනයක් උත්සාහ කරන්න.',
    system: '🖥️ *පද්ධති තොරතුරු*\n\nOS: {platform}\nArchitecture: {arch}\nNode.js: {node}\nක්‍රියාකාරී කාලය: {uptime}\nමතක භාවිතය: {memory} MB',
    owner: '👑 *BOT හිමිකරු*\n\nනම: {owner}\nBot: {bot}\nPrefix: {prefix}',
    github: '📦 *PROJECT*\n\n{bot}\nසංස්කරණය: {version}\nGitHub repository එක සෑදූ පසු README එකට එහි URL එක එක් කරන්න.',
    groupOnly: 'මෙම command එක භාවිත කළ හැක්කේ WhatsApp සමූහයක පමණයි.',
    groupinfo: '👥 *සමූහ තොරතුරු*\n\nනම: {name}\nසාමාජිකයන්: {count}\nGroup ID: {id}',
    unknown: 'එම command එක හඳුනාගත නොහැකියි. Commands බලන්න *.menu* යවන්න.',
    error: 'Command එක ක්‍රියාත්මක කිරීමේදී දෝෂයක් ඇති වුණා.',
    connect: '✅ *{bot} සාර්ථකව සම්බන්ධ වුණා!*\n\nBot එක දැන් ක්‍රියාත්මකයි. Commands සඳහා *.menu* යවන්න.',
    noQuote: 'සෑම දිනකම කරන කුඩා ප්‍රගතියක් විශාල ප්‍රතිඵලයක් ගෙන දෙයි.'
  },
  ta: {
    choose: `⚡ *{bot} வரவேற்கிறது!* ⚡\n\nதொடர உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்:\n\n1️⃣ சிங்களம் — සිංහල\n2️⃣ தமிழ்\n3️⃣ English\n\n*1*, *2*, அல்லது *3* என பதிலளிக்கவும்.\nபின்னர் *.language* மூலம் மொழியை மாற்றலாம்.`,
    languageSet: '✅ மொழி *தமிழ்* என அமைக்கப்பட்டது.\nகட்டளைகளுக்கு *.menu* அனுப்பவும்.',
    languagePrompt: 'முதலில் மொழியைத் தேர்ந்தெடுக்கவும்: சிங்களத்திற்கு *1*, தமிழுக்கு *2*, ஆங்கிலத்திற்கு *3* அனுப்பவும்.',
    invalidLanguage: '*1*, *2*, அல்லது *3* என பதிலளித்து மொழியைத் தேர்ந்தெடுக்கவும்.',
    menuTitle: '⚡ {bot} — COMMAND MENU',
    menuIntro: 'கட்டளைகள் ஆங்கிலத்தில் மட்டுமே. பதில்கள் நீங்கள் தேர்ந்தெடுத்த மொழியில் வரும்.',
    menuGeneral: 'பொது',
    menuTools: 'கருவிகள்',
    menuInfo: 'தகவல்',
    menuLines: '• .menu — கட்டளை பட்டியல்\n• .alive — Bot நிலை\n• .ping — பதில் வேகம்\n• .language — மொழியை மாற்று\n• .time — தற்போதைய தேதி மற்றும் நேரம்\n• .quote — ஊக்கமளிக்கும் வாசகம்\n• .calc 12+5 — கணக்கிடு\n• .system — கணினி தகவல்\n• .owner — Bot உரிமையாளர்\n• .github — Project தகவல்\n• .groupinfo — குழு தகவல்',
    alive: '✅ *{bot} இயங்குகிறது*\n\n⏱️ இயங்கிய நேரம்: {uptime}\n🧠 நினைவகப் பயன்பாடு: {memory} MB\n🌐 தளம்: {platform}\n🧩 பதிப்பு: {version}',
    ping: '🏓 Pong!\n⚡ பதில் நேரம்: {ms} ms',
    languageChanged: '🌐 மொழி *தமிழ்* என மாற்றப்பட்டது.',
    time: '🕒 தற்போதைய தேதி மற்றும் நேரம்: {time}',
    quote: '✨ {quote}',
    calcUsage: 'பயன்பாடு: *.calc 12+5* (எளிய கணிதம் மட்டும்).',
    calcInvalid: 'இதைக் கணக்கிட முடியவில்லை. *.calc (12+5)* போன்ற எளிய கணக்கை முயற்சிக்கவும்.',
    system: '🖥️ *கணினி தகவல்*\n\nOS: {platform}\nArchitecture: {arch}\nNode.js: {node}\nஇயங்கிய நேரம்: {uptime}\nநினைவகப் பயன்பாடு: {memory} MB',
    owner: '👑 *BOT உரிமையாளர்*\n\nபெயர்: {owner}\nBot: {bot}\nPrefix: {prefix}',
    github: '📦 *PROJECT*\n\n{bot}\nபதிப்பு: {version}\nGitHub repository உருவாக்கிய பின் அதன் URL-ஐ README-இல் சேர்க்கவும்.',
    groupOnly: 'இந்த கட்டளையை WhatsApp குழுவில் மட்டுமே பயன்படுத்தலாம்.',
    groupinfo: '👥 *குழு தகவல்*\n\nபெயர்: {name}\nஉறுப்பினர்கள்: {count}\nGroup ID: {id}',
    unknown: 'இந்த கட்டளை தெரியவில்லை. கட்டளைகளைப் பார்க்க *.menu* அனுப்பவும்.',
    error: 'இந்த கட்டளையைச் செயல்படுத்தும்போது பிழை ஏற்பட்டது.',
    connect: '✅ *{bot} வெற்றிகரமாக இணைக்கப்பட்டது!*\n\nBot இயங்குகிறது. கட்டளைகளுக்கு *.menu* அனுப்பவும்.',
    noQuote: 'ஒவ்வொரு நாளும் சிறிய முன்னேற்றம் பெரிய முடிவுகளைத் தரும்.'
  }
};

function t(lang, key, vars = {}) {
  const pack = messages[lang] || messages.en;
  let value = pack[key] || messages.en[key] || key;
  for (const [name, replacement] of Object.entries(vars)) {
    value = value.replaceAll(`{${name}}`, String(replacement));
  }
  return value;
}

module.exports = { t, messages };
