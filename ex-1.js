let isOver18 = true; // James มีอายุ 18 ปี
let hasCriminalBlacklist = false; // James ไม่เคยมีประวัติอาชญากรรม

let isAllow = isOver18 && !hasCriminalBlacklist; // เช็คว่าเป็นคนที่มีสิทธิ์เข้าร่วมงานหรือไม่
console.log(isAllow); // ตรวจสอบค่า isAllow ว่า James มีสิทธิ์เข้างานหรือไม่
