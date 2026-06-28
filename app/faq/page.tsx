"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, Mail } from "lucide-react"
import { BentoGrid, BentoTile, PageHeader } from "@/components/bento"
import { Section } from "@/components/layout"

type FaqCategory = {
  category: string
  questions: { question: string; answer: string }[]
}

function FaqAccordion({ categories, startIndex }: { categories: FaqCategory[]; startIndex: number }) {
  return (
    <div className="space-y-6">
      {categories.map((category, index) => (
        <div key={category.category}>
          <h2 className="mb-3 font-heading text-lg font-bold tracking-tight text-primary md:text-xl">
            {category.category}
          </h2>
          <Accordion type="single" collapsible>
            {category.questions.map((item, qIndex) => (
              <AccordionItem key={qIndex} value={`${startIndex + index}-${qIndex}`}>
                <AccordionTrigger className="cursor-pointer py-3 text-left hover:no-underline">
                  <span className="text-sm font-semibold text-primary md:text-base">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  )
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const faqItems = [
    {
      category: "General",
      questions: [
        {
          question: "What time zone are the programs in?",
          answer:
            "All ROHP programs run on Pacific Standard Time (PST). Please make sure to convert to your local time zone when planning your attendance.",
        },
        {
          question: "Who is eligible to participate in ROHP?",
          answer:
            "ROHP is exclusively for Regents' and Chancellor's Scholarship candidates at UC Berkeley. You must have received an invitation to apply for these prestigious scholarships to participate.",
        },
        {
          question: "How much does it cost to participate?",
          answer:
            "ROHP is completely free for all participants! This includes overnight accommodations, meals, campus tours, and all program activities.",
        },
      ],
    },
    {
      category: "Registration",
      questions: [
        {
          question: "How do I cancel my registration?",
          answer:
            "If you need to cancel your registration, please email us at contact@rohp.berkeley.edu as soon as possible. This allows us to offer your spot to someone on the waitlist.",
        },
        {
          question: "Can I register for multiple program dates?",
          answer:
            "No, you may only register for ONE program date. This ensures that as many scholarship candidates as possible have the opportunity to participate.",
        },
        {
          question: "When will I receive confirmation of my registration?",
          answer:
            "You will receive a confirmation email within 24 hours of submitting your registration. If you don't receive a confirmation, please check your spam folder or contact us.",
        },
      ],
    },
    {
      category: "Waitlist",
      questions: [
        {
          question: "How will I be notified if a spot becomes available?",
          answer:
            "If you're on the waitlist, we will notify you via email if a spot opens up. Please respond quickly to confirm your attendance, as spots are offered on a first-come, first-served basis.",
        },
        {
          question: "What are my chances of getting off the waitlist?",
          answer:
            "Waitlist movement varies by program date. Spots typically open up 1-2 weeks before the program as some participants need to cancel. We recommend signing up for multiple program dates on the waitlist to increase your chances.",
        },
        {
          question: "Can I check my position on the waitlist?",
          answer:
            "For privacy reasons, we don't disclose specific waitlist positions. However, you can email contact@rohp.berkeley.edu to inquire about general waitlist movement for your chosen program date.",
        },
      ],
    },
    {
      category: "Program Details",
      questions: [
        {
          question: "Can my parents or guardians attend?",
          answer:
            "For overnight programs, parents are welcome to join all events after 10:00 AM on Day 2, including focus tours and the closing ceremony. For virtual programs, parents are welcome to observe the entire program.",
        },
        {
          question: "What's the difference between virtual and overnight programs?",
          answer:
            "Virtual programs are single-day online experiences (9 AM - 12:30 PM PST) featuring faculty speakers, student panels, and virtual tours. Overnight programs are two-day in-person experiences where you stay in the dorms, meet your host, and participate in evening activities.",
        },
        {
          question: "What should I bring to an overnight program?",
          answer:
            "Bring comfortable clothes, toiletries, a sleeping bag or bedding, and any personal items you need. Your host will provide a place to sleep in their dorm room. Also bring walking shoes for campus tours and any dietary medications if needed.",
        },
      ],
    },
    {
      category: "Other",
      questions: [
        {
          question: "Are there other ways to learn about Berkeley if I can't attend ROHP?",
          answer:
            "Yes! UC Berkeley offers virtual tours, online information sessions, and other visit programs. Check the Berkeley Admissions website for additional opportunities to learn about campus life.",
        },
        {
          question: "What COVID-19 safety measures are in place?",
          answer:
            "We follow all current UC Berkeley campus health guidelines. Please check your confirmation email for the most up-to-date health and safety protocols for your program date.",
        },
        {
          question: "Who do I contact with additional questions?",
          answer:
            "For any questions not covered in this FAQ, please email us at contact@rohp.berkeley.edu. We typically respond within 1-2 business days.",
        },
      ],
    },
  ]

  const filteredFAQs = faqItems
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (item) =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  const midpoint = Math.ceil(filteredFAQs.length / 2)
  const leftCategories = filteredFAQs.slice(0, midpoint)
  const rightCategories = filteredFAQs.slice(midpoint)

  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <PageHeader
        title="Frequently Asked Questions"
        description="Find answers to common questions about ROHP"
      />

      <Section variant="muted" label="FAQ categories">
        <BentoGrid>
          <BentoTile span={12}>
            <div className="relative max-w-xl">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search questions..."
                aria-label="Search FAQ questions"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {filteredFAQs.length} {filteredFAQs.length === 1 ? "category" : "categories"} matching your search
            </p>
          </BentoTile>

          {filteredFAQs.length === 0 ? (
            <BentoTile span={12} className="text-center">
              <p className="text-muted-foreground">No questions found matching your search.</p>
            </BentoTile>
          ) : rightCategories.length > 0 ? (
            <>
              <BentoTile span={6}>
                <FaqAccordion categories={leftCategories} startIndex={0} />
              </BentoTile>
              <BentoTile span={6}>
                <FaqAccordion categories={rightCategories} startIndex={midpoint} />
              </BentoTile>
            </>
          ) : (
            <BentoTile span={12}>
              <FaqAccordion categories={leftCategories} startIndex={0} />
            </BentoTile>
          )}
        </BentoGrid>
      </Section>

      <Section label="Contact">
        <BentoGrid>
          <BentoTile span={8}>
            <Mail className="mb-2 h-8 w-8 text-primary" />
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-primary md:text-3xl">
              Still Have Questions?
            </h2>
            <p className="mt-2 max-w-prose text-sm text-muted-foreground">
              Can&apos;t find what you&apos;re looking for? Our team is here to help!
            </p>
            <a
              href="mailto:contact@rohp.berkeley.edu"
              className="mt-4 inline-flex cursor-pointer items-center gap-2 text-base font-semibold text-primary transition-colors duration-200 hover:text-accent"
            >
              <Mail className="h-4 w-4" />
              contact@rohp.berkeley.edu
            </a>
          </BentoTile>
          <BentoTile span={4} variant="accent" className="text-center">
            <p className="font-heading text-3xl font-bold tracking-tight text-accent-foreground">1–2</p>
            <p className="mt-1 text-sm font-semibold text-accent-foreground">Business days</p>
            <p className="mt-2 text-sm text-accent-foreground/90">Typical response time</p>
            <Link
              href="/registration"
              className="mt-4 inline-flex cursor-pointer text-sm font-semibold text-accent-foreground transition-colors duration-200 hover:opacity-80"
            >
              Register for a program →
            </Link>
          </BentoTile>
        </BentoGrid>
      </Section>
    </div>
  )
}
