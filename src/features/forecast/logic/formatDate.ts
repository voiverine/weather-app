import dayjs from "dayjs";

type FormatDate = (timestamp: number) => {
  date: string;
  isToday: boolean;
};

export const formatDate: FormatDate = (timestamp) => {
  const t = timestamp * 1000;
  const today = dayjs();

  return {
    date: dayjs(t).format("ddd MMM DD YYYY, H:mm"),
    isToday: dayjs(t).isSame(today, "day"),
  };
};
