import moment from 'moment';

export const getTomorrowDate = () => moment().add(1, 'days').format('YYYY-MM-DD');
