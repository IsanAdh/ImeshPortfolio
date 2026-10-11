import site from '../data/site.json';

export const waNumber = site.whatsapp.number.replace(/\D/g, '');

/** Builds a wa.me link that opens WhatsApp with a pre-filled message. */
export function waLink(message: string = site.whatsapp.defaultMessage) {
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
}
