"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CommitteeMemberModal } from "@/components/features"
import { BentoGrid, BentoTile } from "@/components/bento"
import { User } from "lucide-react"

interface CommitteeMember {
  name: string
  pronouns: string
  major: string
  classYear: string
  bio: string
  image: string
  secondImage?: string
  email?: string
}

const committeeMembers: CommitteeMember[] = [
  {
    name: "William Li",
    pronouns: "he/him",
    major: "EMS + Intended EECS",
    classYear: "Class of 2029",
    bio: "Hey everyone! I'm William and I'm a freshman studying EMS + intended EECS at Berkeley. I'm from San Ramon (East Bay) and I'm super excited to be part of ROHP this year. Outside of classes, I'm involved with clubs like Consult Your Community and research, but you'll probably find me scrolling reels in my room instead. Feel free to reach out to me if you have any questions !!",
    image: "/ROHP CM Biographies (2025-2026) (File responses)/Headshots! (File responses)/headshot - William Yiman Li.jpg",
    secondImage: "/ROHP CM Biographies (2025-2026) (File responses)/Funny-Silly Picture (File responses)/20250921_222414_6891F5 - William Yiman Li.jpeg",
    email: "wi@berkeley.edu",
  },
  {
    name: "Naman Rudrakshi",
    pronouns: "he/him",
    major: "History of Colonial India",
    classYear: "Class of 2029",
    bio: "Hello hello my name is Naman and I'm a freshman in CS and possibly soon the other CS (cognitive science) and I'm from San Ramon. So far, I'm a part of Berkeley SAAS, the Mountain Biking team, and of course ROHP Design and Entertainment, and I'll probably join more stuff next semester. My hobbies include art, biking, and just exploring random places. I'm super excited to design all your shirts this year and meet you!",
    image: "/ROHP CM Biographies (2025-2026) (File responses)/Headshots! (File responses)/IMG_1303 - Naman Somashekhar Rudrakshi.jpeg",
    secondImage: "/ROHP CM Biographies (2025-2026) (File responses)/Funny-Silly Picture (File responses)/IMG_7482 - Naman Somashekhar Rudrakshi.jpeg",
    email: "naman_rudrakshi@berkeley.edu",
  },
  {
    name: "Kayla Magdaleno",
    pronouns: "she/her",
    major: "Business",
    classYear: "Class of 2029",
    bio: "YO YO YOOOOO! My name is Kayla Magdaleno, and I'm a first year student studying business at Haas. I'm from the Imperial Valley, located in Southern California along the border. On campus, I'm involved in the Latinx Business Student Assoc., Outsiders, and ROHP. I'm interested in sports analytics and game theory :) Beyond Cal, I like touching grass, playing card games, and watching sports games. Reach out if you have any questions or wanna play me in Speed. Either or is chill.",
    image: "/ROHP CM Biographies (2025-2026) (File responses)/Headshots! (File responses)/Kayla Magdaleno Headshot - Kayla Magdaleno.jpg",
    secondImage: "/ROHP CM Biographies (2025-2026) (File responses)/Funny-Silly Picture (File responses)/21C9F126-8308-4114-89C3-96FA6F59A3C9 - Kayla Magdaleno.jpg",
    email: "kaylamagdaleno@berkeley.edu",
  },
  {
    name: "Andrew Shia",
    pronouns: "he/him",
    major: "Economics and Applied Mathematics",
    classYear: "Class of 2029",
    bio: "Hi! My name is Andrew Shia and I'm a freshmen currently studing Economics and Applied Mathematics with a conceration in Statistics. I'm a Taiwanese American from San Diego, and some of my hobbies include speedcubing, music, composition, and photography. I'm currently involved in organizations like ROHP and RCSA which are directly affiliated with Regents', and also Scholars of Finance which is a leadership development program for finance that also handles a fund and education. I'm also planing to join the SF Civic Orchestra in the near future as a violinist whenever my schedule clears up.",
    image: "/ROHP CM Biographies (2025-2026) (File responses)/Headshots! (File responses)/IMG_2901 - Andrew Din-an Shia.jpeg",
    secondImage: "/ROHP CM Biographies (2025-2026) (File responses)/Funny-Silly Picture (File responses)/IMG_0268 - Andrew Din-an Shia.jpeg",
    email: "andrewshia@berkeley.edu",
  },
  {
    name: "Delbert Tran",
    pronouns: "he/him",
    major: "EECS/EMS",
    classYear: "Class of 2029",
    bio: "Hi! I'm Delbert, a Regents' scholar majoring in EECS/EMS. In my free time I love to hang out with friends, play piano, practice martial arts, and immerse myself in nature. Feel free to reach out of you have any questions about Berkeley or just want to talk.",
    image: "/ROHP CM Biographies (2025-2026) (File responses)/Headshots! (File responses)/picme - Delbert Tan Tran.png",
    secondImage: "/ROHP CM Biographies (2025-2026) (File responses)/Funny-Silly Picture (File responses)/90B298EA-0753-400F-8AEA-4E428C2ED14D_1_105_c - Delbert Tan Tran.jpeg",
    email: "delberttran@berkeley.edu",
  },
  {
    name: "Kaveri Gupta",
    pronouns: "she/her",
    major: "Nutritional Sciences",
    classYear: "Class of 2029",
    bio: "Hey everyone! My name is Kaveri, and I'm a freshman majoring in Nutritional Sciences intending to minor in Counseling Psychology. I'm from Modesto, California, but I also spent part of my childhood growing up in Pennsylvania. I've always loved playing the flute and recently have gotten more into dance, and I'm happiest when I get to connect with new people. In my free time, you'll probably find me sleeping in, catching up on a good TV show, or exploring new food spots. I'm always open to song recommendations and good conversations, so feel free to say hi!",
    image: "/ROHP CM Biographies (2025-2026) (File responses)/Headshots! (File responses)/IMG_8324 (1) - Kaveri Gupta.JPG",
    secondImage: "/ROHP CM Biographies (2025-2026) (File responses)/Funny-Silly Picture (File responses)/IMG_4026 - Kaveri Gupta.jpg",
    email: "kaveri_gupta@berkeley.edu",
  },
  {
    name: "Theo Dela Cruz",
    pronouns: "he/him",
    major: "EECS + Intended IEOR",
    classYear: "Class of 2029",
    bio: "Hey everyone, I am Theo Dela Cruz, a first year studying EECS intending to double major in IEOR. I was born and raised in San Diego, CA. I'm part of Cal Climbing, so you can probably find me spending most of my time at the climbing gym. Off campus, I serve as the Vice Chair for the Youth Advisory Council for the Aspen Challenge, where I help support teams across the country working on social-impact initiatives. With the rest of my spare time, you can probably find me cubing, playing video games (probably Tetris), or trying out some new food spot. Overall, I'm someone who looks for challenges and community wherever I go.",
    image: "/ROHP CM Biographies (2025-2026) (File responses)/Headshots! (File responses)/_DSC9269-min - Theo Dela Cruz.JPG",
    secondImage: "/ROHP CM Biographies (2025-2026) (File responses)/Funny-Silly Picture (File responses)/51D82164-2564-4B97-B9AE-8DCAFA988B8A_1_105_c - Theo Dela Cruz.jpeg",
    email: "theodelacruz@berkeley.edu",
  },
  {
    name: "Victoria Hernandez Padilla",
    pronouns: "she/her",
    major: "Political Economy and Sociology",
    classYear: "Class of 2028",
    bio: "Hi, I'm Victoria! I was born and raised in Sonoma, California but my parents are originally from Jalisco, Mexico. I am currently a second-year looking to double major in Political Economy and Sociology with a minor in Public Policy. This year, I am one of the coordinators for ROHP, a chief of staff to an ASUC Senator, the Current Affairs Chair for the Latin American Leadership Society, and I am in a sorority. I hold my values and my culture close to heart and I am exploring the pre-law track with a goal of becoming a professor. In my free time I love to try new styles of dance and food, explore nature, play instruments, and do anything spontaneous. I am also a first-generation, low income, disabled student at Cal, if you have any questions pertaining to any of those identities and life at Cal don't hesitate to reach out! GO FRICKIN BEARS!",
    image: "/ROHP CM Biographies (2025-2026) (File responses)/Headshots! (File responses)/EVP-110 - Victoria Hernandez Padilla.jpg",
    secondImage: "/ROHP CM Biographies (2025-2026) (File responses)/Funny-Silly Picture (File responses)/IMG_1588 (1) - Victoria Hernandez Padilla.jpg",
    email: "vherna0@berkeley.edu",
  },
  {
    name: "Bryce Merrill",
    pronouns: "he/him",
    major: "Civil Engineering",
    classYear: "Class of 2029",
    bio: "Yo, my name is Bryce Merrill, and I'm super excited to be a part of the ROHP Committee this year! I'm a current freshman from Sacramento, currently studying Civil Engineering. I'm also interested in anything related to architecture, the built environment, and politics. At Cal, I'm involved in Concrete Canoes, Cal Climbing, and ATO (Alpha Tau Omega), all of which are super engaging, and I'd recommend checking them out! Outside of school, I'm really into rock climbing, hiking, puzzles, eating, and anything else outdoor-related. I participated in the overnight program before coming to Cal and loved it, so I'm super excited for you all to experience it too.",
    image: "/ROHP CM Biographies (2025-2026) (File responses)/Headshots! (File responses)/IMG_9809 2 - Bryce Carl Merrill.jpg",
    secondImage: "/ROHP CM Biographies (2025-2026) (File responses)/Funny-Silly Picture (File responses)/IMG_9801 2 - Bryce Carl Merrill.jpg",
    email: "bryce_merrill@berkeley.edu",
  },
  {
    name: "João Kido",
    pronouns: "he/him",
    major: "Computer Science",
    classYear: "Class of 2029",
    bio: "Hey gente bonita!\n(that's how you say hey there beautiful people in Portuguese ;)\nMy name's João Kido, and I'm a first year studying Computer Science at UC Berkeley. I'm proudly from Cuiaba, Brazil - for the nerds out there, that's the geodetic center of South America :0. On campus, I'm involved with BRASA Berkeley and the Regents and Chancellor's Scholars crew. Off campus, I help run a free program that teaches tech and entrepreneurship to students across four states in Brazil, while also working with research groups that connect oncology, medical imaging and AI for public and campaign hospitals. When I'm not studying at Doe, I'm probably playing football (the real one), painting portraits, or getting humbled in basketball at the RSF :)",
    image: "/ROHP CM Biographies (2025-2026) (File responses)/Headshots! (File responses)/K Headshot - Joao Guilherme Kido Carvalho.jpeg",
    secondImage: "/ROHP CM Biographies (2025-2026) (File responses)/Funny-Silly Picture (File responses)/KS 4.13.43 PM - Joao Guilherme Kido Carvalho.jpeg",
    email: "joaokido@berkeley.edu",
  },
  {
    name: "Madison Palacios Vera",
    pronouns: "she/her",
    major: "Public Health and Political Economy",
    classYear: "Class of 2029",
    bio: "Hello, my name is Madison, and I'm a first-year student planning to major in Public Health and Political Economy. I'm from Southern California but grew up in Guanajuato, Mexico! I'm passionate about health equity, medical research, and the intersection of health and law. On campus, I'm involved in URAP, assisting with research at the Institute of Agriculture and Nutrition Policy. Off campus, I enjoy art—especially printmaking and painting—spending time outdoors, reading, and trying out new hobbies.",
    image: "/ROHP CM Biographies (2025-2026) (File responses)/Headshots! (File responses)/IMG_8439 - Madison Palacios Vera.heic",
    secondImage: "/ROHP CM Biographies (2025-2026) (File responses)/Funny-Silly Picture (File responses)/IMG_9946 - Madison Palacios Vera.jpg",
    email: "madisonpv@berkeley.edu",
  },
  {
    name: "Maya Rodriguez-Troestch",
    pronouns: "she/her",
    major: "Civil and Environmental Engineering",
    classYear: "Class of 2029",
    bio: "Hey! My name is Maya, and I'm a first-year student from San Diego, California majoring in Civil and Environmental Engineering. I'm part of the Regents' and Chancellor's program and Yardi Scholars program here at Cal. Outside of school, I love going to concerts, hanging out with friends, and traveling! I've been on two study abroad programs before and definitely want to explore those opportunities more while at Cal! I'm super excited to be part of ROHP this year and can't wait to meet everyone!",
    image: "/ROHP CM Biographies (2025-2026) (File responses)/Headshots! (File responses)/Maya R- Headshot - Maya Noelle Rodriguez-Troestch.jpg",
    secondImage: "/ROHP CM Biographies (2025-2026) (File responses)/Funny-Silly Picture (File responses)/Image (3) - Maya Noelle Rodriguez-Troestch.jpeg",
    email: "mayarodriguez@berkeley.edu",
  },
  {
    name: "Ella Abrams",
    pronouns: "she/her",
    major: "Molecular and Cell Biology and Psychology",
    classYear: "Class of 2029",
    bio: "Hi! I'm Ella, and I am a first year student at Berkeley. I'm studying molecular and cell biology and psychology on a pre-med track. On campus, I am part of MCBcDNA, the Mixed Recruitment & Retention Center, the American Medical Students Association's Medical Education Committee, and a member of Chi Omega. Outside of Berkeley, I am a swim instructor, offer volunteer college counseling services, and love to spend time in nature. I'm from the Bay Area, so I always take my friends on tours of the city!",
    image: "/ROHP CM Biographies (2025-2026) (File responses)/Headshots! (File responses)/83BEF34C-6BAC-405D-8664-F4E310D5273E - Ella Yasmine Abrams.JPEG",
    secondImage: "/ROHP CM Biographies (2025-2026) (File responses)/Funny-Silly Picture (File responses)/6C5BFB1B-3D9D-4B08-83C5-B9823093EEF7 - Ella Yasmine Abrams.JPEG",
    email: "ellaabrams@berkeley.edu",
  },
  {
    name: "Aanya Chakraborty",
    pronouns: "she/her",
    major: "Public Health / Data Science",
    classYear: "Class of 2029",
    bio: "Hi! I'm Aanya & I'm a public health / data science major. I'm passionate about remediating health inequalities through tech. Outside of school, I like reading, writing, hanging out with my dog, and trying new food places with my friends! I'm excited to be a part of RCSA this year :)",
    image: "/ROHP CM Biographies (2025-2026) (File responses)/Headshots! (File responses)/Screenshot 2025-08-08 at 9.25.25 PM - Aanya Chakraborty.png",
    secondImage: "/ROHP CM Biographies (2025-2026) (File responses)/Funny-Silly Picture (File responses)/Screenshot 2025-10-23 at 5.16.48 PM - Aanya Chakraborty.png",
    email: "aanyachakraborty@berkeley.edu",
  },
  {
    name: "Rikhil Kokal",
    pronouns: "he/him",
    major: "Mathematics",
    classYear: "Class of 2029",
    bio: "Hi everyone! My name is Rikhil Kokal and I'm first-year undergraduate studying Mathematics from Redwood City, CA. Outside of academics, I serve as a DEI coordinator for Berkeley's Indian Student Association. I loves spending time outdoors, whether that's hiking and camping, kayaking, or playing sports. If there's anything you'd like to hear more about, feel free to reach out. Go Bears!",
    image: "/ROHP CM Biographies (2025-2026) (File responses)/Headshots! (File responses)/Headshot - Rikhil Kokal.png",
    secondImage: "/ROHP CM Biographies (2025-2026) (File responses)/Funny-Silly Picture (File responses)/Bass - Rikhil Kokal.JPEG",
    email: "rikhilkokal@berkeley.edu",
  },
  {
    name: "Dane Bergman",
    pronouns: "he/him",
    major: "Chemical Engineering",
    classYear: "Class of 2029",
    bio: "Hi Everyone! My name is Dane Bergman and I'm studying Chemical Engineering and am planning to minor in Theater and Performance Studies. I grew up in Orange County, Newport Coast but Cal was always my top school so I was always looking forward to being in the Bay Area! At Cal you can find me studying in the Doe Library's North Reading Room, rock climbing, singing/playing piano in the music practice rooms, or eating pizza at Artichokes. My dream is to work on clean energy technology like nuclear energy, solar panels, or batteries. I'd also love to perform on Broadway one day as I am a big Musical Theater kid!",
    image: "/ROHP CM Biographies (2025-2026) (File responses)/Headshots! (File responses)/IMG_0008 - Dane Marshall Bergman.jpeg",
    secondImage: "/ROHP CM Biographies (2025-2026) (File responses)/Funny-Silly Picture (File responses)/IMG_1808 - Dane Marshall Bergman.JPG",
    email: "dane_bergman@berkeley.edu",
  },
  {
    name: "Sofia Ruiz-McGinty",
    pronouns: "she/her",
    major: "Public Policy",
    classYear: "Class of 2029",
    bio: "Hi everyone! I'm Sofia, and I am so very excited to be an ROHP host! Some things about me: my hometown is Morgan Hill, CA (which is the perfect distance from Santa Cruz and SF, so ask me for food and hike recommendations), I am super passionate about all things public policy, global and inclusive development, environmental justice, and sustainability! I am involved with the Student Legal Clinic here on campus. I love hiking, watching movies, Hamilton (the musical), and going to as many concerts as humanly possible. Look forward to meeting you all, please feel free to reach out!",
    image: "/ROHP CM Biographies (2025-2026) (File responses)/Headshots! (File responses)/IMG_7208 (1) 3 - Sofia Rose Ruiz-McGinty.jpg",
    secondImage: "/ROHP CM Biographies (2025-2026) (File responses)/Funny-Silly Picture (File responses)/IMG_1021 - Sofia Rose Ruiz-McGinty.jpeg",
    email: "sofia_ruizmcginty@berkeley.edu",
  },
  {
    name: "Ricki Deng",
    pronouns: "she/her",
    major: "Microbial Biology",
    classYear: "Class of 2029",
    bio: "Hi! I'm Ricki, a freshman majoring in Microbial Biology on a premed track. I was born in New York and spent half of my life there, and the later half of my life in San Diego. My favorite study spot at Berkeley is McDonalds and I highly recommend a 12 hour study sesh there. I love playing tennis and going to the mall in my free time!",
    image: "/ROHP CM Biographies (2025-2026) (File responses)/Headshots! (File responses)/IMG_3035 - Ricki Deng.jpeg",
    secondImage: "/ROHP CM Biographies (2025-2026) (File responses)/Funny-Silly Picture (File responses)/AA222E9F-0897-4825-9843-AF11D68F248D - Ricki Deng.jpeg",
    email: "drq_5@berkeley.edu",
  },
  {
    name: "Connor Lu",
    pronouns: "he/him",
    major: "EECS",
    classYear: "Class of 2028",
    bio: "Hi there! I'm Connor, a second year EECS major from the Bay Area. I'm interested in computer chip design(VLSI) and systems. I'm involved in research, course staff for CS61C, Computer Science Mentors, the Berkeley IEEE Student Branch, and am one of the coordinators for ROHP this year. My hobbies include building computers, cooking, and video games. My favorite food spots on campus are Noodle Dynasty and TP Tea. Feel free to reach out and chat with me about anything :)",
    image: "/ROHP CM Biographies (2025-2026) (File responses)/Headshots! (File responses)/IMG_1855 - Connor Lu.heic",
    secondImage: "/ROHP CM Biographies (2025-2026) (File responses)/Funny-Silly Picture (File responses)/IMG_5087_Original - Connor Lu.jpg",
    email: "connorlu@berkeley.edu",
  },
  {
    name: "Lauren Lee",
    pronouns: "she/her",
    major: "Legal Studies",
    classYear: "Class of 2029",
    bio: "Lauren Lee is currently a freshman pursuing Legal studies. She is from Palo Alto, California. As a member of ROHP, she is actively involved in the Entertainment and Catering committee. She also continues to advocate for peace-building and cultural diplomacy through organizations like PUACSF and ETAC. In her free-time, she enjoys running and cooking.",
    image: "/ROHP CM Biographies (2025-2026) (File responses)/Headshots! (File responses)/IMG_9539 - Lauren Jungmin Lee.PNG",
    secondImage: "/ROHP CM Biographies (2025-2026) (File responses)/Funny-Silly Picture (File responses)/IMG_7960 - Lauren Jungmin Lee.HEIC",
    email: "laurenjlee321@berkeley.edu",
  },
]

