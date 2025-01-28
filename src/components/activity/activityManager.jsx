import { SettingsActivity, InstructionsActivity, ResultsActivity } from 'components';
import {
  INSTRUCTIONS_ACTIVITY,
  SETTINGS_ACTIVITY,
  PERSONAL_USER_ACTIVITY,
  RESULTS_ACTIVITY,
} from 'utils';

export function ActivityManager({ activityId }) {
  switch (activityId) {
    case SETTINGS_ACTIVITY:
      return <SettingsActivity />;
    case PERSONAL_USER_ACTIVITY:
    case INSTRUCTIONS_ACTIVITY:
      return <InstructionsActivity />;
    case RESULTS_ACTIVITY:
      return <ResultsActivity />;
    default:
      return null;
  }
}
