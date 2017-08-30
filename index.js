import enUs from './en_us.json';

/**
 * An example of how different browsers report languages for english:
 *
 * Chrome/Firefox: 'en' or 'en-US'
 * Safari/IE: 'en' or 'en-us'
 *
 * Because of this we need to make sure that the index.js is handling all locale options
 */
export default {
  'en-US': enUs,
  'en-us': enUs,
  'en': enUs
};
