import { createContext, createSignal, useContext } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { fetchUser } from "../api/usersApi";

const AuthorizContext = createContext();
const initialization = localStorage.getItem('userInfo');

export function AuthorizationsProvider(props) {

    const [userInfo, setUserInfo ] = createSignal(initialization ? JSON.parse(initialization) : null );

    let exp = {
        userInfo,
        login: async (a) => {
            let result = await fetchUser(a)
            await setUserInfo( result );
        },
        logout : () => {
            localStorage.removeItem('userInfo')
            setUser(false);
        }
    };

    return (
        <AuthorizContext.Provider value={exp}>
            {props.children}
        </AuthorizContext.Provider>
    );
};

export function useAuthorized() { return useContext(AuthorizContext); }