import validateLanguage from './language-validator';

export default {
  getTranslation(locale) {
    return this.languages.hasOwnProperty(locale) ? this.languages[locale] : this.languages.en;
  },
  addLanguage(languages) {
    // validate the passed lang objects (returns list with valid keys)
    const valid = validateLanguage(languages);

    // Add valid languages to the lang set.
    this.languages = Object.assign(
      this.languages,
      Object.keys(languages)
        .filter(key => valid.indexOf(key) !== -1)
        .reduce((obj, key) => {
          obj[key] = languages[key];
          return obj;
        }, {})
    );
  },

  // Default app languages
  languages: {
    en: {
      showMore: 'Show more',
      dayNameShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      dayNameLong: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      monthNameShort: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'],
      monthNameLong: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    },
    ru: {
      showMore: 'Показать больше',
      dayNameShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      dayNameLong: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
      monthNameShort: ['Янв.', 'Фев.', 'Март.', 'Апр.', 'Май', 'Июнь', 'Июль', 'Авг.', 'Сент.', 'Окт.', 'Ноя.', 'Дек.'],
      monthNameLong: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    },
    zh: {
      showMore: '展示更多',
      dayNameShort: ['日', '一', '二', '三', '四', '五', '六'],
      dayNameLong: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
      monthNameShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      monthNameLong: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    }
  }
};
