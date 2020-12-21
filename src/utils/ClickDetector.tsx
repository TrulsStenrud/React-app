import React, { useEffect, useRef } from "react"

// this file is useless. Clicks to the children were stopped when closing the menu


const ClickDetector = (props: { onClick: (isOutside: boolean, ignore: () => void) => void, children: any }) => {

    function useOutsideAlerter(ref: any) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClick(event: any) {
                var clickOutside = false

                if (ref.current && !ref.current.contains(event.target)) {
                    clickOutside = true
                }

                function ignore() {
                    //TODO click outside open menu goes goes to children, the following does not work this way
                    //event.stopPropagation() 
                }

                props.onClick(clickOutside, ignore)
            }

            // Bind the event listener
            document.addEventListener("mousedown", handleClick);

            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClick);
            };
        });
    }

    const wrapperRef = useRef(null)
    useOutsideAlerter(wrapperRef)

    return <div ref={wrapperRef}>
        {props.children}
    </div>
}

export default ClickDetector