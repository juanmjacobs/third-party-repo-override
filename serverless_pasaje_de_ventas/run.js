const { extraFunction } = require("./extraFunction.js");
const Promise = require("bluebird");

async function handler(context) {
    const orderNotes = context.resource.notes || "no notes";
    console.log("Logueo las orderNotes:", orderNotes);
    const integrationId = await extraFunction("soy un alto override " + new Date().toISOString());
    await ProductecaSdk.salesOrdersApi.update(context.resource.id, { notes: integrationId })
    //await ProductecaSdk.Invoicer.invoice({ createInvoice, validate })
   // await ProductecaSdk.createInvoiceIntegration({ integrationId });
    return { result: integrationId };
}
