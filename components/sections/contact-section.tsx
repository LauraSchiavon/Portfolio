"use client";

import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";

export function ContactSection() {
  return (
    <AnimatedSection id="contact" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Get In Touch</h2>
          <div className="mx-auto h-1 w-20 bg-primary"></div>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Interested in working together or have a question? Feel free to
            reach out using the contact form below or through my contact
            details.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 justify-items-center text-center">
          {/* Contato */}
          <div className="max-w-sm mx-auto text-left">
            <h3 className="mb-6 text-2xl font-bold text-center">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <a
                    href="mailto:lauraschiavon00@gmail.com"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    lauraschiavon00@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Phone</h4>
                  <a
                    href="tel:+5514997342092"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    +55 (14) 99734-2092
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    Bariri, São Paulo, Brasil
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Redes sociais */}
          <div>
            <h3 className="mb-6 text-2xl font-bold">Follow Me</h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/LauraSchiavon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-gray-700 transition-colors hover:bg-gray-800 hover:text-white"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/laura-lonardoni-paulino-schiavon/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-blue-700 transition-colors hover:bg-blue-600 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:lauraschiavon00@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-blue-400 transition-colors hover:bg-blue-400 hover:text-white"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
              <a
                href="https://instagram.com/lauraschiavon_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-pink-600 transition-colors hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
