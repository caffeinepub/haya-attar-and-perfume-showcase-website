import { useGetContactInfo, useGetAllSocialLinks } from '../hooks/useQueries';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import { SiFacebook, SiInstagram, SiX, SiLinkedin } from 'react-icons/si';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  facebook: SiFacebook,
  instagram: SiInstagram,
  twitter: SiX,
  x: SiX,
  linkedin: SiLinkedin,
};

export function Contact() {
  const { data: contactInfo, isLoading: contactLoading } = useGetContactInfo();
  const { data: socialLinks, isLoading: socialLoading } = useGetAllSocialLinks();

  const isLoading = contactLoading || socialLoading;

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            We'd love to hear from you. Reach out to us for inquiries or to learn more about our collection.
          </p>
        </div>

        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}

        {!isLoading && (
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="border-border/50 shadow-luxury">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo ? (
                  <>
                    {contactInfo.phone && (
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-primary/10 p-3">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Phone</p>
                          <p className="text-foreground">{contactInfo.phone}</p>
                        </div>
                      </div>
                    )}

                    {contactInfo.email && (
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-primary/10 p-3">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Email</p>
                          <p className="text-foreground">{contactInfo.email}</p>
                        </div>
                      </div>
                    )}

                    {contactInfo.address && (
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-primary/10 p-3">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Address</p>
                          <p className="text-foreground">{contactInfo.address}</p>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <p className="text-muted-foreground text-center py-8">
                    Contact information will be available soon.
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-border/50 shadow-luxury">
              <CardHeader>
                <CardTitle className="text-xl">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                {socialLinks && socialLinks.length > 0 ? (
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground mb-6">
                      Stay connected with us on social media for the latest updates and exclusive offers.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {socialLinks.map((link) => {
                        const IconComponent = socialIconMap[link.platform.toLowerCase()];
                        return (
                          <a
                            key={link.platform}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 hover:bg-accent hover:border-primary transition-all group"
                          >
                            {IconComponent && (
                              <IconComponent className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            )}
                            <span className="text-sm font-medium capitalize">
                              {link.platform}
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-8">
                    Social media links will be available soon.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}

