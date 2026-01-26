import { NextResponse } from 'next/server'

export async function POST(request) {
    try {
        const body = await request.json()
        const { name, email, message, botField } = body

        // Honeypot check - if bot field is filled, it's spam
        if (botField) {
            return NextResponse.json(
                { error: 'Spam detected' },
                { status: 400 }
            )
        }

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            )
        }

        // Send email using Netlify's form submission endpoint
        // This lets you still use Netlify's form notifications without the build-time detection
        const netlifyFormData = new FormData()
        netlifyFormData.append('form-name', 'contact')
        netlifyFormData.append('name', name)
        netlifyFormData.append('email', email)
        netlifyFormData.append('message', message)
        netlifyFormData.append('subject', 'Inquiry from Portfolio')

        const netlifyResponse = await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(netlifyFormData).toString()
        })

        if (!netlifyResponse.ok) {
            throw new Error('Failed to submit to Netlify')
        }

        return NextResponse.json(
            { success: true, message: 'Message sent successfully!' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'Failed to send message. Please try again.' },
            { status: 500 }
        )
    }
}
