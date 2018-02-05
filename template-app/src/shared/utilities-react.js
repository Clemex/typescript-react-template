
let cachedIntl = null;
let prevLocale = '';

export const getIntlMiddleware = ({intl: {locale, messages}}) => {
  if (!cachedIntl || locale !== prevLocale) {
    cachedIntl = (new IntlProvider({locale, messages})).getChildContext().intl;
    prevLocale = locale;
  }
  return cachedIntl;
}

export function getIntl() {
    return cachedIntl;
}




