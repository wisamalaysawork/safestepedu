export const logger = {
  info: (msg: string, data?: Record<string, unknown>) =>
    void console.log(JSON.stringify({ lvl: "INFO", msg, data, ts: Date.now() })),
  warn: (msg: string, data?: Record<string, unknown>) =>
    void console.warn(JSON.stringify({ lvl: "WARN", msg, data, ts: Date.now() })),
  error: (msg: string, err?: unknown) =>
    void console.error(JSON.stringify({ lvl: "ERROR", msg, err, ts: Date.now() })),
  debug: (msg: string, data?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === "development")
      console.log(JSON.stringify({ lvl: "DEBUG", msg, data, ts: Date.now() }));
  },
};
