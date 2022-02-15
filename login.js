import React from "react";
import { Section, Para,Main,Button,Email,Body } from "../css/login";

const Login = () => {
  return (
<Body>
    <Section>
     
      <form action="">

        <Para>
          <h1 >LOGIN TO WITS</h1>
        </Para>
       
       <Main>
        <Email>
          <label htmlFor="email" className='email'>Email</label>
          <input type="text" name="email" id="email" />
          </Email>
        <div>
          <label htmlFor="password" className='password'>Password</label>
          <input type="text" name="email" id="email" />
        </div>
        </Main>

       
          <button type="submit">
          <Button>Login</Button>
          </button>
        
      </form>
    </Section>
    </Body>
  );
};

export default Login;