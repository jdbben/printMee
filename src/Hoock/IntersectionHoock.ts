import { MutableRefObject, useEffect, useState } from "react"

export const useIntersection = (element: MutableRefObject<HTMLElement | null>, rootMargin: string = "0px", onVisibleOnce?: () => void) => {

    const [isVisible, setVisible] = useState<boolean>(false)
    useEffect(() => {

        const current = element.current

        if (!current) return

        const observer = new IntersectionObserver(([entry]) => {

            setVisible(entry.isIntersecting)

        },
            { rootMargin }
        );

        current && observer.observe(current);
        return () => current && observer.unobserve(current);
    }, [element, rootMargin]);

    return isVisible
}