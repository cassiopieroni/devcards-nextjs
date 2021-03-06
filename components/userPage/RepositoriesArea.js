import React from 'react';

import FilterBox from './FilterBox';
import Repositories from './Repositories';
import ErrorBox from '../commonComps/ErrorBox';

import css from 'styled-jsx/css';

const RepositoriesArea = (props) => {

    const {
        reposToPrint, allRepos, html_url, filterInputVal, 
        changeFilterSearch, errorRepos, login,
    
    } = props;

    return (
        <div className='reposArea'>
            
            <h3>Repositories</h3>

            { (errorRepos) ? ( 
                <ErrorBox statusCode={errorRepos.status}  msg={errorRepos.msg} /> 
            ) : (

                (allRepos.length) ? (
                    <>
                        <FilterBox 
                            filterInputVal={filterInputVal} 
                            changeFilterSearch={changeFilterSearch} 
                        />
 
                        <Repositories repos={reposToPrint} html_url={html_url} />
                    </>
                ) : (
                    <p>{`${login} doesn't have any public repositories on github yet.`}</p>
                )

            )}

            <style jsx>{ repositoriesAreaStyle }</style>

        </div>
    )
}

const repositoriesAreaStyle = css`
    .reposArea {
        margin: 20px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 400px;
        max-width: 400px;
        height: 560px;
        flex-shrink: 1;
        border-radius: 5px;
        border: 1px solid #f5f5f5;
        box-shadow: 5px 5px 15px black;
        background-color: #0f1626;
    }

    .reposArea h3 {
        border-radius: 4px 4px 0 0;
        text-align: center;
        width: 100%;
        height: 80px;
        line-height: 80px;
        margin: 0 auto;
        background-color: #ff533d;
        color: #f5f5f5;
        text-transform: uppercase;
        font-size: 1.1rem;
    }

    .reposArea p {
        width: 85%;
        text-align: center;
        margin: 30px auto;
        color: #f5f5f5;
        min-height: 70px;
        height: max-content;
        line-height: 35px; 
    }
`

export default RepositoriesArea;