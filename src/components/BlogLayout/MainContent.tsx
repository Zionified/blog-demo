import styled from "@emotion/styled"
import Footer from './Footer'
import { ReactNode } from "react"

const Main = styled.main`
    flex: 1 0 auto;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    padding-left: 2rem;
    padding-right: 2rem;

    @media screen and (max-width: 1000px) {
        padding-left: 1rem;
        padding-right: 1rem;
    }
    
    @media screen and (max-width: 700px) {
        padding-left: 0;
        padding-right: 0;
    }

    ::-webkit-scrollbar {
        display: none;
    }
`

type Props = {
    children?: ReactNode
}

const MainContent = ({ children }: Props) => {
    return (
        <Main>
            {children}
            <Footer />
        </Main>
    )
}

export default MainContent