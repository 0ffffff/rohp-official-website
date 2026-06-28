"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"

export function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedProgram, setSelectedProgram] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const formData = new FormData(e.currentTarget)
      formData.append("selectedProgram", selectedProgram)

      const response = await fetch("/api/register", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit registration")
      }

      setIsSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <Card className="border-2 border-green-200 bg-green-50">
        <CardContent className="pt-6">
          <div className="text-center">
            <CheckCircle2 className="mx-auto h-16 w-16 text-green-600 mb-4" />
            <h3 className="text-2xl font-bold mb-2" style={{ color: "#003262" }}>
              Registration Submitted!
            </h3>
            <p className="text-muted-foreground mb-4">
              Thank you for registering for ROHP. You will receive a confirmation email within 24 hours.
            </p>
            <Button onClick={() => setIsSuccess(false)} variant="outline" className="bg-transparent">
              Submit Another Registration
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <Card className="mb-6 border-2 border-red-200 bg-red-50">
          <CardContent className="pt-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800">{error}</p>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="space-y-8">
        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle style={{ color: "#003262" }}>Personal Information</CardTitle>
            <CardDescription>Please provide your basic information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fullName">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input id="fullName" name="fullName" required placeholder="John Doe" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input id="email" name="email" type="email" required placeholder="john@example.com" />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input id="phone" name="phone" type="tel" required placeholder="(123) 456-7890" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="highSchool">
                  High School Name <span className="text-red-500">*</span>
                </Label>
                <Input id="highSchool" name="highSchool" required placeholder="Lincoln High School" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="gradYear">
                Graduation Year <span className="text-red-500">*</span>
              </Label>
              <select
                id="gradYear"
                name="gradYear"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Select year...</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Program Selection */}
        <Card>
          <CardHeader>
            <CardTitle style={{ color: "#003262" }}>Program Selection</CardTitle>
            <CardDescription>Choose your preferred program date</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>
                Select Program Date <span className="text-red-500">*</span>
              </Label>
              <select
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Select date...</option>
                <option value="feb21">Feb. 21-22 (Overnight)</option>
                <option value="mar7">Mar. 7-8 (Overnight)</option>
                <option value="mar14virtual">Mar. 14 (Virtual)</option>
                <option value="mar14">Mar. 14-15 (Overnight)</option>
                <option value="apr17">Apr. 17-18 (Overnight - Scholars Only)</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dietary">Dietary Restrictions</Label>
              <Textarea id="dietary" name="dietary" placeholder="e.g., vegetarian, vegan, gluten-free, allergies..." />
            </div>

            <div className="space-y-2">
              <Label htmlFor="accessibility">Accessibility Needs</Label>
              <Textarea
                id="accessibility"
                name="accessibility"
                placeholder="Please describe any accessibility accommodations you may need..."
              />
            </div>
          </CardContent>
        </Card>

        {/* Waiver Upload */}
        <Card>
          <CardHeader>
            <CardTitle style={{ color: "#003262" }}>Waiver Upload</CardTitle>
            <CardDescription>Upload your signed waiver (PDF only, max 5MB)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="waiver">
                Signed Waiver <span className="text-red-500">*</span>
              </Label>
              <Input id="waiver" name="waiver" type="file" accept=".pdf" required />
              <p className="text-xs text-muted-foreground">
                {selectedProgram?.includes("virtual")
                  ? "Upload the Virtual Program Waiver"
                  : "Upload the In-Person Program Waiver"}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Host Matching */}
        <Card>
          <CardHeader>
            <CardTitle style={{ color: "#003262" }}>Host Matching Preferences</CardTitle>
            <CardDescription>Help us match you with the right host</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="major">Preferred Major/Field of Interest</Label>
              <Input id="major" name="major" placeholder="e.g., Computer Science, Biology, Business" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="genderPref">Gender Preference for Host (Optional)</Label>
              <select
                id="genderPref"
                name="genderPref"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">No preference</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="nonbinary">Non-binary</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="requests">Any Specific Requests</Label>
              <Textarea id="requests" name="requests" placeholder="Let us know if you have any specific requests..." />
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card>
          <CardHeader>
            <CardTitle style={{ color: "#003262" }}>Emergency Contact</CardTitle>
            <CardDescription>Required for overnight programs</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="emergencyName">
                  Emergency Contact Name <span className="text-red-500">*</span>
                </Label>
                <Input id="emergencyName" name="emergencyName" required placeholder="Jane Doe" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="emergencyPhone">
                  Emergency Contact Phone <span className="text-red-500">*</span>
                </Label>
                <Input id="emergencyPhone" name="emergencyPhone" type="tel" required placeholder="(123) 456-7890" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="emergencyRelation">
                Relationship <span className="text-red-500">*</span>
              </Label>
              <Input id="emergencyRelation" name="emergencyRelation" required placeholder="Parent, Guardian, etc." />
            </div>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <Card>
          <CardHeader>
            <CardTitle style={{ color: "#003262" }}>Additional Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="hearAbout">How did you hear about ROHP?</Label>
              <select
                id="hearAbout"
                name="hearAbout"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Select option...</option>
                <option value="email">Email from UC Berkeley</option>
                <option value="social">Social Media</option>
                <option value="friend">Friend or Family</option>
                <option value="counselor">School Counselor</option>
                <option value="other">Other</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Confirmation */}
        <Card>
          <CardHeader>
            <CardTitle style={{ color: "#003262" }}>Confirmation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <Checkbox id="confirm1" required />
              <label htmlFor="confirm1" className="text-sm leading-relaxed cursor-pointer">
                I confirm I am a Regents' and Chancellor's Scholarship candidate <span className="text-red-500">*</span>
              </label>
            </div>

            <div className="flex items-start gap-3">
              <Checkbox id="confirm2" required />
              <label htmlFor="confirm2" className="text-sm leading-relaxed cursor-pointer">
                I understand I can only register for one program date <span className="text-red-500">*</span>
              </label>
            </div>

            <div className="flex items-start gap-3">
              <Checkbox id="confirm3" required />
              <label htmlFor="confirm3" className="text-sm leading-relaxed cursor-pointer">
                I have read and agree to the program terms <span className="text-red-500">*</span>
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button type="submit" size="lg" className="berkeley-blue w-full md:w-auto px-12" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Registration"
            )}
          </Button>
        </div>
      </div>
    </form>
  )
}
