import React, { useState } from 'react';
import Detail from './Detail';
import Button from './Button';
import * as validate from './validation';
import Thankyou from './Thankyou';
import style from './Container.module.css';

function Container() {
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fnameError, setfnameError] = useState('');
  const [lnameError, setlnameError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [displayForm, setDisplayForm] = useState(true);
  const [displayThankyou, setDisplayThankyou] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    validate.validateFirstname(fname, setfnameError);
    validate.validateLastname(lname, setlnameError);
    validate.validateAge(age, setAgeError);
    validate.validateEmail(email, setEmailError);
    validate.validatePassword(password, setPasswordError);
    validate.validateConfirmPassword(
      password,
      confirmPassword,
      setConfirmPasswordError
    );

    if (
      fname &&
      lname &&
      age &&
      email &&
      password &&
      confirmPassword &&
      password === confirmPassword &&
      !fnameError &&
      !lnameError &&
      !ageError &&
      !emailError &&
      !passwordError &&
      !confirmPasswordError
    ) {
      setDisplayForm(false);
      setDisplayThankyou(true);
    }
  };

  return (
    <div>
      {displayForm && (
        <form onSubmit={handleSubmit} className={style.form}>
          <Detail
            id="fname"
            label="First name"
            type="text"
            value={fname}
            setValue={setfname}
            errorMessage={fnameError}
          />
          <Detail
            id="lname"
            label="Last name"
            type="text"
            value={lname}
            setValue={setlname}
            errorMessage={lnameError}
          />
          <Detail
            id="age"
            label="Age"
            type="text"
            value={age}
            setValue={setAge}
            errorMessage={ageError}
          />
          <Detail
            id="email"
            label="E-Mail"
            type="text"
            value={email}
            setValue={setEmail}
            errorMessage={emailError}
          />
          <Detail
            id="password"
            label="Password"
            type="password"
            value={password}
            setValue={setPassword}
            errorMessage={passwordError}
          />
          <Detail
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            setValue={setConfirmPassword}
            errorMessage={confirmPasswordError}
          />
          <Button content="Sign up" />
        </form>
      )}
      {displayThankyou && <Thankyou content="Thank you for Signing up" />}
    </div>
  );
}

export default Container;
