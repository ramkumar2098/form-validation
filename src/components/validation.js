export function validateFirstname(fname, setfnameError) {
  if (!fname) {
    setfnameError('Enter First name');
  } else if (fname.length > 25) {
    setfnameError('Are you sure you entered your first name correctly?');
  } else {
    setfnameError('');
  }
}

export function validateLastname(lname, setlnameError) {
  if (!lname) {
    setlnameError('Enter Last name');
  } else if (lname.length > 25) {
    setlnameError('Are you sure you entered your last name correctly?');
  } else {
    setlnameError('');
  }
}

export function validateAge(age, setAgeError) {
  if (!age) {
    setAgeError('Enter your age');
  } else if (!Number(age) || age <= 0) {
    setAgeError('Invalid age');
  } else if (age < 18) {
    setAgeError('You are not allowed!');
  } else {
    setAgeError('');
  }
}

export function validateEmail(email, setEmailError) {
  if (!email) {
    setEmailError('Enter E-mail id');
  } else if (!email.includes('@') || !email.includes('.com')) {
    setEmailError('Invalid email id');
  } else {
    setEmailError('');
  }
}

export function validatePassword(password, setPasswordError) {
  if (!password) {
    setPasswordError('Enter a password');
  } else if (password.length < 8) {
    setPasswordError('Password should atleast be 8 characters long');
  } else {
    setPasswordError('');
  }
}

export function validateConfirmPassword(
  password,
  confirmPassword,
  setConfirmPasswordError
) {
  if (password.length >= 8 && !confirmPassword) {
    setConfirmPasswordError('Confirm your password');
  } else if (password.length >= 8 && password !== confirmPassword) {
    setConfirmPasswordError("Those passwords didn't match. Try again.");
  } else {
    setConfirmPasswordError('');
  }
}
