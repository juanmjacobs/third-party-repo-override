function ({ resource }, parse) {
  console.log("todo ok!!!", process.env.A_VARIABLE || "not found A_VARIABLE");
  const aSharedAuxFile = requireFile("aSharedAuxFile.js");
  const aLocalAuxFile = requireFile("aLocalAuxFile.js");
  return aSharedAuxFile(resource)
  .then((customNotes) => {
    return aLocalAuxFile(customNotes);
  })
  .then((customNotes) => {
    console.log("las custom notes?", customNotes);
    return axios
      .post(
        "https://echo.free.beeceptor.com/",
        {
          un: "body",
          resource: customNotes,
        },
        {
          headers: {
            "x-header-custom-1": "value-custom-header",
          },
        }
      )
      .then(() => {
        return createInvoiceIntegration({
          integrationId:
            process.env.A_VARIABLE + "-" + customNotes ||
            Math.floor(Math.random() * 99999).toString(),
        }).then((result) => {
          return {
            result: "Todo ok, customNotes: " + customNotes,
          };
        });
      });
  });
}
