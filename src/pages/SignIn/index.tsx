import React, {useState} from 'react';

import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';

import {
    Container,
    Logo,
    Form,
} from './styles';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');    

    const { signIn } = useAuth();

    return (
        <Container>
            <Form onSubmit={() => signIn(email, password)}>
            <Logo src={logoImg} alt="Sistema Financeiro - Douglas Rangel - WebMaster" />

                <Input 
                    type="email"
                    placeholder="e-mail"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                    type="password"
                    placeholder="senha"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />

               <Button type="submit">Acessar</Button>
            </Form>
        </Container>
    );
}

export default SignIn;