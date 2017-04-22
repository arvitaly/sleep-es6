import sleep from "./../";
jest.useFakeTimers();
it("when call, should wait timeout seconds", async () => {
    const promise = sleep(1000);
    let isReady = false;
    promise.then(() => {
        isReady = true;
    });
    jest.runTimersToTime(900);
    expect(isReady).toBe(false);
    jest.runTimersToTime(200);
    // run next tick
    await Promise.resolve();
    expect(isReady).toBe(true);
});
