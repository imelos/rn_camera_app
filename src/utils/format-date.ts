import {format} from 'date-fns';

export const formatDate = (
  timestamp: number,
  pattern: string = "dd/MM/yy', 'HH:mm aaaaa'm'",
) => {
  return format(new Date(timestamp), pattern);
};
