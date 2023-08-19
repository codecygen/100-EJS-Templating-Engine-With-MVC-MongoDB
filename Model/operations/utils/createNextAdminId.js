const Tables = require("../../dbAssociation");

const createNextAdminId = async () => {
  let results;

  try {
    results = await Tables.UserTable.findAll();
  } catch (err) {
    console.error(err);
  }

  const allUsersAdminIds = results.map((result) => result.toJSON().adminId);

  if (allUsersAdminIds.length != 0) {
    const onlyAdminIds = allUsersAdminIds.filter((id) => id != null);

    const maxAdminId = Math.max(...onlyAdminIds);

    return maxAdminId + 1;
  }

  return 1;
};

module.exports = createNextAdminId;
