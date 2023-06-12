import store from "../../libs/redux/store/store";
import { changeInfos, changeRemember, changeToken, setUserName } from "../../libs/redux/actions/authActions";

export async function GetUserToken(email, password, remember, navigate) {
    try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            };

            const response = await fetch('http://localhost:3001/api/v1/user/login', requestOptions);

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            const data = await response.json();

            if(data.status === 200) {
                store.dispatch(changeToken(data.body.token))
                store.dispatch(changeRemember(remember))
                store.dispatch(changeInfos(email, password))
            }
            GetProfile(navigate)

        } catch (error) {
            console.error(`Something went wrong: ${error}`);
        }
};


export async function GetProfile(navigate) {
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${store.getState().token}`,
      },
    }

    const response = await fetch("http://localhost:3001/api/v1/user/profile", requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    if(data.status === 200) {
      store.dispatch(setUserName(data.body.firstName, data.body.lastName))
      navigate('/profile')
    }

  } catch (error) {
    console.error(`Something went wrong: ${error}`);
  }
};

export async function ChangeUserName(firstName, lastName, changeUserInfos) {
  try {
    const token = store.getState().token

    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: 'Bearer' + token
      },
      body: JSON.stringify({ firstName: firstName, lastName: lastName })
    };

    const response = await fetch('http://localhost:3001/api/v1/user/profile', requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    if(data.status === 200) {
      store.dispatch(setUserName(data.body.firstName, data.body.lastName))
      changeUserInfos({firstName: data.body.firstName, lastName: data.body.lastName})
    }

  } catch (error) {
    console.error(`Something went wrong: ${error}`);
  }
}