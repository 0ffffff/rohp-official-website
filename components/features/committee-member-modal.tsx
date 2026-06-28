"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

interface CommitteeMemberModalProps {
  member: {
    name: string
    pronouns: string
    major: string
    classYear: string
    bio: string
    image: string
    email?: string
  }
  isOpen: boolean
  onClose: () => void
}

export function CommitteeMemberModal({ member, isOpen, onClose }: CommitteeMemberModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto" data-lenis-prevent>
        <DialogHeader>
          <DialogTitle className="sr-only">About {member.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="relative h-32 w-32 flex-shrink-0 rounded-full overflow-hidden bg-muted mx-auto sm:mx-0">
              <img src={member.image || "/placeholder.svg"} alt={member.name} className="h-full w-full object-cover" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="mb-1 font-heading text-2xl font-semibold text-primary">{member.name}</h3>
              <p className="mb-2 text-sm text-muted-foreground">{member.pronouns}</p>
              <p className="mb-1 font-semibold">{member.major}</p>
              <p className="text-sm text-muted-foreground">{member.classYear}</p>
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-heading text-lg font-semibold text-primary">About Me</h4>
            <p className="leading-relaxed text-pretty text-muted-foreground">{member.bio}</p>
          </div>

          {member.email && (
            <div className="border-t pt-4">
              <Button asChild className="w-full cursor-pointer sm:w-auto">
                <a href={`mailto:${member.email}`}>
                  <Mail className="h-4 w-4" />
                  Contact {member.name.split(" ")[0]}
                </a>
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
