import { CheckIcon } from "@heroicons/react/24/outline"

const Contact = () => {
    return (
        <section className="flex flex-col sm:flex-row gap-12 max-w-5xl mx-auto">
            <div className="flex flex-col gap-4 w-full max-w-sm max-sm:order-1">
                <form 
                    name="contact" 
                    method="POST" 
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    className="flex flex-col gap-4"
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="hidden">
                        <label>
                            Don't fill this out if you're human: <input name="bot-field" />
                        </label>
                    </p>
                    <div className="flex gap-4 flex-col">
                        <input type="text" className="w-full" name="name" id="name" placeholder="Name" required />
                        <input type="email" className="w-full" name="email" id="email" placeholder="Email" required />
                    </div>
                    <textarea name="message" className="py-3 h-40" id="message" placeholder="Tell me about your project!" rows="6" required></textarea>
                    <button type="submit" className="border-2 border-accent bg-accent text-base-100 font-semibold ease-in-out duration-200 hover:border-primary hover:bg-transparent hover:text-primary py-3 px-6 w-full" role="button">Message me!</button>
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
