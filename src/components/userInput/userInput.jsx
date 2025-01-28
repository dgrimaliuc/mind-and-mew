import { InputAdornment, TextField } from '@mui/material';
import styles from './style/index.module.scss';
import { AccountCircle } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { gameActions, playerErrorSelector, playerNameSelector } from 'reduxStore';

export function UserInputField({ id, color }) {
  const dispatch = useDispatch();
  const error = useSelector(state => playerErrorSelector(state, id));
  const value = useSelector(state => playerNameSelector(state, id));

  const validateInput = value => {
    if (value.length > 0 && (value.length < 3 || value.length > 9)) {
      dispatch(gameActions.setPlayerError({ id, value: true }));
    } else {
      dispatch(gameActions.setPlayerError({ id, value: false }));
    }
  };

  const handleChange = event => {
    const inputValue = event.target.value;
    validateInput(inputValue);
    dispatch(gameActions.setPlayer({ id, color, name: inputValue }));
  };

  return (
    <div className={styles.user__wrapper}>
      <span className={styles.user__label}>Player name</span>
      <TextField
        id='input-with-icon-textfield'
        label={`Player ${id}`}
        variant='standard'
        error={error}
        value={value}
        helperText={error ? 'Name must be between 5 and 9 symbols' : ''}
        className={styles.user__input}
        onChange={handleChange}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position='start'>
                <AccountCircle sx={{ color: color }} />
              </InputAdornment>
            ),
          },
        }}
        sx={{
          color: color, // Text color for the input field
          '& [class*=MuiInput-root]': {
            borderColor: color, // Border color for the input
          },
          '& .MuiInputBase-root': {
            borderColor: color, // Border color for the input
          },
          '& .MuiInputBase-input': {
            color: color, // Input text color
          },
          '& .MuiInputBase-input:focus': {
            color: color, // Text color on focus
          },
          '& .MuiInput-underline:before': {
            borderColor: color, // Default border color
          },
          '& .MuiInput-underline:hover:before': {
            borderColor: color, // Border color on hover
          },
          '& .MuiInput-underline:hover:after': {
            borderColor: color, // Border color on hover
          },
          '& [class*=MuiInput-root]:after': {
            borderColor: color, // Border color on hover
          },
        }}
      />
    </div>
  );
}
