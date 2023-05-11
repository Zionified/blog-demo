import styled from "@emotion/styled"
import MainContent from "./MainContent"
import Sidebar from "./Sidebar"
import type { ReactNode } from "react"

const Layout = styled.div`
    display: grid;
    grid-template-columns: calc(1400px * 0.24) 1fr;
    overflow: hidden;
    max-width: calc(1400px - (2rem));
    margin-right: auto;
    margin-left: auto;
    padding-right: 1rem;
    padding-left: 1rem;
    height: 100vh;

    @media screen and (min-width: 1400px) {
        max-width: calc(1400px - (2rem * 2));
        padding-right: 2rem;
        padding-left: 2rem;
    }

    @media screen and (max-width: 1000px) {
        grid-template-columns: calc(1400px * 0.18) 1fr;
    }
    
    @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`

type Props = {
    children?: ReactNode
}

const BlogLayout = ({ children }: Props) => {
    return (
        <Layout>
            <Sidebar></Sidebar>
            <MainContent>
                { children }
            </MainContent>
        </Layout>
    )
}

export default BlogLayout