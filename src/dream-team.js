module.exports = function createDreamTeam(array) {
      if (typeof(array) != typeof([])) {return false}
      let members = [];
  for (let i = 0; i < array.length; i++){
        if (typeof(array[i]) == typeof("string")) {
              for (let j = 0; j < array[i].length; j++) {
                    if(array[i][j] != 0 ) {
                        members.push(array[i][j]);
                        break
                    }
              }
        }
  }
  members = members.join("").toUpperCase();
  let member = [];
      for (let i = 0; i < members.length; i++) {
            member.push(members[i]);
              }
            member = member.sort().join("");
      return member;
};
