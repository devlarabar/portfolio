"use client"
import React, { useEffect, useRef } from 'react'
const Modal = ({ isOpen, toggleModal, closeOnOutsideClick, children }) => {
    const modalRef = useRef(null)
    // Handle click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (closeOnOutsideClick && modalRef.current && !modalRef.current.contains(event.target)) {
                toggleModal()
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [modalRef, closeOnOutsideClick, toggleModal])
    // Handle Escape key
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && isOpen) {
                toggleModal()
            }
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [isOpen, toggleModal])
    // Focus the modal when it opens, and restore focus when it closes
    useEffect(() => {
        if (isOpen && modalRef.current) {
            const previouslyFocused = document.activeElement
            modalRef.current.focus()

            return () => {
                previouslyFocused?.focus()
            }
        }
    }, [isOpen])
    if (!isOpen) return null
    return (
        <div
            className="custom-modal w-full h-full"
            role="dialog"
            aria-modal="true"
        >
            <div
                className="custom-modal__wrapper bg-neutral h-full sm:w-10/12 md:w-8/12 lg:w-1/2 p-8 shadow-xl sm:max-h-[80vh] overflow-auto"
                ref={modalRef}
                tabIndex={-1}
            >
                {children}
            </div>
        </div>
    )
}
export default Modal