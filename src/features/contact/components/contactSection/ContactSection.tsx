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
  ContactHoneypotElement,
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
  website: string;
}

type ContactStatus = "idle" | "loading" | "success" | "error";

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  message: "",
  website: "",
};

export const ContactSection = () => {
  const { t, i18n } = useTranslation("common");
  const [form, setForm] = useState<ContactFormState>(initialFormState);
  const [status, setStatus] = useState<ContactStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "loading") {
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          website: form.website,
        }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm(initialFormState);
    } catch {
      setStatus("error");
    }
  };

  const statusMessage =
    status === "success"
      ? t("pages.contact.form.sent")
      : status === "error"
        ? t("pages.contact.form.error")
        : null;

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

              <ContactHoneypotElement aria-hidden="true">
                <label htmlFor="contact-website">Website</label>
                <input
                  id="contact-website"
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      website: event.target.value,
                    }))
                  }
                />
              </ContactHoneypotElement>

              <ContactFieldElement>
                <ContactFieldLabelElement>
                  {t("pages.contact.form.name")}
                </ContactFieldLabelElement>
                <ContactInputElement
                  type="text"
                  name="name"
                  autoComplete="organization"
                  required
                  maxLength={120}
                  value={form.name}
                  placeholder={t("pages.contact.form.namePlaceholder")}
                  disabled={status === "loading"}
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
                  maxLength={254}
                  value={form.email}
                  placeholder={t("pages.contact.form.emailPlaceholder")}
                  disabled={status === "loading"}
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
                  maxLength={5000}
                  value={form.message}
                  placeholder={t("pages.contact.form.messagePlaceholder")}
                  disabled={status === "loading"}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      message: event.target.value,
                    }))
                  }
                />
              </ContactFieldElement>

              <ContactSubmitElement
                type="submit"
                disabled={status === "loading"}
              >
                {status === "loading"
                  ? t("pages.contact.form.sending")
                  : t("pages.contact.form.submit")}
              </ContactSubmitElement>

              {statusMessage ? (
                <ContactFormStatusElement
                  $tone={status === "error" ? "error" : "success"}
                  role="status"
                >
                  {statusMessage}
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
