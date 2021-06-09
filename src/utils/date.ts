import moment from "moment"
interface IGetFormattedDate {
  date?: string;
  format: string;
};
interface IIsSame {
  date?: string;
  dateToCompare: string;
  range: "year" | "month" | "day";
}

const getFormattedDate = ({date, format}: IGetFormattedDate ) => moment(date).locale("pt-br").format(format);
const isSameDate = ({date, dateToCompare, range}: IIsSame) => moment(date).locale("pt-br").isSame(dateToCompare, range);
const sortByDate = (array: any[], dateKey: string) => Array.from(array).sort((a,b) => Date.parse(b[dateKey]) - Date.parse(a[dateKey]))

export {
  getFormattedDate,
  isSameDate,
  sortByDate
};
