import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BentoGrid, BentoTile, CtaTile, PageHeader } from "@/components/bento"
import { Section } from "@/components/layout"

function HousingInfoList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 text-sm text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="text-primary">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function HousingVideo({
  title,
  src,
}: {
  title: string
  src: string
}) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  )
}

const unitsInfo = [
  "Traditional residence hall experience with double and triple rooms",
  "On-site dining halls with flexible meal plans",
  "Study lounges, laundry facilities, and recreational spaces",
  "Close to campus and Telegraph Avenue",
]

export default function HousingPage() {
  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <PageHeader
        title="Housing Tours"
        description="Explore UC Berkeley's diverse housing options through student-led tours"
      />

      <Section label="The Units">
        <BentoGrid>
          <BentoTile span={4}>
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-primary md:text-3xl">
              The Units
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Unit 2 and Unit 3 — the heart of freshman residential life at Berkeley.
            </p>
            <div className="mt-4">
              <HousingInfoList items={unitsInfo} />
            </div>
          </BentoTile>
          <BentoTile span={4} className="flex flex-col gap-3">
            <div>
              <h3 className="font-semibold text-primary">Unit 2 Tour</h3>
              <p className="text-sm text-muted-foreground">Common areas and student rooms</p>
            </div>
            <HousingVideo
              title="The Units Tour 1"
              src="https://www.youtube.com/embed/i7X0KBtmm4s"
            />
          </BentoTile>
          <BentoTile span={4} className="flex flex-col gap-3">
            <div>
              <h3 className="font-semibold text-primary">Unit 3 Tour</h3>
              <p className="text-sm text-muted-foreground">Dining halls and study spaces</p>
            </div>
            <HousingVideo
              title="The Units Tour 2"
              src="https://www.youtube.com/embed/AvFtGqB5PyY"
            />
          </BentoTile>
        </BentoGrid>
      </Section>

      <Section variant="muted" label="Blackwell Hall">
        <BentoGrid>
          <BentoTile span={4}>
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-primary md:text-3xl">
              Blackwell Hall
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Renovated in 2018 — modern facilities with sustainability and community at the core.
            </p>
            <div className="mt-4">
              <HousingInfoList
                items={[
                  "Recently renovated with modern amenities",
                  "On-site fitness center",
                  "Collaborative study spaces",
                  "Community kitchen and social lounges",
                ]}
              />
            </div>
          </BentoTile>
          <BentoTile span={8} className="flex flex-col gap-3">
            <h3 className="font-semibold text-primary">Campus Tour</h3>
            <HousingVideo
              title="Blackwell Hall Tour"
              src="https://www.youtube.com/embed/mWAocPL_154"
            />
          </BentoTile>
        </BentoGrid>
      </Section>

      <Section label="Martinez Commons">
        <BentoGrid>
          <BentoTile span={4}>
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-primary md:text-3xl">
              Martinez Commons
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Apartment-style living popular with upperclassmen.
            </p>
            <div className="mt-4">
              <HousingInfoList
                items={[
                  "Apartment-style with shared kitchens",
                  "Townhouse and traditional configurations",
                  "Popular with upperclassmen",
                  "Modern facilities and common spaces",
                ]}
              />
            </div>
          </BentoTile>
          <BentoTile span={8} className="flex flex-col gap-3">
            <h3 className="font-semibold text-primary">Campus Tour</h3>
            <HousingVideo
              title="Martinez Commons Tour"
              src="https://www.youtube.com/embed/uAOmOuMP1L4"
            />
          </BentoTile>
        </BentoGrid>
      </Section>

      <Section variant="muted" label="Register">
        <BentoGrid>
          <CtaTile
            title="Want to See More?"
            description="Join an overnight program to explore housing and stay with a current student."
            actions={
              <Button asChild size="lg">
                <Link href="/registration">Register for ROHP</Link>
              </Button>
            }
          />
        </BentoGrid>
      </Section>
    </div>
  )
}
