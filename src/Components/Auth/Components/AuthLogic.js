import { useState } from 'react';
import AuthService from "./Service/auth-service";

const AuthLogic = () => {

    const [userDetails, setUserDetails] = useState({ username: "", password: "", message: "", })

    const onChangeUsername = (e) => {
        setUserDetails({
            username: e.target.value,
        });
    }

    const onChangePassword = (e) => {
        setUserDetails({
            password: e.target.value,
        });
    }

    const redirectUser = () => {
        this.props.history.push(`/`);
    }

    const handleLogin = (e) => {
        e.preventDefault();

        setUserDetails({
            message: "",
            loading: true,
        });

        AuthService.login(userDetails("username"), userDetails("password")).then(
            () => {
                redirectUser();
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setUserDetails({
                    loading: false,
                    message: resMessage,
                });
            }
        );
    }

    return { userDetails, onChangeUsername, onChangePassword, handleLogin }

}

export default AuthLogic;