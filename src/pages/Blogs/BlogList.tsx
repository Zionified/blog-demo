import styled from "@emotion/styled";

const Wrapper = styled.div`
    margin-top: 2rem;
`


const PostList = styled.div`
    font-family: Roboto, "Noto Sans SC", "Noto Sans TC";
    margin-left: 0;
    padding-left: 0;
    list-style: none;
`

const PostItem = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid;
    margin-bottom: 2rem;

    .title {
        display: block;
        margin-bottom: 0;
        margin: 0;
        padding: 0;
        font-size: 1.4rem;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;

        a {
            text-decoration: none;
            :hover {
                color: #111;
                text-decoration: underline;
            }
        }
    }

    .meta {
        color: #666;
        font-size: 0.8rem;
        hyphens: auto;
    }

    .excerpt {
        margin-top: 1rem;
    }
`

const Pager = styled.div`
    .paginification {
        list-style: none;
        margin: 0 auto;
        margin-bottom: 2rem;
        display: table;
    }

    .page-item-wrapper {
        float: left;
        margin: 5px 15px 5px 0;
        display: list-item;
        text-align: -webkit-match-parent;

        .page-item {
            display: block;
            padding: 0.5rem;
            border: 1px solid;
            min-width: 41px;
            text-align: center;
            box-sizing: border-box;
            border-color: #e8e8e8;
        }
        a.page-item {
            text-decoration: none;

            :visited {
                color: #002798;
            }
            :hover {
                border-color: #828282;
                text-decoration: underline;
            }
            
        }
    }
`

const BlogList = () => {
    return (
        <Wrapper>
            <PostList>
                <PostItem>
                    <h2 className="title">
                        <a href='#'>Serverless File System based on AWS S3</a>
                    </h2>
                    <div className="meta">
                    Jan 19, 2022
                    </div>
                    <div className="excerpt">
                    This system is deployed on My blog’s file Sharing Page as a front-end application. The source code is also avalable in React-S3-Viewer Repo here. Reference Information: Viewing Photo stored in S3 Buckets AWS SDK for JavaScript AWS Cognito Identity Pool SessionStorage - MDN Access AWS Resources through SDK A user identity pool is created using AWS Cognito. Any user authenticated / unauthenticated join this identity pool will be automatically assigned with an AWS role. Then, we create a AWS SDK key corresponding to this identity pool. Anyone access AWS Service using SDK and given key will get an role called Cognito_MyBlogFilesUnAuth_Role.
                    </div>
                </PostItem>
            </PostList>
            <Pager>
                <ul className="paginification">
                    <li className="page-item-wrapper">
                        <div className="page-item">1</div>
                    </li>
                    <li className="page-item-wrapper">
                        <a href="#" className="page-item">2</a>
                    </li>
                    <li className="page-item-wrapper">
                        <a href="#" className="page-item">3</a>
                    </li>
                    <li className="page-item-wrapper">
                        <a href="#" className="page-item">4</a>
                    </li>
                </ul>
            </Pager>
        </Wrapper>
    )
}

export default BlogList