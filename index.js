import deDe from './de-DE.json';
import enUs from './en-US.json';
import esEs from './es-ES.json';
import frFr from './fr-FR.json';
import plPL from './pl-PL.json';
import ptBR from './pt-BR.json';

/**
 * An example of how different browsers report languages for english:
 *
 * Chrome/Firefox: 'en' or 'en-US'
 * Safari/IE: 'en' or 'en-us'
 *
 * Because of this we need to make sure that the index.js is handling all locale options
 */
export default {
  'de-DE': deDe,
  'de-de': deDe,
  'de': deDe,

  'en-US': enUs,
  'en-us': enUs,
  'en': enUs,

  'es-ES': esEs,
  'es-es': esEs,
  'es': esEs,

  'fr-FR': frFr,
  'fr-fr': frFr,
  'fr': frFr,

  'pl-PL': plPL,
  'pl-pl': plPL,
  'pl': plPL,

  'pt-BR': ptBR,
  'pt-br': ptBR,
  'pt': ptBR
};
