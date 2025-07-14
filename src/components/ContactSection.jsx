import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid">
          <div className="space-y-8">

            <div className="space-y-6 justify-center">
              <div className="flex justify-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="flex flex-col justify-start w-60">
                  <h4 className="font-medium text-start"> Email</h4>
                  <a
                    href="mailto:maxeaston8@gmail.com"
                    className="text-start text-muted-foreground hover:text-primary transition-colors"
                  >
                    maxeaston8@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex justify-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="flex flex-col justify-start w-60">
                  <h4 className="font-medium text-start"> Phone</h4>
                  <a
                    href="tel:+27761517074"
                    className="text-start text-muted-foreground hover:text-primary transition-colors"
                  >
                    +27 76 151 7074
                  </a>
                </div>
              </div>
              <div className="flex justify-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div className="flex flex-col justify-start w-60">
                  <h4 className="font-medium text-start"> Location</h4>
                  <a className="text-start text-muted-foreground hover:text-primary transition-colors">
                    Westville, Durban, South Africa
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/max-easton" target="_blank">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
