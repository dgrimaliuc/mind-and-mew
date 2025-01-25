import { MenuItem, Select } from '@mui/material';
import styles from './styles/index.module.scss';
import { backgroundSecondary } from 'utils/constants';
import { combineClasses } from 'utils';

export function DropdownOption({ className, options, label, onSelectOption }) {
  return (
    <div className={combineClasses(styles.select__container, className)}>
      <span className={styles.select__label}>{label}</span>
      <Select
        defaultValue={options[0]}
        onChange={onSelectOption}
        className={styles.select__dropdown}
        sx={{
          color: backgroundSecondary, // Text color for the selected value
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'inherit',
            border: 'none',
          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            sx={{
              '&[class*=MuiMenuItem]': {
                color: backgroundSecondary, // Text color for options
              },
              '&.Mui-selected': {
                color: '#ff3500', // Text color for the selected option
              },
            }}
            key={index}
            value={option}
            className={styles.select__dropdown_option}
          >
            {option}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
