export const CONTACT_EMAIL = "interest@panoramiaccs.com";

export const CONTACT_MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.85!2d-66.7942903!3d10.4481712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a57e2383c2aa9%3A0x66673e9cf8f689a!2sEl%20Encantado%20Ventas!5e0!3m2!1ses-419!2sve!4v1723500000000!5m2!1ses-419!2sve";

export const CONTACT_MAP_LINK =
  "https://www.google.com/maps/place/El+Encantado+Ventas/@10.4481712,-66.7917154,17z";

export interface ContactPhone {
  id: string;
  label: string;
  href: string;
}

export const contactPhones: ContactPhone[] = [
  {
    id: "mobile",
    label: "+58 414 311.6161",
    href: "tel:+584143116161",
  },
  {
    id: "office",
    label: "+58 212 257.8558",
    href: "tel:+582122578558",
  },
];
