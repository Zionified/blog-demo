import styled from "@emotion/styled"
import '@/assets/scss/index.scss'
import avatar from '@/assets/images/infj-avatar.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faEnvelope, faLocationArrow, faRss} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Container = styled.div`
    display: block;
    border-right: 1px solid #e8e8e8;
    padding: 1rem;
    font-size: 0.6rem;

    @media screen and (max-width: 1000px) {
        padding: 1rem;
        font-size: 0.6rem; }
  @media screen and (max-width: 700px) {
      display: none;
      border-right: none;
      border-bottom: 1px solid; 
  }
  @media screen and (min-width: 700px) {
      display: block !important; 
  }
`

const Sidebaritem = styled.div`
    padding-bottom: 1rem;
    border-bottom: 1px solid #e8e8e8;
    margin-bottom: 1rem;
`


const HeadImg = styled.img`
    display: block;
    margin-right: auto;
    margin-left: auto;
    width: 144px;
    height: auto;
    border-radius: 50%;
    max-width: 100%;
    vertical-align: middle;
    border-style: none;
    overflow-clip-margin: content-box;
    overflow: clip;
`

const Contact = styled.ul`
    list-style: none;
    display: block;
    list-style-type: disc;
    margin: 0;
    padding: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
    
    li {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        
        a {
            text-decoration: none;
            color: #003be4;
            
        }
        a:visited {
            color: #003be4;
        }
    }
`

const Icon = styled(FontAwesomeIcon)`
    margin-right: 0.5rem;
`

const Subscribe = styled.div`
    font-weight: bold;
    text-align: left;
    color: #b21000;

    a {
        text-decoration: none;
    }
    a:visited {
        color: #b21000;
    }
`
const Links = styled.div`
    display: flex;
`

const SocialIcon = styled.a`
    color: #003be4;

    &:hover {
        cursor: pointer;
        color: #111;
    }

    ${Icon} {
        width: 26px;
        height: 26px;
    }
`


const Sidebar = () => {
    return (
            <Container>
                <Sidebaritem>
                    <HeadImg src={avatar}></HeadImg>
                </Sidebaritem>
                <Sidebaritem>
                    <Contact>
                        <li>
                            <Icon icon={faAt}/>
                            Zixuan Zheng
                        </li>
                        <li>
                            <Icon icon={faEnvelope}/>
                            <a href="mailto:zzheng3@andrew.cmu.edu">zzheng3@andrew.cmu.edu</a>
                        </li>
                        <li>
                            <Icon icon={faLocationArrow}/>
                            <a href="https://www.google.com/maps/search/Pittsburgh, PA">Pittsburgh, PA</a>
                        </li>
                    </Contact>
                </Sidebaritem>
                <Sidebaritem>
                    <Subscribe>
                        <Icon icon={faRss}/>
                        <a href="/blog/feed.xml">Subscribe</a>
                    </Subscribe>
                </Sidebaritem>
                <Links>
                    <SocialIcon>
                        <Icon icon={faLinkedin}></Icon>
                    </SocialIcon>
                    <SocialIcon>
                        <Icon icon={faGithub}></Icon>
                    </SocialIcon>
                    
                </Links>
            </Container>


    )
}

export default Sidebar
