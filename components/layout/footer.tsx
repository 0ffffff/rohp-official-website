import Link from "next/link"
import { Facebook, Instagram, Mail } from "lucide-react"

import { BentoGrid, BentoTile, siteContainerClass } from "@/components/bento"

const footerTileClass =
  "border-white/15 bg-white/10 text-primary-foreground shadow-none hover:border-white/25 hover:bg-white/15"

const footerLinkClass =
  "cursor-pointer text-sm text-white/75 transition-colors duration-200 hover:text-white"

export function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="py-6 md:py-8">
        <BentoGrid stretch>
          <BentoTile span={4} fill className={footerTileClass}>
            <h3 className="font-heading text-base font-bold tracking-tight text-white">
              Regents&apos; Overnight Host Program
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              Welcome to the Golden Bear family. Experience UC Berkeley through the eyes of current students.
            </p>
            <p className="mt-4 text-sm text-white/70">
              © {new Date().getFullYear()} Regents&apos; Overnight Host Program, UC Berkeley.
            </p>
            <p className="mt-1 text-xs text-white/50">Hosted by the Open Computing Facility</p>
          </BentoTile>

          <BentoTile span={4} fill className={footerTileClass}>
            <h3 className="font-heading text-base font-bold tracking-tight text-white">Quick Links</h3>
            <nav className="mt-3 flex flex-col gap-1.5" aria-label="Footer">
              <Link href="/agenda" className={footerLinkClass}>Program Agenda</Link>
              <Link href="/registration" className={footerLinkClass}>Registration</Link>
              <Link href="/faq" className={footerLinkClass}>FAQ</Link>
              <Link href="/committee" className={footerLinkClass}>Meet the Team</Link>
              <Link href="/housing" className={footerLinkClass}>Housing Tours</Link>
            </nav>
          </BentoTile>

          <BentoTile span={4} fill className={`${footerTileClass} flex flex-col justify-between`}>
            <div>
              <h3 className="font-heading text-base font-bold tracking-tight text-white">Contact</h3>
              <a
                href="mailto:contact@rohp.berkeley.edu"
                className={`mt-3 inline-flex items-center gap-2 ${footerLinkClass}`}
              >
                <Mail className="h-4 w-4 shrink-0" />
                Email us
              </a>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/5 transition-colors duration-200 hover:border-white/40 hover:bg-white/10"
                >
                  <Facebook className="h-4 w-4 text-white/80" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/5 transition-colors duration-200 hover:border-white/40 hover:bg-white/10"
                >
                  <Instagram className="h-4 w-4 text-white/80" />
                </a>
              </div>
            </div>
            <Link
              href="/registration"
              className="mt-6 block cursor-pointer rounded-xl border-t border-white/15 pt-4 transition-colors duration-200 hover:bg-white/5"
            >
              <p className="font-heading text-sm font-semibold text-white">Ready to visit?</p>
              <p className="mt-1 text-sm text-white/75">Register for a program →</p>
            </Link>
          </BentoTile>
        </BentoGrid>
      </div>

      <div className={siteContainerClass} aria-hidden="true">
        <div
          className="overflow-hidden"
          style={{ height: "clamp(5rem, 16vw, 32rem)" }}
        >
          <p
            className="pointer-events-none select-none text-center font-heading font-bold leading-none tracking-tighter text-white/[0.14]"
            style={{ fontSize: "clamp(6rem, 28vw, 24rem)" }}
          >
            ROHP
          </p>
        </div>
      </div>
    </footer>
  )
}
