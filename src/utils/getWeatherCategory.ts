export function getWeatherCategory(code: number): number {
   if ([0, 1].includes(code)) return 0;
   if ([2, 3].includes(code)) return 1;
   if ([51, 53, 55, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99].includes(code)) return 2;
   if ([71, 73, 75, 77, 85, 86].includes(code)) return 3;
   if ([45, 48].includes(code)) return 4;
   return -1;
}
