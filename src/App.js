import styled, {keyframes} from 'styled-components'

const P = styled.p`
  font-size: 24px;
  color: blue;
`
const Content=styled.div`
  padding: 20px 30px;

`
const Button=styled.button`
  transition: boxshadow 0.2s ease;
  background-color: ${props => props.primary ? 'red': 'white'};
  color: ${props => props.primary ? 'white': 'red'};
  padding: 10px 15px;
  border: solid 2px red;
  border-radius: 4px;
  cursor:pointer;

  &:hover{
    box-shadow: 1px 2px 5px rgb(0,0,0,0.3);
  }

  &.secondary{

    background-color: green;
    border: solid 2px black;
  }
`

const BlockButton=styled(Button)`
      width: 100%;
      font-size:24px;
`

const Link = ({ className, ...props }) => {
  return <a className={className} {...props}></a>;
};
const StyledLink= styled(Link)`
    color:blue;
    `

    /**Nunca se inician componentes dentro de la Funtion App. La consola da un error sutil...
     * ...pero el problema es que romple el flujo si no que renderiza muy muy lento, como pista
     */
const Input=styled.input.attrs(propos=> ({
  type: 'text',
  color: propos.color || 'blue',
  name: 'Name'
}))`
  font-size: 20px;
  border: 1px solid blue;
  color: ${props=> props.color};
`
const Pass=styled(Input).attrs({
  type: 'password'


})`

background-color: #eee;
color:blue;

`

const girar=keyframes`
    from {

      transfrom: rotate(0deg);

    }
    to{
      transform: rotate(360deg);

    }
`
const Rotar=styled.div`
    display: inline-block;
    animation: ${girar} 2s linear infinite;
`

function App() {
  return (
    <Content>
      <P>Muestra de styled</P> {/* Usar el componente P de styled-components */}
      <Button>Enviar</Button>
      <Button primary>Enviar Prima</Button>
      <Button className="secondary">Enviar Secon</Button>
      <BlockButton primary as="a" href="#"> Enviar Block</BlockButton>
      
      <hr/>

      <Link href="https://www.w3schools.com">Link normal</Link>
      <StyledLink href="https://www.google.es"> Link styleado</StyledLink>

      <br/>
      <label for='Name' >Mi input</label>
      <Input color='pink' name='Name' /> 
      <br/> 
      
      <label for='pass'>Mi password</label>
      <Pass name='pass' />
      <br/>

      <Rotar> La noria</Rotar>
    </Content>

    
  );
}

export default App;