export function CommitteeGrid() {
  const [selectedMember, setSelectedMember] = useState<CommitteeMember | null>(null)

  return (
    <>
      <BentoGrid className="mt-3 md:mt-4">
        {committeeMembers.map((member, index) => (
          <BentoTile
            key={`${member.name}-${index}`}
            span={3}
            variant="image"
            className="min-h-0 p-0"
            interactive
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:group-hover:scale-100"
              />
            </div>
            <div className="p-3">
              <h3 className="font-heading text-sm font-semibold leading-tight text-primary">
                {member.name}
              </h3>
              <p className="mt-0.5 text-[11px] text-muted-foreground">{member.pronouns}</p>
              <p className="mt-1 line-clamp-2 text-[11px] font-medium leading-snug">{member.major}</p>
              <p className="text-[11px] text-muted-foreground">{member.classYear}</p>
              <Button
                onClick={() => setSelectedMember(member)}
                variant="outline"
                size="sm"
                className="mt-2 h-7 w-full cursor-pointer text-xs"
              >
                <User className="h-3.5 w-3.5" />
                About
              </Button>
            </div>
          </BentoTile>
        ))}
      </BentoGrid>

      {selectedMember && (
        <CommitteeMemberModal
          member={selectedMember}
          isOpen={!!selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </>
  )
}
