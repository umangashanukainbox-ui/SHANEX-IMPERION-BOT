const { t } = require('../lib/i18n');
const { searchTitles } = require('../providers/tmdb');

const commandKinds = {
  movie: 'movie', movies: 'movie', cinesubz: 'movie', sinhalasub: 'movie',
  helaflix: 'movie', moviebox: 'movie', cinemv: 'movie', moviepro: 'movie',
  kdrama: 'tv', anime: 'tv', animehaven: 'tv', scartoon: 'tv', slcartoon: 'tv'
};

module.exports = {
  name: 'movie',
  aliases: ['movies', 'cinesubz', 'sinhalasub', 'helaflix', 'moviebox', 'kdrama', 'anime', 'scartoon', 'slcartoon', 'cinemv', 'animehaven', 'moviepro'],
  description: 'Search movie and TV metadata and official watch links',
  async run(ctx) {
    const query = ctx.args.join(' ').trim();
    if (!query) {
      await ctx.reply(t(ctx.lang, 'movieUsage'));
      return;
    }
    if (!ctx.settings.TMDB_READ_ACCESS_TOKEN) {
      await ctx.reply(t(ctx.lang, 'movieNoApi'));
      return;
    }
    try {
      const kind = commandKinds[ctx.command] || (['kdrama', 'anime', 'scartoon', 'slcartoon', 'animehaven'].includes(ctx.command) ? 'tv' : 'movie');
      const results = await searchTitles({
        query,
        token: ctx.settings.TMDB_READ_ACCESS_TOKEN,
        region: ctx.settings.TMDB_REGION,
        kind
      });
      if (!results.length) {
        await ctx.reply(t(ctx.lang, 'movieNoResults', { query }));
        return;
      }
      const blocks = results.map((item, index) => {
        const watch = item.watchUrl ? `\n▶ Official availability: ${item.watchUrl}` : '\n▶ Official availability: Check providers on the TMDB title page.';
        return `${index + 1}. *${item.title}* (${item.year})\n⭐ ${item.rating}/10\n${item.overview.slice(0, 260)}\n🔎 ${item.url}${watch}`;
      });
      await ctx.reply(t(ctx.lang, 'movieResults', { query, results: blocks.join('\n\n') }));
    } catch (error) {
      console.error('[TMDB]', error.message);
      await ctx.reply(t(ctx.lang, 'movieApiError'));
    }
  }
};
