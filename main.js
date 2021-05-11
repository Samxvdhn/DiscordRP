const { FirstLine, SecondLine, LargeImageName, largeImageText, SmallImageName, smallImageText, DiscordAppID, ButtonName, ButtonURL } = require("./config")
const RPC = require("discord-rpc");
const browser = typeof window !== 'undefined';
const rpc = new RPC.Client({ transport: browser ? "websocket" : "ipc"});

rpc.on("ready", () => {
    rpc.setActivity({
        details: FirstLine,
        state: SecondLine,
        startTimestamp: new Date(),
        largeImageKey: LargeImageName,
        largeImageText: largeImageText,
        smallImageKey: SmallImageName,
        smallImageText: smallImageText,
        buttons: [{label: ButtonName, url: ButtonURL}]
    });

    console.log(`DiscordRP is active ! Connected on ${rpc.user.username}`)
});

rpc.login({
    clientId: DiscordAppID
}).catch(console.error)
