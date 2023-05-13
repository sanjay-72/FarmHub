import { useState } from 'react';
import axios from 'axios'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@mui/material';


export default function FormDialog({ open, setOpen, setTrigger }) {

    const [status, setStatus] = useState('signIn');

    const [loginInfo, setLoginInfo] = useState({
        phoneNumber: "",
        password: "",
    });

    const handleChange = (event) => {
        setLoginInfo({ ...loginInfo, [event.target.name]: event.target.value });
    };


    async function submitUser(e) {
        e.preventDefault();

        const loginDetails = {
            phoneNumber: loginInfo.phoneNumber,
            password: loginInfo.password,
        };

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/login`, loginDetails, { withCredentials: true })
            .then(() => {
                setTrigger(prevValue => !prevValue);
                setOpen(false);
            })
            .catch((error) => console.log(error));
    }

    const [forgotPass, setForgotPass] = useState({
        phoneNumber: "",
        otp: "",
        password: '',
        confirmPassword: ''
    });

    const changeForgotPass = (event) => {
        setForgotPass({ ...loginInfo, [event.target.name]: event.target.value });
    };

    return (
        <Dialog open={open} onClose={() => { setOpen(false); setStatus('signIn'); }} disableScrollLock={true}>
            {status === 'signIn' &&
                <Box component='form' onSubmit={submitUser}>
                    <DialogTitle>SIGN IN</DialogTitle>
                    <DialogContent>
                        <TextField
                            value={loginInfo.phoneNumber}
                            onChange={handleChange}
                            color='tertiary'
                            autoFocus
                            margin="dense"
                            name="phoneNumber"
                            label="Phone No."
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            value={loginInfo.password}
                            onChange={handleChange}
                            color='tertiary'
                            autoFocus
                            margin="dense"
                            name="password"
                            label="Password"
                            type='password'
                            fullWidth
                            variant="standard"
                        />
                    <Link variant="subtitle2" color="tertiary.main" onClick={() => setStatus('forgot')}>
                        Forgot Password?
                    </Link>
                        <Typography mt={3} variant="subtitle2">
                            {'New User? '}
                            <Link component={RouterLink} to='/signup' onClick={() => setOpen(false)} color='tertiary.main'>
                                Create an Account
                            </Link>
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button color='tertiary' type='submit'>
                            Sign In
                        </Button>
                        <Button color='tertiary' onClick={() => setOpen(false)}>Cancel</Button>
                    </DialogActions>
                </Box>
            }
            {status === 'forgot' &&
                <>
                    <DialogTitle>Forgot Password</DialogTitle>
                    <DialogContent component='form' > 
                    {/* add onsubmit here */}
                    <TextField
                        value={forgotPass.phoneNumber}
                        onChange={changeForgotPass}
                        color='tertiary'
                        autoFocus
                        margin="dense"
                        name="phoneNumber"
                        label="Phone No."
                        sx={{
                            width: '25rem'
                        }}
                        variant="standard"
                    />
                    </DialogContent>
                    <DialogActions>
                        <Button color='tertiary' type='submit' onClick={() => setStatus('otp')}>
                            Send OTP
                        </Button>
                        <Button color='tertiary' onClick={() => setOpen(false)}>Cancel</Button>
                    </DialogActions>
                </>
            }
            {status === 'otp' &&
                <>
                    <DialogTitle>Enter OTP</DialogTitle>
                    <DialogContent component='form' > 
                    {/* add onsubmit here */}
                    <TextField
                        value={forgotPass.phoneNumber}
                        onChange={changeForgotPass}
                        color='tertiary'
                        autoFocus
                        margin="dense"
                        name="otp"
                        label="OTP"
                        sx={{
                            width: '25rem'
                        }}
                        variant="standard"
                    />
                    </DialogContent>
                    <DialogActions>
                        <Button color='tertiary' type='submit' onClick={() => setStatus('change')}>
                            Submit
                        </Button>
                        <Button color='tertiary' onClick={() => setOpen(false)}>Cancel</Button>
                    </DialogActions>
                </>
            }
            {status === 'change' &&
                <>
                    <DialogTitle>Change Password</DialogTitle>
                    <DialogContent component='form' > 
                    {/* add onsubmit here */}
                    <TextField
                        value={forgotPass.password}
                        onChange={changeForgotPass}
                        color='tertiary'
                        autoFocus
                        margin="dense"
                        name="password"
                        label="New Password"
                        sx={{
                            width: '25rem'
                        }}
                        variant="standard"
                    />
                    <TextField
                        value={forgotPass.confirmPassword}
                        onChange={changeForgotPass}
                        color='tertiary'
                        autoFocus
                        margin="dense"
                        name="confirmPassword"
                        label="Confirm Password"
                        sx={{
                            width: '25rem'
                        }}
                        variant="standard"
                    />
                    </DialogContent>
                    <DialogActions>
                        <Button color='tertiary' type='submit' onClick={() => setStatus('signIn')}>
                            Submit
                        </Button>
                        <Button color='tertiary' onClick={() => setOpen(false)}>Cancel</Button>
                    </DialogActions>
                </>
            }
        </Dialog>
    );
}
