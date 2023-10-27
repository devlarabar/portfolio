"use client"
import React, { useEffect, useRef } from 'react'

const Modal = ({ isOpen, toggleModal, closeOnOutsideClick, children }) => {
    const modalRef = useRef(null)

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

    return (
        <div className="custom-modal w-full h-[100vh]" style={!isOpen ? { display: 'none' } : null}>
            <div className="custom-modal__wrapper bg-neutral h-[100vh] sm:w-10/12 md:w-8/12 lg:w-1/2 p-8 shadow-xl sm:max-h-[80vh] overflow-auto" ref={modalRef}>
                {children}
            </div>
        </div>
    )
}
export default Modal