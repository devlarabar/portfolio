import React from 'react'

const Contact = () => {
    return (
        <div className="flex flex-col gap-4 w-full">
            <h3>Contact</h3>
            <form method="POST" name="contact" id="contactForm" data-netlify="true" className="flex flex-col gap-4">
                <input type="hidden" name="subject" value="Inquiry from Portfolio" />
                <div className="flex gap-4 lg-plus:flex-col">
                    <input type="text" className="input input-bordered w-full" name="name" id="name" placeholder="Name" />
                    <input type="email" className="input input-bordered w-full" name="email" id="email" placeholder="Email" />
                </div>
                <textarea name="message" className="input input-bordered py-3 h-40" id="message" placeholder="Tell me about your project!" rows="6"></textarea>
                <button className="border-2 border-accent bg-accent text-base-100 font-semibold ease-in-out duration-200 hover:border-primary hover:bg-transparent hover:text-primary py-3 px-6 w-full" role="button">Message me!</button>
            </form>
        </div>
    )
}

export default Contact