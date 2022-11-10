import React from "react";
import './Tab.css'

const Tabs = ({ children }) => {

    const headerElts = children.filter(item => item.type.name === 'TabHeader')
    const contentElts = children.filter(item => item.type.name === 'TabContent')
    const [active, setActive] = React.useState(headerElts[0]?.props?.filter)

    const changeTab = newIndex => { setActive(newIndex) }

    return (
        <div className="tab-container" role="tablist" aria-label="Tabs">

            <div className="tab-header">
                {headerElts.map(({ props: { filter, children } }, index) => (
                    <button
                        role="tab"
                        aria-selected={active === filter}
                        aria-controls={`tab-content-${index}`}
                        id={`tab-header-${index}`}
                        key={`tab-header-${index}`}
                        onClick={() => changeTab(filter)}
                        className={active === filter ? 'active' : ''}
                    >
                        {children}
                    </button>
                ))}
            </div>

            <div className="content">
                {contentElts.map(({ props: { filter, children } }, index) => (
                    <div
                        id={`tab-content-${index}`}
                        role="tabpanel"
                        aria-labelledby={`tab-header-${index}`}
                        className={`tab-content ${active === filter ? 'active' : ''}`}
                        key={`tab-content-${index}`}
                    >
                        {children}
                    </div>
                ))}
            </div>

        </div>
    );
};

export const TabHeader = (props) => ({ ...props })
export const TabContent = (props) => ({ ...props })

export default Tabs