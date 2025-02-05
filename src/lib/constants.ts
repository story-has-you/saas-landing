class Constants {
  static readonly BACKGROUND_STYLE = {
    backgroundColor: "hsla(204, 0%, 100%, 1)",
    backgroundImage: `
      radial-gradient(circle at 0% 0%, hsla(295.99999999999994, 77%, 74%, 0.35) 3.1210986267166043%, transparent 40%),
      radial-gradient(circle at 20% 0%, hsla(236.91176470588243, 77%, 74%, 0.35) 3.1210986267166043%, transparent 40%),
      radial-gradient(circle at 40% 0%, hsla(186.61764705882354, 77%, 74%, 0.35) 3.1210986267166043%, transparent 40%),
      radial-gradient(circle at 60% 0%, hsla(127.0588235294118, 77%, 74%, 0.35) 3.1210986267166043%, transparent 40%),
      radial-gradient(circle at 80% 0%, hsla(62.20588235294117, 77%, 74%, 0.35) 3.1210986267166043%, transparent 40%),
      radial-gradient(circle at 100% 0%, hsla(23.823529411764703, 77%, 74%, 0.35) 3%, transparent 40%)
    `,
    backgroundBlendMode: "normal, normal, normal, normal, normal, normal",
  } as const;
}

export default Constants;
