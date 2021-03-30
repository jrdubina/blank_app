import React, { useContext } from 'react';
import { DataContext } from '../_context';
import { About, BlogPost, Hero, Projects, Nav, Skills, Footer } from '../_components';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Contact } from '../_components/Contact';

const HomeStyledWrapper = styled.div`
    //background-color: ${props => props.backgroundColor}
`;

export const HomePage = () => {
    const [ data ] = useContext(DataContext);
    console.log(data)
    return(
        <HomeStyledWrapper>
            <Nav />
            <Hero data={data?.hero} />
            <main>
                <About data={data?.about} />
                <Skills data={data?.skills} />
                <Projects data={data?.projects} />
                <BlogPost data={data?.blogPost} />
                <Contact data={data?.contact} />
            </main>
            <Footer data={data?.footer} />
        </HomeStyledWrapper>
    )
}

HomePage.propTypes = {

}