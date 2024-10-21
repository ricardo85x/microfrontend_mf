import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'
import App from './App'

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
    const history =  defaultHistory || createMemoryHistory({
        initialEntries: [initialPath],
        initialIndex: 0
    })

    if(onNavigate) {    
        history.listen(onNavigate)  
    }

    ReactDOM.render(<App history={history} />,el)

    return {
        onParentNavigate({pathname: nexPathname}) {
            const { pathname } = history.location

            console.log('nexPathname', nexPathname)
            console.log('pathname', pathname)
            if(pathname !== nexPathname) {
                history.push(nexPathname)
            }
        }
    }
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_auth-dev-root');

    if(devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() })
    }
}

export { mount }