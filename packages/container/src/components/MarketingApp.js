import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp'
import { useHistory } from 'react-router-dom'

export const MarketingApp = () => {
    const ref = useRef(null)
    const history = useHistory()

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            onNavigate: ({pathname: nexPathname}) => {
                const { pathname } = history.location
                if(pathname !== nexPathname) {
                    history.push(nexPathname)
                }
            }
         })

         history.listen(onParentNavigate)
    }, []);

    return <div ref={ref} />
}