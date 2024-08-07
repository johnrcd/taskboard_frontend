// taken from https://www.npmjs.com/package/minidenticons#react

import { minidenticon } from 'minidenticons'
import { useMemo } from 'react'

const Identicon = ({ username, saturation, lightness, ...props }) => {
    const svgURI = useMemo(
        () => 'data:image/svg+xml;utf8,' + encodeURIComponent(minidenticon(username, saturation, lightness)),
        [username, saturation, lightness]
    )
    return (<img src={svgURI} alt={username} {...props} />)
}

export default Identicon;