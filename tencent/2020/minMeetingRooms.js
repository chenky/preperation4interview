/*
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

Example 1:

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
Example 2:

Input: [[7,10],[2,4]]
Output: 1
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
这道题是之前那道 Meeting Rooms 的拓展，那道题只问我们是否能参加所有的会，也就是看会议之间有没有时间冲突，而这道题让求最少需要安排几个会议室，有时间冲突的肯定需要安排在不同的会议室。
最少会议室，最少需要多少个进程，最少需要多个cpu等等问题
https://www.cnblogs.com/grandyang/p/5244720.html
*/
function minMeetingRooms(intervals) {
  let starts=[], ends=[];
  // res: 总共需要多少个会议室
  // lastEndpos: 上一次结束会议时间的下标位置
  let res = 0, lastEndpos = 0;
  for (let item of intervals.values()) {
      starts.push(item[0]);
      ends.push(item[1]);
  }
  // 对开始时间和结束时间都进行升序排列
  starts.sort((a,b)=>a-b);
  ends.sort((a,b)=>a-b);
  for (let i = 0; i < intervals.length; ++i) {
    // 当前开始时间和上一个时间段的结束时间对比，如果上一个时间段结束时间大于当前时间段的开始时间，
    // 则两个时间段有交集，不能共用一个会议室，所以res要+1，否则lastEndpos移动到下一个时间段的结束时间 
      if (starts[i] < ends[lastEndpos]) ++res;
      else ++lastEndpos;
  }
  return res;
}
console.log(minMeetingRooms([[0, 30],[5, 10],[15, 20]]));
console.log(minMeetingRooms([[7,10],[2,4]]));