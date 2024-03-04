
function findSpareChairs(meetingRooms, need) {
    let chairTaken = [];
    let chairNeeded = need;
  
    for (let i = 0; i < meetingRooms.length; i++) {
      let occupants = meetingRooms[i][0].length;
      let chairsAvailable = meetingRooms[i][1] - occupants; // Calculate the number of chairs available in the current meeting room
  
      if (chairNeeded > 0) {     // Check if chairs are still needed
        if (chairNeeded <= chairsAvailable) {
          chairTaken.push(chairNeeded);
          chairNeeded = 0;
        } else {
          chairTaken.push(chairsAvailable);
          chairNeeded -= chairsAvailable;
        }
      } else {
        break;  // If no chairs are needed, break out of the loop
      }
    }
  
    if (need === 0) return 1; // Return 1 if no chairs are needed
    if (chairNeeded > 0) return 0;// Return 0 if not enough spare chairs available
    return chairTaken; // Return the array of chairs taken from each room
  }
  
  let meetingRoom = [["XXX", 3],["XXXXX", 6],["XXXXXX", 9],["XXX", 2]];
  let needs = 4;
  console.log(findSpareChairs(meetingRoom, needs));
  