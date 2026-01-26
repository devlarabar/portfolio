'use client'

import { CheckIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
        botField: ''
    })
    const [status, setStatus] = useState({ type: '', message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => setFormState(
        { ...formState, [e.target.name]: e.target.value }
    )

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setStatus({ type: '', message: '' })

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formState)
            })
            const data = await response.json()
            if (response.ok) {
                setStatus({ type: 'success', message: 'Thanks! I\'ll get back to you soon.' })
                setFormState({ name: '', email: '', message: '', botField: '' })
            } else {
                setStatus({
                    type: 'error', message: data.error
                        || 'Something went wrong. Please try again.'
                })
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="flex flex-col sm:flex-row gap-12 max-w-5xl mx-auto">
            <div className="flex flex-col gap-4 w-full max-w-sm max-sm:order-1">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <p className="hidden">
                        <label>
                            Don't fill this out if you're human:
                            <input
                                name="botField"
                                value={formState.botField}
                                onChange={handleChange}
                                tabIndex="-1"
                                autoComplete="off"
                            />
                        </label>
                    </p>
                    <div className="flex gap-4 flex-col">
                        <input
                            type="text"
                            className="w-full"
                            name="name"
                            id="name"
                            placeholder="Name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            className="w-full"
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <textarea
                        name="message"
                        className="py-3 h-40"
                        id="message"
                        placeholder="Tell me about your project!"
                        rows="6"
                        value={formState.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    {status.message && (
                        <div className={`p-3 rounded ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {status.message}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="border-2 border-accent bg-accent text-base-100 font-semibold ease-in-out duration-200 hover:border-primary hover:bg-transparent hover:text-primary py-3 px-6 w-full disabled:opacity-50 disabled:cursor-not-allowed"
                        role="button"
                    >
                        {isSubmitting ? 'Sending...' : 'Message me!'}
                    </button>
                </form>
            </div>
            <div className="flex flex-col gap-4">
                <h3>Let's Connect!</h3>
                <p>I would love to hear from you! I'm always interested in...</p>
                <ul className="flex flex-col gap-2">
                    <li className="flex flex-row gap-3">
                        <CheckIcon className="w-6 h-6 text-accent" />
                        <span>Collaborating on a fun project</span>
                    </li>
                    <li className="flex flex-row gap-3">
                        <CheckIcon className="w-6 h-6 text-accent" />
                        <span>Volunteering for local non-profits</span>
                    </li>
                    <li className="flex flex-row gap-3">
                        <CheckIcon className="w-6 h-6 text-accent" />
                        <span>Building websites for small businesses</span>
                    </li>
                    <li className="flex flex-row gap-3">
                        <CheckIcon className="w-6 h-6 text-accent" />
                        <span>Coffee chats</span>
                    </li>
                    <li className="flex flex-row gap-3">
                        <CheckIcon className="w-6 h-6 text-accent" />
                        <span>Other exciting opportunities</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Contact