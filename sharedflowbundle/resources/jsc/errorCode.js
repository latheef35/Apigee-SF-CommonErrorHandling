
{
var errorMsg = error.content;
var info1=errorMsg.substr(errorMsg.lastIndexOf(":"));
var info=info1.substr(info1.indexOf("\""),info1.lastIndexOf("\""));


    context.setVariable("flow.error.code", error.status.code);
    context.setVariable("flow.error.reason", error.status.message);
    context.setVariable("flow.error.status", error.status.code);
    context.setVariable("flow.error.message", error.status.message);

if(info.length > 0 )
{
    context.setVariable("flow.error.info", info.substr(1,(info.trim().length- 2)));
}
else
{
    context.setVariable("flow.error.info", error.status.message);
}
}
// else
// {
//     context.setVariable("flow.error.code", flow.error.code);
//     context.setVariable("flow.error.reason", flow.error.reason);
//     context.setVariable("flow.error.status", flow.error.status);
//     context.setVariable("flow.error.message", flow.error.message);
//     context.setVariable("flow.error.info", flow.error.info);
// }
