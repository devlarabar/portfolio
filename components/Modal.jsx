'use client'
import { useCallback, useRef, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function Modal({ children }) {
    const overlay = useRef(null)
    const wrapper = useRef(null)
    const router = useRouter()
    const [disableBodyScroll, setDisableBodyScroll] = useState(true)

    useEffect(() => {
        if (disableBodyScroll) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [disableBodyScroll])

    const onDismiss = useCallback(() => {
        router.back()
        setDisableBodyScroll(false)
    }, [router])

    const onClick = useCallback(
        (e) => {
            if (e.target === overlay.current || e.target === wrapper.current) {
                if (onDismiss) onDismiss()
            }
        },
        [onDismiss, overlay, wrapper]
    )

    const onKeyDown = useCallback(
        (e) => {
            if (e.key === 'Escape') onDismiss()
        },
        [onDismiss]
    )

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown)
        return () => document.removeEventListener('keydown', onKeyDown)
    }, [onKeyDown])

    return (
        <div
            ref={overlay}
            className="fixed z-50 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60"
            onClick={onClick}
        >
            <div
                ref={wrapper}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[100vh] sm:w-10/12 md:w-8/12 lg:w-1/2 bg-neutral p-5 shadow-xl sm:max-h-[80vh] overflow-auto"
            >
                <button
                    onClick={onDismiss}
                    className="block ml-4 mt-4"
                >
                    <XMarkIcon className="w-6 h-6 hover:fill-secondary" />
                </button>
                {children}
            </div>
        </div>
    )
}