const { FirstLine, SecondLine, LargeImageName, largeImageText, SmallImageName, smallImageText, DiscordAppID, ButtonName, ButtonURL } = require("./config")
const RCP = require("discord-rpc");
const rcp = new RCP.Client({
    transport: "ipc"
});

rcp.on("ready", () => {
    rcp.setActivity({
        details: FirstLine,
        state: SecondLine,
        startTimestamp: new Date(),
        largeImageKey: LargeImageName,
        largeImageText: largeImageText,
        smallImageKey: SmallImageName,
        smallImageText: smallImageText,
        buttons: [{label: ButtonName, url: ButtonURL}]
    });

    console.log(`DiscordRP is active ! Connected on ${rcp.user.username}`)
});

rcp.login({
    clientId: DiscordAppID
});