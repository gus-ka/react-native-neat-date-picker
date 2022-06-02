import cn from './i18n/cn.json';
import en from './i18n/en.json';
import de from './i18n/de.json';
import es from './i18n/es.json';
import fr from './i18n/fr.json';
import pt from './i18n/pt.json';

export const getTranslation = (language) => {
    switch (language){
        case "en":
            return en
        case "cn":
            return cn
        case "es":
            return es
        case "de":
            return de
        case "pt":
            return pt
        case "fr":
            return fr
        default:
            return en
    }
}