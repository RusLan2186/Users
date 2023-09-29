import { useEffect, useState } from 'react';

import { errorUserAge, errorUserName, errorUserLastName, addUser } from '../constants';

const Form = ({ user, setUser, title, users, changeUsers, changeModal }) => {
  // состояние которое отражает были мы внутри инпута или нет
  const [userNameDirty, setUserNameDirty] = useState(false);
  const [userLastNameDirty, setUserLastNameDirty] = useState(false);
  const [userAgeDirty, setUserAgeDirty] = useState(false);

  const [userNameError, setUserNameError] = useState(errorUserName);
  const [userLastNameError, setUserLastNameError] = useState(errorUserLastName);
  const [userAgeError, setUserAgeError] = useState(errorUserAge);

  const [buttonValid, setButtonValid] = useState(false);
  const [clearButtonValid, setClearButtonValid] = useState(false);

  const addUsers = (e) => {
    e.preventDefault();
    changeUsers([...users, { ...user, id: Date.now() }]);
    changeModal(false);
    setUser({ userName: '', userAge: '', userLastName: '' });
  };

  const clearForm = (e) => {
    e.preventDefault();
    if (user.userName.length !== 0 || user.userLastName.length !== 0 || user.userAge.length !== 0) {
      setUser({ userName: '', userAge: '', userLastName: '' });
      changeModal(true);
    }
  };

  useEffect(() => {
    if (user.userName.length === 0 || user.userLastName.length === 0 || user.userAge.length === 0) {
      setButtonValid(false);
    } else {
      setButtonValid(true);
    }
  }, [user]);

  useEffect(() => {
    if (user.userName.length !== 0 || user.userLastName.length !== 0 || user.userAge.length !== 0) {
      setClearButtonValid(false);
    } else {
      setClearButtonValid(true);
    }
  }, [user]);

  // blur срабатывает когда пользователь убрал курсор из инпута
  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'userName':
        setUserNameDirty(true);
        break;
      case 'userLastName':
        setUserLastNameDirty(true);
        break;
      case 'userAge':
        setUserAgeDirty(true);
        break;
    }
  };

  const nameHundler = (e) => {
    setUser({ ...user, userName: e.target.value });
    if (!e.target.value) {
      setUserNameError(errorUserName);
    } else {
      setUserNameError('');
    }
  };

  const lastNameHundler = (e) => {
    setUser({ ...user, userLastName: e.target.value });
    if (!e.target.value) {
      setUserLastNameError(errorUserLastName);
    } else {
      setUserLastNameError('');
    }
  };

  const ageHundler = (e) => {
    setUser({ ...user, userAge: e.target.value });
    if (!e.target.value) {
      setUserAgeError(errorUserAge);
    } else {
      setUserAgeError('');
    }
  };

  return (
    <form className='users__form'>
      <h1 className='users__modal_title '>{title}</h1>
      {/* если мы нажали на инпут и там ошибка тогда создаем блок с ошибкой */}
      {userNameDirty && userNameError && <div className='error'>{userNameError}</div>}
      <input
        className={
          userNameDirty && userNameError && userNameError ? 'user__input-error' : 'user__input'
        }
        onBlur={(e) => blurHandler(e)}
        value={user.userName}
        name='userName'
        onChange={(e) => nameHundler(e)}
        type='text'
        placeholder='Enter Name'
        autoComplete='off'
      ></input>
      {userLastNameDirty && userLastNameError && <div className='error'>{userLastNameError}</div>}
      <input
        className={
          userLastNameDirty && userLastNameError && userLastNameError
            ? 'user__input-error'
            : 'user__input'
        }
        onBlur={(e) => blurHandler(e)}
        value={user.userLastName}
        onChange={(e) => lastNameHundler(e)}
        type='text'
        placeholder='Enter Last Name'
        name='userLastName'
        autoComplete='off'
      />
      {userAgeDirty && userAgeError && <div className='error'>{userAgeError}</div>}
      <input
        className={
          userAgeDirty && userAgeError && userAgeError ? 'user__input-error' : 'user__input'
        }
        onBlur={(e) => blurHandler(e)}
        value={user.userAge}
        onChange={(e) => ageHundler(e)}
        type='number'
        placeholder='Enter Age'
        name='userAge'
        autoComplete='off'
      />
      <div className='form__buttons'>
        <button
          disabled={!buttonValid}
          className={!buttonValid ? 'no__active' : 'user__button'}
          onClick={addUsers}
        >
          {addUser}
        </button>
        <button
          disabled={clearButtonValid}
          className={clearButtonValid ? 'no__active' : 'user__button'}
          onClick={clearForm}
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default Form;
