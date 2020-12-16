import React from 'react'
import {Label} from 'semantic-ui-react'

function error({children}) {
    return (
        <Label color='red'>
            {children}
        </Label>
    )
}

export default error
