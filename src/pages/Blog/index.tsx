import BlogLayout from "@/components/BlogLayout"
import styled from "@emotion/styled"
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { mockPostContent } from "./mock"

const Header = styled.header`
    padding-top: 4rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #e8e8e8;
    margin-bottom: 4rem;
    text-align: center;
    display: block;
    
    .title {
        font-size: 1.8rem;
        font-family: Roboto, "Noto Sans SC", "Noto Sans TC";
        font-weight: bold;
        letter-spacing: -1px;
        line-height: 54px;
        margin-bottom: 2rem;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

    .meta {
        color: #666;
        font-size: 0.8rem;
        margin-bottom: 1rem;
        hyphens: auto;
    }
`

const Content = styled.article`
    font-family: "Roboto Slab", "Noto Serif SC", "Noto Serif TC";
    margin-bottom: 2rem;
`

const Footer = styled.footer`
    border-top: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;

    .pagination {
        display: flex;
        font-size: 0.8rem;
        clear: both;
        padding-top: 1rem;
        padding-bottom: 1rem;
        
        
        .btn-post {
            display: block;
            color: #003be4;
            flex: 1;
            text-decoration: none;

            .label {
                margin: 0;
                padding: 0;
            }
            :hover {
                color: #111;
            }
    
        }

        .btn-previous-post {

        }
        .btn-next-post {
            text-align: right;
        }
    }
`

const Blog = () => {
    return (
        <BlogLayout>
            <article>
                <Header>
                    <h1 className="title">On the principles of Parsimony and Self-consistency for the Emergence of Intelligence</h1>
                    <h1 className="meta">Jul 31, 2022</h1>
                </Header>
                <Content dangerouslySetInnerHTML={{ __html: mockPostContent }}></Content>
                <Footer>
                    <nav className="pagination">
                        <a href="#" className="btn-post btn-previous-post">
                            <h4 className="label">Prev</h4>
                            <span>
                                <FontAwesomeIcon icon={faArrowLeft}/>&nbsp;
                                Why Functional Programming Matters
                            </span>
                        </a>

                        <a href="#" className="btn-post btn-next-post">
                            <h4 className="label">Next</h4>
                            <span>
                                AirDOS: Dynamic SLAM Benefits from Articulated Objects&nbsp;
                                <FontAwesomeIcon icon={faArrowRight}/>  
                            </span>
                        </a>
                    </nav>
                </Footer>
            </article>
                
        </BlogLayout>
    )
}

export default Blog