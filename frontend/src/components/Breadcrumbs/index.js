import React from 'react'
import BreadCandidat from './BreadCandidat'

import { 
        BreadContainer, 
        BreadLinks, 
        BreadSection, 
       
} from './BreadElements'

const BreadCrumbs = () => {

    
    return (
        <BreadSection>
             <BreadContainer>
                 <BreadLinks>
                    <BreadCandidat/>
                 </BreadLinks>
                
             </BreadContainer>
        </BreadSection>
    )
}

export default BreadCrumbs
