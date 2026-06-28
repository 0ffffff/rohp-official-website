"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"

export function QnAForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const formData = new FormData(e.currentTarget)
      const data = {
        qnaName: formData.get("qnaName"),
        qnaEmail: formData.get("qnaEmail"),
        qnaProgram: formData.get("qnaProgram"),
        question: formData.get("question"),
      }

      const response = await fetch("/api/qna", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit question")
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
            <CheckCircle2 className="mx-auto h-12 w-12 text-green-600 mb-3" />
            <h3 className="text-xl font-bold mb-2 text-berkeley">Question Submitted!</h3>
            <p className="text-sm text-muted-foreground">
              Thank you! We'll address your question during the Q&A session.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-berkeley">Submit a Q&A Question</CardTitle>
        <CardDescription>Optional: Submit questions to be addressed during the program</CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <Card className="mb-4 border-2 border-red-200 bg-red-50">
            <CardContent className="pt-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-800">{error}</p>
              </div>
            </CardContent>
          </Card>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="qnaName">
                Name <span className="text-red-500">*</span>
              </Label>
              <Input id="qnaName" name="qnaName" required placeholder="Your name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="qnaEmail">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input id="qnaEmail" name="qnaEmail" type="email" required placeholder="your@email.com" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="qnaProgram">Program Date</Label>
            <select
              id="qnaProgram"
              name="qnaProgram"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="">Select date...</option>
              <option value="feb21">Feb. 21-22</option>
              <option value="mar7">Mar. 7-8</option>
              <option value="mar14">Mar. 14 (Virtual)</option>
              <option value="mar14overnight">Mar. 14-15</option>
              <option value="apr17">Apr. 17-18</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="question">
              Your Question <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="question"
              name="question"
              required
              placeholder="What would you like to know about UC Berkeley or the ROHP program?"
              rows={5}
            />
          </div>

          <Button type="submit" className="berkeley-blue w-full md:w-auto" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Question"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
