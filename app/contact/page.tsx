import { LocationsLinksSection } from "@/components/locations-links-section";
import { PageShell } from "@/components/page-shell";

export default function ContactPage() {
  return (
    <PageShell showCta={false} compactFooter>
      <section className="contact-form">
        <div className="container">
          <div className="background">
            <div className="text">
              <h1>Contact Us</h1>
              <p>
                Contact us Ready to take it to the next level? Let&apos;s talk about
                your project or idea and find out how we can help your business
                grow. If you are looking for unique digital experiences that&apos;s
                relatable to your users, drop us a line.
              </p>
            </div>
            <div className="form">
              <form action="submit" id="contact-form">
                <div className="form-input name-input">
                  <label htmlFor="name" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                  />
                  <p className="error-message">Please let us know what to call you</p>
                </div>
                <div className="form-input email-input">
                  <label htmlFor="email" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <p className="error-message">Please enter a valid email address</p>
                </div>
                <div className="phone-input">
                  <label htmlFor="phone" />
                  <input type="tel" id="phone" name="phone" placeholder="Phone" />

                  <p className="error-message">Please enter a valid phone number</p>
                </div>
                <label htmlFor="message" />

                <textarea
                  className="message"
                  id="message"
                  name="message"
                  required
                  placeholder="Your message"
                  maxLength={5000}
                />
                <div className="button-div">
                  <button type="submit" className="btn-light">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <LocationsLinksSection />
    </PageShell>
  );
}
