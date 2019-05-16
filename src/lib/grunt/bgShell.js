module.exports = {
  launchAPI: {
      cmd: "json-server -p 8088 -w ../../api/database.json --static ../../public"
  },
  _defaults: {
      bg: true
  }
};
