import { useState } from "react";
import type { FormEvent } from "react";
import { useTranslation } from "react-i18next";
import {
  CallOutlineIcon,
  LocationOutlineIcon,
  MailOutlineIcon,
} from "@assets/icons";
import {
  CONTACT_EMAIL,
  CONTACT_MAP_EMBED_URL,
  contactPhones,
} from "@features/contact/data";
import {
  ContactFieldElement,
  ContactFieldLabelElement,
  ContactFormElement,
  ContactFormStatusElement,
  ContactFormTitleElement,
  ContactGridElement,
  ContactHeadingElement,
  ContactInfoCopyElement,
  ContactInfoIconElement,
  ContactInfoItemElement,
  ContactInfoLabelElement,
  ContactInfoLinkElement,
  ContactInfoListElement,
  ContactInfoValueElement,
  ContactInnerElement,
  ContactInputElement,
  ContactIntroElement,
  ContactMapElement,
  ContactMapWrapElement,
  ContactSectionElement,
  ContactStackElement,
  ContactSubmitElement,
  ContactTextareaElement,
  ContactTitleElement,
} from "./ContactSection.elements";

interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  message: "",
};

export const ContactSection = () => {
  const { t, i18n } = useTranslation("common");
  const [form, setForm] = useState<ContactFormState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      t("pages.contact.form.mailSubject", { name: form.name }),
    );
    const body = encodeURIComponent(
      `${t("pages.contact.form.name")}: ${form.name}\n${t("pages.contact.form.email")}: ${form.email}\n\n${form.message}`,
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("sent");
    setForm(initialFormState);
  };

  return (
    <ContactSectionElement
      key={i18n.language}
      aria-label={t("pages.contact.title")}
    >
      <ContactInnerElement>
        <ContactStackElement>
          <ContactHeadingElement>
            <ContactTitleElement>
              {t("pages.contact.title")}
            </ContactTitleElement>
            <ContactIntroElement>
              {t("pages.contact.intro")}
            </ContactIntroElement>
          </ContactHeadingElement>

          <ContactGridElement>
            <ContactInfoListElement>
              <ContactInfoItemElement>
                <ContactInfoIconElement aria-hidden>
                  <MailOutlineIcon />
                </ContactInfoIconElement>
                <ContactInfoCopyElement>
                  <ContactInfoLabelElement>
                    {t("pages.contact.info.email")}
                  </ContactInfoLabelElement>
                  <ContactInfoValueElement>
                    <ContactInfoLinkElement href={`mailto:${CONTACT_EMAIL}`}>
                      {CONTACT_EMAIL}
                    </ContactInfoLinkElement>
                  </ContactInfoValueElement>
                </ContactInfoCopyElement>
              </ContactInfoItemElement>

              <ContactInfoItemElement>
                <ContactInfoIconElement aria-hidden>
                  <CallOutlineIcon />
                </ContactInfoIconElement>
                <ContactInfoCopyElement>
                  <ContactInfoLabelElement>
                    {t("pages.contact.info.phone")}
                  </ContactInfoLabelElement>
                  <ContactInfoValueElement>
                    {contactPhones.map((phone, index) => (
                      <span key={phone.id}>
                        <ContactInfoLinkElement href={phone.href}>
                          {phone.label}
                        </ContactInfoLinkElement>
                        {index < contactPhones.length - 1 ? " / " : null}
                      </span>
                    ))}
                  </ContactInfoValueElement>
                </ContactInfoCopyElement>
              </ContactInfoItemElement>

              <ContactInfoItemElement>
                <ContactInfoIconElement aria-hidden>
                  <LocationOutlineIcon />
                </ContactInfoIconElement>
                <ContactInfoCopyElement>
                  <ContactInfoLabelElement>
                    {t("pages.contact.info.address")}
                  </ContactInfoLabelElement>
                  <ContactInfoValueElement>
                    {t("pages.contact.info.addressValue")}
                  </ContactInfoValueElement>
                </ContactInfoCopyElement>
              </ContactInfoItemElement>
            </ContactInfoListElement>

            <ContactFormElement onSubmit={handleSubmit} noValidate={false}>
              <ContactFormTitleElement>
                {t("pages.contact.form.title")}
              </ContactFormTitleElement>

              <ContactFieldElement>
                <ContactFieldLabelElement>
                  {t("pages.contact.form.name")}
                </ContactFieldLabelElement>
                <ContactInputElement
                  type="text"
                  name="name"
                  autoComplete="organization"
                  required
                  value={form.name}
                  placeholder={t("pages.contact.form.namePlaceholder")}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      name: event.target.value,
                    }))
                  }
                />
              </ContactFieldElement>

              <ContactFieldElement>
                <ContactFieldLabelElement>
                  {t("pages.contact.form.email")}
                </ContactFieldLabelElement>
                <ContactInputElement
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  placeholder={t("pages.contact.form.emailPlaceholder")}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      email: event.target.value,
                    }))
                  }
                />
              </ContactFieldElement>

              <ContactFieldElement>
                <ContactFieldLabelElement>
                  {t("pages.contact.form.message")}
                </ContactFieldLabelElement>
                <ContactTextareaElement
                  name="message"
                  required
                  value={form.message}
                  placeholder={t("pages.contact.form.messagePlaceholder")}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      message: event.target.value,
                    }))
                  }
                />
              </ContactFieldElement>

              <ContactSubmitElement type="submit">
                {t("pages.contact.form.submit")}
              </ContactSubmitElement>

              {status === "sent" ? (
                <ContactFormStatusElement>
                  {t("pages.contact.form.sent")}
                </ContactFormStatusElement>
              ) : null}
            </ContactFormElement>
          </ContactGridElement>

          <ContactMapWrapElement>
            <ContactMapElement
              title={t("pages.contact.mapTitle")}
              src={CONTACT_MAP_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </ContactMapWrapElement>
        </ContactStackElement>
      </ContactInnerElement>
    </ContactSectionElement>
  );
};
