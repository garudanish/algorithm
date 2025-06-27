// 출근 희망 시각 + 10분까지 출근해야 함
// 토요일, 일요일의 출근 시각은 영향 없음
// 시간은 hhMM으로 표시됨 - MM은 무조건 2자리 보장이므로, 이 기준으로 자르면 될듯

const toDate = (hourMinute, addedMinute = 0) => {
    const hour = Math.floor(hourMinute / 100);
    const minute = hourMinute % 100;
    
    // 임의의 날짜 설정
    return new Date(Date.UTC(2025, 5, 27, hour, minute + addedMinute));
}

function solution(schedules, timelogs, startday) {
    // 0 1 2 3 4 5 6
    // 1 2 3 4 5 6 7: 1 -> 0
    // 2 3 4 5 6 7 1: 2 -> 6
    // 3 4 5 6 7 1 2: 3 -> 5
    // 4 5 6 7 1 2 3: 4 -> 4
    // 5 6 7 1 2 3 4: 5 -> 3
    // 6 7 1 2 3 4 5: 6 -> 2
    // 7 1 2 3 4 5 6: 7 -> 1
    
    const mondayIndex = (7 - (startday % 7) + 1) % 7
    
    const weekDayTimeLogs = timelogs.reduce((acc, cur) => [
        ...acc,
        [...cur.slice(mondayIndex, mondayIndex + 5), ...cur.slice(0, Math.max(0, mondayIndex - 2))].map((log) => toDate(log))
    ], [])
    
    const dates = schedules.map((schedule) => toDate(schedule, 10));
    
    const validEmployees = weekDayTimeLogs.filter((logs, i) => {
        const scheduleDate = dates[i];
        return logs.every((log) => scheduleDate.getTime() - log.getTime() >= 0)
    })
    
    return validEmployees.length
}

// timelogs를 월화수목금 순서의 배열로 정리함
// 인정 시간을 구하고
// 출근 시간이 모두(every) 인정 시간 이내인지 구해야 함