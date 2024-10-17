const { extraFunction } = require("./extraFunction.js");

async function handler(context) {
    const orderNotes = context.resource.notes || "no notes";
    await createInvoiceIntegration({ integrationId: orderNotes + " - " + new Date().toISOString() });
    return { result: await extraFunction(orderNotes), context, env: process.env };
}

module.exports = { handler };