import styled from "@emotion/styled"

const Container = styled.footer`
    color: #666;
    margin-top: 4rem;
    border-top: 1px solid #e8e8e8;
    padding: 2rem 0;
    font-size: 0.8rem;
    display: flex;
    // justify-content: space-between; //均匀分布
    // align-items: center; //水平居中
`

const FooterCol = styled.div`
    flex: 1;
    :first-child {
        padding-right: 1rem;
        padding-left: 0;
    }

    :last-child {
        padding-right: 0;
        padding-left: 1rem;
    }

`

const Footer = () => {
    return (
        <Container>
            <FooterCol> 
                Copyright © 2023 Zixuan Zheng
            </FooterCol>
            <FooterCol> 
                A place for me to Learn, Create and Share 
            </FooterCol>
        </Container>
    )
    
}

export default Footer