import React from 'react'

function Widget() {
    return (
        <div className="widget">
            <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWHO%2F&tabs=timeline&width=380&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                frameBorder="0"
                width="380"
                height="100%"
                style={{border: "none", overflow: "hidden",height:"100vh"}}
                scrolling="false"
                allowTransparency="true"
                allow="encrypted-media"
            >
            </iframe>
        </div>
    )
}

export default Widget;
