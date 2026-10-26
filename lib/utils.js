function formatUptime(totalSeconds) {
  const seconds = Math.floor(totalSeconds);
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return [days ? `${days}d` : null, `${hours}h`, `${minutes}m`, `${secs}s`].filter(Boolean).join(' ');
}

// Safe arithmetic parser: permits numbers, parentheses, decimal points and basic operators only.
// It never evaluates arbitrary JavaScript.
function calculate(expression) {
  const cleaned = String(expression || '').replace(/\s+/g, '');
  if (!cleaned || cleaned.length > 80 || !/^[0-9.+\-*/()%]+$/.test(cleaned)) {
    throw new Error('Invalid arithmetic expression');
  }
  if (/\/0(?![\d.])/.test(cleaned)) throw new Error('Division by zero');
  // A restricted arithmetic grammar, evaluated only after strict character validation.
  // eslint-disable-next-line no-new-func
  const result = Function(`"use strict"; return (${cleaned});`)();
  if (typeof result !== 'number' || !Number.isFinite(result)) throw new Error('Invalid result');
  return Number.isInteger(result) ? String(result) : String(Number(result.toFixed(8)));
}

module.exports = { formatUptime, calculate };
