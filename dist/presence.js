const presence = new Presence({
    clientId: "882601636042772512"
});
let engine = "wamp";
const browsingStamp = Math.floor(Date.now() / 1000);
presence.on("UpdateData", async () => {
    const presenceData = {
        details: "Developing in progress",
        largeImageKey: engine,
        state: engine,
        startTimestamp: browsingStamp,
    };
    if (document.location.pathname.includes("/phpmyadmin/")) {
        presenceData.details = "PhpMyAdmin";
        presenceData.largeImageKey = "pma";
        presenceData.smallImageKey = engine;
        presenceData.smallImageText = engine;
    }
    if (presenceData.details == null) {
        presence.setTrayTitle();
        presence.setActivity();
    }
    else {
        presence.setActivity(presenceData);
    }
});
