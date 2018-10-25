import styled from 'styled-components';

const Section = styled.section`
height: ${props => props.height || "90vh"};;
background: ${props => props.backgroundColor || "palevioletred"};
`

export default Section;