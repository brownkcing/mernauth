import React, { useEffect } from 'react';
import styled from 'styled-components';
import * as Mixins from '../styles/Mixins';
import AuthService from '../services/auth.service';
import { useAuth0 } from "@auth0/auth0-react";

const UserWrap = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    background: linear-gradient(-45deg, #1391a5, #274685);
    color: #fff;
    padding: 0;
    color: #000000;
    background: #fff;
    box-shadow: 0 10px 30px 0 rgb(0 0 0 / 20%);
    border-radius: 1.5em;
`;

const UserPage = styled.div`
    ${Mixins.container}
    display:flex;
    flex-wrap: nowrap;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const UserContent = styled.div`
    display:block;
    height: 30vh;
`;


const UserLabel = styled.div`
    padding: 2em;
    label {
        text-align: center;
    }
`;


const LoginTitle = styled.h1`
    align-self:center;
`;



const Profile = () => {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [userMetadata, setUserMetadata] = useState(null);
        const { name, picture, email } = user;
        const userLogged = AuthService.getCurrentUser();
        const logOut = () => {
            AuthService.logout();
          };     
    if (isLoading) {
        return <div>Loading ...</div>;
      };

      useEffect(() => {
        const getUserMetadata = async () => {
          const domain = "dev-1ylkmsz0.us.auth0.com";
      
          try {
            const accessToken = await getAccessTokenSilently({
              audience: `https://${domain}/api/v2/`,
              scope: "read:current_user",
            });
      
            const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
      
            const metadataResponse = await fetch(userDetailsByIdUrl, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });
      
            const { user_metadata } = await metadataResponse.json();
      
            setUserMetadata(user_metadata);
          } catch (e) {
            console.log(e.message);
          }
        };
      
        getUserMetadata();
      }, []);
    return (
        isAuthenticated && (
        <UserWrap>
            <LoginTitle>Welcome {userLogged.username || name}</LoginTitle>
            <UserPage>
                <UserContent>
                   <UserLabel><label>This is {userLogged.username || name} authenticated personal page.</label></UserLabel> 
                   <UserLabel><span>Click to</span> <a href="/login" onClick={logOut}>logout</a> <span>and return back to previous page</span></UserLabel>  
                  <div>{userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )}</div> 
                </UserContent>
            </UserPage>
        </UserWrap>
        )
    );
};
export default Profile;